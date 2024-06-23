import { X, School } from 'lucide-react'

const FirstIntroductionModal = ({ onClose }: { onClose: VoidFunction }) => {
  const handleClose = () => {
    localStorage.setItem('firstIntroductionModalShown', 'true')
    onClose()
  }

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='relative w-full max-w-sm rounded bg-white p-8 shadow-lg'>
        <button
          onClick={handleClose}
          className='absolute right-0 top-0 m-2 text-gray-500 hover:text-gray-700'
        >
          <X size={24} />
        </button>
        <div className='mb-4 flex items-center'>
          <School size={24} className='mr-2' />
          <h2 className='text-xl font-bold'>Olá, seja bem vindo</h2>
        </div>
        <p>
          Seja bem vindo ao Sua Fatec, um lugar para que você possa encontrar
          informações precisas e opiniões sobre as instituições Fatec do estado
          de São Paulo.
        </p>
      </div>
    </div>
  )
}

export default FirstIntroductionModal
