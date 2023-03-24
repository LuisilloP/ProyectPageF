import React from 'react'
import PagesCard from '../components/PagesCard'
import { ConstantsPagesCard } from '../util/constants'
import svgResponsive from '../../public/svg/responsive.svg'
import svgDiagram from '../../public/svg/diagram.svg'
import svgMegaphone from '../../public/svg/megaphone.svg'
import { IntersectionObserverHook } from '../util/intersectionObserver'

const Principal = (): JSX.Element => {
  const [elementRef, intersecting] = IntersectionObserverHook({

  })
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
      <section className='pt-20 px-5 min-h-880  '>
        <h1 className='font-montserrat font-bold text-3xl text-gray-700 text-center'> Conoce nuestros precios!</h1>
        <div className='flex flex-col md:flex-row py-20 container-cards  gap-10 justify-center'>
          {ConstantsPagesCard.map((card) =>
          (
            <PagesCard key={card.id} name={card.name} price={card.price} description={card.description} specs={card.specs} color={card.color} />
          ))}
        </div>
      </section>
      <section>
        <div ref={elementRef} className='bg-slate-800 min-h-110 flex flex-col p-5 md:flex-row gap-6 text-gray-200 '>
          <div className={`${intersecting ? 'showIO' : ' hiddenIO'} flex flex-col items-center`}>
            <h1>Diseño responsivo</h1>
            <img src={svgResponsive} className='w-32' alt='image' />
            <p>Que significa esto. Significa que tu sito web se puede ver y adapatar a cualquier tipo de dispositivo </p>
          </div>
          <div className={`${intersecting ? 'showIO' : ' hiddenIO'} flex flex-col items-center`}>
            <h1>Diseño responsivo</h1>
            <img src={svgDiagram} className='w-32' alt='image' />
            <p>Que significa esto. Significa que tu sito web se puede ver y adapatar a cualquier tipo de dispositivo </p>
          </div>
          <div className={`${intersecting ? 'showIO' : ' hiddenIO'} flex flex-col items-center`}>
            <h1>Diseño responsivo</h1>
            <img src={svgMegaphone} className='w-32' alt='image' />
            <p>Que significa esto. Significa que tu sito web se puede ver y adapatar a cualquier tipo de dispositivo </p>
          </div>
        </div>
      </section>
      <section className='min-h-880'>
        <div>
          <h1>Mira algunos trabajos</h1>
        </div>
      </section>
    </div>
  )
}

export default Principal
