import { ArticlePage, articleMetadata } from '@/components/seo-drafts/ArticlePage';
export const metadata = articleMetadata(10);
export default function Page() { return <ArticlePage id={10} />; }
