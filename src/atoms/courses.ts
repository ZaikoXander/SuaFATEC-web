import { atom } from 'jotai'

import { institutionCourseOfferingsAtom } from './courseOfferings'

interface Course {
  id: number
  name: string
  duration: number
  description: string
  photoId: number
}

const coursesAtom = atom<Course[]>([
  {
    id: 1,
    name: 'Design de Produto com ênfase em Processos de Produção e Industrialização',
    duration: 6,
    description: 'Prepara o aluno para o mercado de trabalho',
    photoId: 2,
  },
  {
    id: 2,
    name: 'Desenvolvimento Web Avançado',
    duration: 6,
    description: 'Aprenda as técnicas avançadas de desenvolvimento web',
    photoId: 2,
  },
  {
    id: 3,
    name: 'Machine Learning Fundamentals',
    duration: 6,
    description: 'Explore os fundamentos do Machine Learning',
    photoId: 2,
  },
  {
    id: 4,
    name: 'Gestão de Projetos Ágeis',
    duration: 6,
    description: 'Aprenda a gerenciar projetos de forma ágil',
    photoId: 2,
  },
  {
    id: 5,
    name: 'Gestão de Projetos Ágeis',
    duration: 6,
    description: 'Aprenda a gerenciar projetos de forma ágil',
    photoId: 2,
  },
  {
    id: 6,
    name: 'Gestão de Projetos Ágeis',
    duration: 6,
    description: 'Aprenda a gerenciar projetos de forma ágil',
    photoId: 2,
  },
  {
    id: 7,
    name: 'Gestão de Projetos Ágeis',
    duration: 6,
    description: 'Aprenda a gerenciar projetos de forma ágil',
    photoId: 2,
  },
  {
    id: 8,
    name: 'Gestão de Projetos Ágeis',
    duration: 6,
    description: 'Aprenda a gerenciar projetos de forma ágil',
    photoId: 2,
  },
  {
    id: 9,
    name: 'Gestão de Projetos Ágeis',
    duration: 6,
    description: 'Aprenda a gerenciar projetos de forma ágil',
    photoId: 2,
  },
  {
    id: 10,
    name: 'Gestão de Projetos Ágeis',
    duration: 6,
    description: 'Aprenda a gerenciar projetos de forma ágil',
    photoId: 2,
  },
  {
    id: 11,
    name: 'Gestão de Projetos Ágeis',
    duration: 6,
    description: 'Aprenda a gerenciar projetos de forma ágil',
    photoId: 2,
  },
  {
    id: 12,
    name: 'Gestão de Projetos Ágeis',
    duration: 6,
    description: 'Aprenda a gerenciar projetos de forma ágil',
    photoId: 2,
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
