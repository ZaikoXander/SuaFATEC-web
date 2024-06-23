import Header from '@/components/Header'
import SearchBar from '@/components/SearchBar'
import GoogleMaps from '@/components/GoogleMaps'
import InstitutionInfo from '@/components/InstitutionInfo'
import CourseInfo from '@/components/CourseInfo'
import CourseComments from '@/components/CourseComments'

export default function Home() {
  return (
    <div className='h-screen max-h-screen'>
      <Header />
      <main className='flex h-[calc(100%-5rem)]'>
        <SearchBar />
        <InstitutionInfo />
        <CourseInfo />
        <CourseComments />
        <GoogleMaps />
      </main>
    </div>
  )
}
