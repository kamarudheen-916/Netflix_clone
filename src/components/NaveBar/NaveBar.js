import React, { useEffect, useState } from 'react'
import './NaveBar.css'
function NaveBar() {
  const [isScrolled,setIsScrolled] = useState(false)
  useEffect(()=>{
    const handleScroll =()=>{
    console.log('handleScroll calling');

      //check the scroll position
      if(window.scrollY > 0){
        // if scrolled , set isScrolled true
        setIsScrolled(true)
      }else{
        // if at the top, set isScrolled false
        setIsScrolled(false)
      }
    };
    // add scroll event listener when component mounts
    window.addEventListener('scroll',handleScroll)
    //clean up the event listener when component unMount
    return(
      window.removeEventListener('scroll',handleScroll)
    )
    
  },[])// empty dependency array ensure that the effect runs only once on mount
  return (
    <div className={`navBar ${isScrolled?'transparent':'' }`}>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="NavBar" />
        <img className='avatar' src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' alt="Avatar" />
    </div>
  )
}

export default NaveBar
