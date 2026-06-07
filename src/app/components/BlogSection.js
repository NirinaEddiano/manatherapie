import Image from 'next/image';
import Link from 'next/link';
import BlogCarousel from './BlogCarousel'; // On va extraire la logique client
import { Pool } from 'pg';

async function getLatestPosts() {
    const pool = new Pool({ connectionString: process.env.POSTGRES_URL });
    try {
        const { rows } = await pool.query(
            'SELECT id, title, slug, category, image_url, excerpt, published_at FROM blog_posts ORDER BY published_at DESC LIMIT 6'
        );
        return rows;
    } catch (error) {
        console.error("Erreur fetch BlogSection:", error);
        return [];
    } finally {
        await pool.end();
    }
}

const BlogSection = async () => {
    const latestPosts = await getLatestPosts();

    return (
        <section className="py-24 bg-[#FFFBF9]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1f2937] mb-2">Inspirations & Conseils</h2>
                        <p className="text-lg text-gray-600">Des ressources pour nourrir votre corps et votre esprit.</p>
                    </div>
                    {/* Les boutons de navigation seront dans le composant client */}
                </div>
                
                {/* On passe les données au composant client qui gère le carrousel Swiper */}
                <BlogCarousel posts={latestPosts} />

            </div>
        </section>
    );
};

export default BlogSection;