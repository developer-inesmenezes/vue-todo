import { Store } from 'vuex'
import {StoreState} from './store'

declare module '@vue/runtime-core' {
  // declare your own store states
  interface State {
    count: number
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<StoreState>
  }
}