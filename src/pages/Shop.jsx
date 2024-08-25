import React from 'react'
import Container from '../components/Container'
import { Link } from "react-router-dom"
import Sf1 from "../assets/sf1.png"
import Sf2 from "../assets/sf2.png"
import Sf3 from "../assets/sf3.png"
import Sf4 from "../assets/sf4.png"
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FaSearchPlus } from "react-icons/fa";

const Shop = () => {
    return (
        <>
            <section>
                <div className="text-start bg-[#F6F5FF] py-[50px]">
                    <Container>
                        <h1 className='text-start'>Shop List</h1>
                        <h5 className='text-[12px] font-sans dark-b'><Link to="/">Home</Link> | Shop</h5>
                    </Container>
                </div>
                <Container>
                    <div className="py-[80px]">
                        <div className="flex justify-between w-[70%]">
                            <div className="w-[50%]">
                                <img className='h-[300px] w-[100%] rounded' src={Sf1} alt="" />
                            </div>
                            <div className="pl-[50px] pt-[50px]">
                                <h4 className='text-[18px] dark-b hover:text-[#FB2E86] font-bold'>Accumsan tincidunt</h4>
                                <div className="flex dark-b text-[14px] font-semibold gap-x-5 pt-[20px] pb-[25px]">
                                    <h4>SaberAli</h4>
                                    <h4>21 August,2020</h4>
                                </div>
                                <p className='text-[#72718F] text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                <ul className='flex gap-x-6 text-[#1389FF] pb-[200px] text-[20px] pt-[30px]'>
                                    <li className='hover:text-[#151875]'><LuShoppingCart /></li>
                                    <li className='hover:text-[#151875]'><FaRegHeart /></li>
                                    <li className='hover:text-[#151875]'><FaSearchPlus /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-between w-[70%]">
                            <div className="w-[50%]">
                                <img className='h-[300px] w-[100%] rounded' src={Sf2} alt="" />
                            </div>
                            <div className="pl-[50px] pt-[50px]">
                                <h4 className='text-[18px] dark-b hover:text-[#FB2E86] font-bold'>In nulla</h4>
                                <div className="flex dark-b text-[14px] font-semibold gap-x-5 pt-[20px] pb-[25px]">
                                    <h4>SaberAli</h4>
                                    <h4>21 August,2020</h4>
                                </div>
                                <p className='text-[#72718F] text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                <ul className='flex gap-x-6 text-[#1389FF] pb-[200px] text-[20px] pt-[30px]'>
                                    <li className='hover:text-[#151875]'><LuShoppingCart /></li>
                                    <li className='hover:text-[#151875]'><FaRegHeart /></li>
                                    <li className='hover:text-[#151875]'><FaSearchPlus /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-between w-[70%]">
                            <div className="w-[50%]">
                                <img className='h-[300px] w-[100%] rounded' src={Sf3} alt="" />
                            </div>
                            <div className="pl-[50px] pt-[50px]">
                                <h4 className='text-[18px] dark-b hover:text-[#FB2E86] font-bold'>Curabitur lectus</h4>
                                <div className="flex dark-b text-[14px] font-semibold gap-x-5 pt-[20px] pb-[25px]">
                                    <h4>SaberAli</h4>
                                    <h4>21 August,2020</h4>
                                </div>
                                <p className='text-[#72718F] text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                <ul className='flex gap-x-6 text-[#1389FF] pb-[200px] text-[20px] pt-[30px]'>
                                    <li className='hover:text-[#151875]'><LuShoppingCart /></li>
                                    <li className='hover:text-[#151875]'><FaRegHeart /></li>
                                    <li className='hover:text-[#151875]'><FaSearchPlus /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-between w-[70%]">
                            <div className="w-[50%]">
                                <img className='h-[300px] w-[100%] rounded' src={Sf4} alt="" />
                            </div>
                            <div className="pl-[50px] pt-[50px]">
                                <h4 className='text-[18px] dark-b hover:text-[#FB2E86] font-bold'>Nunc in</h4>
                                <div className="flex dark-b text-[14px] font-semibold gap-x-5 pt-[20px] pb-[25px]">
                                    <h4>SaberAli</h4>
                                    <h4>21 August,2020</h4>
                                </div>
                                <p className='text-[#72718F] text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                <ul className='flex gap-x-6 text-[#1389FF] pb-[200px] text-[20px] pt-[30px]'>
                                    <li className='hover:text-[#151875]'><LuShoppingCart /></li>
                                    <li className='hover:text-[#151875]'><FaRegHeart /></li>
                                    <li className='hover:text-[#151875]'><FaSearchPlus /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-between w-[70%]">
                            <div className="w-[50%]">
                                <img className='h-[300px] w-[100%] rounded' src={Sf1} alt="" />
                            </div>
                            <div className="pl-[50px] pt-[50px]">
                                <h4 className='text-[18px] dark-b hover:text-[#FB2E86] font-bold'>Accumsan tincidunt</h4>
                                <div className="flex dark-b text-[14px] font-semibold gap-x-5 pt-[20px] pb-[25px]">
                                    <h4>SaberAli</h4>
                                    <h4>21 August,2020</h4>
                                </div>
                                <p className='text-[#72718F] text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                <ul className='flex gap-x-6 text-[#1389FF] pb-[200px] text-[20px] pt-[30px]'>
                                    <li className='hover:text-[#151875]'><LuShoppingCart /></li>
                                    <li className='hover:text-[#151875]'><FaRegHeart /></li>
                                    <li className='hover:text-[#151875]'><FaSearchPlus /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-between w-[70%]">
                            <div className="w-[50%]">
                                <img className='h-[300px] w-[100%] rounded' src={Sf2} alt="" />
                            </div>
                            <div className="pl-[50px] pt-[50px]">
                                <h4 className='text-[18px] dark-b hover:text-[#FB2E86] font-bold'>In nulla</h4>
                                <div className="flex dark-b text-[14px] font-semibold gap-x-5 pt-[20px] pb-[25px]">
                                    <h4>SaberAli</h4>
                                    <h4>21 August,2020</h4>
                                </div>
                                <p className='text-[#72718F] text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                <ul className='flex gap-x-6 text-[#1389FF] pb-[200px] text-[20px] pt-[30px]'>
                                    <li className='hover:text-[#151875]'><LuShoppingCart /></li>
                                    <li className='hover:text-[#151875]'><FaRegHeart /></li>
                                    <li className='hover:text-[#151875]'><FaSearchPlus /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-between w-[70%]">
                            <div className="w-[50%]">
                                <img className='h-[300px] w-[100%] rounded' src={Sf3} alt="" />
                            </div>
                            <div className="pl-[50px] pt-[50px]">
                                <h4 className='text-[18px] dark-b hover:text-[#FB2E86] font-bold'>Curabitur lectus</h4>
                                <div className="flex dark-b text-[14px] font-semibold gap-x-5 pt-[20px] pb-[25px]">
                                    <h4>SaberAli</h4>
                                    <h4>21 August,2020</h4>
                                </div>
                                <p className='text-[#72718F] text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                <ul className='flex gap-x-6 text-[#1389FF] pb-[200px] text-[20px] pt-[30px]'>
                                    <li className='hover:text-[#151875]'><LuShoppingCart /></li>
                                    <li className='hover:text-[#151875]'><FaRegHeart /></li>
                                    <li className='hover:text-[#151875]'><FaSearchPlus /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Shop
