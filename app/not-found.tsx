import Link from 'next/link'

export default function NotFound() {
  return <main className="simple-page not-found-page"><Link className="simple-brand" href="/">JollyHaul</Link><p className="eyebrow">Oops</p><h1>This page took<br /><em>a wrong turn.</em></h1><p className="simple-intro">The page you are looking for is not here, but there is plenty of holiday magic waiting in the shop.</p><Link className="button button-dark" href="/">Return to the shop</Link></main>
}
