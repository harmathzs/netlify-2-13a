import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)
  const [fruits, setFruits] = useState([])

  const handlePostClick = () => {
    fetch('/.netlify/functions/fruits', {
      method: 'POST',
      body: JSON.stringify({id: 4, name: "grape", healthy: true})
    })
  }

  useEffect(()=>{
    const componentDidMount = async () => {
      try {
        const fruitsDataJson = await fetch('/.netlify/functions/fruits')
        console.log('fruitsDataJson', fruitsDataJson)
        const fruitsData = await fruitsDataJson.json()
        console.log('fruitsData', fruitsData)
        if (fruitsData)
          setFruits(fruitsData)
      }
      catch (error) {
        console.warn(error)
      }
    }
    componentDidMount()
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handlePostClick}>
          POST /.netlify/functions/fruits
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="card">
        {JSON.stringify(fruits)}
      </div>
      <div className="card">
        I love gypsies!
      </div>
    </>
  )
}

export default App
