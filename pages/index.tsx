import type { NextPage } from 'next'
import { LandingPage } from 'components/landing_page'
import { AboutMe } from 'components/about_me'
import { createContext } from 'react'
import { Education } from 'components/education';

export const ThemeContext = createContext(null);

const Home: NextPage = () => {
  return (
    <div>
      <LandingPage />
      <AboutMe />
      <Education />
    </div>
  )
}

export default Home
