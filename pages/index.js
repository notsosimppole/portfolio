import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Landing from '../components/landing'
import Skills from '../components/skills'
import Stack from '../components/stack'
import Projects from '../components/projects'
import Contact from '../components/contact'

export default function Home() {
  return (
    // remove scrollbar from div
    <div className='h-full w-full bg-black text-white font-poppins'>
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
