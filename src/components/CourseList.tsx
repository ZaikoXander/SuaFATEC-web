import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Button } from './ui/button'
import { Fragment } from 'react'

const courses = [
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
]

function CoursesList() {
  return (
    <ScrollArea className='m-3 h-96 w-96 rounded-md border p-4'>
      <h4 className='mb-4 text-lg font-bold leading-none'>
        Cursos disponíveis
      </h4>
      {courses.map((course) => {
        const lastCourseId = courses.at(-1)?.id
        if (lastCourseId === course.id) {
          return (
            <Button
              key={course.id}
              variant='outline'
              className='h-auto w-full text-pretty'
            >
              {course.title}
            </Button>
          )
        }

        return (
          <Fragment key={course.id}>
            <Button variant='outline' className='h-auto w-full text-pretty'>
              {course.title}
            </Button>
            <Separator className='my-2' />
          </Fragment>
        )
      })}
    </ScrollArea>
  )
}

export default CoursesList
