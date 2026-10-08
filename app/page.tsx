'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, ChevronDown, Gift, Heart, Menu, Search, ShieldCheck, ShoppingBag, Sparkles, Truck, X } from 'lucide-react'
import { CONTACT_EMAIL, TIKTOK_URL, PAYMENT_LINKS, isLive } from '../lib/site'

const logoUrl = '/logo.png'
const products = [
  { name: 'Magical Christmas Tree Projector', price: 32.99, oldPrice: 44, tag: 'Best seller', image: '/jollyhaul-projector.png', description: 'Turn any room into a Christmas movie in 30 seconds. 6,000+ happy homes and counting.' },
  { name: 'Astronaut Star Projector', price: 39.99, oldPrice: 52, tag: 'TikTok viral', image: '/jollyhaul-gifts.png', description: 'A tiny astronaut paints galaxies across your ceiling. The gift kids lose their minds over.' },
  { name: 'Portable Espresso Maker', price: 69.99, oldPrice: 89, tag: 'Coffee lover gift', image: '/jollyhaul-gifts.png', description: 'Real espresso anywhere. Works with Nespresso and Dolce Gusto. No outlet needed.' },
  { name: 'Waterfall Tree Lights', price: 24.99, oldPrice: 32, tag: 'Tree magic', image: '/jollyhaul-gifts.png', description: '200 LEDs cascading like a glowing waterfall. The tree topper upgrade nobody expects.' },
  { name: 'Mushroom Humidifier', price: 21.99, oldPrice: 29, tag: 'Room decor', image: '/jollyhaul-gifts.png', description: 'A glowing mushroom that mists. The coziest desk upgrade on TikTok right now.' },
  { name: 'Electric Milk Frother', price: 19.99, oldPrice: 26, tag: 'Stocking stuffer', image: '/jollyhaul-gifts.png', description: 'Cafe foam at home in 15 seconds. Pairs perfectly with the espresso maker.' },
]
const faqs = [['When will my order arrive?', 'Most finds arrive in about 10–18 days, and every order is tracked. These are estimates: customs, holidays, and remote destinations can add a few days.'], ['What comes in the box?', 'Each product includes clear setup steps, power requirements, and care notes.'], ['Can I return an item?', 'Yes, within 7 days of delivery. If something arrives damaged, send us a photo and we will replace it or refund you.'], ['Why Jolly Haul?', 'We curate joyful holiday finds, test every one in a real home before we sell it, and tell you exactly what to expect.']]

