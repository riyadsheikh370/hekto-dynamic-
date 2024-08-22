import React from 'react'
import Container from './Container'
import Bannerlight from "../assets/banner light.png"
import Bannerchair from "../assets/banner chair.png"

const Banner = () => {
    return (
        <>
            <section className='bg-[#F2F0FF] h-[764px] w-full'>
                <Container>
                    <div className="flex w-[100%] justify-between">
                        <div className="w-[20%]">
                            <img src={Bannerlight} alt="" />
                        </div>
                        <div className="w-[45%]">
                            <h5 className='mt-[200px] font-jsans pink text-[16px]'>Best Furniture For Your Castle....</h5>
                            <h4 className='leading-[81.98px] font-jsans text-[#000000] text-[53px] font-bold'>New Furniture Collection
                                Trends in 2024</h4>
                            <h6 className='pb-[20px] font-jsans text-[#8A8FB9] text-[16px] font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                                in phasellus non in justo.</h6>
                            <h4 className='font-jsans text-center text-[white] py-[10px] w-[150px] text-[17px] bgpink'>Shop Now</h4>
                        </div>
                        <div className="w-[35%]">
                            <img className='pt-[90px]' src={Bannerchair} alt="" />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Banner
