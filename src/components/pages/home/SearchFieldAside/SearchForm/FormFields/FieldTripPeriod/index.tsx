'use client'

import { useState } from 'react'
import { Container, OptionsPopUp } from './style'
import { CaretUp, CaretDown } from '@phosphor-icons/react'

export default function FieldTripPeriod() {
  const [openOptions, setOpenOptions] = useState<boolean>(false)

  return (
    <Container onClick={() => setOpenOptions(!openOptions)}>
      <p>Período da viagem</p>

      <label htmlFor="FieldTripPeriod">
        <input type="text" id="FieldTripPeriod" placeholder="Mês" />
        <div>
          <input type="text" id="FieldTripPeriod" placeholder="| Ano" />
          {openOptions ? <CaretUp /> : <CaretDown />}
        </div>
      </label>

      {openOptions && (
        <OptionsPopUp>
          <div>
            <p>Mês da viagem</p>
            <div>
              <label htmlFor="janeiro">
                <input type="checkbox" id="janeiro" />
                <p>Janeiro</p>
              </label>
              <label htmlFor="fevereiro">
                <input type="checkbox" id="fevereiro" />
                <p>Fevereiro</p>
              </label>
              <label htmlFor="marco">
                <input type="checkbox" id="marco" />
                <p>Março</p>
              </label>
              <label htmlFor="julho">
                <input type="checkbox" id="julho" />
                <p>Julho</p>
              </label>
              <label htmlFor="agosto">
                <input type="checkbox" id="agosto" />
                <p>Agosto</p>
              </label>
              <label htmlFor="dezembro">
                <input type="checkbox" id="dezembro" />
                <p>Dezembro</p>
              </label>
            </div>
          </div>
          <div>
            <p>Ano da viagem</p>
            <div>
              <label htmlFor="2024">
                <input type="checkbox" id="2024" />
                <p>2024</p>
              </label>
              <label htmlFor="2025">
                <input type="checkbox" id="2025" />
                <p>2025</p>
              </label>
              <label htmlFor="2026">
                <input type="checkbox" id="2026" />
                <p>Março</p>
              </label>
            </div>
          </div>
        </OptionsPopUp>
      )}
    </Container>
  )
}
