import Link from 'next/link'
import { CONTACT_EMAIL } from '../../lib/site'

export default function ShippingReturnsPage() {
  return <main className="simple-page"><Link className="simple-brand" href="/">JollyHaul</Link><p className="eyebrow">The practical stuff</p><h1>Shipping +<br /><em>returns.</em></h1><div className="simple-list"><section><h2>Shipping</h2><p>Orders typically arrive in 10–18 days. You will receive tracking by email when your order ships.</p></section><section><h2>Returns</h2><p>Changed your mind? Contact us within 30 days of delivery. Items should be unused and in original condition. If your item arrives damaged, send us a photo and we will make it right.</p></section></div><a className="text-link" href={`mailto:${CONTACT_EMAIL}`}>Contact support</a></main>
}

export const metadata = { title: 'Shipping + Returns | JollyHaul', description: 'JollyHaul shipping and returns information.' }
