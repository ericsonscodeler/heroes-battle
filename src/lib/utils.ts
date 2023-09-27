import { HeroPowerStatsProps } from '@/app/types'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function allPowerHero(powerStats: HeroPowerStatsProps) {
  const power = Object?.values(powerStats)?.reduce(
    (acc, value) => acc + value,
    0,
  )

  return power
}

export function checkPower(power: number) {
  if (power <= 200) {
    return 'bg-gradient-to-r from-zinc-700 to-white'
  }
  if (power > 200 && power < 400) {
    return 'bg-gradient-to-r from-emerald-800 via-emerald-500 to-black'
  }
  if (power > 400 && power < 500) {
    return 'bg-gradient-to-r from-purple-800 to-black'
  }
  if (power > 500 && power < 600) {
    return 'bg-gradient-to-r from-orange-500 to-zinc-300'
  }
  if (power >= 600) {
    return 'bg-gradient-to-r from-red-500 to-black'
  }
}

export const firstLetterUpperCase = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}
