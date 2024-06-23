'use client'

import { useEffect, useState } from 'react'

import FirstIntroductionModal from '@/components/FirstIntroductionModal'
import SecondIntroductionModal from '@/components/SecondIntroductionModal'

export default function IntroductionModals() {
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
    <>
      {showFirstIntroductionModal && (
        <FirstIntroductionModal onClose={handleCloseFirstIntroductionModal} />
      )}
      {showSecondIntroductionModal && (
        <SecondIntroductionModal onClose={handleCloseSecondIntroductionModal} />
      )}
    </>
  )
}
