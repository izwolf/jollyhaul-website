import Link from 'next/link'
import { CONTACT_EMAIL } from '../../lib/site'

export default function ShippingReturnsPage() {
  return (
    <main className="simple-page">
      <Link className="simple-brand" href="/">JollyHaul</Link>
      <p className="eyebrow">The practical stuff</p>
      <h1>Shipping +<br /><em>returns.</em></h1>
      <p className="simple-intro">Last updated: October 4, 2026.</p>
      <div className="simple-list">
        <section>
          <h2>How shipping works</h2>
          <p>JollyHaul is a dropshipping shop: we do not hold inventory. When you order, your items ship directly from our supplier partners to your address. This is how we keep prices fair and the selection wide. It also means delivery takes longer than ordering from a local store, and we would rather tell you that plainly than surprise you.</p>
        </section>
        <section>
          <h2>Delivery estimates</h2>
          <p>Most orders arrive within 10 to 18 days of shipment. Timeframes shown on product pages are good-faith estimates based on supplier data. They are not guarantees. Customs checks, holidays, severe weather, and remote destinations can add time, and we are not liable for delays once a package is with the carrier.</p>
          <p>Ordering for Christmas? Watch the order-by date shown on our homepage each season. That date is set from real supplier estimates with a safety buffer, so your gifts land in time.</p>
        </section>
        <section>
          <h2>Tracking</h2>
          <p>Every order ships with tracking. We email your tracking number as soon as your order leaves the supplier. If tracking has not updated in 7 days, email us and we will chase it.</p>
        </section>
        <section>
          <h2>Addresses</h2>
          <p>Please double-check your shipping address before paying. We cannot reroute or refund an order shipped to an address you entered incorrectly. If you catch a mistake within 24 hours of ordering, email us immediately and we will try to fix it before it ships.</p>
        </section>
        <section>
          <h2>Lost packages</h2>
          <p>If tracking shows your package as delivered but you cannot find it, check with household members and neighbors first, then email us. If a package is confirmed lost by the carrier, we reship or refund you.</p>
        </section>
        <section>
          <h2>Returns: the 7-day rule</h2>
          <p>Changed your mind? Email us within 7 days of delivery. Items must be unused, unopened, and in original condition. Email <a className="text-link" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> with your order number first. Do not ship anything back until we confirm, because return instructions vary by product.</p>
          <p>For change-of-mind returns, return shipping is on you. Once we receive and inspect the item, your refund is issued to your original payment method within 5 to 10 business days.</p>
        </section>
        <section>
          <h2>Damaged, defective, or wrong items</h2>
          <p>This is on us, always. Email us within 7 days of delivery with your order number and a photo of the problem. We will send a replacement or refund you in full, whichever you prefer, at no cost to you. You do not need to ship the damaged item back unless we ask.</p>
        </section>
        <section>
          <h2>What cannot be returned</h2>
          <p>Items that have been used, washed, or damaged by misuse, and items marked final sale at the time of purchase.</p>
        </section>
        <section>
          <h2>A note on payment disputes</h2>
          <p>If anything about your order feels wrong, please email us before filing a dispute with your card provider. Disputes freeze the whole process and delay your refund while the card network investigates. We answer support emails quickly and we will fix genuine problems. Nothing here limits your statutory consumer rights.</p>
        </section>
      </div>
      <a className="text-link" href={`mailto:${CONTACT_EMAIL}`}>Contact support</a>
    </main>
  )
}

export const metadata = { title: 'Shipping + Returns | JollyHaul', description: 'JollyHaul shipping policy and returns: delivery estimates, tracking, and the 7-day return rule.' }
