'use client'

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

export default function CaroucelImage() {
  const handleDragStart = e => e.preventDefault()

  const items = [
    <img
      src="/images/Nazare-Portugal.jpg"
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      src="/images/Nazare-Portugal.jpg"
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      src="/images/Nazare-Portugal.jpg"
      onDragStart={handleDragStart}
      role="presentation"
    />,
  ]

  return <AliceCarousel mouseTracking items={items} />
}
