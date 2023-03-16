import React from 'react'

interface Props {
  name: String
  description: String
  price: Number
  specs: String[]
}

const PagesCard = (props: Props): JSX.Element => {
  const { name, description, price, specs } = props
  return (
    <div className='card h-40 border-1 border-gray-600 bg-white text-center w-96  transition duration-500  hover:scale-110 cursor-pointer rounded-md'>
      <h1>{name}</h1>
      <h1>{description}</h1>
      <h1>{price.toString()}</h1>
      <h1>{specs}</h1>
    </div>
  )
}

export default PagesCard
