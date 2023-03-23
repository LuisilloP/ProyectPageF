/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react'

interface Props {
  name: String
  description: String
  price: number
  specs: string[][]
  color: String
}

const PagesCard = (props: Props): JSX.Element => {
  const { name, description, price, specs, color } = props
  return (

    <div className='card md:h-128 font-montserrat  border-1 border-gray-600 bg-white text-center sm:w-80  transition duration-500  hover:scale-110 cursor-pointer rounded-md '>
      <div className={`flex  flex-col gap-4 pt-4 h-60 clip-path-cards ${color} text-white rounded-md`}>
        <h1 className='text-2xl border-b border-white mx-5'>{name}</h1>
        <h1 className='text-6xl'>${price.toLocaleString()}</h1>
        <h1>{description}</h1>
      </div>
      <div className='bot Spect bg-white rounded-tl-2xl text-gray-700 '>
        <ul className='flex flex-col gap-3 pb-5'>{specs.map((val, i) =>
        (
          <li key={i} className='flex gap-5 items-center px-6 md:pl-10'><img src={val[0]} className='w-8' loading='lazy' /> <p>{val[1]}</p></li>
        ))}
        </ul>
      </div>
      <div className={`h-12 ${color} rounded-t-sm`} />
    </div>
  )
}

export default PagesCard
