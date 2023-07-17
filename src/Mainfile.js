import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Aboutus from './Aboutus'

export const Mainfile = () => {
  return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}  />
            <Route path='Aboutus' element={<Aboutus/>}  />


        </Routes>
        </BrowserRouter>

  )
}
  