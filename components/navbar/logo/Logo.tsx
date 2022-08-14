import { useWindowDimensions, screenBreakPoints } from 'utils';
import Image, { StaticImageData } from 'next/image';

type LogoProps = {
  src: string | StaticImageData
  alt: string
}

export const Logo = ({src, alt}: LogoProps) => {
  const windowSize = useWindowDimensions();
  const mobile = screenBreakPoints.mobileMaxWidth;
  const isMobile = (windowSize?.width ?? 0.0) <= mobile;

  return (
    <Image
      src={src}
      alt={alt}
      width={isMobile ? '53' : '60'}
      height={isMobile ? '53' : '60'}
    />
  )
}