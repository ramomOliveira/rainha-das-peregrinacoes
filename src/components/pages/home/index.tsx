import Highlights from './Highlights'
import InternationalTravel from './InternationalTravel'
import LowCostTravel from './LowCostTravel'
import NationalTravel from './NationalTravel'
import PromotionalCards from './PromotionalCards'
import SearchFieldAside from './SearchFieldAside'
import { Wrapper } from './style'

export default function Home() {
  return (
    <div>
      <SearchFieldAside />

      <Wrapper className="margin">
        <PromotionalCards />

        <Highlights />

        <InternationalTravel />

        <NationalTravel />

        <LowCostTravel />
      </Wrapper>
    </div>
  )
}
