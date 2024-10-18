import React from 'react'
import './index.css';
import { Link } from 'react-router-dom';
function header () {
  return (
    <div className='header_outer_div'>
      <div className='header_main1'>
      <h1>NEOGYM</h1>
      </div>
      <div className='header_main2'>
     <div><Link className='design' to='/'>HOME</Link></div> 
     <div><Link className='design' to='/WHY US'>WHY US</Link></div>
     <div><Link className='design' to='/READ MORE'>READ MORE</Link></div> 
     <div><Link className='design' to='/TRAINER'>TRAINER</Link></div> 
     <div><Link className='design' to='/CONTACT'>CONTACT</Link></div> 
    </div>
    </div>
  )
}

export default header
