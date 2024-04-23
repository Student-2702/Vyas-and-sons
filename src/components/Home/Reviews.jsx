import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Stars from './Stars'

const info = [
  {
    img: "./Img/Review1.png",
    name: "Ashish Ram",
    ratings: "5",
    Date: "23 March 2024",
    quality: "4.5/5",
    Delivery: "4.7/5",
    Response: "4.3/5"
  },
  {
    img: "./Img/Review2.png",
    name: "Varsha Gupta ",
    ratings: "4",
    Date: "23 March 2024",
    quality: "4.0/5",
    Delivery: "4.0/5",
    Response: "4.0/5"
  },
  {
    img: "./Img/Review3.png",
    name: "Siddharth Das ",
    ratings: "4",
    Date: "23 March 2024",
    quality: "4.5/5",
    Delivery: "4.7/5",
    Response: "4.3/5"
  },
  {
    img: "./Img/Review4.png",
    name: "Rahul Mehta ",
    ratings: "4",
    Date: "23 March 2024",
    quality: "4.0/5",
    Delivery: "4.0/5",
    Response: "4.0/5"
  },
  {
    img: "./Img/Review5.png",
    name: "Mayank Lal",
    ratings: "3",
    Date: "23 March 2024",
    quality: "3.5/5",
    Delivery: "3.5/5",
    Response: "3.0/5"
  },
  {
    img: "./Img/Review6.png",
    name: "Shreya Choudhary",
    ratings: "5",
    Date: "23 March 2024",
    quality: "5/5",
    Delivery: "5/5",
    Response: "5/5"
  }


]
const Reviews = () => {
  return (
    <>


      <div>
        <p className="text-[#2A3356] font-poppins text-[26px]  font-semibold px-12 py-8">Product Reviews</p>
      </div>


      <div className="md:w-[90%]  w-[85%]  mx-auto my-2 ">
        <Carousel className="">
          <CarouselContent>
            {info.map((item, index) => (
              <CarouselItem key={index} className="lg:basis-1/3 md:basis-1/2  ">

                <Card className=" shadow-[-2px_2px_14px_0px_#9E9E9E40]" >
                  <CardContent style={{ margin: 0, padding: 0 }} className="font-poppins">


                    <div className="flex flex-row  gap-4 py-2 px-1">


                      <div className="">
                        <img src={item.img} alt="Reviewer" className="w-[170px] h-[230px] rounded-l-[6px]" />
                      </div>

                      <div className="w-[50%]">
                        <p className="font-[#2A3356] font-bold  text-[16px] md:text-[18px]">{item.name} </p>

                        <div className="flex flex-col md:flex-row  items-start md:items-center gap-1 py-1">
                          <Stars ratings={item.ratings} />
                          <p className="text-[9px] text-[#858585]">{item.Date}</p>
                        </div>

                        <p className="text-[#2A3356] text-[11px] py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                        <p className="text-[#2A3356] font-semibold">Quality:<span className="font-normal px-2">{item.quality}</span></p>


                        <p className="text-[#2A3356] font-semibold">Delivery:<span className="font-normal px-2">{item.Delivery}</span></p>


                        <p className="text-[#2A3356] font-semibold">Response:<span className="font-normal px-2">{item.Response}</span></p>

                      </div>

                    </div>

                  </CardContent>
                </Card>

              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

      </div>

    </>
  )
}

export default Reviews
