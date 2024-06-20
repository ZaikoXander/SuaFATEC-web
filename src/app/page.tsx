'use client'

import SearchBar from '@/components/SearchBar'
import GoogleMaps from '@/components/GoogleMaps'
import InstitutionInfo from '@/components/InstitutionInfo'
import CourseInfo from '@/components/CourseInfo'
import CourseComments from '@/components/CourseComments'

export default function Home() {
  return (
    <main className='flex min-h-screen'>
      <SearchBar />
      <InstitutionInfo />
      <CourseInfo />
      <CourseComments />
      <GoogleMaps />
    </main>
  )
}
