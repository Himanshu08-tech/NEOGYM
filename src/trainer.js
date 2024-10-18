import React from 'react'
import T1 from './t1.jpg'
import T2 from './t2.jpg'
import T3 from './t3.jpg'
import T4 from './logo3.png'
function trainer() {
  return (
    <div className='trainer_outer_div'>
        <h1>OUR GYM TRAINERS</h1>
        <div className='trainer_main_div'>
            <div className='trainer_inner1' >
                <h2>Smirth Jon</h2>
                <img src={T1} />
                <div>  <img  src={T4}/></div>
            </div>
            <div className='trainer_inner1'>
            <h2>Jean Doe</h2>
            <img src={T2}/>
            <div>  <img  src={T4}/></div>
            </div>
            <div className='trainer_inner1'>
            <h2>Alex Den</h2>
            <img src={T3}/>
           <div><img  src={T4}/></div>
            </div>
        </div>
    </div>
  )
}

export default trainer