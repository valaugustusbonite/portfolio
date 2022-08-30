import type { NextPage } from 'next'
import { LandingPage } from 'components/landing_page'
import { AboutMe } from 'components/about_me'
import { createContext } from 'react'

export const ThemeContext = createContext(null);

const Home: NextPage = () => {
  return (
    <div>
      <LandingPage />
      <AboutMe />
    </div>
  )
}

export default Home
