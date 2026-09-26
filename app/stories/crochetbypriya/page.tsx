import {EditorialHeader} from '@/components/seo-drafts/ArticlePage';
import {contentMetadata} from '@/components/seo-drafts/page-metadata';
import '@/components/seo-drafts/editorial.css';
import '@/components/seo-drafts/knowledge.css';
export const metadata=contentMetadata({title:'crochetByPriya: fewer setup steps, more ways to get paid',description:'Priya Yadav shares feedback on entering opening stock during product creation and finding a bank-transfer payment option.',route:'/stories/crochetbypriya/'});
export default function Page(){
 return <div className="ed-shell"><EditorialHeader/><main id="main">
 <section className="ed-hero"><p className="ed-eyebrow">MERCHANT FEEDBACK / CROCHETBYPRIYA</p><h1>Fewer setup steps,<br/>more ways to get paid</h1><p className="ed-deck">Priya Yadav of crochetByPriya asks for a simpler stock-entry workflow and a payment choice that fits how she receives money.</p><div className="ed-meta"><span>crochetByPriya — Priya Yadav</span><span>Feedback, not a product-release announcement</span></div></section>
 <div className="kh-article"><article className="ed-copy">
 <p>Setting up a product should follow the way a seller thinks about it: what the item is, what it costs and how much stock is available. Priya’s feedback asks for those details to come together without a separate stock-management step afterward.</p>
 <h2>Enter opening stock while adding the product</h2>
 <p>Priya wants the stock inventory option available during product creation. The request is practical: complete the relevant information together, rather than returning to individual products to finish the task.</p>
 <p>For a simple product, that could mean entering its opening quantity alongside its other details. Stock for individual sizes or colours is a further design question, not an extra request we are attributing to Priya.</p>
 <h2>A payment option beyond the gateways she does not use</h2>
 <p>Priya reports seeing Razorpay and Paytm as the available payment options, while wanting bank transfer and using neither provider.</p>
 <p>This describes the setup she encountered. It does not establish that bank transfer is unavailable across every oBizee version or configuration. The task to investigate is whether the supported direct-payment workflow is available and clear in that setup.</p>
 <p>Showing bank-transfer instructions is different from automatically verifying a payment. Any workflow needs to explain how receipt is confirmed before the merchant acts on the order.</p>
 <h2>Priya’s feedback, in her words</h2>
 <blockquote><p>Stock inventory option should be there when you are adding a new product, shouldn’t have to be individual. It’s a bit of work. In payment structure, i wanted to opt for bank transfer, but there are only two options- razorpay and paytm, i use none.</p><cite>Priya Yadav, crochetByPriya · feedback supplied through Raunak</cite></blockquote>
 <h2>What happens next</h2>
 <p>The next step is to check the app version and screens involved, reproduce the journey and compare it with the current supported behaviour. This page does not announce a fix, promise a delivery date or claim improved sales or time savings.</p>
 <div className="ed-endnote"><strong>Related explanations</strong><p><a href="/features/stock-tracking/">Opening stock and tracking</a> · <a href="/features/direct-pay-details/">Direct-payment details</a></p></div>
 </article><aside className="kh-verification"><strong>Attribution and evidence</strong><p>Merchant confirmation and permission to use the name were relayed by Raunak on27 September2026. No direct interview or measured business outcome is claimed. App version and original feedback date remain unconfirmed. No merchant photograph is used.</p></aside></div>
 </main><footer className="ed-footer"><strong>oBizee / FIELDNOTES</strong><a href="/blog/">Back to the reading library →</a></footer></div>;
}
