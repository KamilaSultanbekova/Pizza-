import React from 'react'
import FootIcon from '../assets/footer-icons.png'

export default function Footer() {
  return (
    <div className='container mx-auto bg-black items-center px-20 py-20'>
          <div className='flex gap-20'>
            <div>
              <p className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 bg-clip-text text-transparent">pizzashop</p>
            </div>
            <div>
   <p className='text-xl text-gray-300 font-Muller hover:bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 hover:bg-clip-text hover:text-transparent cursor-pointer' >Home</p>          
       <ul>
                <li className='text-xl text-gray-400 font-Muller'>To Order</li>
                <li className='text-xl text-gray-400 font-Muller'>About Us</li>
                <li className='text-xl text-gray-400 font-Muller'>Events</li>
                <li className='text-xl text-gray-400 font-Muller'>Menu</li>
              </ul>
            </div>
            <div>
   <p className='text-xl text-gray-300 font-Muller hover:bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 hover:bg-clip-text hover:text-transparent cursor-pointer' >Menu</p>   
              <ul>
                <li className='text-xl text-gray-400 font-Muller'>3 Pizza 1 Free Coffee</li>
                <li className='text-xl text-gray-400 font-Muller'>2 Pizza for 1 Price</li>
                <li className='text-xl text-gray-400 font-Muller'>Kitchen Tour</li>
              </ul>
            </div>
            <div>
   <p className='text-xl text-gray-300 font-Muller hover:bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 hover:bg-clip-text hover:text-transparent cursor-pointer' >Events</p>            
     <ul>
                <li className='text-xl text-gray-400 font-Muller'>Show All</li>
                <li className='text-xl text-gray-400 font-Muller'>Seaproducts</li>
                <li className='text-xl text-gray-400 font-Muller'>Vegan</li>
                <li className='text-xl text-gray-400 font-Muller'>Meat</li>
              </ul>
            </div>
            <div>
              <p className='text-xl text-gray-300 font-Muller hover:bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 hover:bg-clip-text hover:text-transparent cursor-pointer' >About Us</p>
              <ul>
                <li className='text-xl text-gray-400 font-Muller'>Our History</li>
                <li className='text-xl text-gray-400 font-Muller'>Why We?</li>
              </ul>
            </div>
          </div>

          <div className='flex items-center justify-between mt-10 mr-4'>
            <p className='text-orange-400 text-xl'>+7 (937) 333-55-33</p>
            <img src={FootIcon} alt="" />
          </div>

    </div>
  )
}
