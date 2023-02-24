'use client'

interface BadgeProps {
  text: string
  color: string
}

export function Badge({ text, color }: BadgeProps) {
  return <span className={`${color} rounded-md text-white px-1`}>{text}</span>
}
