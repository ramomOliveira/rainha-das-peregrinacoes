'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Container, Wrapper } from './style'
import SocialNetwork from './SocialNetwork'

export default function Footer() {
  return (
    <Container>
      <div className="margin">
        <Image src="/images/logo.png" alt="" width={300} height={200} />

        <Wrapper>
          <Link href="#">Roteiros</Link>
          <Link href="#">Perguntas Frequentes</Link>
          <Link href="#">Contatos</Link>
        </Wrapper>

        <Wrapper>
          <Link href="#">Termos de uso</Link>
          <Link href="#">Política de Privacidade</Link>
          <Link href="#">Segurança</Link>
        </Wrapper>

        <SocialNetwork />
      </div>
    </Container>
  )
}
