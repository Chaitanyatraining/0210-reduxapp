import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Movies from '../Components/Movies'
import MovieDetails from '../Components/MovieDetails'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Movies />} />
        <Route path='/movieDetails/:id' element={<MovieDetails />} />
    </Routes>
  )
}

export default Routing