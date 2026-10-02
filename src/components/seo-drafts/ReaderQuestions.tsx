import questions from '@/content/seo-drafts/reader-questions.json';
export function QuickAnswer({route}:{route:string}) {
 const q=questions.find(q=>q.route===route);if(!q)return null;
 return <section className="ed-quick-answer" aria-labelledby="quick-answer-heading"><p className="ed-eyebrow">THE SHORT ANSWER</p><h2 id="quick-answer-heading">{q.question}</h2><p>{q.answer}</p>{q.route.includes('ai-seo-audit')&&<p><a href="https://developers.google.com/search/docs/appearance/ai-features">Google's requirements for AI search features</a> distinguish eligibility from guaranteed inclusion.</p>}<a data-content-next="true" href={q.next}>{q.nextLabel} →</a></section>;
}
export default function ReaderQuestions({hub}:{hub?:string}) {
 const rows=hub?questions.filter(q=>q.hub===hub):questions;
 if(!rows.length)return null;
 return <section className="ed-question-directory" aria-labelledby="seller-questions-heading"><h2 id="seller-questions-heading">Start with your question</h2><p>Choose the problem you are trying to solve, then follow the worked guide.</p><ul>{rows.map(q=><li key={q.route}><a href={q.route} data-content-next="true">{q.question}</a></li>)}</ul></section>;
}
