import React from "react";
import { RxCross2 } from "react-icons/rx";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import Tp1 from "../assets/tp1.png"

const Cart = () => {

    return (
        <div className="my-20">
            <div className="text-start bg-[#F6F5FF] py-[50px]">
                <Container>
                    <h1 className='text-start'>Cart</h1>
                    <h5 className='text-[12px] font-sans dark-b'><Link to="/">Home</Link> | Cart</h5>
                </Container>
            </div>
            <Container>
                <div className="flex justify-between bg-[#F5F5F3] h-[60px] items-center mt-[50px]">
                    <div className="w-[40%]">
                        <h3 className="text-center text-[#262626] font-sans text-[20px] font-bold">Product</h3>
                    </div>
                    <div className="w-[15%]">
                        <h3 className="text-center text-[#262626] font-sans text-[20px] font-bold">Price</h3>
                    </div>
                    <div className="w-[30%]">
                        <h3 className="text-center text-[#262626] font-sans text-[20px] font-bold">Quntity</h3>
                    </div>
                    <div className="w-[15%]">
                        <h3 className="text-center text-[#262626] font-sans text-[20px] font-bold">Total</h3>
                    </div>
                </div>
                <div className="flex my-14 items-center">
                    <div className="w-[40%]">
                        <div className="flex justify-around items-center">
                            <div className="">
                                <RxCross2 />
                            </div>
                            <div className="">
                                <img className="w-[100px] h-[100px]" src={Tp1} alt="" />
                            </div>
                            <div className="">
                                <h3 className="text-[#262626] font-sans text-[16px] font-normal">hffsfsffsafhf</h3>
                            </div>
                        </div>
                    </div>
                    <div className="w-[15%]">
                        <h4 className="text-center">$2222</h4>
                    </div>
                    <div className="w-[30%] text-center">
                        <div className="flex w-[150px] h-[50px] justify-around items-center mx-auto">
                            <div className="">-</div>
                            <div className="">0</div>
                            <div className="">+</div>
                        </div>
                    </div>
                    <div className="w-[15%]">
                        <h4 className="text-center">$656554</h4>
                    </div>
                </div>


                <div className="flex justify-end">
                    <div className="">
                        <h2 className="text-[#262626] font-sans text-[20px] text-end font-bold">Cart totals</h2>
                        <div className="flex w-[400px] border-2 border-[#222] justify-around">
                            <div className="">
                                <h3>Subtotal</h3>
                            </div>
                            <div className="">
                                <h3>88888$</h3>
                            </div>
                        </div>
                        <div className="flex my-2 w-[400px] border-2 border-[#222] justify-around">
                            <div className="">
                                <h3>Quantity</h3>
                            </div>
                            <div className="">
                                <h3>55</h3>
                            </div>
                        </div>
                        <div className="flex w-[400px] border-2 border-[#222] justify-around">
                            <div className="">
                                <h3>Total</h3>
                            </div>
                            <div className="">
                                <h3>389.99 $</h3>
                            </div>
                        </div>
                        <div className="mt-2">
                            <p className='w-[220px] h-[50px] bg-[#262626] text-white border-2 border-[#262626] text-center leading-[50px]'>
                                <Link to="/checkout">
                                    Proceed to Checkout
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Cart;