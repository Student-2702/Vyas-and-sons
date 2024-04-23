import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { MdTranslate } from "react-icons/md";


const Navbar = () => {
    return (
        <>
            {/* for large devices */}
            <div className="text-[#ffff] bg-[#2A3356]  font-poppins hidden lg:flex flex-row items-center justify-between py-2   ">

                {/* Image */}
                <div className="flex flex-row justify-start items-center px-4">
                    <img src="./Img/Logo.png" alt="logo" className="py-2"></img>
                    <p className="px-2 ">Vyas And Sons<br /> <span className="font-pacifico">Murti Art</span></p>
                </div>


                {/* Navigations */}
                <div className="flex flex-row items-center justify-center gap-x-8 text-[20px]">
                    <NavLink to={"/"}>
                        <div><p>Home</p></div>
                    </NavLink>

                    <NavLink to={"/product"}>
                        <div><p>Products</p></div>
                    </NavLink>

                    <NavLink to={"/about"}>
                        <div><p>About us</p></div>
                    </NavLink>

                    <NavLink to={"/contact"}>
                        <div><p>Contact us</p></div>
                    </NavLink>

                </div>


                <div className="flex flex-row items-center justify-end">

                    <div className="px-2 "><MdTranslate color="#ffff" size={25} /></div>
                    <div className="px-2"><FaUserAlt color="#ffff" size={25} /></div>

                    <div className=" flex flex-row items-center px-4  ">
                        <input type="text" className="focus:outline-none pl-4 rounded-lg py-1 text-[#040404]" placeholder="Search here"  ></input>
                    </div>

                </div>
            </div>



            {/* For mobiles and tablet */}

            <div >

                <div className="lg:hidden flex flex-row items-center justify-evenly py-1 bg-[#D9D9D9] font-poppins text-[#2A3356] font-semibold">


                    <div className="flex flex-row items-center px-4 ">
                        <img src="./Img/Logo.png" alt="logo" className="py-2"></img>
                        <p className="px-2">Vyas And Sons<br /><span>Murti Art</span></p>
                    </div>

                    <div className="flex flex-row items-center justify-around gap-x-4">
                        <FaUserAlt color=" #2A3356" size={25} />
                        < MdTranslate color=" #2A3356" size={25} />
                    </div>

                </div>


                <div className="lg:hidden flex flex-row items-center justify-center gap-x-8 px-4 bg-primary text-[#ffff] py-2 font-poppins">

                    <NavLink to={"/"}>
                        <div><p>Home</p></div>
                    </NavLink>
                    <NavLink to={"/products"}>
                        <div><p>products</p></div>
                    </NavLink>
                    <NavLink to={"/about"}>
                        <div><p>AboutUs</p></div>
                    </NavLink>
                    <NavLink to={"/contact"}>
                        <div><p>Contactus </p></div>
                    </NavLink>


                </div>


            </div>

        </>
    )
}

export default Navbar;
