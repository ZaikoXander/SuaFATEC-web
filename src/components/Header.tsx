/**
 * Component by Arthurbhs - https://github.com/Arthurbhs
 * Code: https://github.com/Arthurbhs/Header-e-modals
 * Fork: https://github.com/ZaikoXander/Header-e-modals
 */

'use client'

import { useState } from 'react'

import Image from 'next/image'

import HeaderModal from './HeaderModal'

import { HelpCircle } from 'lucide-react'

const Header = () => {
  const [showHeaderModal, setShowHeaderModal] = useState(false)

  const handleOpenHeaderModal = () => {
    setShowHeaderModal(true)
  }

  const handleCloseHeaderModal = () => {
    setShowHeaderModal(false)
  }

  return (
    <header className='hidden h-20 w-full bg-white p-4 text-white shadow-md sm:block'>
      <div className='mx-[26rem] flex h-full items-center justify-between'>
        <div className='flex items-center'>
          <Image src='/logo.png' width={77.092953222} height={48} alt='Logo' />
          <button
            onClick={handleOpenHeaderModal}
            className='ml-4 text-blue-500'
          >
            <HelpCircle />
          </button>
        </div>
        <nav className='flex-col space-x-4 md:flex md:flex-row'></nav>
      </div>
      {showHeaderModal && <HeaderModal onClose={handleCloseHeaderModal} />}
    </header>
  )
}

export default Header
