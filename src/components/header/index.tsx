import Image from 'next/image'
import Login from './Login'
import NavigationLink from './NavigationLink'
import { Container, Nav } from './style'
import CaroucelImage from './CaroucelImage'

export default function Header() {
  return (
    <Container>
      <header className="margin">
        <Nav>
          <Image src="/images/logo.png" alt="Logo" width={123} height={40} />
          <ul>
            <NavigationLink name="Home" href="/" />
            <NavigationLink name="Institucional" href="#" />
            <NavigationLink name="Contato" href="#" />
          </ul>
        </Nav>

        <Login />
      </header>

      <main>
        <CaroucelImage />
      </main>
    </Container>
  )
}
