import { atom } from 'jotai'

import { institutionCourseOfferingsAtom } from './courseOfferings'

interface Course {
  id: number
  name: string
  duration: number
  description: string
  photoUrl: string
}

const coursesAtom = atom<Course[]>([
  {
    id: 1,
    name: 'Design de Produto com ênfase em Processos de Produção e Industrialização',
    duration: 6,
    description: 'Prepara o aluno para o mercado de trabalho',
    photoUrl:
      'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2020/10/Analise-e-Desenvolvimento-de-Sistemas_DCStudio_Freepik-scaled.jpg',
  },
  {
    id: 2,
    name: 'Desenvolvimento Web Avançado',
    duration: 6,
    description: 'Aprenda as técnicas avançadas de desenvolvimento web',
    photoUrl:
      'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2020/10/Analise-e-Desenvolvimento-de-Sistemas_DCStudio_Freepik-scaled.jpg',
  },
  {
    id: 3,
    name: 'Machine Learning Fundamentals',
    duration: 6,
    description: 'Explore os fundamentos do Machine Learning',
    photoUrl:
      'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2020/10/Analise-e-Desenvolvimento-de-Sistemas_DCStudio_Freepik-scaled.jpg',
  },
  {
    id: 4,
    name: 'Gestão de Projetos Ágeis',
    duration: 6,
    description: 'Aprenda a gerenciar projetos de forma ágil',
    photoUrl:
      'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2020/10/Analise-e-Desenvolvimento-de-Sistemas_DCStudio_Freepik-scaled.jpg',
  },
  {
    id: 5,
    name: 'Gestão de Projetos Ágeis',
    duration: 6,
    description: 'Aprenda a gerenciar projetos de forma ágil',
    photoUrl:
      'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2020/10/Analise-e-Desenvolvimento-de-Sistemas_DCStudio_Freepik-scaled.jpg',
  },
  {
    id: 6,
    name: 'Gestão de Projetos Ágeis',
    duration: 6,
    description: 'Aprenda a gerenciar projetos de forma ágil',
    photoUrl:
      'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2020/10/Analise-e-Desenvolvimento-de-Sistemas_DCStudio_Freepik-scaled.jpg',
  },
  {
    id: 7,
    name: 'Gestão de Projetos Ágeis',
    duration: 6,
    description: 'Aprenda a gerenciar projetos de forma ágil',
    photoUrl:
      'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2020/10/Analise-e-Desenvolvimento-de-Sistemas_DCStudio_Freepik-scaled.jpg',
  },
  {
    id: 8,
    name: 'Gestão de Projetos Ágeis',
    duration: 6,
    description: 'Aprenda a gerenciar projetos de forma ágil',
    photoUrl:
      'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2020/10/Analise-e-Desenvolvimento-de-Sistemas_DCStudio_Freepik-scaled.jpg',
  },
  {
    id: 9,
    name: 'Gestão de Projetos Ágeis',
    duration: 6,
    description: 'Aprenda a gerenciar projetos de forma ágil',
    photoUrl:
      'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2020/10/Analise-e-Desenvolvimento-de-Sistemas_DCStudio_Freepik-scaled.jpg',
  },
  {
    id: 10,
    name: 'Gestão de Projetos Ágeis',
    duration: 6,
    description: 'Aprenda a gerenciar projetos de forma ágil',
    photoUrl:
      'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2020/10/Analise-e-Desenvolvimento-de-Sistemas_DCStudio_Freepik-scaled.jpg',
  },
  {
    id: 11,
    name: 'Gestão de Projetos Ágeis',
    duration: 6,
    description: 'Aprenda a gerenciar projetos de forma ágil',
    photoUrl:
      'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2020/10/Analise-e-Desenvolvimento-de-Sistemas_DCStudio_Freepik-scaled.jpg',
  },
  {
    id: 12,
    name: 'Gestão de Projetos Ágeis',
    duration: 6,
    description: 'Aprenda a gerenciar projetos de forma ágil',
    photoUrl:
      'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2020/10/Analise-e-Desenvolvimento-de-Sistemas_DCStudio_Freepik-scaled.jpg',
  },
])

const selectedCourseAtom = atom<Course | undefined>(undefined)

const institutionCoursesAtom = atom<Course[]>((get) => {
  const courseOfferings = get(institutionCourseOfferingsAtom)
  const courses = get(coursesAtom)

  return courseOfferings.map((courseOffering) =>
    courses.find((course) => course.id === courseOffering.courseId),
  ) as Course[]
})

export { type Course, coursesAtom, selectedCourseAtom, institutionCoursesAtom }
