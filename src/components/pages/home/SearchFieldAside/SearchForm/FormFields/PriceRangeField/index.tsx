'use client'

import SelectField from '@/components/SelectField'
import { useState } from 'react'
import { Slider } from './style'

export default function PriceRangeField() {
  const [value, setValue] = useState(500)
  const [open, setOpen] = useState(false)

  const handleChange = (event: { target: { value: string } }) => {
    setValue(parseInt(event.target.value))
  }
  return (
    <SelectField
      title="Tipo de quarto"
      placeholder="Selecione um valor"
      optionsPopUp={
        <Slider
          onMouseDown={() => setOpen(true)}
          onMouseUp={() => setOpen(false)}
          onMouseLeave={() => setOpen(false)}
        >
          <div>
            <div>
              <p>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(100)}
              </p>
              <p>-</p>
              <p>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(value)}
              </p>
            </div>
            <input
              type="range"
              min={100}
              max={1500}
              value={value}
              onChange={handleChange}
            />
          </div>
        </Slider>
      }
      isOpen={open}
    />
  )
}
