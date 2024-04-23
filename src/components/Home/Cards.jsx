import React from 'react'
import { Card, CardContent } from "@/components/ui/card"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const info = [
    {
        heading: "Durga Mata Marble statues",
        img: "./Img/DurgaMata.png",
        color: "White",
        size: "3 feet",
        Application: "Temple",
        Religious: "Hindu",
        Modelno: "SDU-00321",
        price: "2.51lakh/piece",
        position:"Sitting"
    },
    {
        heading: "Durga Mata Marble statues",
        img: "./Img/DurgaMata.png",
        color: "White",
        size: "3 feet",
        Application: "Temple",
        Religious: "Hindu",
        Modelno: "SDU-00321",
        price: "2.51lakh/piece",
        position:"Sitting"
    },
    {
        heading: "Durga Mata Marble statues",
        img: "./Img/DurgaMata.png",
        color: "White",
        size: "3 feet",
        Application: "Temple",
        Religious: "Hindu",
        Modelno: "SDU-00321",
        price: "2.51lakh/piece",
        position:"Sitting"
    },
    {
        heading: "Durga Mata Marble statues",
        img: "./Img/DurgaMata.png",
        color: "White",
        size: "3 feet",
        Application: "Temple",
        Religious: "Hindu",
        Modelno: "SDU-00321",
        price: "2.51lakh/piece",
        position:"Sitting"
    },
    {
        heading: "Durga Mata Marble statues",
        img: "./Img/DurgaMata.png",
        color: "White",
        size: "3 feet",
        Application: "Temple",
        Religious: "Hindu",
        Modelno: "SDU-0032",
        price: "2.51lakh/piece",
        position:"Sitting"
    },


]

const Cards = () => {
    return (
        <div className="md:w-[90%]  w-[85%] mx-auto my-4">

            <Carousel className="">
                <CarouselContent>
                    {info.map((item, index) => (
                        <CarouselItem key={index} className="lg:basis-1/3 md:basis-1/2" >
                            <div >
                                <Card className="shadow-[0px_4px_13px_0px_#9E9E9E73] font-poppins ">
                                    <CardContent >

                                        <p className="text-[#2A3356] font-bold  text-[16px]md:text-[25px] py-2">{item.heading}</p>


                                        <div className="flex flex-row gap-3 my-2">
                                            <div className="">
                                            <img src={item.img} alt="durgamata" className="w-[145px] h-[220px]" />
                                            </div>

                                            <div className="w-[50%] ">
                                                <p className="text-[#2B2B2B] font-bold">Color:<span className="font-normal px-1">{item.color}</span></p>

                                                <p className="text-[#2B2B2B] font-bold">Size:<span className="font-normal px-1">{item.size}</span></p>

                                                <p className="text-[#2B2B2B] font-bold">Application:<span className="font-normal px-1 ">{item.Application}</span></p>

                                                <p className="text-[#2B2B2B] font-bold">Religious:<span className="font-normal px-1">{item.Religious}</span></p>

                                                <p className="text-[#2B2B2B] font-bold">Position:<span className="font-normal px-1">{item.position}</span></p>

                                                <p className="text-[#2B2B2B] font-bold">Model No:<span className="font-normal px-1">{item.Modelno}</span></p>


                                                <p className="text-[#2B2B2B] font-bold">Price:<span className="font-normal px-1">{item.price}</span></p>


                                                <a href="/" className="text-[#F35B25] underline font-semibold">Get Product Brochure</a>
                                            </div>
                                        </div>


                                        <div className="flex flex-row items-center gap-2 py-1 ">

                                            <button className="bg-[#2A3356] font-semibold text-[#F9F9F9] flex flex-row items-center justify-center w-[200px] h-[40px] rounded-md">Read More</button>


                                            <button className="bg-[#F35B25] font-semibold text-[#F9F9F9] flex flex-row items-center justify-center w-[200px] h-[40px] rounded-md">Get Quate Now</button>
                                        </div>
                                    </CardContent>


                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

        </div>
    )
}

export default Cards
