import BestAuthor from '@/components/home/BestAuthor'
import Category from '@/components/home/Category'
import Featured from '@/components/home/Featured'
import HeroSection from '@/components/home/HeroSection'
import NewsLetter from '@/components/home/NewsLetter'
import PersonalWelcome from '@/components/home/PersonalWelcome'
import Trending from '@/components/home/Trending'

 // You can also use <link> for styles
// ..
import CreateApost from '@/components/CreateApost'


// define "lord-icon" custom element with default properties


export default function Home() {
  return (
    <main className='space-y-10 relative overflow-x-hidden'>

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
