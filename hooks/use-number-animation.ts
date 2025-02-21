"use client"

import { useState, useEffect } from "react"

export function useNumberAnimation(end: number, duration = 2000) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    let startTime: number | null = null
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime

      if (progress < duration) {
        const nextNumber = Math.floor(Math.random() * end)
        setCurrent(nextNumber)
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCurrent(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return current
}