export default function Page() {
  const [cart, setCart] = useState<{ name: string; price: number; image: string }[]>([])
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [bagOpen, setBagOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [signupOpen, setSignupOpen] = useState(true)
  const [email, setEmail] = useState('')
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date()
      const christmas = new Date(now.getFullYear(), 11, 10, 23, 59, 59)
      if (now >= christmas) christmas.setFullYear(christmas.getFullYear() + 1)
      const remaining = Math.max(0, christmas.getTime() - now.getTime())
      const totalSeconds = Math.floor(remaining / 1000)
      setCountdown({
        days: Math.floor(totalSeconds / 86400),
        hours: Math.floor((totalSeconds % 86400) / 3600),
        minutes: Math.floor((totalSeconds % 3600) / 60),
        seconds: totalSeconds % 60,
      })
    }
    updateCountdown()
    const timer = window.setInterval(updateCountdown, 1000)
    return () => window.clearInterval(timer)
  }, [])
  useEffect(() => {
    if (window.localStorage.getItem('jollyhaul-welcome-redeemed') === 'true') setSignupOpen(false)
  }, [])
  const [signedUp, setSignedUp] = useState(false)
  const [couponRevealed, setCouponRevealed] = useState(false)
  const [offerDismissed, setOfferDismissed] = useState(false)
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [scratchRevealing, setScratchRevealing] = useState(false)
  const [signupError, setSignupError] = useState(false)
  const handleSignup = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!email.trim()) return
    setSignupError(false)
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email, _subject: 'New JollyHaul waitlist signup', _template: 'table' }),
      })
      if (!res.ok) throw new Error('signup failed')
      setSignedUp(true); setSignupOpen(false)
      window.localStorage.setItem('jollyhaul-welcome-redeemed', 'true')
    } catch { setSignupError(true) }
  }
  const revealCoupon = () => {
    if (scratchRevealing || couponRevealed) return
    setScratchRevealing(true)
    window.setTimeout(() => {
      setCouponRevealed(true)
      setScratchRevealing(false)
    }, 650)
  }
  const addToBag = (product: typeof products[number]) => { setCart((current) => [...current, product]); setBagOpen(true) }
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0)
  const visibleProducts = products.filter((product) => `${product.name} ${product.description} ${product.tag}`.toLowerCase().includes(searchQuery.toLowerCase().trim()))

  return <main className="site-shell">
    <div className="announcement"><Sparkles size={14} /> Order by Dec 10, our Christmas cutoff <a href="#faq">See delivery info <ArrowRight size={13} /></a></div>
    <header className="nav-wrap"><nav className="nav container" aria-label="Main navigation">
      <button className="mobile-menu" aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      <a className="brand" href="#top" aria-label="Jolly Haul home"><img className="brand-logo" src={logoUrl} alt="Jolly Haul logo" /><span>Jolly Haul</span></a>
      <div className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}><a href="#collection" onClick={() => setMenuOpen(false)}>Shop all</a><a href="#bundles" onClick={() => setMenuOpen(false)}>Gift bundles</a><a href="#story" onClick={() => setMenuOpen(false)}>Our promise</a><a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a></div>
      <div className="nav-actions"><button aria-label="Search" aria-expanded={searchOpen} onClick={() => setSearchOpen((open) => !open)}><Search size={18} /></button><button className="cart-button" onClick={() => setBagOpen(true)} aria-label={`Shopping bag with ${cart.length} items`}><ShoppingBag size={19} /><b>{cart.length}</b></button></div>
    </nav></header>
    <section id="top" className="hero container"><div className="hero-copy"><p className="eyebrow"><span className="eyebrow-line" /> Jolly Haul holiday shop</p><h1><span className="hero-heading-lead">Make it feel like</span><br /><em>Christmas <span className="heading-spark">✨</span></em></h1><p className="hero-text">Joyful finds for the people, places, and little traditions that make December magic. Curated with care. Tested before it sells.</p><div className="hero-actions"><a className="button button-dark" href="#collection">Shop the collection <ArrowRight size={16} /></a><a className="text-link" href="#story">Our quality promise <ArrowRight size={15} /></a></div><div className="hero-proof"><div><strong>Launching Christmas 2026</strong><small><a className="text-link" href="#newsletter">Join the nice list for first dibs</a></small></div></div></div><div className="hero-art"><img src="/jollyhaul-hero.png" alt="Cozy Christmas room lit by a star projector" /><div className="hero-sticker"><span>Gifts that<br />glow</span><span className="sticker-star">✦</span></div></div></section>
    <section className="countdown-section" aria-label="Countdown to Christmas"><div className="container countdown-inner"><div><p className="eyebrow cream">The magic is on its way</p><h2>Christmas is<br /><em>counting down.</em></h2></div><div className="countdown-clock" aria-live="polite">{[['days', countdown.days], ['hours', countdown.hours], ['minutes', countdown.minutes], ['seconds', countdown.seconds]].map(([label, value]) => <div className="countdown-unit" key={label}><div className="flip-card"><span>{String(value).padStart(2, '0')}</span></div><small>{label}</small></div>)}</div></div></section>
    <section className="trust-bar"><div className="container trust-items"><div><ShieldCheck size={20} /><span><strong>Sample-first promise</strong><small>We test before we sell</small></span></div><div><Truck size={20} /><span><strong>Tracked delivery</strong><small>Typically 10–18 days</small></span></div><div><Gift size={20} /><span><strong>Gift-worthy finds</strong><small>Picked for delight</small></span></div><div><Heart size={20} /><span><strong>Human support</strong><small>Here when you need us</small></span></div></div></section>
    <section id="collection" className="section container"><div className="section-heading"><div><p className="eyebrow">The good stuff</p><h2>Little things.<br /><em>Big atmosphere.</em></h2></div><p>Our collection is intentionally small: the pieces that make a room warmer, a gift more memorable, and a regular Tuesday feel like Christmas Eve.</p></div>{searchOpen && <div className="search-panel"><label htmlFor="product-search">Find your next holiday favorite</label><div><Search size={16} /><input id="product-search" autoFocus value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Search projectors, lights, gifts..." /><button type="button" onClick={() => { setSearchQuery(''); setSearchOpen(false) }} aria-label="Close search"><X size={16} /></button></div></div>}<div className="product-grid">{visibleProducts.map((product, index) => <article className={`product-card ${index === 0 ? 'featured' : ''}`} key={product.name}><div className="product-image"><img src={product.image} alt={product.name} /><span className="product-tag">{product.tag}</span><button className="heart" aria-label={`Save ${product.name}`}><Heart size={16} /></button></div><div className="product-meta"><div><h3>{product.name}</h3><p>{product.description}</p></div><div className="price"><strong>${product.price.toFixed(2)}</strong><del>${product.oldPrice.toFixed(2)}</del></div></div>{isLive(PAYMENT_LINKS[product.name]) ? <a className="add-button" href={PAYMENT_LINKS[product.name]} target="_blank" rel="noopener">Buy now <ArrowRight size={15} /></a> : <a className="add-button" href="#newsletter">Notify me at launch <ArrowRight size={15} /></a>}<button className="text-link" onClick={() => addToBag(product)}>Add to bag</button></article>)}{visibleProducts.length === 0 && <p className="empty-search">No holiday finds matched that search. Try “lights” or “gift”.</p>}</div></section>
    <section id="bundles" className="bundle-section"><div className="container bundle-inner"><div className="bundle-copy"><p className="eyebrow cream">For the hard-to-shop-for</p><h2>Give them a<br /><em>whole mood.</em></h2><p>The espresso maker plus the milk frother — a complete coffee bar in a box, bundled for less.</p><div className="bundle-price"><strong>$79.99</strong><del>$89.98</del><span>Save $9.99</span></div>{isLive(PAYMENT_LINKS['Coffee Bar Bundle']) ? <a className="button button-light" href={PAYMENT_LINKS['Coffee Bar Bundle']} target="_blank" rel="noopener">Shop Coffee Bar Bundle <ArrowRight size={16} /></a> : <a className="button button-light" href="#newsletter">Notify me about the bundle <ArrowRight size={16} /></a>}</div><div className="bundle-art"><img src="/jollyhaul-gifts.png" alt="Curated Christmas gifts and warm holiday lights" /><div className="bundle-note"><span>01</span><strong>The Coffee<br />Bar</strong><small>Espresso maker + frother</small></div></div></div></section>
    <section id="story" className="story-section container"><div className="story-quote"><span className="quote-mark">“</span><h2>We believe the best<br />Christmas magic is<br /><em>the kind you can feel.</em></h2></div><div className="story-copy"><p className="eyebrow">The Jolly Haul promise</p><p>Holiday shopping should feel like discovery, not scrolling through a warehouse.</p><p>Every piece earns its place here. We sample-test every product before it goes live, and we always share the honest delivery window. No mystery boxes. No overpromising.</p><a className="text-link" href="#faq">Read our FAQs <ArrowRight size={15} /></a></div></section>
    <section id="faq" className="faq-section"><div className="container faq-inner"><div><p className="eyebrow">Good to know</p><h2>Questions,<br /><em>answered.</em></h2><p className="faq-intro">Still wondering about an item or an order? We would love to help.</p><a className="text-link" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL} <ArrowRight size={15} /></a></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? 'faq-open' : ''}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span><ChevronDown size={18} /></button>{openFaq === index && <p>{answer}</p>}</div>)}</div></div></section>
    <footer className="footer"><div className="container newsletter" id="newsletter"><div><p className="eyebrow cream">A little merry in your inbox</p><h2>Get 15% off your first order.</h2><p>Seasonal drops, gift ideas, and good excuses to make things cozy.</p></div><form onSubmit={handleSignup}><label htmlFor="footer-email">Email address</label><div><input id="footer-email" type="email" required placeholder="you@example.com" value={email} onChange={(event) => setEmail(event.target.value)} /><button className="button button-light" type="submit">{signedUp ? 'You are in' : 'Get my code'} <ArrowRight size={15} /></button></div>{signupError && <p className="form-error">Hmm, that didn\u2019t go through — try again in a moment.</p>}</form></div><div className="container footer-top"><div><a className="brand footer-brand" href="#top"><img className="brand-logo" src={logoUrl} alt="Jolly Haul logo" /><span>Jolly Haul</span></a><p>Small joys for the<br />biggest season.</p></div><div className="footer-links"><div><strong>Explore</strong><a href="#collection">Shop all</a><a href="#bundles">Gift bundles</a><a href="#story">Our promise</a></div><div><strong>Help</strong><a href="/faq">FAQ</a><a href="/contact">Contact us</a><a href="/shipping-returns">Shipping + returns</a><a href="/terms">Terms of service</a><a href="/privacy">Privacy policy</a></div><div><strong>Follow along</strong><a href={TIKTOK_URL} target="_blank" rel="noopener">TikTok</a></div></div></div><div className="container footer-bottom"><span>© 2026 Jolly Haul</span><span>Made for merry homes everywhere <span className="red-dot">•</span></span></div></footer>
    {signupOpen && !signedUp && <div className="modal-backdrop" role="presentation"><section className="signup-modal" role="dialog" aria-modal="true" aria-labelledby="signup-title"><button className="modal-close" aria-label="Close offer" onClick={() => setSignupOpen(false)}><X size={18} /></button><img src={logoUrl} alt="Jolly Haul" className="modal-logo" /><p className="eyebrow">A gift for you</p><h2 id="signup-title">A little something<br /><em>under the tree.</em></h2><p>Join the Jolly Haul list and scratch to reveal your welcome gift.</p><form onSubmit={handleSignup}><input aria-label="Email address" type="email" required placeholder="Your email address" value={email} onChange={(event) => setEmail(event.target.value)} /><button className="button button-dark" type="submit">Unlock my gift <Gift size={15} /></button></form></section></div>}
    {signedUp && !couponRevealed && !offerDismissed && <div className="modal-backdrop" role="presentation"><section className="scratch-modal" role="dialog" aria-modal="true" aria-labelledby="scratch-title"><button className="modal-close" aria-label="Close offer" onClick={() => setOfferDismissed(true)}><X size={18} /></button><p className="eyebrow">You are officially on the nice list</p><h2 id="scratch-title">Scratch for<br /><em>your surprise.</em></h2><button className={`scratch-card ${scratchRevealing ? 'scratch-revealing' : ''}`} onClick={revealCoupon} aria-label="Reveal your coupon"><span className="scratch-cover">Scratch here</span><strong>JOLLY15</strong><small>15% off your first order</small></button><p className="scratch-hint">Tap the card to reveal your code.</p></section></div>}
    {couponRevealed && signedUp && !offerDismissed && <div className="coupon-toast" role="status"><strong>JOLLY15</strong><span>Your 15% off code is ready.</span><button onClick={() => setOfferDismissed(true)} aria-label="Dismiss coupon"><X size={15} /></button></div>}
    {bagOpen && <div className="bag-overlay" role="presentation" onClick={() => setBagOpen(false)}><aside className="bag-drawer" role="dialog" aria-modal="true" aria-labelledby="bag-title" onClick={(event) => event.stopPropagation()}><div className="bag-head"><h2 id="bag-title">Your bag <span>({cart.length})</span></h2><button onClick={() => setBagOpen(false)} aria-label="Close shopping bag"><X /></button></div>{cart.length === 0 ? <div className="empty-bag"><ShoppingBag size={34} /><p>Your bag is waiting for a little magic.</p><button className="button button-dark" onClick={() => setBagOpen(false)}>Keep shopping</button></div> : <><div className="bag-items">{cart.map((item, index) => <div className="bag-item" key={`${item.name}-${index}`}><img src={item.image} alt="" /><div><strong>{item.name}</strong><span>${item.price.toFixed(2)}</span>{isLive(PAYMENT_LINKS[item.name] || '') && <a className="bag-buy" href={PAYMENT_LINKS[item.name]} target="_blank" rel="noopener">Buy now <ArrowRight size={13} /></a>}</div><button onClick={() => setCart((current) => current.filter((_, itemIndex) => itemIndex !== index))} aria-label={`Remove ${item.name}`}><X size={15} /></button></div>)}</div><div className="bag-total"><span>Subtotal</span><strong>${subtotal.toFixed(2)}</strong></div><p className="secure-note"><ShieldCheck size={14} /> Secure checkout via Stripe · Tracked delivery, typically 10–18 days</p></>}</aside></div>}
  </main>
}
