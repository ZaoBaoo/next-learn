'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLink {
  label: string
  href: string
}

interface Props {
  navLinks: NavLink[]
}

export default function Navigation({ navLinks }: Props) {
  const pathname = usePathname()

  return (
    <ul className="navigation">
      {navLinks?.map((link) => {
        const { label, href } = link
        const isActive = pathname === href

        return (
          <li className={isActive ? 'navigation__link-active' : undefined} key={label}>
            <Link href={href}>{label}</Link>
          </li>
        )
      })}
    </ul>
  )
}
