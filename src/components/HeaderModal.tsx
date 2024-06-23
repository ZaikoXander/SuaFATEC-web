/**
 * Component by Arthurbhs - https://github.com/Arthurbhs
 * Code: https://github.com/Arthurbhs/Header-e-modals
 * Fork: https://github.com/ZaikoXander/Header-e-modals
 */

'use client'

import { X, HelpCircle } from 'lucide-react'

const HeaderModal = ({ onClose }: { onClose: VoidFunction }) => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='relative w-full max-w-sm rounded bg-white p-8 shadow-lg'>
        <button
          onClick={onClose}
          className='absolute right-0 top-0 m-2 text-gray-500 hover:text-gray-700'
        >
          <X size={24} />
        </button>
        <div className='mb-4 flex items-center'>
          <HelpCircle size={24} className='mr-2 text-blue-500' />{' '}
          <h2 className='text-xl font-bold text-gray-900'>Como utilizar?</h2>
        </div>
        <p className='text-pretty text-gray-700'>
          Para utilizar nosso site é simples, basta escolher uma das
          instituições Fatec em nosso mapa ou procurar através da barra de
          pesquisa, e então será exibida sua seção de informações, de curso e
          comentários.
        </p>
      </div>
    </div>
  )
}

export default HeaderModal
