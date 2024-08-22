import React from 'react'
import Container from "./Container"
import Banner from "../assets/banner2.png"

const Banner2 = () => {
    return (
        <>
            <section className='bg-[#F2F0FF] h-[764px] w-full'>
                <Container>
                    <div className="flex w-[100%]">
                        <div className="w-[50%]">
                            <img className='pt-[130px]' src={Banner} alt="" />
                        </div>
                        <div className="w-[50%]">
                            <h4 className='leading-[81.98px] pt-[180px] font-jsans text-[#000000] text-[53px] font-bold'>Unique Features Of leatest &
                            Trending Poducts</h4>
                            <h6 className='py-[50px] font-jsans text-[#8A8FB9] text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quia vel cumque minus, aliquid, repellat praesentium maiores placeat eveniet quasi doloremque vero autem consectetur et eligendi consequatur quam veritatis obcaecati.</h6>
                            <h4 className='font-jsans text-center text-[white] py-[10px] w-[150px] text-[17px] bgpink'>Shop Now</h4>
                        </div>

                    </div>
                </Container>
            </section>
        </>
    )
}

export default Banner2
