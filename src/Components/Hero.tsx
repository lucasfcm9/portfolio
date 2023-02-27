import { ArrowDown } from 'phosphor-react'

export function Hero() {
  return (
    <section className="relative w-full h-[304px] mx-auto mt-48 2xl:max-w-7xl p-4">
      <div className="flex items-center justify-center gap-28 sm:flex-col sm:gap-14">
        <h1 id="about" className="text-7xl sm:text-6xl">
          Hello, I&apos;m Lucas Fellipe.
        </h1>
        <p className="text-2xl text-[#606060] dark:text-gray-100 sm:text-xl">
          I&apos;m a Software Engineer. I&apos;m passionate about building
          software that helps people.
        </p>
      </div>
      <ArrowDown className="absolute left-0 bottom-2 sm:hidden" size={48} />
    </section>
  )
}
