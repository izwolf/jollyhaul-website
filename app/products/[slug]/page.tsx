'use client'

import { use } from 'react'
import { ArrowRight, Check, ShieldCheck, Truck } from 'lucide-react'
import { getProduct } from '../../../lib/products'
import { PAYMENT_LINKS, isLive } from '../../../lib/site'
import { notFound } from 'next/navigation'

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const product = getProduct(slug)
  if (!product) notFound()

  const paymentUrl = PAYMENT_LINKS[product.name] || ''

  return <main className="site-shell">
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      <a href="/#collection" className="text-link" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>
        ← Back to all products
      </a>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginTop: '1rem' }} className="product-detail-grid">
        <div>
          <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '12px' }} />
        </div>
        <div>
          <span className="product-tag">{product.tag}</span>
          <h1 style={{ fontSize: '2.5rem', margin: '0.5rem 0' }}>{product.name}</h1>
          <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '1rem' }}>{product.description}</p>
          <div className="price" style={{ marginBottom: '1.5rem' }}>
            <strong style={{ fontSize: '2rem' }}>${product.price.toFixed(2)}</strong>
            <del style={{ marginLeft: '0.75rem', color: '#999' }}>${product.oldPrice.toFixed(2)}</del>
            <span style={{ marginLeft: '0.75rem', color: '#e74c3c', fontWeight: 600 }}>
              Save ${(product.oldPrice - product.price).toFixed(2)}
            </span>
          </div>
          {isLive(paymentUrl) ? (
            <a className="button button-dark" href={paymentUrl} target="_blank" rel="noopener" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>
              Buy now <ArrowRight size={16} />
            </a>
          ) : (
            <a className="button button-dark" href="/#newsletter" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>
              Notify me at launch <ArrowRight size={16} />
            </a>
          )}
          <div style={{ marginTop: '2rem' }}>
            <h3>Features</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {product.features.map((f) => (
                <li key={f} style={{ padding: '0.4rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Check size={16} color="#27ae60" /> {f}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ marginTop: '1.5rem' }}>
            <h3>Specifications</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {product.specs.map((s) => (
                <li key={s} style={{ padding: '0.3rem 0', color: '#666' }}>{s}</li>
              ))}
            </ul>
          </div>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem' }}>
              <Truck size={16} /> Tracked delivery
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem' }}>
              <ShieldCheck size={16} /> 7-day returns
            </span>
          </div>
        </div>
      </div>
    </div>
  </main>
}
