import React from 'react'
import './index.css'
import F1 from './email.png'
import F2 from './phone.jpg'
import F3 from './location.png'
function footer() {
  return (
    <div className='footer_outer_div'>
        <div className='footer_main_div'>
         <div className='footer_inner'><img src={F1}/><p>location</p></div>
         <div  className='footer_inner'><img src={F2}/><p>+22 98765432</p></div>
         <div  className='footer_inner'><img src={F3}/><p>mail@domain.com</p></div>
         </div>
    </div>
  )
}

export default footer