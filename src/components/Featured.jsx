import Container from './Container'
import Featureditem from './Featureditem'
import { apiData } from './ContextApi'
import { useContext } from 'react'
import Slider from "react-slick";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick} className='h-[50px] w-[50px] bg-[#c5abab33] rounded-full text-center leading-[50px] pink absolute right-0 lg:right-[-11px] top-[110%] left-[49%] z-50'><FaLongArrowAltRight className='inline-block' /></div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick} className='h-[50px] w-[50px] bg-[#c5abab33] rounded-full text-center leading-[50px] pink absolute lg:right-[51%] top-[110%] z-50'><FaLongArrowAltLeft className='inline-block' /></div>
    );
}


const Featured = () => {
    let data = useContext(apiData)

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

        ]
    };

 
    return (
        <>
            <section className='font-jsans py-[90px]'>
                <Container>
                    <h1>Featured Products</h1>
                    <Slider {...settings}>
                        {data.map((item) => (
                            <Link to="/pages">
                                <Featureditem item={item} />
                            </Link>
                        ))}
                    </Slider>
                </Container>
            </section>
        </>
    )
}

export default Featured
