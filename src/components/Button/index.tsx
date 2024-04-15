import { Container } from './style'

interface ButtonProps {
  children: React.ReactNode
}

export default function Button({ children }: ButtonProps) {
  return <Container>{children}</Container>
}
