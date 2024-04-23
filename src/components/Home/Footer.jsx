import React from 'react';
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer>
                <div className=" bg-[#2A3356] text-[#ffff]   grid grid-cols-2 gap-[50px]  lg:gap-20 px-10 py-10 lg:py-10 md:grid-cols-4">



                    <div className>
                        <div className="flex">
                            <IoLocationOutline size={30} />
                            <h2 className="text-center text-xl font-semibold leading-[normal] tracking-[0.8px] underline">Address</h2>
                        </div>
                        <div className="py-4">
                            <p className=" text-sm  font-normal leading-[197%]"><span className="font-bold">Vyas And Sons Murti Art,</span><br />
                                2411, Near Ganga Mata Mandir,<br />
                                Khazane Walon Ka Rasta,<br />
                                Jaipur, 302001, <br />
                                Rajasthan, India</p>
                        </div>
                        <div>
                            <ul>
                                <li className="mb-4">
                                    <a href='#' className="hover:underline font-poppins text-secondary">Get Directions</a>
                                </li>
                            </ul>
                        </div>
                    </div>




                    <div className>
                        <div>
                            <h2 className=" text-lg  font-semibold leading-[normal] tracking-[0.8px] mb-4">Products</h2>
                            <div>
                                <ul class=" font-poppins">
                                    <li class="mb-4">
                                        <a href="#" class=" hover:underline">Durga Mata Marble Statues</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">Marble Krishna Statues</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">Ganesh Marble Statues</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">Marble Murti</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">Gauri Shankar Marble Statues</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline text-secondary">View More</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>



                    <div>
                        <ul class=" font-poppins">
                            <li class="mb-4">
                                <a href="#" class=" hover:underline">Home</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Products</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Products Videos</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Products Reviews</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">About Us</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Contact us</a>
                            </li>
                        </ul>
                    </div>




                    <div className="flex flex-col items-start">


                        <div className="">
                            <div>
                                <h1 className="text-center text-xl  font-semibold leading-[normal] tracking-[0.8px] whitespace-nowrap mb-4">Contact Details</h1>
                            </div>


                            <div className="flex items-center justify-center ">
                                <FaPhone  size={25}/>
                                <p className="py-3 px-2">+918047631757</p>
                            </div>

                            <div className="flex items-center justify-center">
                                <IoLogoWhatsapp size={25} />
                                <p className="py-3 px-2">+918047631757</p>
                            </div>

                            <div className="flex items-center justify-center">
                                < MdEmail  size={25}/>
                                <p className="py-3 px-2">Abc@gmail.com</p>
                            </div>

                        </div>



                        <div className="py-8">
                            <div>
                                <h2 className=" text-xl  font-semibold leading-[normal] tracking-[0.8px] py-2">Follow on</h2>
                            </div>
                            <div className="flex space-x-4">
                                <FaFacebook size={30} />
                                <FaYoutube size={30} />
                            </div>
                        </div>


                    </div>

                </div>




            <div className="bg-[#ffff] flex  flex-col md:flex-row items-center  justify-around lg:justify-between px-8 py-4 my-2 ">

                <p className="">© Vyas And Sons Murti Art. All Rights Reserved </p>

                <div>
                  <ul className="flex flex-row items-center gap-6 text-[#F35B25] md:list-disc ">
                    <li>Privacy policy</li>
                    <li>Terms and conditions</li>
                    <li>Site map</li>
                  </ul>

                </div>
            </div>

            </footer>





        </>
    )
}

export default Footer;
