import Link from 'next/link'
import { CONTACT_EMAIL } from '../../lib/site'

export default function TermsPage() {
  return (
    <main className="simple-page">
      <Link className="simple-brand" href="/">JollyHaul</Link>
      <p className="eyebrow">The fine print, in plain words</p>
      <h1>Terms of<br /><em>service.</em></h1>
      <p className="simple-intro">Last updated: October 4, 2026. By browsing JollyHaul or placing an order, you agree to these terms. If you do not agree, please do not use this site.</p>
      <div className="simple-list">
        <section>
          <h2>1. Who we are</h2>
          <p>JollyHaul is an online gift shop run from Puerto Rico. We find joyful seasonal products and gifts, list them here, and have them shipped straight to you. Contact us anytime at <a className="text-link" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
        </section>
        <section>
          <h2>2. How ordering works</h2>
          <p>We are a dropshipping store. That means we do not hold inventory: when you order, your items ship directly from our supplier partners to your address. This keeps prices low and selection wide. It also means shipping times are longer than a local store, which we disclose honestly on every product page and in our <Link className="text-link" href="/shipping-returns">shipping policy</Link>.</p>
          <p>To buy, you must be 18 or older and provide accurate contact and shipping details. Payment is processed securely by Stripe. We never see or store your card number.</p>
          <p>Your order is confirmed when you receive our confirmation email. We reserve the right to cancel and refund any order that looks fraudulent, has an undeliverable address, or involves a pricing error. If we cancel, you are refunded in full.</p>
        </section>
        <section>
          <h2>3. Prices and promotions</h2>
          <p>All prices are in US dollars and shown before any applicable taxes. Discount codes apply at checkout where offered and cannot be combined unless stated. We may change prices at any time, but the price at the moment you pay is the price you get.</p>
        </section>
        <section>
          <h2>4. Shipping, delivery, and tracking</h2>
          <p>Delivery timeframes on our site are good-faith estimates based on supplier data, not guarantees. Carriers, customs, holidays, and remote destinations can add time. Every order ships with tracking, which we email you as soon as your order leaves the supplier. Please double-check your address before paying: we cannot reroute a package sent to an address you entered incorrectly. Full details are in our <Link className="text-link" href="/shipping-returns">shipping policy</Link>.</p>
        </section>
        <section>
          <h2>5. Returns and refunds</h2>
          <p>If something arrives damaged, defective, or wrong, tell us within 7 days of delivery with a photo and we will replace it or refund you, our choice, at no cost to you. For change-of-mind returns, contact us within 7 days of delivery; items must be unused and in original condition, and return shipping is on you. Refunds go back to your original payment method. Details are in our <Link className="text-link" href="/shipping-returns">returns policy</Link>.</p>
        </section>
        <section>
          <h2>6. If something goes wrong, talk to us first</h2>
          <p>We answer support emails fast, and we would much rather fix a problem directly than have you file a payment dispute. A chargeback freezes your refund while the card network investigates, which is slower for everyone. Email us at <a className="text-link" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> with your order details and we will make it right. Nothing here removes any rights you have under applicable consumer law.</p>
        </section>
        <section>
          <h2>7. Product descriptions</h2>
          <p>We describe products based on supplier specifications and product imagery, and we correct listings when we learn better. Colors and finishes can look slightly different on your screen than in person. If a product you receive materially differs from its description, that counts as defective under our returns policy.</p>
        </section>
        <section>
          <h2>8. Our content is ours</h2>
          <p>Everything original on this site (text, graphics, logos, videos, layout) belongs to JollyHaul. You may browse and share links to our pages, but you may not copy, reproduce, or republish our content, product photos, or videos without written permission. Product images and demonstration clips are used under our suppliers&apos; resale authorization and remain subject to their rights as well. Scraping this site with bots is not permitted.</p>
        </section>
        <section>
          <h2>9. Acceptable use</h2>
          <p>Do not misuse this site: no fraudulent orders, no attempts to breach security, no automated bulk ordering, and no use of our content in ways section 8 forbids.</p>
        </section>
        <section>
          <h2>10. Liability</h2>
          <p>To the maximum extent permitted by law, JollyHaul is not liable for indirect or consequential losses arising from your use of this site or products bought here. Our total liability for any order is limited to the amount you paid for that order. Nothing here limits liability where the law does not allow it.</p>
        </section>
        <section>
          <h2>11. Governing law</h2>
          <p>These terms are governed by the laws of Puerto Rico. If we cannot resolve a dispute by email first, it will be handled in the courts of Puerto Rico.</p>
        </section>
        <section>
          <h2>12. Changes</h2>
          <p>We may update these terms as the shop grows. The version on this page is the current one, and the date at the top shows when it last changed. Continuing to use the site after changes means you accept them.</p>
        </section>
      </div>
      <a className="text-link" href={`mailto:${CONTACT_EMAIL}`}>Questions? Contact support</a>
    </main>
  )
}

export const metadata = { title: 'Terms of Service | JollyHaul', description: 'JollyHaul terms of service: ordering, shipping, returns, and content rules.' }
