import { useEffect, useState } from 'react'
import './TerminalIntro.css'

export default function TerminalIntro() {
  const [text, setText] = useState('')
  const message = 'Welcome to Paulo Dalmas\' portfolio'

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setText(message.slice(0, index))
      index += 1
      if (index > message.length) {
        clearInterval(interval)
      }
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="terminal">
      <span className="prompt">$ </span>
      <span>{text}</span>
      <span className="cursor" />
    </div>
  )
}
