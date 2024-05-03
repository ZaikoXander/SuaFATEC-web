import { atom } from 'jotai'

interface Course {
  id: number
  title: string
  duration: number
}

type Shift = 'morning' | 'afternoon' | 'night'

interface CourseOffering {
  id: number
  courseId: number
  institutionId: number
  shifts: Shift[]
  distanceLearning: boolean
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

const courseOfferingsAtom = atom<CourseOffering[]>([
  {
    id: 1,
    courseId: 1,
    institutionId: 1,
    shifts: ['morning', 'afternoon', 'night'],
    distanceLearning: false,
  },
  {
    id: 2,
    courseId: 2,
    institutionId: 1,
    shifts: ['morning', 'afternoon'],
    distanceLearning: true,
  },
  {
    id: 3,
    courseId: 3,
    institutionId: 1,
    shifts: ['night'],
    distanceLearning: true,
  },
  {
    id: 4,
    courseId: 4,
    institutionId: 1,
    shifts: ['morning', 'afternoon'],
    distanceLearning: false,
  },
  {
    id: 5,
    courseId: 5,
    institutionId: 1,
    shifts: ['afternoon', 'night'],
    distanceLearning: false,
  },
])

const selectedCourseAtom = atom<Course | undefined>(undefined)

export { type Shift, coursesAtom, courseOfferingsAtom, selectedCourseAtom }
