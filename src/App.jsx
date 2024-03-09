import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Filter from './components/Filter'
import ListBooks from './components/ListBooks'
import ListLectuce from './components/ListLectuce'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <ListBooks/>
    </>
  )
}

export default App
