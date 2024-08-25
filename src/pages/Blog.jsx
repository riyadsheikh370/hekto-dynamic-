import React from 'react'
import Container from "../components/Container"
import { Link } from "react-router-dom"
import Blog1 from "../assets/blog1.png"
import Blog2 from "../assets/blog2.png"
import Blog3 from "../assets/blog3.png"
import Grp from "../assets/grp.png"
import Clogo from "../assets/clogo.png"

const Blog = () => {
    return (
        <>
            <section>
                <div className="text-start bg-[#F6F5FF] py-[50px]">
                    <Container>
                        <h1 className='text-start'>Blog Page</h1>
                        <h5 className='text-[12px] font-sans dark-b'><Link to="/">Home</Link> | Blog</h5>
                    </Container>
                </div>
                <Container>
                    <div className="flex justify-between py-[90px]">
                        <div className="w-[70%] rounded pb-[30px]">
                            <img className='h-[500px] w-[100%] rounded' src={Blog1} alt="" />
                            <div className="flex dark-b text-[14px] font-semibold gap-x-5 pt-[20px] pb-[25px] pl-4">
                                <h4>SaberAli</h4>
                                <h4>21 August,2020</h4>
                            </div>
                            <h4 className='text-[18px] dark-b hover:text-[#FB2E86] pl-4'>Mauris at orci non vulputate diam tincidunt nec.</h4>
                            <p className='text-[#72718F] text-[16px] py-[30px] px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
                            <span className='nav text-[16px] dark-b hover:text-[#FB2E86] pl-4 font-bold'>Read More</span>
                        </div>
                        <div className="w-[20%]">
                            <img src={Grp} alt="" />
                        </div>
                    </div>
                    <div className="w-[70%] rounded pb-[30px]">
                        <img className='h-[500px] w-[100%] rounded' src={Blog2} alt="" />
                        <div className="flex dark-b text-[14px] font-semibold gap-x-5 pt-[20px] pb-[25px] pl-4">
                            <h4>SaberAli</h4>
                            <h4>21 August,2020</h4>
                        </div>
                        <h4 className='text-[18px] dark-b hover:text-[#FB2E86] pl-4'>Mauris at orci non vulputate diam tincidunt nec.</h4>
                        <p className='text-[#72718F] text-[16px] py-[30px] px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
                        <span className='nav text-[16px] dark-b hover:text-[#FB2E86] pl-4 font-bold'>Read More</span>
                    </div>
                    <div className="w-[70%] rounded pb-[30px]">
                        <img className='h-[500px] w-[100%] rounded' src={Blog3} alt="" />
                        <div className="flex dark-b text-[14px] font-semibold gap-x-5 pt-[20px] pb-[25px] pl-4">
                            <h4>SaberAli</h4>
                            <h4>21 August,2020</h4>
                        </div>
                        <h4 className='text-[18px] dark-b hover:text-[#FB2E86] pl-4'>Mauris at orci non vulputate diam tincidunt nec.</h4>
                        <p className='text-[#72718F] text-[16px] py-[30px] px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
                        <span className='nav text-[16px] dark-b hover:text-[#FB2E86] pl-4 font-bold'>Read More</span>
                    </div>
                    <div className="w-[40%] py-[100px] mx-auto">
                        <img src={Clogo} alt="" />
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Blog
