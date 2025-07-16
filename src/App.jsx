import { useState } from 'react'
import './App.css'
import { content } from './content'
import LanguageToggle from './components/LanguageToggle'
import Resume from './components/Resume'
import TerminalIntro from './components/TerminalIntro'

export default function App() {
  const [lang, setLang] = useState('en')

  return (
    <div>
      <LanguageToggle language={lang} onChange={setLang} />
      <TerminalIntro />
      <Resume data={content[lang]} />
    </div>
  )
}
