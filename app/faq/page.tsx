import Link from 'next/link'

const faqs = [['When will my order arrive?', 'Most JollyHaul finds arrive in 10–18 days. Tracking is emailed as soon as your order ships.'], ['Can I return an item?', 'Yes. Contact us within 30 days of delivery and we will help with your return. Damaged items are covered with a photo.'], ['What comes in the box?', 'Every product includes setup steps, power requirements, and care notes.']]

export default function FAQPage() {
  return <main className="simple-page"><Link className="simple-brand" href="/">JollyHaul</Link><p className="eyebrow">Good to know</p><h1>Questions,<br /><em>answered.</em></h1><div className="simple-list">{faqs.map(([q, a]) => <section key={q}><h2>{q}</h2><p>{a}</p></section>)}</div><Link className="button button-dark" href="/">Back to the shop</Link></main>
}

export const metadata = { title: 'FAQ | JollyHaul', description: 'Answers about JollyHaul products, delivery, and returns.' }
