import Link from 'next/link'
import { CONTACT_EMAIL } from '../../lib/site'

export default function ContactPage() {
  return <main className="simple-page"><Link className="simple-brand" href="/">JollyHaul</Link><p className="eyebrow">We are human</p><h1>Let&apos;s make<br /><em>it merry.</em></h1><p className="simple-intro">Questions about an order, a product, or a gift? Our small support team is happy to help.</p><a className="contact-card" href={`mailto:${CONTACT_EMAIL}`}><strong>{CONTACT_EMAIL}</strong><span>We usually reply within one business day.</span></a><Link className="button button-dark" href="/">Back to the shop</Link></main>
}

export const metadata = { title: 'Contact Us | JollyHaul', description: 'Get in touch with the JollyHaul support team.' }
