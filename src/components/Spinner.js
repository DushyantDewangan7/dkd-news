import React from 'react'

import Funnel from './Funnel.gif'

const Spinner = () =>{
  return (
    <div className='text-center '>
     <img src={Funnel} alt ="loading"/>
    </div>
  )
}

export default Spinner