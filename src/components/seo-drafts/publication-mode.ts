// Build-time only. Private preview stays non-indexable; public builds omit review chrome.
export const editorialPreview = process.env.SEO_EDITORIAL_PREVIEW === '1';
