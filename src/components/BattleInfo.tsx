import React from 'react'
import { Swords } from 'lucide-react'
import useHeroesStore from '@/hooks/useHeroes'
export const BattleInfo = () => {
  const { heroes } = useHeroesStore()
  return (
    <div className="flex flex-row justify-between items-center w-full my-8">
      <span className="text-white text-center w-28">{heroes[0]?.name}</span>
      <Swords color="white" size={40} />
      <span className="text-white text-right w-28">{heroes[1]?.name}</span>
    </div>
  )
}
