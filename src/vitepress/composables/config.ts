import {
  inject,
  InjectionKey,
  Ref
} from 'vue'
import {
  Config,
} from '../config'

const configSymbol: InjectionKey<Ref<Config>> = Symbol('config')

export function useConfig() {
  return {
    config: inject(configSymbol)!
  }
}

