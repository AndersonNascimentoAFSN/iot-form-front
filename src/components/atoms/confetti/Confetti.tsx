'use client'

import { useEffect, useState } from 'react'
import ReactCanvasConfetti from 'react-canvas-confetti/dist/presets/realistic'

export function Confetti() {
  const [hide, setHide] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setHide(false)
    }, 3000)
  }, [])

  return (
    <>
      {hide ? (
        <ReactCanvasConfetti
          style={{
            position: 'fixed',
            pointerEvents: 'none',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
          }}
          autorun={{ speed: 0.3 }}
        />
      ) : null}
    </>
  )
}
