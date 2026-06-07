import DOMPurify from 'isomorphic-dompurify';

export function sanitizeBlogHtml(html) {
    if (!html) return '';
    return DOMPurify.sanitize(html, {
        ALLOWED_TAGS: [
            'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
            'p', 'br', 'hr', 'span', 'div',
            'strong', 'em', 'b', 'i', 'u', 's', 'mark', 'small', 'sub', 'sup',
            'ul', 'ol', 'li',
            'a', 'img', 'figure', 'figcaption',
            'blockquote', 'pre', 'code',
            'table', 'thead', 'tbody', 'tr', 'th', 'td',
        ],
        ALLOWED_ATTR: ['href', 'target', 'rel', 'src', 'alt', 'title', 'class', 'id', 'style'],
        ALLOWED_URI_REGEXP: /^(?:(?:https?|mailto|tel):|[^a-z]|[a-z+.-]+(?:[^a-z+.\-:]|$))/i,
        ADD_ATTR: ['target'],
    });
}
