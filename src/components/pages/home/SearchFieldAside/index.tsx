import SearchForm from './SearchForm'
import { Container, WrapperImage } from './style'

export default function SearchFieldAside() {
  return (
    <Container>
      <WrapperImage />

      <div className="margin">
        <SearchForm />
      </div>
    </Container>
  )
}
