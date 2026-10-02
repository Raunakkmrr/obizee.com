import questions from '@/content/seo-drafts/reader-questions.json';
import ContentEvents from './seo-drafts/ContentEvents';
import './seo-drafts/editorial.css';
export default function SellerGuideLinks(){return <section className="ed-home-questions" aria-labelledby="home-guides-heading"><ContentEvents/><h2 id="home-guides-heading">Get the next selling decision right</h2><p>Practical answers for independent sellers, with worked guides and tools you can use before choosing a platform.</p><ul>{questions.slice(0,6).map(q=><li key={q.route}><a href={q.route} data-content-next="true">{q.question}</a></li>)}</ul><p><a href="/guides/">Explore every topic →</a></p></section>}
