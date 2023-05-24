import Head from 'next/head'
import Landing from '../components/landing'
import Skills from '../components/skills'
import Stack from '../components/stack'
import Projects from '../components/projects'
import Contact from '../components/contact'

export default function Home() {
  return (
    // remove scrollbar from div
    <div className='h-full w-full bg-black text-white font-poppins scrollbar-hide p-2 md:p-0'>
      <Head>
        <title>Gitansh Mehta - Frontend Dev</title>
      </Head>
      <Landing />
      <Skills />
      <Stack />
      <Projects />
      <Contact />
    </div>
  )
}
