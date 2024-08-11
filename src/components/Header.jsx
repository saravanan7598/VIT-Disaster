import React, { useState } from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg'
function Header() {
  
  const[exploredown , Setexploredown]=useState(false);

  var exploredownopen = () =>
  {
        Setexploredown(!exploredown);
  }

  return (
    <div>
      <div className='header-overall'>
        <div className='sticky'>
         <div className='header-container'>
            <div className='hea-first'>  
                <Link to='/' style={{textDecoration:"none"}}><h1 >Disaster</h1></Link>
            </div>

            <div className='header-last'>
                <div className={exploredown ?'explore active-explore' : 'explore'}>
                     <p onClick={exploredownopen}>Explore <span><MdOutlineKeyboardArrowDown /></span></p>
                 </div>
                
            </div>
          </div>
            <div  className= {exploredown ? 'explore-down active-down' : 'explore-down'}>
                     <div className='downofhead'>
                        <Link to='/weather' className='link'><div className='downofhead-space'><p>Weather</p><span><MdOutlineArrowRight /></span></div></Link>
                        <Link to='/donate' className='link'><div className='downofhead-space'><p>Donate</p><span><MdOutlineArrowRight /></span></div></Link>
                        <Link to='/current' className='link'><div className='downofhead-space downofhead-space-last'><p>Current Situation</p><span><MdOutlineArrowRight /></span></div></Link>

                     </div>
              </div>
              </div>
          
         </div>
    </div>
  )
}

export default Header