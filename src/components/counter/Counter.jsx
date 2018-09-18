import * as React from 'react'
import { compose, mapProps, withHandlers } from 'recompose';
import { withStore } from '../../store'

const Enhancer = compose(
  withStore,
  withHandlers({
    onIncrement: ({ store }) => () => store.set('countValue')(store.get('countValue') + 1),
    onDecrement: ({ store }) => () => store.set('countValue')(store.get('countValue') - 1),
    onReset: ({ store }) => () => store.set('countValue')(0),
  }),
  mapProps(({ store, onIncrement, onReset, onDecrement }) => ({
    onIncrement,
    onDecrement,
    onReset,
    countValue: store.get('countValue'),
  })),
)

export const Counter = Enhancer(({
  onIncrement,
  onDecrement,
  onReset,
  countValue,
}) => (
    <div>
      <p>count: {countValue}</p>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </div>
  )
)
