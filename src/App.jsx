import { useState } from 'react'

import './App.css'
import languages from './data/languages'
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'

function App() {

  return (
    <>
      <AppHeader />
      <AppMain />
    </>
  )
}

export default App
