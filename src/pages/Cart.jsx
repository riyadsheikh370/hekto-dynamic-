import React from "react";
import { RxCross2 } from "react-icons/rx";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productIncrement, productDecrement, removeProduct } from "../components/slice/productSlice";

const Cart = () => {

    let dispatch = useDispatch()
    let data = useSelector((state) => state.product.cartItem)

    let handleIncrement = (index) => {
        dispatch(productIncrement(index))
    }
    let handledecrement = (index) => {
        dispatch(productDecrement(index))
    }
    let handleRemove = (index) => {
        dispatch(removeProduct(index))
    }


    const { totalPrice, totalquantity } = data.reduce((acc, item) => {
        acc.totalPrice += item.price * item.qun
        acc.totalquantity += item.qun
        return acc
    }, { totalPrice: 0, totalquantity: 0 })


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
                {data.map((item, index) => (
                    <div className="flex my-14 items-center">
                        <div className="w-[40%]">
                            <div className="flex justify-around items-center">
                                <div className="" onClick={() => handleRemove(index)}>
                                    <RxCross2 />
                                </div>
                                <div className="">
                                    <img className="w-[100px] h-[100px]" src={item.thumbnail} alt="" />
                                </div>
                                <div className="">
                                    <h3 className="text-[#262626] font-sans text-[16px] font-normal">{item.title}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="w-[15%]">
                            <h4 className="text-center">${item.price}</h4>
                        </div>
                        <div className="w-[30%] text-center">
                            <div className="flex w-[150px] h-[50px] justify-around items-center mx-auto">
                                <div onClick={() => handledecrement(index)} className="">-</div>
                                <div className="">{item.qun}</div>
                                <div onClick={() => handleIncrement(index)} className="">+</div>
                            </div>
                        </div>
                        <div className="w-[15%]">
                            <h4 className="text-center">${item.price * item.qun}</h4>
                        </div>
                    </div>

                ))}

                <div className="flex justify-end">
                    <div className="">
                        <h2 className="text-[#262626] font-sans text-[20px] text-end font-bold">Cart totals</h2>
                        <div className="flex my-2 w-[400px] border-2 border-[#222] justify-around">
                            <div className="">
                                <h3>Quantity</h3>
                            </div>
                            <div className="">
                                <h3>{totalquantity}</h3>
                            </div>
                        </div>
                        <div className="flex w-[400px] border-2 border-[#222] justify-around">
                            <div className="">
                                <h3>Total</h3>
                            </div>
                            <div className="">
                                <h3>{totalPrice}$</h3>
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