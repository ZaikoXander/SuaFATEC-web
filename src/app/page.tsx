import Header from '@/components/Header'
import IntroductionModals from '@/components/IntroductionModals'
import SearchBar from '@/components/SearchBar'
import GoogleMaps from '@/components/GoogleMaps'
import InstitutionInfo from '@/components/InstitutionInfo'
import CourseInfo from '@/components/CourseInfo'
import CourseComments from '@/components/CourseComments'

export default function Home() {
  return (
    <div className='h-screen max-h-screen w-screen'>
      <SearchBar />
      <Header />
      <main className='flex h-full sm:h-[calc(100%-5rem)]'>
        <IntroductionModals />
        <InstitutionInfo />
        <CourseInfo />
        <CourseComments />
        <GoogleMaps />
      </main>
    </div>
  )
}
