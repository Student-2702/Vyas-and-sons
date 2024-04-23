import React from 'react';
import { FaUser } from 'react-icons/fa';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";


const Contact = () => {
    return (
        <div>
            <div className="flex items-center px-10  py-6">
                <h1 className="font-poppins text-[#2A3356] font-semibold text-[26px]">Contact Us</h1>
            </div>


            <div className="bg-[#F9F9F9]">
                <div className="font-poppins flex  flex-col md:flex-row items-center justify-center gap-x-10  py-10">

                    
                    {/* left */}
                    <div>
                        {/* FullName */}
                        <div className="flex flex-row border-[2px] rounded-lg bg-[#ffff] border-[#cbc4c4] hover:border-[#F35B25] transition-all duration-300 pl-2 py-3 my-2">
                            <label htmlFor="fullname"><FaUser size={20} color="#cbc4c4" /></label>
                            <input
                                type="text"
                                id="fullname"
                                name="fullname"
                                placeholder="Full Name"
                                className="focus:outline-none px-2  w-full mx-auto md:w-[300px] lg:w-[412px]" />
                        </div>

                        {/* Mobile no */}
                        <div className="flex flex-row border-[2px] bg-[#ffff] rounded-lg border-[#cbc4c4] hover:border-[#F35B25] transition-all duration-300 pl-2 py-3 my-2 ">
                            <label htmlFor="fullname"><FaPhoneAlt size={20} color="#cbc4c4" /></label>
                            <input
                                type="tel"
                                id="mobile"
                                name="mobile"
                                placeholder="Mobile Number"
                                className="focus:outline-none px-2 w-full mx-auto md:w-[300px] lg:w-[412px]" />
                        </div>

                        {/* Email */}

                        <div className="flex flex-row border-[2px] rounded-lg bg-[#ffff] border-[#cbc4c4] hover:border-[#F35B25] transition-all duration-300 pl-2 py-3 my-2">
                            <label htmlFor="Email"><MdEmail size={20} color="#cbc4c4" /></label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                className="focus:outline-none px-2 w-full mx-auto md:w-[300px] lg:w-[412px]" />
                        </div>


                        {/* City */}
                        <div className="flex flex-row border-[2px] pl-2 rounded-lg  bg-[#ffff] border-[#cbc4c4] hover:border-[#F35B25] transition-all duration-300 py-3 my-2 ">
                            <label htmlFor="Email"><MdOutlineLocationOn size={30} color="#cbc4c4" /></label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                placeholder="City"
                                className="focus:outline-none px-2 w-full mx-auto md:w-[300px] lg:w-[412px]" />
                        </div>




                    </div>

                    {/* right */}
                    <div>


                        {/* state */}
                        <div className="flex border-[2px] rounded-lg border-[#cbc4c4] pl-2 py-3 my-2 bg-[#ffff] hover:border-[#F35B25] transition-all duration-300  ">
                            <label htmlFor="state">
                                < MdOutlineLocationOn size={30} color="#cbc4c4" />
                            </label>
                            <input
                                type="text"
                                id="state"
                                name="state"
                                placeholder="State"
                                className="focus:outline-none px-2 md:w-[300px] lg:w-[412px] " />
                        </div>

                        {/* country */}
                        <div className="flex border-[2px] rounded-lg border-[#cbc4c4] bg-[#ffff] hover:border-[#F35B25] transition-all duration-300 pl-2 py-3 my-2  ">
                            <label htmlFor="Country">
                                < MdOutlineLocationOn size={30} color="#cbc4c4" />
                            </label>
                            <input
                                type="text"
                                id="Country"
                                name="Country"
                                placeholder="Country"
                                className="focus:outline-none px-2 md:w-[300px] lg:w-[412px] " />
                        </div>

                        {/* query */}
                        <textarea
                            id="query"
                            name="query"
                            placeholder="Query"
                            rows={4}
                            className="resize-none focus:outline-none border-[2px] rounded-lg border-[#cbc4c4] hover:border-[#F35B25] transition-all duration-300  md:w-[320px] lg:w-[450px] px-12 py-1 " />


                    </div>
                </div>

                <div className="flex flex-row justify-center gap-y-6 gap-x-6 py-2 ">
                    <button type="reset" className="h-[40px] w-[157px] font-poppins bg-[#ffff] text-[#F35B25] border-[2px] border-[#F35B25] hover:text-[#ffff] rounded-[4px]  transition-all duration-300  hover:bg-[#F35B25] hover:border-[2px] hover:border-[#F35B25] mb-4">
                        Cancel
                    </button>


                    <button type="submit" className="h-[40px] w-[157px] font-poppins bg-[#F35B25] text-[#ffff] hover:text-[#F35B25] rounded-[4px] flex items-center justify-center transition-all duration-300  hover:bg-[#ffff] hover:border-[2px] hover:border-[#F35B25] mb-4">
                        Submit
                    </button>

                </div>
            </div>



            <div>

            </div>
        </div>
    )
}

export default Contact;
