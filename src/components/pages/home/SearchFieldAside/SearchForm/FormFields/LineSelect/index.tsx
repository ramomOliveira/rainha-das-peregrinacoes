'use client'

import { CaretDown } from '@phosphor-icons/react'
import { Container, OptionsPopUp } from './style'
import { useState } from 'react'

interface LineSelectProps {
  title: string
}

export default function LineSelect({ title }: LineSelectProps) {
  const [openOptions, setOpenOptions] = useState<boolean>(false)

  return (
    <Container
      onClick={() => setOpenOptions(!openOptions)}
      onBlur={() => setOpenOptions(false)}
    >
      <p>
        {title}
      </p>

      <div>
        <input type="text" />
        <CaretDown />
      </div>

      {openOptions && (
        <OptionsPopUp>
          <div>3 a 5 dias</div>
          <div>6 a 10 dias</div>
          <div>11 a 15 dias</div>
        </OptionsPopUp>
      )}
    </Container>
  )
}
