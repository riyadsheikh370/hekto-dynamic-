import Container from './Container'
import Featureditem from './Featureditem'
import { apiData } from './ContextApi'
import { useContext } from 'react'
import Slider from "react-slick";


const Featured = () => {
    let data = useContext(apiData)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
    
        customPaging: i => (
            <div
                style={{
                    width: "30px",
                    height: "10px",
                    color: "blue",
                    left: "49%",
                    position: "absolute",
                    border: "3px blue solid",
                    display: "inline-block"
                }}
            >
                {i + 1}
            </div>
        )
    };

    return (
        <>
            <section className='font-jsans py-[90px]'>
                <Container>
                    <h1>Featured Products</h1>
                    <Slider {...settings}>
                        {data.map((item) => (
                            <Featureditem item={item} />
                        ))}
                    </Slider>
                </Container>
            </section>
        </>
    )
}

export default Featured
