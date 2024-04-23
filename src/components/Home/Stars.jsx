import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Stars = ({ratings,Reviews}) => {
   const RatingStar= Array.from({length:5},(elem,index)=>{
        let number = index + 0.5


        return(
            <span key={index}>

                {
                    ratings > index+1 ? <FaStar color='#DD6322' size={20}/> : ratings > number  ?<FaStarHalfAlt  color='#DD6322' size={20} /> :<AiOutlineStar color='#DD6322' size={22}/>
                }
            </span>
        )

    })
  return (
   <>

       <div className="flex flex-row ">
        {RatingStar}
       
       </div>

   </>
  )
}

export default Stars
