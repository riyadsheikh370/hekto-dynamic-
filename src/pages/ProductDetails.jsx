import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Container from '../components/Container';
import Tp1 from "../assets/tp1.png"


const ProductDetails = () => {
    let [singleData, setSingleData] = useState([])
    let productId = useParams()


    let getData = () => {
        axios.get(`https://dummyjson.com/products/${productId.id}`).then((response) => {
            setSingleData(response.data);

        })
    }

    useEffect(() => {
        getData()
    }, [])


    console.log(singleData);


    return (
        <>
            <section>
                <div className="text-start bg-[#F6F5FF] py-[50px]">
                    <Container>
                        <h1 className='text-start'>ProductDetails</h1>
                        <h5 className='text-[12px] font-sans dark-b'><Link to="/">Home</Link> | ProductDetails</h5>
                    </Container>
                </div>
                <Container>
                    <div className="flex-wrap justify-between">
                        <div className="w-[48%] my-5">
                            <img src={Tp1} alt="" />
                        </div>
                    </div>
                    <div className="">
                        <h3 className='text-[#262626] font-sans lg:text-[36px] text-[23px] font-bold'>Product</h3>
                        <div className="flex items-center my-4">

                            <div className="pl-3">
                                <span>Review</span>
                            </div>
                        </div>
                        <h3 className='text-[#262626] font-sans lg:text-[20px] text-[23px] font-bold'>${singleData.price}</h3>
                        <div className="flex items-center gap-x-6 py-6 border-b-[1px] border-[#262626]">
                            <h3 className='text-[#262626] font-sans text-[20px] font-normal'>STATUS :</h3>
                            <h4>0</h4>
                        </div>
                        <div className="my-8">
                            <a className="py-[16px] px-[45px] border-2 border-[#262626] inline-block hover:bg-[#262626] hover:text-white cursor-pointer duration-300 ease-in-out">
                                Add to Wish List
                            </a>
                            <Link to="/cart" >
                                <a className="py-[16px] px-[45px] border-2 border-[#262626] inline-block hover:bg-[#262626] hover:text-white cursor-pointer ms-4 duration-300 ease-in-out">
                                    Add to Cart
                                </a>
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default ProductDetails
