import LineSelect from './LineSelect'
import TextField from './TextField'
import { Container } from './style'

export default function FormFields() {
  return (
    <Container>
      <TextField />

      <LineSelect title="Duração" />

      <div>
        <LineSelect title="Período da viagem" />
        <LineSelect title="Tipo de quarto" />
      </div>

      <LineSelect title="Faixa de preço" />
    </Container>
  )
}
