import React from 'react'
import {Link, NavLink} from 'react-router-dom'


const Navbar = () => {
    const active = ({isActive}) => isActive ? 'text-black' : 'text-slate-100'
  return (
    <>
   
        
    <nav className='relative h-32 w-32 ... border gap-5 bg-orange-500  text-slate-100 font-extrabold'>
      <nav className='absolute inset-y-0 left-5 w-16 ...'>
        {/* tag Link ini adalah pengganti a ( html ). */}
        <Link to='/' >Register</Link> <br />
        <NavLink to='/login' className={active}>Login</NavLink> <br />
        <NavLink to='/home' className={active} >Home</NavLink> <br />
        <NavLink to='/about' className={active}>About</NavLink> <br />
        <NavLink to='/countact' className={`${active} hover:text-black`}>Countact</NavLink>
        </nav>
        </nav>
       
        </>
        
  )
}

export default Navbar