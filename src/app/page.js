import BestAuthor from '@/components/home/BestAuthor'
import Category from '@/components/home/Category'
import Featured from '@/components/home/Featured'
import HeroSection from '@/components/home/HeroSection'
import NewsLetter from '@/components/home/NewsLetter'
import PersonalWelcome from '@/components/home/PersonalWelcome'
import Trending from '@/components/home/Trending'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='space-y-10'>

      <HeroSection></HeroSection>
      <Category></Category>

      <BestAuthor></BestAuthor>
      <Featured></Featured>

      <PersonalWelcome></PersonalWelcome>
      <Trending></Trending>

      <NewsLetter></NewsLetter>

      
    </main>
  )
}
