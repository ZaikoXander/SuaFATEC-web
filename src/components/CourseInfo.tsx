import Image from 'next/image'
import { Button } from './ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'

export default function CourseInfo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className='absolute z-10 mt-20' variant='outline'>
          Open
        </Button>
      </SheetTrigger>
      <SheetContent className='flex w-[36%] flex-col gap-4 sm:max-w-[86%]'>
        <SheetHeader>
          <SheetTitle>
            <span className='block scroll-m-20 text-2xl font-semibold tracking-tight'>
              Fatec de Praia Grande
            </span>
            <span className='block scroll-m-20 text-xl font-semibold tracking-tight'>
              Informações do curso Análise e Desenvolvimento de Sistemas
            </span>
          </SheetTitle>
          <SheetDescription>
            A matemática, em especial raciocínio lógico e cálculo, é necessária
            para que o aluno aprenda a otimizar computadores e a desenvolver
            desenvolver softwares. O aluno recebe noções sobre Bancos de Dados,
            sistemas baseados em web (como serviços bancários pela internet) e
            programação distribuída, que conecta computadores em rede para que
            funcionem como se fossem um só computador. Administração,
            contabilidade, economia, estatística e inglês também fazem parte do
            currículo. Além disso, habilidades para leitura e interpretação de
            textos são fundamentais para o aprendizado durante o curso.
          </SheetDescription>
          <Image
            src='https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2020/10/Analise-e-Desenvolvimento-de-Sistemas_DCStudio_Freepik-scaled.jpg'
            alt='Foto de Análise e Desenvolvimento de Sistemas'
            width={400}
            height={230}
            className='w-full rounded-md'
          />
        </SheetHeader>
        <div className='flex h-full flex-col gap-2'>
          <span className='font-semibold'>
            Turnos:{' '}
            <span className='self-center text-sm font-medium leading-none'>
              Matutino, Vespertino e Noturno
            </span>
          </span>
          <span className='font-semibold'>
            EAD?{' '}
            <span className='self-center text-sm font-medium leading-none'>
              Sim
            </span>
          </span>
          <Button className='mt-auto w-full' variant='outline'>
            Abrir comentários
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
