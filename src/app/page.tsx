import { Input } from '@/components/ui/input'
import GoogleMaps from '@/components/GoogleMaps'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex min-h-screen'>
      <Input
        className='absolute z-10 m-3 w-60'
        placeholder='Pesquisar cidade ou FATEC'
      />
      <Sheet>
        <SheetTrigger asChild>
          <Button className='absolute z-10 mt-20' variant='outline'>
            Open
          </Button>
        </SheetTrigger>
        <SheetContent className='flex w-[36%] flex-col gap-4 sm:max-w-[86%]'>
          <SheetHeader>
            <SheetTitle>Informações da Fatec Praia Grande</SheetTitle>
            <SheetDescription>
              <p>
                A Faculdade de Tecnologia de Praia Grande, iniciou suas
                atividades acadêmicas em 03 de setembro de 2002, oferecendo aos
                munícipes 80 (oitenta vagas) para o curso de Tecnologia em
                Informática – Ênfase em Gestão de Negócios sendo 40 para o turno
                vespertino e 40 vagas para o turno noturno.
              </p>
              <p>
                A partir de 11 de março de 2003, iniciaram-se as atividades da
                Escola Técnica Estadual “Adolfo Berezin” – Extensão Praia
                Grande, oferecendo 120 vagas para os cursos Técnico em
                Informática e Técnico em Logística.
              </p>
            </SheetDescription>
          </SheetHeader>
          <div className='flex flex-col gap-2'>
            <span className='text-lg font-semibold'>
              Endereço:{' '}
              <span className='self-center text-sm font-medium leading-none'>
                Praça 19 de janeiro, 144 - Praia Grande - São Paulo - Cep:
                11700-100
              </span>
            </span>
            <span className='text-lg font-semibold'>
              Telefone:{' '}
              <span className='text-sm font-medium leading-none'>
                (13) 3591-1303 / (13) 3591-6968
              </span>
            </span>
            <div className='flex flex-col gap-1'>
              <div className='flex gap-1'>
                <Image
                  src='https://www.fatecpg.edu.br/img/fatec.png'
                  alt='Foto da frente da fatec praia grande'
                  width={240}
                  height={240}
                />
                <Image
                  src='https://www.fatecpg.edu.br/img/fatec.png'
                  alt='Foto da frente da fatec praia grande'
                  width={240}
                  height={240}
                />
              </div>
              <div className='flex gap-1'>
                <Image
                  src='https://www.fatecpg.edu.br/img/fatec.png'
                  alt='Foto da frente da fatec praia grande'
                  width={240}
                  height={240}
                />
                <Image
                  src='https://www.fatecpg.edu.br/img/fatec.png'
                  alt='Foto da frente da fatec praia grande'
                  width={240}
                  height={240}
                />
              </div>
            </div>
          </div>
          <Button variant='outline' className='w-full py-4' size='lg'>
            <span className='text-xl'>Cursos</span>
          </Button>
        </SheetContent>
      </Sheet>
      <GoogleMaps />
    </main>
  )
}
