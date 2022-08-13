import React from 'react'
import styles from 'components/vertical_masked_image/VerticalImage.module.scss'
import Image, { StaticImageData } from 'next/image';

type VerticalImageProps = {
  src: string | StaticImageData
  alt: string
}

export const VerticalImage = ({ src, alt }: VerticalImageProps) => {
  return (
    <div className={styles.verticalImage}>
        <Image
          src={src}
          alt={alt}
          layout='fill'
          objectFit='cover'
          className={styles.image}
        >
        </Image>
        <div className={styles.overlayDiv}>
        </div>
    </div>
  )
}
