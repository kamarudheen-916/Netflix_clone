import React, { useEffect ,useState} from 'react'
import './RowPosters.css'
import axios from '../../axios'
import {API_KEY, imageUrl} from '../../constants/constants'
import YouTube   from 'react-youtube'

function RowPosters(props) {
  const [movies,setMovie] = useState([])
  const [urlId,setUrlId] = useState('')
  const [className,setClassName] = useState('posterOnLoading')
  useEffect(()=>{
      axios.get(props.url).then((response)=>{
        setMovie(response.data.results)
      }).catch((err)=>{
        console.log(err);
      })
      setTimeout(() => {
        setClassName('poster')
      }, 20);

  },[props.url])


  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
    origin: window.location.origin, // Add this line
  };
  

  const handleMovieId=(id)=>{
      axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
        if(response.data.results.length !== 0){
          setUrlId(response.data.results[0])
        }else{
          console.log('Array is empty');
        }
      })
  }
  return (
    <div className='rows'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map(movie=>
            <img onClick={()=>handleMovieId(movie.id)} key={movie.id} className={props.isSmall? `smallPoster`:className} src={`${imageUrl + movie.backdrop_path}`} alt="poster" />
            )} 
        </div>
        { urlId &&<YouTube videoId={urlId.key} opts={opts}  />}
    </div>
  )
}

export default RowPosters
