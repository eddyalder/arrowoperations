import React from 'react';
import './App.css'
import KeyBar from './components/key-bar/keyBar'
import { strats } from './constants/stratConstants'
import StratBar from './components/key-bar/strat-bar/stratBar';

function App() {
  // TODO: Redux for state store
  const [stratListState, setStratListState] = React.useState([strats[0], strats[1], strats[2]]);
  const randomStrat = strats[Math.floor(Math.random() * strats.length)];
  return (
    <>
      <h1>Key Strat Hero</h1>
      <StratBar strats={stratListState}></StratBar>
      <KeyBar strat={randomStrat}></KeyBar>
    </>
  )
}

export default App
