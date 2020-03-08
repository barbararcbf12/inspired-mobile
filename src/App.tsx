import React from 'react'
import { MaterialSetup } from './utilities/MaterialSetup'
import './App.css'
import Header from './components/Header'
import List from './components/List'

function App() {
  return (
    <MaterialSetup>
      <Header />
      <List/>
    </MaterialSetup>
  );
}

export default App;
