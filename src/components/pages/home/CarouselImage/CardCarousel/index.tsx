import { Container } from './style'

interface CardCarouselProps {
  image: string
  title: string
  days: string
  imageSizes?: 'small' | 'medium'
}

export default function CardCarousel({
  image,
  days,
  title,
  imageSizes = 'small',
}: CardCarouselProps) {
  return (
    <Container image={image} imageSizes={imageSizes}>
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
