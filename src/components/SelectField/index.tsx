'use client'

import { CaretDown, CaretUp } from '@phosphor-icons/react'
import { useState } from 'react'
import { Container } from './style'

interface SelectFieldProps {
  title: string
  optionsPopUp?: JSX.Element
  isOpen?: boolean
  placeholder?: string
}

export default function SelectField({
  title,
  isOpen,
  optionsPopUp,
  placeholder,
}: SelectFieldProps) {
  const [openOptions, setOpenOptions] = useState<boolean>(isOpen || false)

  const formatTitle = (title: string) => {
    return title
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  return (
    <Container onClick={() => setOpenOptions(!openOptions)}>
      <p>{title}</p>

      <label htmlFor={formatTitle(title)}>
        <input type="text" id={formatTitle(title)} placeholder={placeholder} />
        {openOptions ? <CaretUp /> : <CaretDown />}
      </label>

      {openOptions && optionsPopUp}
    </Container>
  )
}
