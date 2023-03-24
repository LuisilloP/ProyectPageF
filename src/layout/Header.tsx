import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavValues } from '../util/constants'
const Header = (): JSX.Element => {
  return (
    <header className='header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02 font-montserrat  h-14 z-10'>
      <div className='z-40'> <p className=' text-slate-800 font-bold '>Logo</p></div>
      <input type='checkbox' name='hamburger' id='hamburger' className='peer' hidden />
      <label htmlFor='hamburger' className='peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden'>
        <div aria-hidden='true' className='m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300' />
        <div aria-hidden='true' className='m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300' />
      </label>
      <div className='peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-white border-r shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0'>
        <div className='flex flex-col h-full justify-between lg:items-center lg:flex-row'>
          <ul className='pt-32 text-gray-700 space-y-8  lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0'>
            {NavValues.map(value => (
              <li className='border-b border-blue-900  lg:border-none' key={value.id}>
                <NavLink to={value.href} className='hover:text-gray-800 px-12 lg:px-0  '>{value?.name} </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </header>
  )
}

export default Header
