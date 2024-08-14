import React from 'react'
import Container from './Container'
import Fp from "../assets/fp.png"
import Fpd from "../assets/fpd.png"

const Featured = () => {
    return (
        <>
            <div className="font-jsans py-[100px]">
                <Container>
                    <h4 className='text-[42px] text-[#1A0B5B] text-center font-bold'>Featured Products</h4>
                    <div className="w-[100%]">
                        <div className="w-[20%] shadow-md ... text-center">
                            <div className="py-[50px] px-[50px] bg-[#F6F7FB]">
                                <img src={Fp} alt="" />
                            </div>
                            <div className="py-5 hover:bg-[#2F1AC4] transition duration-700 ease-in-out ... hover:text-white text-[#151875]">
                                <h5 className='text-[#FB2E86] text-[18px] hover:text-white'>Cantilever chair</h5>
                                <img className='ml-[40%] py-2' src={Fpd} alt="" />
                                <h4 className='text-[14px]'>Code - Y523201</h4>
                                <h6 className='text-[14px]'>$42.00</h6>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Featured
