import { Container } from './style'

export default function CheckboxFields() {
  return (
    <Container>
      <p>Tipo de viagem:</p>
      <label htmlFor="">
        <input type="checkbox" />
        Nacional
      </label>

      <label htmlFor="">
        <input type="checkbox" />
        Internacional
      </label>

      <label htmlFor="">
        <input type="checkbox" />
        Promocionais
      </label>
    </Container>
  )
}
