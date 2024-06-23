'use client'

import { useEffect, useState } from 'react'

import Header from '@/components/Header'
import FirstIntroductionModal from '@/components/FirstIntroductionModal'
import SecondIntroductionModal from '@/components/SecondIntroductionModal'
import SearchBar from '@/components/SearchBar'
import GoogleMaps from '@/components/GoogleMaps'
import InstitutionInfo from '@/components/InstitutionInfo'
import CourseInfo from '@/components/CourseInfo'
import CourseComments from '@/components/CourseComments'

export default function Home() {
  const [showFirstIntroductionModal, setShowFirstIntroductionModal] =
    useState(false)
  const [showSecondIntroductionModal, setShowSecondIntroductionModal] =
    useState(false)

  const handleCloseFirstIntroductionModal = () => {
    setShowFirstIntroductionModal(false)
    setShowSecondIntroductionModal(true)
  }

  const handleCloseSecondIntroductionModal = () => {
    setShowSecondIntroductionModal(false)
  }

  useEffect(() => {
    const firstIntroductionModalShown = localStorage.getItem(
      'firstIntroductionModalShown',
    )

    if (!(firstIntroductionModalShown === 'true')) {
      setShowFirstIntroductionModal(true)
      return
    }

    const secondIntroductionModalShown = localStorage.getItem(
      'secondIntroductionModalShown',
    )

    if (!(secondIntroductionModalShown === 'true')) {
      setShowSecondIntroductionModal(true)
    }
  }, [])

  return (
    <div className='h-screen max-h-screen'>
      <Header />
      <main className='flex h-[calc(100%-5rem)]'>
        {showFirstIntroductionModal && (
          <FirstIntroductionModal onClose={handleCloseFirstIntroductionModal} />
        )}
        {showSecondIntroductionModal && (
          <SecondIntroductionModal
            onClose={handleCloseSecondIntroductionModal}
          />
        )}
        <SearchBar />
        <InstitutionInfo />
        <CourseInfo />
        <CourseComments />
        <GoogleMaps />
      </main>
    </div>
  )
}
