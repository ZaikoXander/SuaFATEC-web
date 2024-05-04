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
      <InstitutionInfo
        title='Informações da Fatec Praia Grande'
        address='Praça 19 de janeiro, 144 - Praia Grande - São Paulo - Cep: 11700-100'
        description={[
          'A Faculdade de Tecnologia de Praia Grande, iniciou suas atividades acadêmicas em 03 de setembro de 2002, oferecendo aos munícipes 80 (oitenta vagas) para o curso de Tecnologia em Informática – Ênfase em Gestão de Negócios sendo 40 para o turno vespertino e 40 vagas para o turno noturno.',
          'A partir de 11 de março de 2003, iniciaram-se as atividades da Escola Técnica Estadual “Adolfo Berezin” – Extensão Praia Grande, oferecendo 120 vagas para os cursos Técnico em Informática e Técnico em Logística.',
        ]}
        images={[
          {
            src: 'https://www.fatecpg.edu.br/img/fatec.png',
            alt: 'Foto da frente da fatec praia grande',
          },
          {
            src: 'https://www.fatecpg.edu.br/img/fatec.png',
            alt: 'Foto da frente da fatec praia grande',
          },
          {
            src: 'https://www.fatecpg.edu.br/img/fatec.png',
            alt: 'Foto da frente da fatec praia grande',
          },
        ]}
        phoneNumber='(13) 3591-1303 / (13) 3591-6968'
      />
      <CourseInfo />
      <CourseComments
        courseName='Análise e Desenvolvimento de Sistemas'
        courseImageUrl='https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2020/10/Analise-e-Desenvolvimento-de-Sistemas_DCStudio_Freepik-scaled.jpg'
      />
      <GoogleMaps />
    </main>
  )
}
