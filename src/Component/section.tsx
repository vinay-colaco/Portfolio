import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface SectionProps {
  children: React.ReactNode
  id: string
  className?: string
}

export const Section: React.FC<SectionProps> = ({ children, id, className = '' }) => {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`py-20 ${className}`}
    >
      {children}
    </motion.section>
  )
}