import React from "react";
import Logo from "../../assets/logo.png";
import ParticleComponent from "./Particles";
import { Link } from 'react-router-dom';



const Hero = ({ scrollToContact }) => {
    const NotSelected = {
        "-webkit-user-select": "none",
        "-moz-user-select": "none",
        "-ms-user-select": "none",
        "user-select": "none",
    };

    return (
        <div>

            <div>
                <ParticleComponent />
                <div>

                    <div className=" relative">
                        <div className="pt-20 mx-auto mt-[7%] pb-10 z-20 flex flex-col items-center justify-center md:h-screen">
                            <h1
                                className="text-center my-[1.5%] text-[25px] text-blue-500 font-bold"
                                style={NotSelected}
                            >
                                A One Day National Level Techinal Symposium
                            </h1>

                            <img
                                src={Logo}
                                alt="Infest_2k25"
                                style={NotSelected}
                                className="mx-auto w-[30%] sm:w-[60%]"
                            />
                            <h1
                                className="text-center my-[1.5%] text-[25px] text-green-500 font-bold"
                                style={NotSelected}
                            >
                                28th March 2025
                            </h1>

                            <div className=" flex flex-row sm:flex-col  justify-evenly items-center mx-auto text-center my-[1%] w-[45%] font-semibold">
                                <div className=" text-[20px] hover:shadow-lg sm:my-[5%] w-[250px] px-[30px] py-[15px] border-[2px] rounded-[50px] text-white bg-blue-500 border-blue-500 cursor-pointer hover:bg-black transform transition-all duration-300 hover:scale-105">
                                    <Link to={'/event/tech'}>Register&#160;Events</Link>
                                </div>

                                <div className=" text-[20px] hover:shadow-lg sm:my-[5%] w-[250px] px-[30px] py-[15px] border-[2px] rounded-[50px] text-white bg-green-500 border-black-500 cursor-pointer hover:bg-black transform transition-all duration-300 hover:scale-105"
                                >
                                    <Link to={'#contact'} onClick={() => scrollToContact()}>Contact&#160;Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
