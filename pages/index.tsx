import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { LandingPage } from 'components/landing_page'
import styles from 'styles/Home.module.css'
import { AboutMe } from 'components/about_me'
import { createContext } from 'react'

export const ThemeContext = createContext(null);

const Home: NextPage = () => {
  return (
    <div>
      <LandingPage />
      {/* <AboutMe /> */}
    </div>
  )
}

export default Home
