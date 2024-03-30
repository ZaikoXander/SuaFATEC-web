import * as React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Button } from "./ui/button"

const courses = [
    {
      id: 1,
      title: 'Introdução à Programação'
    },
    {
      id: 2,
      title: 'Desenvolvimento Web Avançado'
    },
    {
      id: 3,
      title: 'Machine Learning Fundamentals'
    },
    {
      id: 4,
      title: 'Gestão de Projetos Ágeis'
    },
    {
        id: 5,
        title: 'Gestão de Projetos Ágeis'
      },
      {
        id: 6,
        title: 'Gestão de Projetos Ágeis'
      },
      {
        id: 7,
        title: 'Gestão de Projetos Ágeis'
      },
      {
        id: 8,
        title: 'Gestão de Projetos Ágeis'
      },
      {
        id: 9,
        title: 'Gestão de Projetos Ágeis'
      },
      {
        id: 10,
        title: 'Gestão de Projetos Ágeis'
      },
      {
        id: 11,
        title: 'Gestão de Projetos Ágeis'
      },
      {
        id: 12,
        title: 'Gestão de Projetos Ágeis'
      },
  ];

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-96 w-96 rounded-md border m-3 pr-2">
      <div className="p-4">
        <h4 className="mb-4 text-lg font-bold leading-none">Cursos disponíveis</h4>
        {courses.map((course) => (
          <>
            <Button key={course.id} variant="outline" size="lg" className="w-full" >
              {course.title}
            </Button>
            <Separator className="my-2" />
          </>
        ))}
      </div>
    </ScrollArea>
  )
}
