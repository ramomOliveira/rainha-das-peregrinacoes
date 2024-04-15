import Image from 'next/image'
import { Container } from './style'

interface CardProps {
  headerBackgroundColor: 'blue' | 'green' | 'red'
  title: string
}

export default function Card({ headerBackgroundColor, title }: CardProps) {
  return (
    <Container headerBackgroundColor={headerBackgroundColor}>
      <header>{title}</header>

      <Image
        src="/images/Nazare-Portugal.jpg"
        width={400}
        height={250}
        alt="Paris"
      />
    </Container>
  )
}
