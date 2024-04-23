import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards';
import { FaArrowRight } from "react-icons/fa";



const products = [
    {
        id: 1,
        img: "./Img/Rectangle 1424.png"
    },
    {
        id: 2,
        img: "./Img/Rectangle 1425.png"
    },
    {
        id: 3,
        img: "./Img/Rectangle 1424.png"
    },
    {
        id: 4,
        img: "./Img/Rectangle 1425.png"
    },


]
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

            }
        },
    ]

};
const Products = () => {
    return (
        <div className="">
            <div className="flex  flex-col md:flex-row  items-center justify-between my-6 px-12 ">
                <div>
                    <p className="text-primary font-poppins text-[26px] font-semibold py-2">Products</p>
                </div>

                <div className="py-2">
                    <label for="cars" className="text-[#F35B25] font-semibold font-poppins  text-[16px] md:text-[20px] ">Select category:</label>
                    <select name="cards" id="cards" className="focus:outline-none font-poppins text-[#2A3356] font-semibold ">
                        <option value="all" className="">All</option>
                        <option value="vyas and sons">Vyas and sons</option>
                        <option value="saraswati">Saraswati</option>
                        <option value="ganesha">Ganesha</option>
                    </select>
                </div>


                <div className="py-2 ">
                    <input type="text" className="focus:outline-none border-[1px] border-[#cbc4c4] w-full mx-auto py-2 px-4 rounded-md" placeholder="Search here" name="search"></input>

                </div>
            </div>



            <Cards />
            <Cards />


            <div className="flex flex-row items-center justify-center  pt-4 ">
                <button className="h-[40px] w-[157px] font-poppins bg-[#ffff] text-[#F35B25] border-[2px] border-[#F35B25] hover:text-[#ffff] rounded-[4px]  transition-all duration-300  hover:bg-[#F35B25] hover:border-[2px] hover:border-[#F35B25]  flex items-center justify-center gap-4">
                View More
                <FaArrowRight size={20} />
                </button>
            </div>



            <p className="text-[#2A3356] text-[26px] font-semibold font-poppins px-12 py-6">Product Videos</p>



            {/* product video slider */}
            <div className="bg-[#2A3356] py-8 overflow-x-hidden">
                <Slider {...settings}>
                    {products.map((item) => {
                        return (
                            <>
                                <div className="w-auto ">
                                    <img src={item.img} alt="short" className="mx-auto px-4"></img>

                                </div>
                            </>
                        )

                    })}

                </Slider>
            </div>






        </div>
    )
}

export default Products;
