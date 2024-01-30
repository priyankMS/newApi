import Navbar from './component/Navbar'
import './App.css'
import ReactDOM from "react-dom"
import NewsBoard from './component/NewsBoard'
import { useState } from 'react'

function App() {
  const [category,setCategory]=useState("general")

  return (
    <div>
   <Navbar setCategory={setCategory}/>
   <NewsBoard category={category}/>
</div>
  )
}

export default App
