import React from 'react'
import './index.css'
function footer() {
  return (
    <div className='contact_outer_div'>
        <div className='contact_inner_1'> 
        </div>
        <div className='contact_inner_2'>
          <div className='contact_inner_3'>
            <h1>CONTACT US</h1><br/>
            <input placeholder='NAME'></input><br/><br/>
            <input placeholder='EMAIL'></input><br/><br/>
            <input placeholder='PHONE NUMBER'></input><br/><br/>
            <input type='description' placeholder='MESSAGE'></input><br/><br/>
            <button>SEND</button>
            </div>
        </div>
    </div>
  )
}

export default footer