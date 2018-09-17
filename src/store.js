import { createConnectedStore } from 'undux';
import { initialCounterState } from './modules/counter'

export const store = createConnectedStore({
  ...initialCounterState,
})

export const { Container } = store
export const { withStore } = store