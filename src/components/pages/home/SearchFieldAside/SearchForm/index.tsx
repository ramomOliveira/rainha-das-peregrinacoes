import Button from '@/components/Button'
import CheckboxFields from './CheckboxFields'
import FormFields from './FormFields'
import { Container } from './style'

export default function SearchForm() {
  return (
    <Container>
      <div>
        <h1>Escolha o seu próximo destino</h1>

        <div>
          <CheckboxFields />

          <FormFields />
        </div>

        <Button />
      </div>
    </Container>
  )
}
