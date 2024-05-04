import { atom } from 'jotai'

import { selectedInstitutionAtom } from './institutions'

interface Course {
  id: number
  name: string
  duration: number
  description: string
  photoUrl: string
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
    institutionId: 2,
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

const institutionCourseOfferingsAtom = atom<CourseOffering[]>((get) => {
  const courseOfferings = get(courseOfferingsAtom)
  const selectedInstitution = get(selectedInstitutionAtom)

  return courseOfferings.filter(
    (courseOffering) =>
      courseOffering.institutionId === selectedInstitution?.id,
  )
})

const institutionCoursesAtom = atom<Course[]>((get) => {
  const courseOfferings = get(institutionCourseOfferingsAtom)
  const courses = get(coursesAtom)

  return courseOfferings.map((courseOffering) =>
    courses.find((course) => course.id === courseOffering.courseId),
  ) as Course[]
})

const selectedCourseAtom = atom<Course | undefined>(undefined)

const selectedCourseOfferingAtom = atom<CourseOffering | undefined>((get) => {
  const selectedCourse = get(selectedCourseAtom)
  const institutionCourseOfferings = get(institutionCourseOfferingsAtom)

  return institutionCourseOfferings.find(
    (courseOffering) => courseOffering.courseId === selectedCourse?.id,
  )
})

const shiftsToPortugueseAtom = atom<string[] | undefined>((get) => {
  const selectedCourseOffering = get(selectedCourseOfferingAtom)
  const shiftsMap = {
    morning: 'Matutino',
    afternoon: 'Vespertino',
    night: 'Noturno',
  }

  return selectedCourseOffering?.shifts.map((shift) => shiftsMap[shift])
})

const formattedShiftsAtom = atom<string | undefined>((get) => {
  const shiftsToPortuguese = get(shiftsToPortugueseAtom)

  return shiftsToPortuguese
    ?.map((shift, index) => {
      if (index === shiftsToPortuguese.length - 1) return shift
      if (index === shiftsToPortuguese.length - 2) return `${shift} e `

      return `${shift}, `
    })
    .join('')
})

export {
  type Course,
  type Shift,
  coursesAtom,
  courseOfferingsAtom,
  institutionCourseOfferingsAtom,
  institutionCoursesAtom,
  selectedCourseAtom,
  selectedCourseOfferingAtom,
  formattedShiftsAtom,
}
