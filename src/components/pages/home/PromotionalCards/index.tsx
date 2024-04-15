import Card from './Card'
import { Container } from './style'

export default function PromotionalCards() {
  return (
    <Container>
      <Card title="Viagens Internacionais" headerBackgroundColor="blue" />
      <Card title="Viagens Nacionais" headerBackgroundColor="green" />
      <Card title="Viagens Promocionais" headerBackgroundColor="red" />
    </Container>
  )
}
