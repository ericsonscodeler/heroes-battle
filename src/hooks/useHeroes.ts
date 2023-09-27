import { HeroProps } from '@/app/types'
import { create } from 'zustand'

type State = {
  heroes: HeroProps[]
  addHeroToFight: (hero: HeroProps) => void
}

const useHeroesStore = create<State>((set) => ({
  heroes: [],
  addHeroToFight: (hero: HeroProps) => {
    set((state) => {
      if (state.heroes.length >= 2) {
        const aux = [...state.heroes].slice(1)
        aux.push(hero)
        return {
          heroes: aux,
        }
      }
      return {
        heroes: [...state.heroes, hero],
      }
    })
  },
}))

export default useHeroesStore
