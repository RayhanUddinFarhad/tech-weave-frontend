import BestAuthor from '@/components/home/BestAuthor'
import Category from '@/components/home/Category'
import Featured from '@/components/home/Featured'
import HeroSection from '@/components/home/HeroSection'
import NewsLetter from '@/components/home/NewsLetter'
import PersonalWelcome from '@/components/home/PersonalWelcome'
import Trending from '@/components/home/Trending'
import Image from 'next/image'
import { FaPen } from 'react-icons/fa'
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
import PostModal from '@/components/modals/PostModal'
import CreatePost from '@/components/dashboard/userDashboard/CreatePost'
import CreateApost from '@/components/CreateApost'
import { useContext } from 'react'
import { AuthContext } from '@/context/AuthProvider'

// define "lord-icon" custom element with default properties


export default function Home() {
  return (
    <main className='space-y-10 relative'>

      <HeroSection></HeroSection>
      <Category></Category>

      <BestAuthor></BestAuthor>
      <Featured></Featured>

      <PersonalWelcome></PersonalWelcome>
      <Trending></Trending>

      <NewsLetter></NewsLetter>

      

      <CreateApost></CreateApost>

    </main>
  )
}
