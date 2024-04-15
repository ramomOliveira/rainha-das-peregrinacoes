import { Container } from './style'

interface SectionTitleProps {
  title: string
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return <Container>{title}</Container>
}
