import { allProducts } from '../../../lib/products'
import ProductDetail from './ProductDetail'

export function generateStaticParams() {
  return allProducts.map((product) => ({ slug: product.slug }))
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <ProductDetail slug={slug} />
}
