import { useState, useEffect, useRef } from 'react'

export interface TypingEffectOptions {
  typeSpeed?: number
  deleteSpeed?: number
  pauseDuration?: number
  loop?: boolean
  startDelay?: number
}

export const useTypingEffect = (
  words: string[], 
  options: TypingEffectOptions = {}
) => {
  const {
    typeSpeed = 100,
    deleteSpeed = 50,
    pauseDuration = 2000,
    loop = true,
    startDelay = 0
  } = options

  const [displayedText, setDisplayedText] = useState('')
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (words.length === 0) return

    const currentWord = words[currentWordIndex]
    
    const handleTyping = () => {
      if (isWaiting) {
        timeoutRef.current = setTimeout(() => {
          setIsWaiting(false)
          setIsDeleting(true)
        }, pauseDuration)
        return
      }

      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentWord.length) {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1))
          timeoutRef.current = setTimeout(handleTyping, typeSpeed)
        } else {
          // Word complete, start waiting
          setIsWaiting(true)
          timeoutRef.current = setTimeout(handleTyping, 0)
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(currentWord.slice(0, displayedText.length - 1))
          timeoutRef.current = setTimeout(handleTyping, deleteSpeed)
        } else {
          // Deletion complete, move to next word
          setIsDeleting(false)
          if (loop || currentWordIndex < words.length - 1) {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
          }
          timeoutRef.current = setTimeout(handleTyping, typeSpeed)
        }
      }
    }

    // Start the effect
    if (startDelay > 0) {
      timeoutRef.current = setTimeout(handleTyping, startDelay)
    } else {
      handleTyping()
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [
    words, 
    displayedText, 
    currentWordIndex, 
    isDeleting, 
    isWaiting,
    typeSpeed,
    deleteSpeed,
    pauseDuration,
    loop,
    startDelay
  ])

  return {
    displayedText,
    currentWordIndex,
    isDeleting,
    isWaiting
  }
}

export const useSimpleTyping = (text: string, speed = 100) => {
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (text.length === 0) return

    let currentIndex = 0
    const timer = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex))
        currentIndex++
      } else {
        setIsComplete(true)
        clearInterval(timer)
      }
    }, speed)

    return () => clearInterval(timer)
  }, [text, speed])

  return { displayedText, isComplete }
}