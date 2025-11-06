'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Bold, Italic, Strikethrough, List, ListOrdered, Heading2 } from 'lucide-react';

// --- Barre d'outils pour l'éditeur ---
const MenuBar = ({ editor }) => {
  if (!editor) return null;
  return (
    <div className="flex flex-wrap gap-2 p-2 border-b border-gray-200">
      <button type="button" onClick={() => editor.chain().focus().toggleBold().run()} className={editor.isActive('bold') ? 'bg-gray-200 p-1 rounded' : 'p-1'}><Bold size={16}/></button>
      <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()} className={editor.isActive('italic') ? 'bg-gray-200 p-1 rounded' : 'p-1'}><Italic size={16}/></button>
      <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={editor.isActive('heading', { level: 2 }) ? 'bg-gray-200 p-1 rounded' : 'p-1'}><Heading2 size={16}/></button>
      <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()} className={editor.isActive('bulletList') ? 'bg-gray-200 p-1 rounded' : 'p-1'}><List size={16}/></button>
      <button type="button" onClick={() => editor.chain().focus().toggleOrderedList().run()} className={editor.isActive('orderedList') ? 'bg-gray-200 p-1 rounded' : 'p-1'}><ListOrdered size={16}/></button>
    </div>
  );
};

// --- Le composant de l'éditeur lui-même ---
const TiptapEditor = ({ content, onChange }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML()); // On envoie le contenu HTML au parent
    },
     immediatelyRender: false,
    editorProps: {
      attributes: {
        // Applique un style de base au contenu
        class: 'prose prose-sm sm:prose max-w-none p-4 focus:outline-none h-full',
      },
    },
  });

  return (
    <div className="border border-gray-200 rounded-lg">
      <MenuBar editor={editor} />
      <div className="h-64 overflow-y-auto">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default TiptapEditor;