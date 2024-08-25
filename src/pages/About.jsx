import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom';
import Ab from "../assets/ab.png"
import Sp from "../assets/sp.png"
import Sp2 from "../assets/sp2.png"
import Sp3 from "../assets/sp3.png"
import Sp4 from "../assets/sp4.png"
import Os from "../assets/os.png"

const About = () => {
    return (
        <>
            <section>
                <div className="text-start bg-[#F6F5FF] py-[50px]">
                    <Container>
                        <h1 className='text-start'>About Us</h1>
                        <h5 className='text-[12px] font-sans dark-b'><Link to="/">Home</Link> | About</h5>
                    </Container>
                </div>
                <Container>
                    <div className="flex w-[100%]">
                        <div className="w-[50%]">
                            <img className='pt-[130px]' src={Ab} alt="" />
                        </div>
                        <div className="w-[50%]">
                            <h4 className='leading-[81.98px] pt-[180px] font-jsans text-[#000000] text-[53px] font-bold'>Know About Our Ecomerce
                                Business, History</h4>
                            <h6 className='py-[50px] font-jsans text-[#8A8FB9] text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quia vel cumque minus, aliquid, repellat praesentium maiores placeat eveniet quasi doloremque vero autem consectetur et eligendi consequatur quam veritatis obcaecati.</h6>
                            <h4 className='rounded font-jsans text-center text-[white] py-[10px] w-[150px] text-[17px] bgpink'>Contact us</h4>
                        </div>
                    </div>
                    <div className="py-[100px]">
                        <h1>Our Features</h1>
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
                    </div>
                    <div className="">
                        <h1>Our Client Say!</h1>
                        <div className="w-[40%] mx-auto pt-[40px] pb-[140px]">
                            <img src={Os} alt="" />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default About
