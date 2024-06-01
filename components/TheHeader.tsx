import Navigation from '@/components/Navigation'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
]

export default function TheHeader() {
  return (
    <header className="header">
      <div className="container">
        <h1>Header</h1>
        <Navigation navLinks={navItems} />
      </div>
    </header>
  )
}
