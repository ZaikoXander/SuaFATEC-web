import { atom } from 'jotai'

interface Course {
  id: number
  title: string
}

const coursesAtom = atom<Course[]>([
  {
    id: 1,
    title:
      'Design de Produto com ênfase em Processos de Produção e Industrialização',
  },
  {
    id: 2,
    title: 'Desenvolvimento Web Avançado',
  },
  {
    id: 3,
    title: 'Machine Learning Fundamentals',
  },
  {
    id: 4,
    title: 'Gestão de Projetos Ágeis',
  },
  {
    id: 5,
    title: 'Gestão de Projetos Ágeis',
  },
  {
    id: 6,
    title: 'Gestão de Projetos Ágeis',
  },
  {
    id: 7,
    title: 'Gestão de Projetos Ágeis',
  },
  {
    id: 8,
    title: 'Gestão de Projetos Ágeis',
  },
  {
    id: 9,
    title: 'Gestão de Projetos Ágeis',
  },
  {
    id: 10,
    title: 'Gestão de Projetos Ágeis',
  },
  {
    id: 11,
    title: 'Gestão de Projetos Ágeis',
  },
  {
    id: 12,
    title: 'Gestão de Projetos Ágeis',
  },
])

const selectedCourseAtom = atom<Course | undefined>(undefined)

export { coursesAtom, selectedCourseAtom }
