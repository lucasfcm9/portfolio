'use client'

import GithubIcon from '@/assets/github-icon.svg'
import LinkedinIcon from '@/assets/linkedin-icon.svg'
import TwitterIcon from '@/assets/twitter-icon.svg'
import Image from 'next/image'

export function Header() {
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
                <Image src={GithubIcon} width={24} alt="" />
              </a>
            </li>
            <li>
              <a
                className="hover:text-violet-500 transition-colors duration-300"
                target={'_blank'}
                href="https://www.linkedin.com/in/lucas-fellipe/"
                rel="noreferrer"
              >
                <Image src={LinkedinIcon} width={24} alt="" />
              </a>
            </li>
            <li>
              <a
                className="hover:text-violet-500 transition-colors duration-300"
                target={'_blank'}
                href="https://twitter.com/lucasfcm9"
                rel="noreferrer"
              >
                <Image src={TwitterIcon} width={24} alt="" />
              </a>
            </li>
            <li>
              <a
                className="hover:text-violet-500 hover:border-violet-500 transition-colors duration-300 border border-black px-2 py-2 rounded-lg"
                href="#"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
