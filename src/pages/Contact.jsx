import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom';
import Ct1 from "../assets/ct1.png"

const Contact = () => {
    return (
        <>
            <section>
                <div className="text-start bg-[#F6F5FF] py-[50px]">
                    <Container>
                        <h1 className='text-start'>Contact Us</h1>
                        <h5 className='text-[12px] font-sans dark-b'><Link to="/">Home</Link> | Contact</h5>
                    </Container>
                </div>
                <Container>
                    <div className="py-[120px]">
                        <h1 className='text-start'>Information About us</h1>
                        <div className="w-[50%]">
                            <p className='font-jsans text-[#8A8FB9] text-[16px] font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                        </div>
                        <div className="flex justify-between py-[200px]">
                            <div className="w-[50%]">
                                <h1 className='text-start'>Get In Touch</h1>
                                <p className='font-jsans text-[#8A8FB9] text-[16px] font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
                                <div className="flex justify-between pt-[70px]">
                                    <input
                                        placeholder='Your Name*'
                                        className='w-[48%] h-[40px] border-2 border-[#A4B6C8] outline-none px-2 rounded'
                                    />
                                    <input
                                        placeholder='Your E-mail'
                                        className='w-[48%] h-[40px] border-2 border-[#A4B6C8] outline-none px-2 rounded'
                                    />
                                </div>
                                <input
                                    placeholder='Subject*'
                                    className='w-full h-[40px] my-[40px] border-2 border-[#A4B6C8] outline-none px-2 rounded'
                                />
                                <input
                                    placeholder='Type Your Messege*'
                                    className='w-full h-[200px] border-2 border-[#A4B6C8] outline-none px-2 rounded'
                                />
                                <h4 className='font-jsans text-center text-[white] py-[10px] w-[150px] text-[17px] bgpink rounded my-[40px]'>Send Mail</h4>
                            </div>
                            <div className="w-[50%]">
                                <img className='h-[700px] w-full' src={Ct1} alt="" />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Contact
