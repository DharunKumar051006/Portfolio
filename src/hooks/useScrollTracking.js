import { useState, useEffect } from 'react'

export const useScrollTracking = (sections) => {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100 // Offset for navbar height

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  return activeSection
}

// Intersection Observer Hook for fade-in animations
export const useIntersectionObserver = (ref, options = {}) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        // Only observe once
        observer.unobserve(entry.target)
      }
    }, {
      threshold: 0.1,
      ...options
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref, options])

  return isVisible
}
