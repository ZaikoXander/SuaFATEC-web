import { atom } from 'jotai'

interface Course {
  id: number
  title: string
  duration: number
}

const coursesAtom = atom<Course[]>([
  {
    id: 1,
    title:
      'Design de Produto com ênfase em Processos de Produção e Industrialização',
    duration: 6,
  },
  {
    id: 2,
    title: 'Desenvolvimento Web Avançado',
    duration: 6,
  },
  {
    id: 3,
    title: 'Machine Learning Fundamentals',
    duration: 6,
  },
  {
    id: 4,
    title: 'Gestão de Projetos Ágeis',
    duration: 6,
  },
  {
    id: 5,
    title: 'Gestão de Projetos Ágeis',
    duration: 6,
  },
  {
    id: 6,
    title: 'Gestão de Projetos Ágeis',
    duration: 6,
  },
  {
    id: 7,
    title: 'Gestão de Projetos Ágeis',
    duration: 6,
  },
  {
    id: 8,
    title: 'Gestão de Projetos Ágeis',
    duration: 6,
  },
  {
    id: 9,
    title: 'Gestão de Projetos Ágeis',
    duration: 6,
  },
  {
    id: 10,
    title: 'Gestão de Projetos Ágeis',
    duration: 6,
  },
  {
    id: 11,
    title: 'Gestão de Projetos Ágeis',
    duration: 6,
  },
  {
    id: 12,
    title: 'Gestão de Projetos Ágeis',
    duration: 6,
  },
])

const selectedCourseAtom = atom<Course | undefined>(undefined)

export { coursesAtom, selectedCourseAtom }
