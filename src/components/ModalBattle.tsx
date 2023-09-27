'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import useHeroesStore from '@/hooks/useHeroes'
import { Check, Equal, X } from 'lucide-react'

import Image from 'next/image'
import { allPowerHero, firstLetterUpperCase } from '@/lib/utils'

export const ModalBattle = () => {
  const [winner, setWinner] = useState<string>('')
  const { heroes } = useHeroesStore()

  useEffect(() => {
    if (heroes[0] && heroes[1]) {
      if (
        allPowerHero(heroes[0].powerstats) > allPowerHero(heroes[1].powerstats)
      ) {
        setWinner(heroes[0]?.name)
      } else {
        setWinner(heroes[1]?.name)
      }
    }
  }, [heroes])

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex justify-center">
          <Button
            className={`${
              heroes?.length !== 2 ? 'cursor-not-allowed' : 'cursor-pointer'
            }`}
            disabled={heroes?.length !== 2}
          >
            Batalhar
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent
        className="flex flex-col items-center sm:max-w-[900px] h-1/2 
      bg-gradient-to-r from-black via-gray-500 to-black"
      >
        <div className="flex flex-row max-w-1/2 justify-between">
          <h1 className="text-green-600 text-3xl font-bold mr-4">Winner</h1>
          <span className="text-3xl font-bold">{winner}</span>
        </div>
        <div className="flex flex-row gap w-3/5 h-2/3">
          <div className="flex items-center w-full justify-between">
            <div className="flex flex-col">
              <Image
                key={heroes[0]?.id}
                height={140}
                width={140}
                src={heroes[0]?.images.md}
                alt={`Image ${heroes[0]?.name}`}
                objectFit="cover"
                className="rounded-lg"
              />
              <span>{heroes[0]?.name}</span>
            </div>

            <div className="flex flex-col gap-3 w-10">
              <div className="flex flex-row items-center">
                <p>{heroes[0]?.powerstats.intelligence}</p>
                {heroes[0]?.powerstats.intelligence >
                heroes[1]?.powerstats.intelligence ? (
                  <Check size={14} color="green" />
                ) : heroes[0]?.powerstats.intelligence ===
                  heroes[1]?.powerstats.intelligence ? (
                  <Equal size={14} color="blue" />
                ) : (
                  <X size={14} color="red" />
                )}
              </div>
              <div className="flex flex-row items-center">
                <p>{heroes[0]?.powerstats.strength}</p>
                {heroes[0]?.powerstats.strength >
                heroes[1]?.powerstats.strength ? (
                  <Check size={14} color="green" />
                ) : heroes[0]?.powerstats.strength ===
                  heroes[1]?.powerstats.strength ? (
                  <Equal size={14} color="blue" />
                ) : (
                  <X size={14} color="red" />
                )}
              </div>
              <div className="flex flex-row items-center">
                <p>{heroes[0]?.powerstats.speed}</p>
                {heroes[0]?.powerstats.speed > heroes[1]?.powerstats.speed ? (
                  <Check size={14} color="green" />
                ) : heroes[0]?.powerstats.speed ===
                  heroes[1]?.powerstats.speed ? (
                  <Equal size={14} color="blue" />
                ) : (
                  <X size={14} color="red" />
                )}
              </div>
              <div className="flex flex-row items-center">
                <p>{heroes[0]?.powerstats.durability}</p>
                {heroes[0]?.powerstats.durability >
                heroes[1]?.powerstats.durability ? (
                  <Check size={14} color="green" />
                ) : heroes[0]?.powerstats.durability ===
                  heroes[1]?.powerstats.durability ? (
                  <Equal size={14} color="blue" />
                ) : (
                  <X size={14} color="red" />
                )}
              </div>
              <div className="flex flex-row items-center">
                <p>{heroes[0]?.powerstats.power}</p>
                {heroes[0]?.powerstats.power > heroes[1]?.powerstats.power ? (
                  <Check size={14} color="green" />
                ) : heroes[0]?.powerstats.power ===
                  heroes[1]?.powerstats.power ? (
                  <Equal size={14} color="blue" />
                ) : (
                  <X size={14} color="red" />
                )}
              </div>
              <div className="flex flex-row items-center">
                <p>{heroes[0]?.powerstats.combat}</p>
                {heroes[0]?.powerstats.combat > heroes[1]?.powerstats.combat ? (
                  <Check size={14} color="green" />
                ) : heroes[0]?.powerstats.combat ===
                  heroes[1]?.powerstats.combat ? (
                  <Equal size={14} color="blue" />
                ) : (
                  <X size={14} color="red" />
                )}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {heroes.length &&
                Object.keys(heroes[0]?.powerstats).map((stats, index) => (
                  <p key={index}>{firstLetterUpperCase(stats)}</p>
                ))}
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row items-center">
                {heroes[1]?.powerstats.intelligence >
                heroes[0]?.powerstats.intelligence ? (
                  <Check size={14} color="green" />
                ) : heroes[1]?.powerstats.intelligence ===
                  heroes[0]?.powerstats.intelligence ? (
                  <Equal size={14} color="blue" />
                ) : (
                  <X size={14} color="red" />
                )}
                <p>{heroes[1]?.powerstats.intelligence}</p>
              </div>
              <div className="flex flex-row items-center">
                {heroes[1]?.powerstats.strength >
                heroes[0]?.powerstats.strength ? (
                  <Check size={14} color="green" />
                ) : heroes[0]?.powerstats.strength ===
                  heroes[1]?.powerstats.strength ? (
                  <Equal size={14} color="blue" />
                ) : (
                  <X size={14} color="red" />
                )}
                <p>{heroes[1]?.powerstats.strength}</p>
              </div>
              <div className="flex flex-row items-center">
                {heroes[1]?.powerstats.speed > heroes[0]?.powerstats.speed ? (
                  <Check size={14} color="green" />
                ) : heroes[1]?.powerstats.speed ===
                  heroes[0]?.powerstats.speed ? (
                  <Equal size={14} color="blue" />
                ) : (
                  <X size={14} color="red" />
                )}
                <p>{heroes[1]?.powerstats.speed}</p>
              </div>
              <div className="flex flex-row items-center">
                {heroes[1]?.powerstats.durability >
                heroes[0]?.powerstats.durability ? (
                  <Check size={14} color="green" />
                ) : heroes[1]?.powerstats.durability ===
                  heroes[0]?.powerstats.durability ? (
                  <Equal size={14} color="blue" />
                ) : (
                  <X size={14} color="red" />
                )}
                <p>{heroes[1]?.powerstats.durability}</p>
              </div>
              <div className="flex flex-row items-center">
                {heroes[1]?.powerstats.power > heroes[0]?.powerstats.power ? (
                  <Check size={14} color="green" />
                ) : heroes[1]?.powerstats.power ===
                  heroes[0]?.powerstats.power ? (
                  <Equal size={14} color="blue" />
                ) : (
                  <X size={14} color="red" />
                )}
                <p>{heroes[1]?.powerstats.power}</p>
              </div>
              <div className="flex flex-row items-center">
                {heroes[1]?.powerstats.combat > heroes[0]?.powerstats.combat ? (
                  <Check size={14} color="green" />
                ) : heroes[1]?.powerstats.combat ===
                  heroes[0]?.powerstats.combat ? (
                  <Equal size={14} color="blue" />
                ) : (
                  <X size={14} color="red" />
                )}
                <p>{heroes[1]?.powerstats.combat}</p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <Image
                key={heroes[1]?.id}
                height={140}
                width={140}
                src={heroes[1]?.images.md}
                alt={`Image ${heroes[1]?.name}`}
                objectFit="cover"
                className="rounded-lg"
              />
              <span>{heroes[1]?.name}</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
