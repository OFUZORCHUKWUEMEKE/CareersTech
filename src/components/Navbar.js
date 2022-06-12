import React from 'react'
import Avatar from '@mui/material/Avatar';
import Payments from './Payments';

const Navbar = () => {
    return (
        <>
            <nav className='p-10'>
                <ul className='flex flex-row space-x-4 md:space-x-10 justify-center md:justify-end'>
                    <h3 className='cursor-pointer font-bold hover:text-blue-500 text-gray-500'>TRIPS</h3>
                    <h3 className='cursor-pointer font-bold hover:text-blue-500 text-gray-500'>RECENTLY VIEWED</h3>
                    <h3 className='cursor-pointer font-bold hover:text-blue-500 text-gray-500'>BOOKINGS</h3>
                    <Avatar className='cursor-pointer' alt="Cindy Baker" src="https://i.pinimg.com/originals/f2/d1/cb/f2d1cbd9f0eee40b6a2631bd944d2b1b.jpg" />
                </ul>
            </nav>
          
        </>
    )
}

export default Navbar