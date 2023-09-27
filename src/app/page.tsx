'use client'

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'

import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Sword, UserCircle2, Search } from 'lucide-react'
import { allPowerHero, checkPower, cn } from '@/lib/utils'

import { HeroProps } from './types'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import useHeroesStore from '@/hooks/useHeroes'

import { BattleInfo } from '@/components/BattleInfo'
import { ModalBattle } from '@/components/ModalBattle'

export default function Home() {
  const [heroes, setHeroes] = useState<HeroProps[]>([])
  const [searchValue, setSearchValue] = useState<string>('')

  const useHeroes = useHeroesStore()

  useEffect(() => {
    const getHeroes = async () => {
      const { data } = await axios.get(
        'http://homologacao3.azapfy.com.br/api/ps/metahumans',
      )
      setHeroes(data)
    }

    getHeroes()
  }, [])

  const heroesToShow = (
    searchValue
      ? heroes.filter((hero) =>
          hero.name.toLowerCase().includes(searchValue.toLowerCase()),
        )
      : heroes
  ).map((hero) => ({
    ...hero,
    isSelected: useHeroes.heroes.some((heroAux) => heroAux.id === hero.id),
  }))

  const handleHeroesToBattle = (hero: HeroProps) => {
    useHeroes.addHeroToFight(hero)
  }

  return (
    <div className="flex bg-black min-h-full p-6">
      <aside className="w-72 black p-4">
        <div className="flex justify-center items-center flex-col w-full">
          <UserCircle2 color="#ff6900" size={70} className=" my-6" />
          <span className="text-[#ff6900] text-2xl">Ericson</span>
        </div>
      </aside>
      <main className="flex-1 p-4 bg-black h-full">
        <div className="flex flex-wrap -mx-1 gap-8">
          {heroesToShow.map((hero) => (
            <button
              key={hero.id}
              type="button"
              className={`flex basis-48  rounded-lg hover:scale-105 transition-transform ${
                hero.isSelected && 'shadow-xl shadow-blue-600'
              }`}
              onClick={() => handleHeroesToBattle(hero)}
            >
              <Card
                className={cn(
                  'flex items-center justify-center flex-col w-48 h-62',
                  hero.isSelected && 'border-2 border-blue-600',
                  checkPower(allPowerHero(hero?.powerstats)),
                )}
              >
                <CardContent>
                  <div className="h-36 w-36 relative">
                    <Image
                      key={hero.id}
                      src={hero?.images.md}
                      alt={`Image ${hero?.name}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col">
                  <span className="text-white font-bold text-sm">
                    {hero?.name}
                  </span>
                  <div className="flex items-center justify-between flex-row mt-2">
                    <Sword color="white" size={16} />
                    <p className="text-white font-bold ml-2 text-sm">
                      {allPowerHero(hero?.powerstats)}
                    </p>
                  </div>
                </CardFooter>
              </Card>
            </button>
          ))}
        </div>
      </main>
      <aside className="w-80 black p-4 h-screen sticky top-0">
        <div className="flex justify-center items-center flex-col w-full space-x-2">
          <div className="relative mb-6">
            <Input
              type="search"
              placeholder="Procure pelo heroi"
              className="pl-10 pr-4 py-2 rounded-full text-white font-bold text-lg"
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
          </div>
          <Separator />
          <BattleInfo />
          <ModalBattle />
        </div>
      </aside>
    </div>
  )
}
