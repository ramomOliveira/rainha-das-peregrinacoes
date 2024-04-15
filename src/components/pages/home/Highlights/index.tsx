import CarouselImage from '../CarouselImage'
import SectionTitle from '../SectionTitle'
import { Container } from './style'

export default function Highlights() {
  return (
    <Container>
      <SectionTitle title="Destaques" />

      <CarouselImage imageSize="medium" />
    </Container>
  )
}
