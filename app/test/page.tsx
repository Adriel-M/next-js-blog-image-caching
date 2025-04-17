import image from './image.png'
import NextImage from 'next/image'

export default function Page() {
  return (
    <>
      <NextImage src={image} alt="test" />
    </>
  )
}
