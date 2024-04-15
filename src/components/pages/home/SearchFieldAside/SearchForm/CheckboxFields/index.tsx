'use client'

import { Check } from '@phosphor-icons/react'
import { Container } from './style'

export default function CheckboxFields() {
  return (
    <Container>
      <p>Tipo de viagem:</p>
      <label htmlFor="nacional">
        <input type="checkbox" id="nacional" />
        <span>
          <Check weight="bold" />
        </span>
        Nacional
      </label>

      <label htmlFor="internacional">
        <input type="checkbox" id="internacional" />
        <span>
          <Check weight="bold" />
        </span>
        Internacional
      </label>

      <label htmlFor="promocionais">
        <input type="checkbox" id="promocionais" />
        <span>
          <Check weight="bold" />
        </span>
        Promocionais
      </label>
    </Container>
  )
}
