import SectionTitle from '../SectionTitle'
import HighlightCard from './HighlightCard'
import { Container } from './style'

export default function Highlights() {
  return (
    <Container>
      <SectionTitle title="Destaques" />

      <div>
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </div>
    </Container>
  )
}
