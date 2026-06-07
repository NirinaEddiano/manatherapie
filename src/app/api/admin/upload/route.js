import { NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinary';
import { verifyAdmin } from '@/lib/adminAuth';

const ALLOWED_MIME_TYPES = [
    'image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml',
    'video/mp4', 'video/webm', 'video/quicktime',
    'application/pdf',
];
const MAX_FILE_SIZE = 50 * 1024 * 1024;

/**
 * @description Gère l'upload d'un fichier vers Cloudinary (Sécurisé et Intelligent)
 * @method POST
 */
export async function POST(request) {
    const admin = await verifyAdmin();
    if (!admin) return NextResponse.json({ message: 'Non autorisé' }, { status: 401 });


    try {
        const formData = await request.formData();
        const file = formData.get('file');

        if (!file) {
            return NextResponse.json({ message: "Aucun fichier fourni." }, { status: 400 });
        }

        if (file.size > MAX_FILE_SIZE) {
            return NextResponse.json({ message: "Fichier trop volumineux (max 50 Mo)." }, { status: 413 });
        }

        const mimeType = file.type;
        if (!ALLOWED_MIME_TYPES.includes(mimeType)) {
            return NextResponse.json({ message: `Type de fichier non autorisé: ${mimeType}` }, { status: 415 });
        }

        const fileBuffer = await file.arrayBuffer();
        const encoding = 'base64';
        const base64Data = Buffer.from(fileBuffer).toString('base64');
        const fileUri = `data:${mimeType};${encoding},${base64Data}`;

        // --- LA MODIFICATION CLÉ EST ICI ---
        
        // 1. Déterminer le type de ressource pour Cloudinary
        let resource_type = 'auto'; // 'auto' est une bonne option générale
        if (mimeType.startsWith('image/')) {
            resource_type = 'image';
        } else if (mimeType.startsWith('video/')) {
            resource_type = 'video';
        } else if (mimeType === 'application/pdf') {
            resource_type = 'raw'; // Pour les PDFs, on utilise 'raw'
        }
        // 'auto' est une option sûre si le type n'est pas reconnu.
        
        // 2. Préparer les options pour l'upload
        const uploadOptions = {
            folder: 'manatherapy/formations',
            resource_type: resource_type,
            use_filename: true,
            unique_filename: true, // Évite les collisions en ajoutant un suffixe unique tout en gardant le nom d'origine
            filename_override: file.name, // Transmet le nom de fichier original à Cloudinary (requis pour le Base64)
        };
        
        // 3. Envoyer le fichier à Cloudinary avec les options correctes
        const uploadResult = await cloudinary.uploader.upload(fileUri, uploadOptions);

        return NextResponse.json({
            message: "Fichier téléversé avec succès.",
            url: uploadResult.secure_url,
        }, { status: 200 });

    } catch (error) {
        console.error("Erreur API /admin/upload:", error);
        // On essaie de renvoyer le message d'erreur de Cloudinary s'il existe
        const errorMessage = error.message || error.error?.message || "Une erreur est survenue lors de l'upload.";
        return NextResponse.json({ message: errorMessage }, { status: 500 });
    }
}