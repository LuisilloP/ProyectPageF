import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavValues } from '../util/constants'
const Header = (): JSX.Element => {
  return (
    <header className='header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02 font-montserrat  h-14 z-10'>
      <div> <p className=' text-slate-800 font-bold'>Logo</p></div>

      <svg className='w-5 text-gray-600  sm:hidden ' viewBox='0 0 24 24'>
        <path fill='currentColor' d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z' />
        <path fill='currentColor' d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z' />
        <path fill='currentColor' d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z' />
      </svg>

      <nav className='disabled sm:flex hidden text-gray-600   items-center p-3 flex-wrap '>
        <ul className=' flex gap-10 justify-end '>
          {NavValues.map(value => (
            <li key={value.id}>
              <NavLink to={value.href} className='hover:text-gray-800 '>{value?.name} </NavLink>
            </li>
          ))}
        </ul>
      </nav>

    </header>
  )
}

export default Header
