import React from 'react'
import PagesCard from '../components/PagesCard'
import { ConstantsPagesCard } from '../util/constants'
// backdrop-blur bg-[url('/wave-haikei.svg')] bg-no-repeat
const Principal = (): JSX.Element => {
  return (
    <div className=' min-h-screen bg-gray-100 '>
      <div className=" h-128 md:h-140 bg-[url('/images-decoration/coding-man.webp')] bg-cover bg-center bg-fixed  ">
        <div className='w-full h-full flex  justify-center items-center
             bg-slate-900/60 backdrop-brightness-75 flex-col  '
        >

          <div className='text-image text-center px-4 flex flex-col gap-10'>
            <h1 className=' font-montserrat font-bold text-3xl text-gray-200'>¿ Necesitas una pagina web ?</h1>
            <h2 className=' font-montserrat font-bold text-xl text-gray-200'> Si eres una pequeña empresa o una persona que esta emprendiendo te ayudaremos! </h2>
          </div>
        </div>
      </div>
      <div className='principal py-20'>
        <h1 className='font-montserrat font-bold text-3xl text-gray-700 text-center'> Conoce nuestros precios!</h1>
        <div className=' py-20 container-cards flex gap-10 justify-center'>
          {ConstantsPagesCard.map((card) =>
            (
              <PagesCard key={card.id} name={card.name} price={card.price} description={card.description} specs={card.specs} />
            ))}
        </div>
      </div>

    </div>
  )
}

export default Principal
