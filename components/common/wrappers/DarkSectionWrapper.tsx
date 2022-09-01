import { ReactElement, ReactNode } from 'react'
import styles from 'components/common/wrappers/DarkSectionWrapper.module.scss';

interface WrapperInterface {
  children: ReactNode | ReactElement;
}

export const DarkSectionWrapper = ({ children }: WrapperInterface) => {
  return (
    <section className={styles.wrapperContainer}>
      {children}
    </section>
  )
}