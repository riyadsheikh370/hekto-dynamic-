import React from 'react'
import Container from './Container'
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FaSearchPlus } from "react-icons/fa";
import Tp1 from "../assets/tp1.png"
import Tp2 from "../assets/tp2.png"
import Tp3 from "../assets/tp3.png"
import Fl4 from "../assets/fl4.png"
import Banner3 from "../assets/banner3.png"
import C1 from "../assets/c1.png"
import C2 from "../assets/c2.png"
import C3 from "../assets/c3.png"
import Banner3i from "../assets/banner3i.png"
import Clogo from "../assets/clogo.png"
import Lb1 from "../assets/lb1.png"
import Lb2 from "../assets/lb2.png"
import Lb3 from "../assets/lb3.png"

const TrendingP = () => {
    return (
        <>
            <section className='py-[90px] font-jsans'>
                <Container>
                    <h1 className='pb-[50px]'>Trending Products</h1>
                    <div className="flex justify-between">
                        <div className="w-[23%] shadow-md ... text-center">
                            <div className="py-[60px] px-[130px] bg-[#F6F7FB] relative group overflow-hidden">
                                <img className='h-[190px]' src={Tp1} alt="" />
                                <div className="h-[50px] w-[10%] absolute group-hover:left-[25px] left-[-260px] top-[-1px] duration-300 ease-in-out">
                                    <ul className='mt-[180px] text-[#1389FF] text-[20px]'>
                                        <li className='hover:text-[#151875]'><LuShoppingCart /></li>
                                        <li className='py-4 hover:text-[#151875]'><FaRegHeart /></li>
                                        <li className='hover:text-[#151875]'><FaSearchPlus /></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="py-3 text-[16px]">
                                <p className='dark-b'>Comfort Handy Craft</p>
                                <div className="flex justify-center py-3">
                                    <h5 className='dark-b px-2'>$42.00</h5>
                                    <h6 className='text-[#9c9ecc]'>$65.00</h6>
                                </div>
                            </div>
                        </div>


                        <div className="w-[23%] shadow-md ... text-center font-jsans">
                            <div className="py-[60px] px-[130px] bg-[#F6F7FB] relative group overflow-hidden">
                                <img className='h-[190px]' src={Tp2} alt="" />
                                <div className="h-[50px] w-[10%] absolute group-hover:left-[25px] left-[-260px] top-[-1px] duration-300 ease-in-out">
                                    <ul className='mt-[180px] text-[#1389FF] text-[20px]'>
                                        <li className='hover:text-[#151875]'><LuShoppingCart /></li>
                                        <li className='py-4 hover:text-[#151875]'><FaRegHeart /></li>
                                        <li className='hover:text-[#151875]'><FaSearchPlus /></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="py-3 text-[16px]">
                                <p className='dark-b'>Comfort Handy Craft</p>
                                <div className="flex justify-center py-3">
                                    <h5 className='dark-b px-2'>$42.00</h5>
                                    <h6 className='text-[#9c9ecc]'>$65.00</h6>
                                </div>
                            </div>
                        </div>


                        <div className="w-[23%] shadow-md ... text-center font-jsans">
                            <div className="py-[60px] px-[130px] bg-[#F6F7FB] relative group overflow-hidden">
                                <img className='h-[190px]' src={Tp3} alt="" />
                                <div className="h-[50px] w-[10%] absolute group-hover:left-[25px] left-[-260px] top-[-1px] duration-300 ease-in-out">
                                    <ul className='mt-[180px] text-[#1389FF] text-[20px]'>
                                        <li className='hover:text-[#151875]'><LuShoppingCart /></li>
                                        <li className='py-4 hover:text-[#151875]'><FaRegHeart /></li>
                                        <li className='hover:text-[#151875]'><FaSearchPlus /></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="py-3 text-[16px]">
                                <p className='dark-b'>Comfort Handy Craft</p>
                                <div className="flex justify-center py-3">
                                    <h5 className='dark-b px-2'>$42.00</h5>
                                    <h6 className='text-[#9c9ecc]'>$65.00</h6>
                                </div>
                            </div>
                        </div>

                        <div className="w-[23%] shadow-md ... text-center font-jsans">
                            <div className="py-[60px] px-[130px] bg-[#F6F7FB] relative group overflow-hidden">
                                <img className='h-[190px]' src={Fl4} alt="" />
                                <div className="h-[50px] w-[10%] absolute group-hover:left-[25px] left-[-260px] top-[-1px] duration-300 ease-in-out">
                                    <ul className='mt-[180px] text-[#1389FF] text-[20px]'>
                                        <li className='hover:text-[#151875]'><LuShoppingCart /></li>
                                        <li className='py-4 hover:text-[#151875]'><FaRegHeart /></li>
                                        <li className='hover:text-[#151875]'><FaSearchPlus /></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="py-3 text-[16px]">
                                <p className='dark-b'>Comfort Handy Craft</p>
                                <div className="flex justify-center py-3">
                                    <h5 className='dark-b px-2'>$42.00</h5>
                                    <h6 className='text-[#9c9ecc]'>$65.00</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-[90px]">
                        <h1>Discount Item</h1>
                        <div className="w-[33%] mx-auto">
                            <ul className='flex pb-[60px] justify-center'>
                                <li className='nav'>Wood Chair</li>
                                <li className='nav'>Plastic Chair</li>
                                <li className='nav'>Sofa Colletion</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex w-[100%]">
                        <div className="w-[50%] justify-end">
                            <h4 className='leading-[81.98px] pt-[170px] font-jsans text-[#000000] text-[53px] font-bold'>20% Discount Of All Products</h4>
                            <h5 className='font-jsans pink text-[21px] py-[25px]'>Eams Sofa Compact</h5>
                            <h6 className='pb-[20px] font-jsans text-[#8A8FB9] text-[16px] font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</h6>
                            <h6 className='pb-[20px] font-jsans text-[#8A8FB9] text-[16px] font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</h6>
                            <h4 className='font-jsans text-center text-[white] py-[10px] w-[150px] text-[17px] bgpink'>Shop Now</h4>
                        </div>
                        <div className="w-[50%]">
                            <img className='' src={Banner3} alt="" />
                        </div>
                    </div>


                    <h1>Top Categories</h1>
                    <div className="flex justify-between">
                        <div className="w-[23%] text-center font-jsans">
                            <div className="relative group overflow-hidden">
                                <img className='h-[380px]' src={C3} alt="" />
                                <div className="h-[250px] w-[100%] absolute group-hover:top-[270px] top-[-260px] left-[120px] duration-300 ease-in-out">
                                    <div className="bg-[#08D15F] py-[7px] w-[120px]">
                                        <h4 className='text-white'>View Shop</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="py-3 text-[16px]">
                                <p className='dark-b'>Mini LCW Chair</p>
                                <div className="flex justify-center py-3">
                                    <h5 className='dark-b px-2'>$56.00</h5>
                                </div>
                            </div>
                        </div>
                        <div className="w-[23%] text-center font-jsans">
                            <div className="relative group overflow-hidden">
                                <img className='h-[380px]' src={C1} alt="" />
                                <div className="h-[250px] w-[100%] absolute group-hover:top-[270px] top-[-260px] left-[120px] duration-300 ease-in-out">
                                    <div className="bg-[#08D15F] py-[7px] w-[120px]">
                                        <h4 className='text-white'>View Shop</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="py-3 text-[16px]">
                                <p className='dark-b'>Mini LCW Chair</p>
                                <div className="flex justify-center py-3">
                                    <h5 className='dark-b px-2'>$56.00</h5>
                                </div>
                            </div>
                        </div>
                        <div className="w-[23%] text-center font-jsans">
                            <div className="relative group overflow-hidden">
                                <img className='h-[380px]' src={C2} alt="" />
                                <div className="h-[250px] w-[100%] absolute group-hover:top-[270px] top-[-260px] left-[120px] duration-300 ease-in-out">
                                    <div className="bg-[#08D15F] py-[7px] w-[120px]">
                                        <h4 className='text-white'>View Shop</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="py-3 text-[16px]">
                                <p className='dark-b'>Mini LCW Chair</p>
                                <div className="flex justify-center py-3">
                                    <h5 className='dark-b px-2'>$56.00</h5>
                                </div>
                            </div>
                        </div>
                        <div className="w-[23%] text-center font-jsans">
                            <div className="relative group overflow-hidden">
                                <img className='h-[380px]' src={C3} alt="" />
                                <div className="h-[250px] w-[100%] absolute group-hover:top-[270px] top-[-260px] left-[120px] duration-300 ease-in-out">
                                    <div className="bg-[#08D15F] py-[7px] w-[120px]">
                                        <h4 className='text-white'>View Shop</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="py-3 text-[16px]">
                                <p className='dark-b'>Mini LCW Chair</p>
                                <div className="flex justify-center py-3">
                                    <h5 className='dark-b px-2'>$56.00</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="py-[100px]">
                        <img src={Banner3i} alt="" />
                    </div>
                    <div className="w-[40%] pb-[100px] mx-auto">
                        <img src={Clogo} alt="" />
                    </div>

                    <h1>Leatest Blog</h1>

                    <div className="flex justify-between">
                        <div className="w-[30%] shadow-lg rounded py-[20px]">
                            <img className='h-[300px] w-[100%] rounded' src={Lb1} alt="" />
                            <div className="flex dark-b text-[14px] font-semibold gap-x-5 pt-[20px] pb-[25px] pl-4">
                                <h4>SaberAli</h4>
                                <h4>21 August,2020</h4>
                            </div>
                            <h4 className='text-[18px] dark-b hover:text-[#FB2E86] pl-4'>Top esssential Trends in 2021</h4>
                            <p className='text-[#72718F] text-[16px] py-[30px] px-4'>More off this less hello samlande lied much
                                over tightly circa horse taped mightly</p>
                            <span className='nav text-[16px] dark-b hover:text-[#FB2E86] pl-4'>Read More</span>
                        </div>
                        <div className="w-[30%] shadow-lg rounded py-[20px]">
                            <img className='h-[300px] w-[100%] rounded' src={Lb2} alt="" />
                            <div className="flex dark-b text-[14px] font-semibold gap-x-5 pt-[20px] pb-[25px] pl-4">
                                <h4>SaberAli</h4>
                                <h4>21 August,2020</h4>
                            </div>
                            <h4 className='text-[18px] dark-b hover:text-[#FB2E86] pl-4'>Top esssential Trends in 2021</h4>
                            <p className='text-[#72718F] text-[16px] py-[30px] px-4'>More off this less hello samlande lied much
                                over tightly circa horse taped mightly</p>
                            <span className='nav text-[16px] dark-b hover:text-[#FB2E86] pl-4'>Read More</span>
                        </div>
                        <div className="w-[30%] shadow-lg rounded py-[20px]">
                            <img className='h-[300px] w-[100%] rounded' src={Lb3} alt="" />
                            <div className="flex dark-b text-[14px] font-semibold gap-x-5 pt-[20px] pb-[25px] pl-4">
                                <h4>SaberAli</h4>
                                <h4>21 August,2020</h4>
                            </div>
                            <h4 className='text-[18px] dark-b hover:text-[#FB2E86] pl-4'>Top esssential Trends in 2021</h4>
                            <p className='text-[#72718F] text-[16px] py-[30px] px-4'>More off this less hello samlande lied much
                                over tightly circa horse taped mightly</p>
                            <span className='nav text-[16px] dark-b hover:text-[#FB2E86] pl-4'>Read More</span>
                        </div>
                    </div>

                </Container>
            </section>
        </>
    )
}

export default TrendingP
