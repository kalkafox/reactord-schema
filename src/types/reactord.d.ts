import { BiggerReactorsControlRodData } from './reactord.d'
import * as schema from '../schema'

export type BiggerReactorsControlRodData = {
  level: number
  name: string
  valid: boolean
}

export type BiggerReactorsControlRodDataBank = BiggerReactorsControlRodData[]

export type BiggerReactorsReactorData = Omit<
  Omit<InferInsertModel<typeof schema.biggerReactors>, 'deviceId'>,
  'access_token'
>

export type BiggerReactorsReactorMessage = {
  sentByDaemon: boolean
  data: BiggerReactorsReactorData
}

export type Req = {
  id?: number | string | null
  token?: string | null
  type?: 'BiggerReactors_Reactor' | 'mekanism-reactor'
}
