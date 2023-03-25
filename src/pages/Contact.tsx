import React from 'react'
import FormContact from './FormContact'

const Contact = (): JSX.Element => {


  return (
    
 
      <div className='w-full md:flex-row h-full flex flex-col justify-center h-screen items-center bg-gradient-to-b from-emerald-50 to-emerald-900'>
        <br></br>
        <div className="w-80 md:w-2/4 h-auto md:h-96 bg-teal-800 flex flex-col justify-between items-center text-white font-bold rounded-lg border-2 border-white text-white shadow-2xl shadow-black/50 ">
          <img src='https://www.tuexperiencia.com/images/contacto/contacto.png' className='h-auto  rounded border-2 border-teal-800 '/>
          <span>Contactanos</span>
          <h1>Al wasap tanto</h1>
        </div>
        <br></br>
        <FormContact />
        <br></br>
      </div>
      
    
  )
}

export default Contact
