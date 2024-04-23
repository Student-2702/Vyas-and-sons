import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";
const HeroSection = () => {
    const images = [
        {
            id:1,
            img:"./Img/Saraswati-Big.png"
        },
        {
            id:2,
            img:"./Img/Saraswati-small.png"
        },
    
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive:[
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 2,
                 
                }
              },
        ]
    };


    return (

        <>       
        <div className=" bg-[#F9F9F9]  flex flex-col lg:flex-row items-center justify-between py-8 overflow-x-hidden font-poppins">


            <div className="flex flex-col items-center   w-auto  md:w-1/2">

                <div className="px-8">
                    <p className="text-[#2A3356] font-bold text-[25px] md:text-[32px] ">Vyas And Sons <span className="font-cursive font-semibold">Murti Art</span></p>
                    <p className=" w-auto md:w-[444px]  h-auto md:h-[100px] py-6 font-poppins">Established in the year 1956, at Jaipur (Rajasthan, India), we, Vyas And Sons Murti Art, introduce ourselves as one of the leading Manufacturing and Exporting of different kinds of Statues and Busts.</p>

                    <div className="flex flex-row  gap-x-4 py-4 md:py-10">
                        <button className="h-[40px] w-[157px] font-poppins bg-[#F35B25] text-[#ffff] hover:text-[#F35B25] rounded-[4px] flex items-center justify-center transition-all duration-300  hover:bg-[#ffff] hover:border-[2px] hover:border-[#F35B25] gap-4">
                          ReadMore
                          <FaArrowRight size={20}  />
                        </button>


                        <button className="h-[40px] w-[157px] font-poppins bg-[#ffff] text-[#F35B25] border-[2px] border-[#F35B25] hover:text-[#ffff] rounded-[4px]  transition-all duration-300  hover:bg-[#F35B25] hover:border-[2px] hover:border-[#F35B25]  flex items-center justify-center gap-4">
                           Contact uS
                           <FaArrowRight size={20}  />
                        </button>

                    </div>


                </div>


            </div>


            <div className="w-2/3 lg:w-1/2 py-8">
            <Slider {...settings}>
              {images.map((image)=>{

                return(

                    <>
                    <div className="w-auto">
                        <div><img src={image.img} alt="saraswati" className="mx-auto px-2"></img></div>
                    </div>
                    </>
                )
              })}
            </Slider>
            </div>

        </div>

        </>
    )
}

export default HeroSection;
