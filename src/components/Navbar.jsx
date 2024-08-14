import React from 'react'
import Container from "./Container"
import Logo from "../assets/logo.png"
import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="bg-white font-jsans h-[60px]">
        <Container>
          <div className="flex w-[100%] h-[60px] items-center justify-between">
            <div className="w-[20%]">
              <img src={Logo} alt="" />
            </div>
            <div className="w-[30%]">
              <ul className='flex items-center'>
                <li className='flex items-center p-3 text-[16px] text-[#0D0E43] hover:text-[#FB2E86]'>
                  Home
                  <IoIosArrowDown />
                </li>
                <li className='flex items-center p-3 text-[16px] text-[#0D0E43] hover:text-[#FB2E86]'>
                  Pages
                  <IoIosArrowDown />
                </li>
                <li className='flex items-center p-3 text-[16px] text-[#0D0E43] hover:text-[#FB2E86]'>
                  Products
                  <IoIosArrowDown />
                </li>
                <li className='flex items-center p-3 text-[16px] text-[#0D0E43] hover:text-[#FB2E86]'>
                  Blog
                  <IoIosArrowDown />
                </li>
                <li className='flex items-center p-3 text-[16px] text-[#0D0E43] hover:text-[#FB2E86]'>
                  Shop
                  <IoIosArrowDown />
                </li>
                <li className='flex items-center  text-[16px] text-[#0D0E43] hover:text-[#FB2E86]'>
                  Contact
                  <IoIosArrowDown />
                </li>
              </ul>
            </div>
            <div className="w-[30%] justify-end ">
              <div className="relative">
                <input className='w-[100%] h-[30px] bg-[#D9D9D9] outline-none px-2' />
                <div className="absolute top-[50%] translate-y-[-50%] ml-[435px] py-[7px] px-[7px] bg-[#FB2E86]">
                  <FaSearch />
                </div>
              </div>
            </div>

          </div>
        </Container>
      </div>
    </>
  )
}

export default Navbar
