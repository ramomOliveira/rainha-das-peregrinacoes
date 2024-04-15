'use client'

import { Navigation } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import CardCarousel from './CardCarousel'
import { Container } from './style'

import './swiper-navigation.css'

interface CoursesProps {
  id: number
  title: string
  image: string
  days: string
}

const courses: Array<CoursesProps> = [
  {
    id: 1,
    title: 'Itália, Austrália e Eslováquia',
    days: '10 dias',
    image: '/images/australia.jpg',
  },
  {
    id: 2,
    title: 'Espanha e França',
    days: '8 dias',
    image: '/images/franca.jpg',
  },
  {
    id: 3,
    title: 'Portugal e Especial',
    days: '2 dias',
    image: '/images/portugal.jpg',
  },
  {
    id: 4,
    title: 'Rio Grande do Sul',
    days: '5 dias',
    image: '/images/rio-grande-sul.webp',
  },
  {
    id: 5,
    title: 'Itália, Austrália e Eslováquia',
    days: '10 dias',
    image: '/images/australia.jpg',
  },
  {
    id: 6,
    title: 'Espanha e França',
    days: '8 dias',
    image: '/images/franca.jpg',
  },
  {
    id: 7,
    title: 'Portugal e Especial',
    days: '2 dias',
    image: '/images/portugal.jpg',
  },
  {
    id: 8,
    title: 'Rio Grande do Sul',
    days: '5 dias',
    image: '/images/rio-grande-sul.webp',
  },
]

interface ImageSizeProps {
  imageSize?: 'small' | 'medium'
}

export default function CarouselImage({ imageSize }: ImageSizeProps) {
  return (
    <Container>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        // slidesPerView={3}
        navigation
        breakpoints={{
          300: {
            width: 300,
            slidesPerView: 1,
          },
          769: {
            width: 769,
            slidesPerView: 2,
          },
          1046: {
            width: 1046,
            slidesPerView: 4,
          },
        }}
      >
        {courses.map(item => (
          <SwiperSlide key={item.id}>
            <CardCarousel
              title={item.title}
              days={item.days}
              image={item.image}
              imageSizes={imageSize}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}
