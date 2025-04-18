import NextImage, { ImageProps } from 'next/image'

const basePath = process.env.BASE_PATH

import images from '../lib/Images'

const Image = ({ src, ...rest }: ImageProps) => {
  if (typeof src === 'string' && src.startsWith('/static/images/')) {
    const imageSrc = images[src]
    // do a static import since we're not putting images in the public folder
    return <NextImage src={imageSrc} {...rest} />
  }
  return <NextImage src={`${basePath || ''}${src}`} {...rest} />
}

export default Image
