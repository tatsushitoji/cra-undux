import * as React from 'react'
import { withStore } from '../../store'

export const Counter = withStore(({ store }) => (
  <div>
    <p>count: {store.get('countValue')}</p>
    <button onClick={() => store.set('countValue')(store.get('countValue') + 1)}>Increment</button>
    <button onClick={() => store.set('countValue')(store.get('countValue') - 1)}>Decrement</button>
    <button onClick={() => store.set('countValue')(0)}>Reset</button>
  </div>
))
