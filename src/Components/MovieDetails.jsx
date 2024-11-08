import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {ArrowLeft, ArrowLeftCircle} from 'react-feather'

const MovieDetails = () => {
    const [moviedetails, setMovieDetails] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()
    console.log(id)

    useEffect(() => {
        getmovieDetails()
    }, [])

    const getmovieDetails = async () => {
        const {data} = await axios(`https://dummyapi.online/api/movies/${id}`)
        console.log(data)
        setMovieDetails(data)
    }
  return (
    <div>
        <h2>MovieDetails</h2>
        <ArrowLeftCircle size={25}
        onClick={() => navigate(-1)}
        ></ArrowLeftCircle>
    </div>
  )
}

export default MovieDetails