'use client'

import {
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
} from '@phosphor-icons/react'
import Link from 'next/link'
import { Container, SocialLinks, WrapperImage } from './style'
import Image from 'next/image'

export default function SocialNetwork() {
  return (
    <Container>
      <SocialLinks>
        <Link href="#">
          <FacebookLogo size={28} />
        </Link>
        <Link href="#">
          <InstagramLogo size={28} />
        </Link>
        <Link href="#">
          <WhatsappLogo size={28} />
        </Link>
      </SocialLinks>

      <WrapperImage>
        <span>Coded with purpose</span>
        <Image src="/images/tuna.png" alt="" width={145} height={40} />
      </WrapperImage>

      <p>© 2024 Rainha das Peregrinações</p>
    </Container>
  )
}
