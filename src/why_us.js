import React from 'react'
import U1 from './u-1.png'
import U2 from './u-2.png'
import U3 from './u-3.png'
import U4 from './u-4.png'
function why_us() {
  return (
    <div className='why_outer_div'>
        <h1>WHY CHOOSE US</h1>
    <div className='why_main_div'>
       
       
<div className='why_inner1' >
    <img src={U1}/><br/>
    <h2>QUALITY EQUIPMENT</h2>
    <p>ipsum dolor sit amet,
        <br/> consectetur adipiscing elit,
         <br/>sed do eiusmod tempor</p>
</div>
<div className='why_inner2'>
<img src={U4}/><br/>
    <h2>NUTRITION</h2>
    <p>ipsum dolor sit amet,
        <br/> consectetur adipiscing elit,
         <br/>sed do eiusmod tempor</p>
</div>
<div className='why_inner3'>
<img src={U2}/><br/>
    <h2>HEALTHY DIET PLAN</h2>
    <p>ipsum dolor sit amet,
        <br/> consectetur adipiscing elit,
         <br/>sed do eiusmod tempor</p>
</div>
<div className='why_inner4'>
<img src={U3}/><br/>
    <h2>SPORT TRAINING</h2>
    <p>ipsum dolor sit amet,
        <br/> consectetur adipiscing elit,
         <br/>sed do eiusmod tempor</p>
</div>
    </div>
    </div>
  )
}

export default why_us