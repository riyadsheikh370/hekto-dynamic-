import Fpd from "../assets/fpd.png"
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FaSearchPlus } from "react-icons/fa";


const Featureditem = ({item}) => {

    return (
        <>
            <div className="w-[90%] shadow-md ... text-center font-jsans">
                <div className=" bg-[#F6F7FB] relative group overflow-hidden">
                    <img className='h-[300px] w-[300px]' src={item.thumbnail} alt="" />
                    <div className="h-[250px] w-[100%] absolute group-hover:top-[20px] top-[-260px] duration-300 ease-in-out left-[80px]">
                        <ul className='flex gap-x-5 text-[#1389FF] pb-[200px]'>
                            <li className='hover:text-[#151875]'><LuShoppingCart /></li>
                            <li className='hover:text-[#151875]'><FaRegHeart /></li>
                            <li className='hover:text-[#151875]'><FaSearchPlus /></li>
                        </ul>
                        <div className="bg-[#08D15F] py-[7px] w-[120px] ml-[8%]">
                            <h4 className='text-white'>View Details</h4>
                        </div>
                    </div>
                </div>
                <div className="py-5 group hover:bg-[#2F1AC4] transition duration-700 ease-in-out ...">
                    <h5 className='pink text-[18px] group-hover:text-white'>Cantilever chair</h5>
                    <img className='ml-[40%] py-2' src={Fpd} alt="" />
                    <h4 className='text-[14px] dark-b group-hover:text-white'>Code - Y523201</h4>
                    <h6 className='text-[14px] dark-b group-hover:text-white'>$42.00</h6>
                </div>
            </div>
            {/* <div className="w-[21%] shadow-md ... text-center font-jsans">
                <div className="py-[60px] px-[70px] bg-[#F6F7FB] relative group overflow-hidden">
                    <img className='h-[178px] w-[178px]' src={Fp1} alt="" />
                    <div className="h-[250px] w-[100%] absolute group-hover:top-[20px] top-[-260px] duration-300 ease-in-out">
                        <ul className='flex gap-x-5 text-[#1389FF] pb-[200px]'>
                            <li className='hover:text-[#151875]'><LuShoppingCart /></li>
                            <li className='hover:text-[#151875]'><FaRegHeart /></li>
                            <li className='hover:text-[#151875]'><FaSearchPlus /></li>
                        </ul>
                        <div className="bg-[#08D15F] py-[7px] w-[120px] ml-[8%]">
                            <h4 className='text-white'>View Details</h4>
                        </div>
                    </div>
                </div>
                <div className="py-5 group hover:bg-[#2F1AC4] transition duration-700 ease-in-out ...">
                    <h5 className='pink text-[18px] group-hover:text-white'>Cantilever chair</h5>
                    <img className='ml-[40%] py-2' src={Fpd} alt="" />
                    <h4 className='text-[14px] dark-b group-hover:text-white'>Code - Y523201</h4>
                    <h6 className='text-[14px] dark-b group-hover:text-white'>$42.00</h6>
                </div>
            </div>
            <div className="w-[21%] shadow-md ... text-center font-jsans">
                <div className="py-[60px] px-[70px] bg-[#F6F7FB] relative group overflow-hidden">
                    <img className='h-[178px] w-[178px]' src={Fp2} alt="" />
                    <div className="h-[250px] w-[100%] absolute group-hover:top-[20px] top-[-260px] duration-300 ease-in-out">
                        <ul className='flex gap-x-5 text-[#1389FF] pb-[200px]'>
                            <li className='hover:text-[#151875]'><LuShoppingCart /></li>
                            <li className='hover:text-[#151875]'><FaRegHeart /></li>
                            <li className='hover:text-[#151875]'><FaSearchPlus /></li>
                        </ul>
                        <div className="bg-[#08D15F] py-[7px] w-[120px] ml-[8%]">
                            <h4 className='text-white'>View Details</h4>
                        </div>
                    </div>
                </div>
                <div className="py-5 group hover:bg-[#2F1AC4] transition duration-700 ease-in-out ...">
                    <h5 className='pink text-[18px] group-hover:text-white'>Cantilever chair</h5>
                    <img className='ml-[40%] py-2' src={Fpd} alt="" />
                    <h4 className='text-[14px] dark-b group-hover:text-white'>Code - Y523201</h4>
                    <h6 className='text-[14px] dark-b group-hover:text-white'>$42.00</h6>
                </div>
            </div>
            <div className="w-[21%] shadow-md ... text-center font-jsans">
                <div className="py-[60px] px-[70px] bg-[#F6F7FB] relative group overflow-hidden">
                    <img className='h-[178px] w-[178px]' src={Fp3} alt="" />
                    <div className="h-[250px] w-[100%] absolute group-hover:top-[20px] top-[-260px] duration-300 ease-in-out">
                        <ul className='flex gap-x-5 text-[#1389FF] pb-[200px]'>
                            <li className='hover:text-[#151875]'><LuShoppingCart /></li>
                            <li className='hover:text-[#151875]'><FaRegHeart /></li>
                            <li className='hover:text-[#151875]'><FaSearchPlus /></li>
                        </ul>
                        <div className="bg-[#08D15F] py-[7px] w-[120px] ml-[8%]">
                            <h4 className='text-white'>View Details</h4>
                        </div>
                    </div>
                </div>
                <div className="py-5 group hover:bg-[#2F1AC4] transition duration-700 ease-in-out ...">
                    <h5 className='pink text-[18px] group-hover:text-white'>Cantilever chair</h5>
                    <img className='ml-[40%] py-2' src={Fpd} alt="" />
                    <h4 className='text-[14px] dark-b group-hover:text-white'>Code - Y523201</h4>
                    <h6 className='text-[14px] dark-b group-hover:text-white'>$42.00</h6>
                </div> */}
            {/* </div> */}
        </>
    )
}

export default Featureditem
