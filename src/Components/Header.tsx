'use client'

import { Github } from 'lucide-react'
import { useTheme } from 'next-themes'
import { LinkedinLogo, Moon, Sun, TwitterLogo } from 'phosphor-react'
import { useEffect, useState } from 'react'

export function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isDarkMode, setIsDarkMode] = useState(theme === 'dark')

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode)
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <header className="w-full mx-auto border-b mt-6 2xl:max-w-7xl">
      <div className="flex flex-row items-center justify-between mt-6 mb-4">
        <span className="text-4xl">luc.</span>
        <nav>
          <ul className="flex items-center gap-6 list-none">
            <li>
              <a
                className="hover:text-violet-500 transition-colors duration-300"
                href="#work-experience"
              >
                Work Experience
              </a>
            </li>
            <li>
              <a
                className="hover:text-violet-500 transition-colors duration-300"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="hover:text-violet-500 transition-colors duration-300"
                href="#contact"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                className="hover:text-violet-500 transition-colors duration-300"
                target={'_blank'}
                href="https://github.com/lucasfcm9"
                rel="noreferrer"
              >
                <Github size={24} />
              </a>
            </li>
            <li>
              <a
                className="hover:text-violet-500 transition-colors duration-300"
                target={'_blank'}
                href="https://www.linkedin.com/in/lucas-fellipe/"
                rel="noreferrer"
              >
                <LinkedinLogo size={24} />
              </a>
            </li>
            <li>
              <a
                className="hover:text-violet-500 transition-colors duration-300"
                target={'_blank'}
                href="https://twitter.com/lucasfcm9"
                rel="noreferrer"
              >
                <TwitterLogo size={24} />
              </a>
            </li>
            <li>
              <a
                className="hover:text-violet-500 hover:border-violet-500 transition-colors duration-300 border border-black px-2 py-2 rounded-lg dark:border-white dark:hover:border-violet-500"
                href="#"
              >
                Resume
              </a>
            </li>
            <li>
              <button onClick={toggleDarkMode}>
                {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
