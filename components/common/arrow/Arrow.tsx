import React from 'react'
import arrow from 'public/assets/icons/arrow.svg'
import Image from 'next/image';


export const Arrow = () => {
  return (
    <Image
      src={arrow}
      alt='arrow'
    >
    </Image>
  )
}