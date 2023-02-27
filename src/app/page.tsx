'use client'

import { Header } from '@/Components/Header'
import Image from 'next/image'
import { Check, LinkedinLogo, TwitterLogo } from 'phosphor-react'

import breloImage from '@/assets/work/brelo.svg'
import TCUImage from '@/assets/work/tcu.png'
import dogIncImage from '@/assets/work/doginc.svg'

import { programmingLanguages } from '@/assets/languages/skills'
import { Hero } from '@/Components/Hero'

import { Badge } from '@/Components/Badge'
import { Github } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

      <section className="w-full mx-auto mt-24 2xl:max-w-7xl p-4">
        <div className="flex flex-col items-center justify-center gap-6">
          <h1 id="my-tech-stack" className="text-6xl">
            My Tech Stack
          </h1>
          <h2 className="text-2xl text-[#606060] dark:text-gray-100">
            Technologies I&apos;ve been working with recently
          </h2>
        </div>
        <div className="grid grid-cols-7 gap-6 mt-8">
          {programmingLanguages.map((language, index) => {
            return (
              <div
                key={index}
                className="rounded-lg flex items-center justify-center p-2 dark:bg-stone-300 dark:bg-opacity-5"
              >
                <Image src={language} width={96} alt="" />
              </div>
            )
          })}
        </div>
      </section>

      <section className="w-full mx-auto mt-24 2xl:max-w-7xl p-4">
        <div className="flex flex-col items-center justify-center gap-6">
          <h1 id="work-experience" className="text-6xl">
            Work Experience
          </h1>
          <h2 className="text-2xl text-[#606060] dark:text-gray-100">
            My professional experience
          </h2>
        </div>

        <div className="flex gap-6 mt-12 w-full">
          <div className="flex flex-col gap-6 max-w-3xl">
            <h1 className="text-xl font-medium text-black dark:text-white">
              Dog Inc.
            </h1>
            <span className="text-[#606060] text-sm -mt-4 dark:text-gray-100">
              Jan. 2019 - Present
            </span>
            <nav>
              <ul className="mb-8 space-y-4 text-left list-none">
                <li className="flex items-center space-x-3 gap-2">
                  <Check className="flex-shrink-0" size={20} />
                  <span className="text-sm">
                    Creating performative algorithms in C++ to develop
                    strategies for the financial market
                  </span>
                </li>
                <li className="flex items-center space-x-3 gap-2">
                  <Check className="flex-shrink-0" size={20} />
                  <span className="text-sm">
                    Data analysis and visualization of financial data
                  </span>
                </li>
                <li className="flex items-center space-x-3 gap-2">
                  <Check className="flex-shrink-0" size={20} />
                  <span className="text-sm">
                    Creating robots on the MetaTrader 5 platform
                  </span>
                </li>
              </ul>
            </nav>
            <div className="flex items-center flex-wrap gap-2 text-sm -mt-6">
              <Badge color="bg-indigo-400" text="C" />
              <Badge color="bg-indigo-400" text="C++" />
              <Badge color="bg-blue-400" text="Python" />
              <Badge color="bg-orange-400" text="MQL5" />
              <Badge color="bg-pink-400" text="PineScript" />
            </div>
          </div>
          <Image
            className="ml-auto w-64 p-4 dark:hidden"
            src={dogIncImage}
            alt=""
          />
        </div>

        <div className="flex gap-6 mt-12 w-full">
          <div className="flex flex-col gap-6 max-w-6xl">
            <h1 className="text-xl font-medium text-black dark:text-white">
              Brelo
            </h1>
            <span className="text-[#606060] text-sm -mt-4 dark:text-gray-100">
              Apr. 2022 - Dec. 2022
            </span>
            <nav>
              <ul className="mb-8 space-y-4 text-left list-none">
                <li className="flex items-center space-x-3 gap-2">
                  <Check className="flex-shrink-0" size={20} />
                  <span className="text-sm">
                    Maintainability and upgradeability of high-volume
                    microservices for cloud computing platforms (AWS, GCP etc)
                  </span>
                </li>
                <li className="flex items-center space-x-3 gap-2">
                  <Check className="flex-shrink-0" size={20} />
                  <span className="text-sm">
                    Development of new functionalities in the Backend
                  </span>
                </li>
                <li className="flex items-center space-x-3 gap-2">
                  <Check className="flex-shrink-0" size={20} />
                  <span className="text-sm">
                    Integration of Back-end systems with third-party platforms
                  </span>
                </li>
                <li className="flex items-center space-x-3 gap-2">
                  <Check className="flex-shrink-0" size={20} />
                  <span className="text-sm">
                    Creation of new functionalities, changes in the Design
                    System and maintenance of the Company&apos;s Dashboard
                  </span>
                </li>
                <li className="flex items-center space-x-3 gap-2">
                  <Check className="flex-shrink-0" size={20} />
                  <span className="text-sm">
                    Creation of a Widget developed in JavaScript with the
                    objective of making payments on third-party platforms
                  </span>
                </li>
              </ul>
            </nav>
            <div className="flex items-center flex-wrap gap-2 text-sm -mt-6">
              <Badge color="bg-blue-400" text="Python" />
              <Badge color="bg-sky-400" text="Django" />
              <Badge color="bg-sky-400" text="Django Rest Framework" />
              <Badge color="bg-orange-400" text="Apache Kafka" />
              <Badge color="bg-pink-400" text="Microservices" />
              <Badge color="bg-zinc-400" text="OAuth" />
              <Badge color="bg-zinc-400" text="API Rest" />
              <Badge color="bg-yellow-400" text="JavaScript" />
              <Badge color="bg-cyan-400" text="Docker" />
              <Badge color="bg-red-400" text="PostgreSQL" />
            </div>
          </div>
          <Image
            className="ml-auto w-64 p-4 dark:hidden"
            src={breloImage}
            alt=""
          />
        </div>

        <div className="flex gap-6 mt-12 w-full">
          <div className="flex flex-col gap-6 max-w-3xl">
            <h1 className="text-xl font-medium text-black dark:text-white">
              TCU (Tribunal de Contas da União){' '}
            </h1>
            <span className="text-[#606060] text-sm -mt-4 dark:text-gray-100">
              Sep. 2020 - Sep. 2021
            </span>
            <nav>
              <ul className="mb-8 space-y-4 text-left list-none">
                <li className="flex items-center space-x-3 gap-2">
                  <Check className="flex-shrink-0" size={20} />
                  <span className="text-sm">
                    Development of web systems using APEX (Oracle Application
                    Express) for projects in several areas of the TCU
                  </span>
                </li>
                <li className="flex items-center space-x-3 gap-2">
                  <Check className="flex-shrink-0" size={20} />
                  <span className="text-sm">Creation of new databases</span>
                </li>
                <li className="flex items-center space-x-3 gap-2">
                  <Check className="flex-shrink-0" size={20} />
                  <span className="text-sm">
                    Creation of new functionalities and maintainability of the
                    Dashboards
                  </span>
                </li>
              </ul>
            </nav>
            <div className="flex items-center flex-wrap gap-2 text-sm -mt-6">
              <Badge color="bg-violet-400" text="Oracle" />
              <Badge color="bg-emerald-400" text="SQL" />
              <Badge color="bg-emerald-400" text="PL/SQL" />
              <Badge color="bg-blue-400" text="Python" />
            </div>
          </div>
          <Image
            className="ml-auto w-64 p-4 dark:hidden"
            src={TCUImage}
            alt=""
          />
        </div>
      </section>

      <footer id="contact" className="w-full mx-auto mt-24 2xl:max-w-7xl p-4">
        <div className="flex justify-between items-center">
          <strong className="text-violet-500 text-sm">
            Designed and Built by Lucas Fellipe with Love
          </strong>
          <nav>
            <ul className="flex items-center gap-6 list-none">
              <li>
                <a
                  className="hover:text-violet-500 transition-colors duration-300 text-[#606060] dark:text-gray-100 dark:hover:text-violet-500"
                  href="mailto:lucas.fellipe.c@gmail.com"
                >
                  lucas.fellipe.c@gmail.com
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
                  href="https://www.linkedin.com/in/lucas-fellipe/"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  <LinkedinLogo size={24} />
                </a>
              </li>
              <li>
                <a
                  className="hover:text-violet-500 transition-colors duration-300"
                  href="https://twitter.com/lucasfcm9"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  <TwitterLogo size={24} />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  )
}
