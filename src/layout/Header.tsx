import React from 'react'
import { NavValues } from '../util/constants'
const Header = (): JSX.Element => {
  return (
    <div>
      <nav className='flex items-center bg-gray-800 p-3 flex-wrap'>
        <ul className='sm:flex hidden gap-2 justify-end '>
          {NavValues.map(value => (
            <a key={value?.id} className='text-white'>{value?.name}</a>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Header
