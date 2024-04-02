import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constants/constants'

function Banner() {
        const [movie,setMovie]= useState()
        useEffect(()=>{
            axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
                console.log(response.data.results[0]);
                setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length)])
               
            })
        },[])
  return (
    <div  style={{backgroundImage:`url(${movie? imageUrl+ movie.backdrop_path:''})`}}
    className='banner' >
        <div className="content">
            <div className='movei_name'>
                <h1>{movie ? movie.title :""}</h1>
                {/* <img className='movei_name_image' src="https://occ-0-3195-3663.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABeRmxHXEWn2piOV9EBxR26L4IZRgq1XSZ15ctgEGrtwwqApCVaBzSMAO-0yS8sallnH6d06hZvGTgaaXiIyLANGcQ_Uf-b9uLnFXWGpV4CIG.webp?r=f9d" alt="Movie name" /> */}
                
            </div>
            <div className='movei_today'>
                    <div className='top10'>
                        <p>TOP</p>
                        <p>10</p>
                    </div>
                    <h2>#8 in Movies Today </h2>
            </div>
            <div className='description'>
                    <p>{movie? movie.overview:''}.</p>
            </div>
            <div className='banner_button'>
                <button className='PlayButton'> <i className="fa-solid fa-play"></i> Play</button>
                <button className='More_info_Button'><i className="fa-solid fa-circle-info"></i> More Info</button>
            </div>
        </div>
        <div className="fade_bottum">

        </div>
    </div>
  )
}

export default Banner
