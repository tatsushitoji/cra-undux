import React from 'react'
import ReactDOM from 'react-dom'
import { Container } from './store'
import { Counter } from './components/counter'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Container>
    <Counter />
  </Container>,
  document.getElementById('root')
)

registerServiceWorker()
