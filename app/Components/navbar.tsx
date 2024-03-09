import React from 'react'
import { FaChevronDown, FaRegHeart, FaShoppingCart, FaSearch   } from "react-icons/fa";


function NavBar() {
  return (
    <div className='pb-10 sm:pb-10 h-full border-b-4 '>
        <div className="flex justify-center bg-black text-white pt-2 pb-2 text-center">
            <p className=''>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="/products" className='underline'><b> ShopNow</b></a></p>
            <button className='pl-20 flex items-center hidden sm:hidden lg:flex md:hidden xl:flex'>English <FaChevronDown className='ml-2 top-1'/></button>
        </div>
        <div className='flex mt-10'>
            <div className='flex justify-between w-full lg:w-0 '>
            <a href="/" className='font-bold sm:ml-10 ml-10 md:ml-10 text-xl  '>PISHOP</a>
            <div className='flex flex-row gap-2 mr-20 items-center lg:hidden  md:visible text-xl rounded-md'>

                <FaSearch className='mr-1 '/>
                <FaRegHeart className=' ml-5 mr-5'/>
                <FaShoppingCart />
            </div>

            </div>
            <div className='flex flex-row justify-center w-full hidden md:ml-80 sm:hidden lg:flex'>

                <div className=' flex gap-10  mx-auto z-10 mr-40 md:flex md:ml-20 flex-nowrap' >
                    <a href='/' className='transition transform hover:translate-y-1 duration-300'>Home</a>
                    <a href='/contact' className='transition transform hover:translate-y-1 duration-300'>Contact</a>
                    <a href='/about' className='transition transform hover:translate-y-1 duration-300'>About</a>
                    <a href='login' className='transition transform hover:translate-y-1 duration-300'>Categories</a>
                </div>
                <div className='flex  items-center mr-0 lg:mr-80 xl:mr-0 lg:flex'>
                    <form className='flex items-center md:bg-transparent xl:bg-gray-100'>
                        <input type="text" placeholder='search' className='bg-inherit focus:outline-none p-2 md:hidden xl:flex'/>
                        <FaSearch className='mr-3'/>
                    </form>
                    <div className=' flex'>
                    <FaRegHeart className='text-xl ml-5 mr-5'/>
                    <FaShoppingCart />
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar
