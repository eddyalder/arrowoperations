import './App.css'
import KeyBar from './components/key-bar/keyBar'
import { strats } from './constants/stratConstants'

function App() {
  const randomStrat = strats[Math.floor(Math.random() * strats.length)];
  return (
    <>
      <h1>Key Strat Hero</h1>
      <KeyBar strat={randomStrat}></KeyBar>
    </>
  )
}

export default App
