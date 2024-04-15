import SelectField from '@/components/SelectField'
import { OptionsPopUp } from './style'

export default function RoomTypeField() {
  return (
    <SelectField
      title="Tipo de quarto"
      placeholder="Selecione um tipo"
      optionsPopUp={
        <OptionsPopUp>
          <label htmlFor="exclusivo">
            <input type="checkbox" id="exclusivo" />
            <p>Exclusivo</p>
          </label>

          <label>
            <input type="checkbox" />
            <p>Compartilhado</p>
          </label>
        </OptionsPopUp>
      }
    />
  )
}
