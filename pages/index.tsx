import type { NextPage } from 'next'
import { LandingPage } from 'components/landing_page'
import { AboutMe } from 'components/about_me'
import { createContext } from 'react'
import { Education } from 'components/education';
import { Projects } from 'components/projects';

export const ThemeContext = createContext(null);

const Home: NextPage = () => {
  return (
    <div>
      <LandingPage />
      <AboutMe />
      <Education />
      <Projects />
    </div>
  )
}

export default Home
