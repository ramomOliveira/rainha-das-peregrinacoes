'use client'

import SelectField from '@/components/SelectField'
import { OptionsPopUp } from './style'

export default function LineSelect() {
  return (
    <SelectField
      title="Duração"
      placeholder="Selecione os dias"
      optionsPopUp={
        <OptionsPopUp>
          <div>3 a 5 dias</div>
          <div>6 a 10 dias</div>
          <div>11 a 15 dias</div>
        </OptionsPopUp>
      }
    />
  )
}
