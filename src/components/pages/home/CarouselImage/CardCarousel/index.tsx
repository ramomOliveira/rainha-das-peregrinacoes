import { Container } from './style'

interface CardCarouselProps {
  image: string
  title: string
  days: string
}

export default function CardCarousel({
  image,
  days,
  title,
}: CardCarouselProps) {
  return (
    <Container image={image}>
      <span>
        <p>Roteiro 2024</p>
      </span>

      <div>
        <p>{title}</p>
        <span>{days}</span>
      </div>
    </Container>
  )
}
