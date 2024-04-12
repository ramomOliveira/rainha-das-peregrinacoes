import Link from 'next/link'
import { Container } from './style'

interface NavigationLinkProps {
  name: string
  href: string
}

export default function NavigationLink({ name, href }: NavigationLinkProps) {
  return (
    <Container>
      <Link href={href}>{name}</Link>
    </Container>
  )
}
