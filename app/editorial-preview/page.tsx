import { EditorialIndex } from '@/components/seo-drafts/ArticlePage';
import {notFound} from 'next/navigation';
import {editorialPreview} from '@/components/seo-drafts/publication-mode';
export const metadata = { title: 'Fieldnotes — editorial drafts | oBizee', description: 'Review practical, research-backed guides for independent sellers.', robots: { index: false, follow: false } };
export default function Page() { if(!editorialPreview)notFound(); return <EditorialIndex />; }
