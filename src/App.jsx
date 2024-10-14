import React from 'react'
import Home from './component/Home'
import Generator from './component/Generator'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/generator' element={<Generator/>} />
      </Routes>
    </>
  )
}

export default App
