import React from 'react'
import Logo from "../assets/logo.png"
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <section className='bg-[#F5F5F3]'>
      <div className="container mx-auto px-[20px] md:px-[0px]">
        <div className="main py-[55px] md:flex md:justify-between">

          <div className="w-[100%] flex-wrap  md:w-[40%]">
            <div className="mt-[30px] md:mt-0 w-[100%] md:w-[50%] image">
              <img src={Logo} alt="" />
            </div>

            <div className="w-[50%] justify-end ">
              <div className="relative">
                <input placeholder='Enter Email Address' className='w-[100%] h-[40px] bg-[#D9D9D9] mt-[40px] outline-none px-2' />
                <div className="absolute ml-[277px] bgpink mt-[-39px]">
                  <h4 className='font-jsans text-center text-[white]  py-[7px] w-[100px] text-[17px]'>Sign Up</h4>
                </div>
              </div>
            </div>

            <ul className='w-[100%] md:w-[50%] pt-[80px]'>
              <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6D6D6D] leading-[23px]'>Contact Info</li>
              <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6D6D6D] leading-[23px]'>17 Princess Road, London, Greater London NW1 8JR, UK</li>
            </ul>
          </div>
          <div className="w-[100%] md:w-[60%]">
            <div className="ul_box flex justify-between">
              <ul className='w-[33.3333333%]'>
                <li className='font-sans text-[16px] font-bold leading-[23px] pb-[10px]'>Catagories</li>
                <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6D6D6D] leading-[23px]'>Laptops & Computers</li>
                <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6D6D6D] leading-[23px]'>Cameras & Photography</li>
                <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6D6D6D] leading-[23px]'>Smart Phones & Tablets</li>
                <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6D6D6D] leading-[23px]'>Video Games & Consoles</li>
                <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6D6D6D] leading-[23px]'>Waterproof Headphones</li>
              </ul>
              <ul className='w-[33.3333333%] md:text-start'>
                <li className='font-sans text-[16px] font-bold leading-[23px] pb-[10px]'>Customer Care</li>
                <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6D6D6D] leading-[23px]'>My Account</li>
                <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6D6D6D] leading-[23px]'>Discount</li>
                <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6D6D6D] leading-[23px]'>Returns</li>
                <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6D6D6D] leading-[23px]'>Orders History</li>
                <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6D6D6D] leading-[23px]'>Order Tracking</li>
              </ul>
              <ul className='w-[33.3333333%]'>
                <li className='font-sans text-[16px] font-bold leading-[23px] pb-[10px]'>Pages</li>
                <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6D6D6D] leading-[23px]'>Blog</li>
                <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6D6D6D] leading-[23px]'>Browse the Shop</li>
                <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6D6D6D] leading-[23px]'>Category</li>
                <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6D6D6D] leading-[23px]'>Pre-Built Pages</li>
                <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6D6D6D] leading-[23px]'>Visual Composer Elements</li>
                <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6D6D6D] leading-[23px]'>WooCommerce Pages</li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" md:pt-[65px] pt-[30px] pb-[30px] md:justify-between flex flex-wrap justify-center">
          <div className="w-[40%]">
          <span className=' text-center font-sans text-[14px] font-[400] py-[3px] text-[#6D6D6D] leading-[23px]'>©Webecy - All Rights Reserved</span>
          </div>
          <div className="w-[30%] flex gap-x-[10px]">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer