import React from 'react'
import Container from "./Container"
import { CiMail } from "react-icons/ci";
import { MdAddCall } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";

const Header = () => {
  return (
    <>
      <div className="bg-[#7E33E0] h-[44px] w-full">
        <Container>
          <div className="flex w-[100%] justify-between font-jsans">
            <div className="w-[20%] flex h-[44px] items-center text-[#F1F1F1]">
              <CiMail />
              <h5 className='p-2'>mhhasanul@gmail.com</h5>
            </div>
            <div className="w-[20%] flex h-[44px] items-center text-[#F1F1F1]">
              <MdAddCall />
              <h5 className='p-2'>(12345)67890</h5>
            </div>
            <div className="w-[30%]">

            </div>
            <div className="flex w-[30%] text-[#F1F1F1]">
              <div className="flex w-[20%] h-[44px] items-center">
                <h5 className='p-2'>English</h5>
                <IoIosArrowDown />
              </div>
              <div className="flex w-[20%] h-[44px] items-center">
                <h5 className='p-2'>USD</h5>
                <IoIosArrowDown />
              </div>
              <div className="flex w-[20%] h-[44px] items-center">
                <h5 className='p-2'>Login</h5>
                <IoIosArrowDown />
              </div>
              <div className="flex w-[20%] h-[44px] items-center">
                <h5 className='p-2'>Whishlist</h5>
                <IoIosArrowDown />
              </div>
            </div>
            <div className="flex w-[10%] h-[44px] items-center text-[#F1F1F1] justify-end">
              <LuShoppingCart className='pl-[-30]' />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Header
