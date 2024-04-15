'use client'

import Image from 'next/image'
import { useState } from 'react'
import Login from './Login'
import NavigationLink from './NavigationLink'
import { Container, DesktopMenu, MobileMenu } from './style'
import { List } from '@phosphor-icons/react'
import Button from '../Button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Container>
      <header className="margin">
        <MobileMenu>
          <div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <List />
            </button>
            <Image src="/images/logo.png" alt="Logo" width={123} height={40} />
          </div>

          {isMenuOpen && (
            <ul>
              <NavigationLink name="Home" href="/" />
              <NavigationLink name="Institucional" href="#" />
              <NavigationLink name="Contato" href="#" />

              <Button>Fazer login</Button>
            </ul>
          )}
        </MobileMenu>

        <DesktopMenu>
          <Image src="/images/logo.png" alt="Logo" width={123} height={40} />
          <ul>
            <NavigationLink name="Home" href="/" />
            <NavigationLink name="Institucional" href="#" />
            <NavigationLink name="Contato" href="#" />
          </ul>
        </DesktopMenu>

        <Login />
      </header>
    </Container>
  )
}
