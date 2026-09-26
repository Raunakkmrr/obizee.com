import type { Metadata } from 'next';
import {editorialPreview} from './publication-mode';

// Deliberately override each nested social object: Next merges metadata shallowly.
// Preview builds remain closed; the separately verified public build is indexable.
export function contentMetadata({ title, description, route, isHelp = false, article = false }: {
  title: string;
  description: string;
  route: string;
  isHelp?: boolean;
  article?: boolean;
}): Metadata {
  const url = `https://www.obizee.com${route}`;
  return {
    title: `${title} | oBizee${isHelp ? ' Help' : ''}`,
    description,
    keywords: [],
    alternates: { canonical: url },
    robots: { index: !editorialPreview, follow: !editorialPreview },
    openGraph: {
      title, description, url,
      type: article ? 'article' : 'website',
      siteName: 'oBizee', locale: 'en_IN',
      images: [{ url: '/Obizee.png', alt: 'oBizee' }],
    },
    twitter: {
      card: 'summary', title, description,
      images: [{ url: '/Obizee.png', alt: 'oBizee' }],
    },
  };
}
