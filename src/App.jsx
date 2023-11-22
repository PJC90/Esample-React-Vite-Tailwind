import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ciao from './Components/Ciao'
import Pri from './Components/Pri'
import Card from './Components/Card'

function handleClick() {
  alert ("ciaone!")
}
function handleChange(e) {
  console.log (e.target.value)
}
function handleSubmit(e) {
  e.preventDefault()
  console.log (e)
}
function App() {
  const [count, setCount] = useState(0)
  const [items, setItems] = useState([1,2,3])

  console.log(items)
  const aggiungiItem = () => {
    const newItems = 4
    setItems([...items, newItems])
    console.log(items)
  }
  const cities = [
    {
      id:1,
      title: "Tokyo",
      imgUrl: "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: true
    },
    {
      id:2,
      title: "Roma",
      imgUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3",
      isVisited: false
    },
    {
      id:3,
      title: "Parigi",
      imgUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: true
    },
    {
      id:4,
      title: "Amsterdam",
      imgUrl: "https://images.unsplash.com/photo-1584003564911-a7a321c84e1c?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: false
    },

  ]
  return (
    <>
    <div className='grid grid-cols-4 gap-10'>
    <Card 
    title="Tokyo" 
    imgURL="https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    isVisited={true}
    >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nemo!  
    </Card>
    
    
    <Card 
    title="Roma" 
    imgURL="https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    isVisited={false}
    >
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores pariatur mollitia voluptatem minima sint tenetur quis, voluptates ratione possimus! Voluptatum autem repellat distinctio maxime earum dignissimos unde porro? Doloribus itaque qui corporis adipisci odit aliquam voluptatem quia nemo provident non!
    </Card>
    <Card 
    title="Parigi" 
    imgURL="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tempore fuga earum saepe a rem sint ullam cupiditate ab enim.
    </Card>
    <Card 
    title="Amsterdam" 
    imgURL="https://images.unsplash.com/photo-1584003564911-a7a321c84e1c?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum mollitia reprehenderit repudiandae. Quas, doloribus natus!
    </Card>
    </div>
    <div className='grid grid-cols-4 gap-10'>
      {cities.filter((city)=>!city.isVisited).map((city)=>(
        <Card
        key={city.id}
        title={city.title}
        imgURL={city.imgUrl}
        isVisited={city.isVisited}>
          Ciao Ciao
        </Card>
      ))}
    </div>
    <Ciao/>
    <Pri/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={aggiungiItem}>Agg 4</button>
        <button onClick={handleClick}>
          Alert
        </button>
        <input type="text" onChange={handleChange} className='bg-sky-900 text-white'/>
        <form onSubmit={handleSubmit}>
          <button type="submit">ok</button>
        </form>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h1 className='text-3xl font-bold underline'>Ciao</h1>
      <h1 >Ciao</h1>
    </>
  )
}

export default App
