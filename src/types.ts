export type ZoneColor =
  | 'black'
  | 'red'
  | 'yellow'
  | 'blue'
  | 'road'
  | 'city'
  | 'home'

export type Tier = 'I' | 'II' | 'III' | 'IV' | 'V' | 'VI' | 'VII' | 'VIII'

// 0 is a royal to royal connection
export type PortalSize = 0 | 2 | 7 | 20
export interface Resource {
  name: string
  tier: Tier
}

export interface ZoneInfo {
  markers?: string[]
  resources?: Resource[]
  royalConnections?: number[]
  miniMapUrl?: string
}

export interface Zone {
  id: string
  name: string
  tier: string
  color: ZoneColor
  type: string
  albionId?: string
  info?: ZoneInfo
}

export interface PortalPayload {
  connection: [string, string] // sorted alphabetically
  size: PortalSize
  hours: number
  minutes: number
}
export interface Portal {
  connection: [string, string] // sorted alphabetically
  size: PortalSize
  expiresUtc: string
  timeLeft: number
}

// Discord API
export interface DiscordMe {
  id: string
  username?: string
  discriminator?: string
}

export interface DiscordMeGuild {
  id: string
  name: string
  icon: string
  owner: boolean
  permissions: string
  features: string[]
}

// Database
export interface DBConfig {
  host: string
  user: string
  password: string
  database: string
  port: number
}

export interface RedisConfig {
  host: string
  password: string
  port: number
}
