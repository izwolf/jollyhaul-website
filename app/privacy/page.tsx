import Link from 'next/link'
import { CONTACT_EMAIL } from '../../lib/site'

export default function PrivacyPage() {
  return (
    <main className="simple-page">
      <Link className="simple-brand" href="/">JollyHaul</Link>
      <p className="eyebrow">Your data, treated with respect</p>
      <h1>Privacy<br /><em>policy.</em></h1>
      <p className="simple-intro">Last updated: October 4, 2026. Short version: we collect the minimum needed to run the shop, we never sell your data, and we never see your card number.</p>
      <div className="simple-list">
        <section>
          <h2>What we collect</h2>
          <p><strong>Waitlist and newsletter:</strong> your email address, which you give us voluntarily through our signup forms.</p>
          <p><strong>Orders:</strong> your name, email, shipping address, and order details, collected by Stripe during checkout. Card numbers are processed entirely by Stripe; they are never visible to us and never stored on our servers.</p>
          <p><strong>Basic site data:</strong> anonymous, aggregate analytics from our hosting provider (page views, device type) so we can keep the site fast and working.</p>
        </section>
        <section>
          <h2>How we use it</h2>
          <p>To fulfill your orders, email your tracking number, answer your questions, and (only if you signed up) send waitlist updates and offers. Every marketing email includes an unsubscribe link.</p>
        </section>
        <section>
          <h2>Who we share it with</h2>
          <p>Only the services that make the shop run:</p>
          <p><strong>Stripe</strong>, to process your payment securely.</p>
          <p><strong>Our supplier partners</strong>, who receive your name, shipping address, and order items so they can ship your package directly to you. They do not receive your card details.</p>
          <p><strong>FormSubmit</strong>, which routes waitlist signup emails to us.</p>
          <p>We do not sell, rent, or trade your personal information to anyone, ever. We disclose data only if required by law.</p>
        </section>
        <section>
          <h2>Cookies</h2>
          <p>This site uses only the minimal technical storage needed to function (for example, remembering that you joined the waitlist). We do not run advertising trackers.</p>
        </section>
        <section>
          <h2>Your rights</h2>
          <p>Email <a className="text-link" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> any time to ask what data we hold about you, correct it, or delete it. We will respond promptly.</p>
        </section>
        <section>
          <h2>Children</h2>
          <p>JollyHaul is not directed at children under 13, and we do not knowingly collect their data. Purchases require an adult (18+).</p>
        </section>
        <section>
          <h2>Changes</h2>
          <p>If this policy changes, the new version appears on this page with a new date. Material changes will also be announced to our email list.</p>
        </section>
      </div>
      <a className="text-link" href={`mailto:${CONTACT_EMAIL}`}>Privacy questions? Email us</a>
    </main>
  )
}

export const metadata = { title: 'Privacy Policy | JollyHaul', description: 'How JollyHaul collects, uses, and protects your personal information.' }
