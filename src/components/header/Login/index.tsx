'use client'

import { BellRinging, Camera } from '@phosphor-icons/react'
import { Container } from './style'

export default function Login() {
  return (
    <Container>
      <BellRinging weight="bold" />

      <div>
        <span>
          <Camera weight="bold" />
        </span>

        <div>
          <p>Sua conta</p>
          <span>Olá, fulano</span>
        </div>
      </div>
    </Container>
  )
}
