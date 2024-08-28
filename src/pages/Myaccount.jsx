import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import Me from "../assets/mee.jpg"

const Myaccount = () => {

    return (
        <>
            <section>
                <div className="text-start bg-[#F6F5FF] py-[50px]">
                    <Container>
                        <h1 className='text-start'>My Account</h1>
                        <h5 className='text-[12px] font-sans dark-b'><Link to="/">Home</Link> | My Account</h5>
                    </Container>
                </div>
                <Container>
                    <div className="py-[70px]">
                        <div className="rounded-[30px] bg-[#F6F5FF] p-[50px] flex gap-[20px] w-[100%]">
                            <div className="w-[40%] mx-auto">
                                <div className="w-[200px] h-[200px] flex justify-center items-center bg-[#4e4e4e] mx-auto rounded-[50%]">
                                    <img className="w-[196px] h-[196px] rounded-[50%]" src={Me} alt="" />
                                </div>
                                <div className="my-[30px] pl-[30%]">
                                    <h2 className='font-[700] my-[10px] text-[22px] flex w-[100%] justify-between'>Name: <h3 className='  w-[500px] flex flex-wrap font-[500] ml-[10px]'>Riyad Sheikh</h3></h2>
                                    <h2 className='font-[700] my-[10px] text-[22px] flex w-[100%] justify-between'>Number: <h3 className='  w-[500px] flex flex-wrap font-[500] ml-[10px]'>01881043142</h3></h2>
                                    <h2 className='font-[700] my-[10px] text-[22px] flex w-[100%] justify-between'>Email: <h3 className='  w-[500px] flex flex-wrap font-[500] ml-[10px]'>riyadsheikh@gmail.com</h3></h2>
                                    <h2 className='font-[700] my-[10px] text-[22px] flex w-[100%] justify-between'>Address: <h3 className='  w-[500px] flex flex-wrap font-[500] ml-[10px]'>Old Dhaka</h3></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Myaccount 