import { ArticlePage, articleMetadata } from '@/components/seo-drafts/ArticlePage';
export const metadata = articleMetadata(42);
export default function Page() { return <ArticlePage id={42} />; }
