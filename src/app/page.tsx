import { Input } from '@/components/ui/input'
import GoogleMaps from '@/components/GoogleMaps'
import InstitutionInfo from '@/components/InstitutionInfo'
import CourseInfo from '@/components/CourseInfo'
import CourseComments from '@/components/CourseComments'

export default function Home() {
  return (
    <main className='flex min-h-screen'>
      <Input
        className='absolute z-10 m-3 w-60'
        placeholder='Pesquisar cidade ou FATEC'
      />
      <InstitutionInfo />
      <CourseInfo />
      <CourseComments
        courseName='Análise e Desenvolvimento de Sistemas'
        courseImageUrl='https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2020/10/Analise-e-Desenvolvimento-de-Sistemas_DCStudio_Freepik-scaled.jpg'
      />
      <GoogleMaps />
    </main>
  )
}
