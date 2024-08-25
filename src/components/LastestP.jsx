import React from 'react'
import Container from "./Container"
import Fp from "../assets/fp.png"
import Pl1 from "../assets/pl1.png"
import Pl2 from "../assets/pl2.png"
import Pl3 from "../assets/fl3.png"
import Pl4 from "../assets/fl4.png"
import Pl5 from "../assets/fl5.png"
import Sp from "../assets/sp.png"
import Sp2 from "../assets/sp2.png"
import Sp3 from "../assets/sp3.png"
import Sp4 from "../assets/sp4.png"
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FaSearchPlus } from "react-icons/fa";

const LastestP = () => {
    return (
        <>
            <section className='pt-[30px]'>
                <Container>
                    <h1>Leatest Products</h1>
                    <div className="w-[33%] mx-auto">
                        <ul className='flex pb-[60px] justify-center'>
                            <li className='nav'>New Arrival</li>
                            <li className='nav'>Best Seller</li>
                            <li className='nav'>Featured</li>
                            <li className='nav'>Special Offer</li>
                        </ul>
                    </div>
                    <div className="flex justify-between">
                        <div className="w-[30%] shadow-md ... text-center font-jsans">
                            <div className="py-[60px] px-[130px] bg-[#F6F7FB] relative group overflow-hidden">
                                <img className='h-[229px] w-[223px]' src={Pl1} alt="" />
                                <div className="h-[50px] w-[10%] absolute group-hover:left-[25px] left-[-260px] top-[-1px] duration-300 ease-in-out">
                                    <ul className='mt-[180px] text-[#1389FF] text-[20px]'>
                                        <li className='hover:text-[#151875]'><LuShoppingCart /></li>
                                        <li className='py-4 hover:text-[#151875]'><FaRegHeart /></li>
                                        <li className='hover:text-[#151875]'><FaSearchPlus /></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex justify-between py-3 text-[16px]">
                                <p className='dark-b'>Comfort Handy Craft</p>
                                <div className="flex">
                                    <h5 className='dark-b px-2'>$42.00</h5>
                                    <h6 className='pink'>$65.00</h6>
                                </div>
                            </div>
                        </div>
                        <div className="w-[30%] shadow-md ... text-center font-jsans">
                            <div className="py-[60px] px-[130px] bg-[#F6F7FB] relative group overflow-hidden">
                                <img className='h-[229px] w-[223px]' src={Pl2} alt="" />
                                <div className="h-[50px] w-[10%] absolute group-hover:left-[25px] left-[-260px] top-[-1px] duration-300 ease-in-out">
                                    <ul className='mt-[180px] text-[#1389FF] text-[20px]'>
                                        <li className='hover:text-[#151875]'><LuShoppingCart /></li>
                                        <li className='py-4 hover:text-[#151875]'><FaRegHeart /></li>
                                        <li className='hover:text-[#151875]'><FaSearchPlus /></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex justify-between py-3 text-[16px]">
                                <p className='dark-b'>Comfort Handy Craft</p>
                                <div className="flex">
                                    <h5 className='dark-b px-2'>$42.00</h5>
                                    <h6 className='pink'>$65.00</h6>
                                </div>
                            </div>
                        </div>
                        <div className="w-[30%] shadow-md ... text-center font-jsans">
                            <div className="py-[60px] px-[130px] bg-[#F6F7FB] relative group overflow-hidden">
                                <img className='h-[229px] w-[223px]' src={Fp} alt="" />
                                <div className="h-[50px] w-[10%] absolute group-hover:left-[25px] left-[-260px] top-[-1px] duration-300 ease-in-out">
                                    <ul className='mt-[180px] text-[#1389FF] text-[20px]'>
                                        <li className='hover:text-[#151875]'><LuShoppingCart /></li>
                                        <li className='py-4 hover:text-[#151875]'><FaRegHeart /></li>
                                        <li className='hover:text-[#151875]'><FaSearchPlus /></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex justify-between py-3 text-[16px]">
                                <p className='dark-b'>Comfort Handy Craft</p>
                                <div className="flex">
                                    <h5 className='dark-b px-2'>$42.00</h5>
                                    <h6 className='pink'>$65.00</h6>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="flex justify-between pt-[120px] pb-[60px]">
                        <div className="w-[30%] shadow-md ... text-center font-jsans">
                            <div className="py-[60px] px-[130px] bg-[#F6F7FB] relative group overflow-hidden">
                                <img className='h-[229px] w-[223px]' src={Pl3} alt="" />
                                <div className="h-[50px] w-[10%] absolute group-hover:left-[25px] left-[-260px] top-[-1px] duration-300 ease-in-out">
                                    <ul className='mt-[180px] text-[#1389FF] text-[20px]'>
                                        <li className='hover:text-[#151875]'><LuShoppingCart /></li>
                                        <li className='py-4 hover:text-[#151875]'><FaRegHeart /></li>
                                        <li className='hover:text-[#151875]'><FaSearchPlus /></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex justify-between py-3 text-[16px]">
                                <p className='dark-b'>Comfort Handy Craft</p>
                                <div className="flex">
                                    <h5 className='dark-b px-2'>$42.00</h5>
                                    <h6 className='pink'>$65.00</h6>
                                </div>
                            </div>
                        </div>
                        <div className="w-[30%] shadow-md ... text-center font-jsans">
                            <div className="py-[60px] px-[130px] bg-[#F6F7FB] relative group overflow-hidden">
                                <img className='h-[229px] w-[223px]' src={Pl4} alt="" />
                                <div className="h-[50px] w-[10%] absolute group-hover:left-[25px] left-[-260px] top-[-1px] duration-300 ease-in-out">
                                    <ul className='mt-[180px] text-[#1389FF] text-[20px]'>
                                        <li className='hover:text-[#151875]'><LuShoppingCart /></li>
                                        <li className='py-4 hover:text-[#151875]'><FaRegHeart /></li>
                                        <li className='hover:text-[#151875]'><FaSearchPlus /></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex justify-between py-3 text-[16px]">
                                <p className='dark-b'>Comfort Handy Craft</p>
                                <div className="flex">
                                    <h5 className='dark-b px-2'>$42.00</h5>
                                    <h6 className='pink'>$65.00</h6>
                                </div>
                            </div>
                        </div>
                        <div className="w-[30%] shadow-md ... text-center font-jsans">
                            <div className="py-[60px] px-[130px] bg-[#F6F7FB] relative group overflow-hidden">
                                <img className='h-[229px] w-[223px]' src={Pl5} alt="" />
                                <div className="h-[50px] w-[10%] absolute group-hover:left-[25px] left-[-260px] top-[-1px] duration-300 ease-in-out">
                                    <ul className='mt-[180px] text-[#1389FF] text-[20px]'>
                                        <li className='hover:text-[#151875]'><LuShoppingCart /></li>
                                        <li className='py-4 hover:text-[#151875]'><FaRegHeart /></li>
                                        <li className='hover:text-[#151875]'><FaSearchPlus /></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex justify-between py-3 text-[16px]">
                                <p className='dark-b'>Comfort Handy Craft</p>
                                <div className="flex">
                                    <h5 className='dark-b px-2'>$42.00</h5>
                                    <h6 className='pink'>$65.00</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h1>What Shopex Offer!</h1>
                    <div className="flex justify-between py-[100px]">
                        <div className="shadow-md ... w-[23%] h-[300px] text-center">
                            <img className='mx-auto pt-[60px]' src={Sp} alt="" />
                            <h4 className='text-[22px] py-5 dark-b font-bold'>24/7 Support</h4>
                            <p className='text-[16px] text-[#a1a3d3]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div>
                        <div className="shadow-md ... w-[23%] h-[300px] text-center">
                            <img className='mx-auto pt-[60px]' src={Sp2} alt="" />
                            <h4 className='text-[22px] py-5 dark-b font-bold'>24/7 Support</h4>
                            <p className='text-[16px] text-[#a1a3d3]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div>
                        <div className="shadow-md ... w-[23%] h-[300px] text-center">
                            <img className='mx-auto pt-[60px]' src={Sp3} alt="" />
                            <h4 className='text-[22px] py-5 dark-b font-bold'>24/7 Support</h4>
                            <p className='text-[16px] text-[#a1a3d3]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div>
                        <div className="shadow-md ... w-[23%] h-[300px] text-center">
                            <img className='mx-auto pt-[60px]' src={Sp4} alt="" />
                            <h4 className='text-[22px] py-5 dark-b font-bold'>24/7 Support</h4>
                            <p className='text-[16px] text-[#a1a3d3]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default LastestP
