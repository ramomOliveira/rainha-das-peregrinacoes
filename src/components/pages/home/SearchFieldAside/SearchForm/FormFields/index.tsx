import FieldTripPeriod from './FieldTripPeriod'
import LineSelect from './LineSelect'
import PriceRangeField from './PriceRangeField'
import RoomTypeField from './RoomTypeField'
import TextField from './TextField'
import { Container } from './style'

export default function FormFields() {
  return (
    <Container>
      <TextField />

      <LineSelect />

      <div>
        <FieldTripPeriod />
        <RoomTypeField />
      </div>

      <PriceRangeField />
    </Container>
  )
}
