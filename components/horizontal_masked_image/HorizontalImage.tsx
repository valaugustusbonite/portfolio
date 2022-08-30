import React from 'react'
import styles from 'components/horizontal_masked_image/HorizontalImage.module.scss'
import Image, { StaticImageData } from 'next/image';

type HorizontalImageProps = {
  src: string | StaticImageData
  alt: string
}

export const HorizontalImage = ({ src, alt }: HorizontalImageProps) => {
  return (
    <div className={styles.horizontalImage}>
        <Image
          src={src}
          alt={alt}
          objectFit='cover'
        >
        </Image>
    </div>
  )
}
