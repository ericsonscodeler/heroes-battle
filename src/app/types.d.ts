export type HeroPowerStatsProps = {
  intelligence: number
  strength: number
  speed: number
  durability: number
  power: number
  combat: number
}

export type HeroProps = {
  id: string
  name: string
  powerstats: HeroPowerStatsProps
  images: {
    xs: string
    md: string
  }
}
