import React from 'react'

import Funnel from './Funnel.gif'

export default function Spinner() {
  return (
    <div className='text-center '>
     <img src={Funnel} alt ="loading"/>
    </div>
  )
}
