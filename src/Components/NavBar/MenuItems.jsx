import { useEffect, useRef } from "react";
import { IoArrowForwardOutline as Arrow } from "react-icons/io5";
import { Link } from "react-router-dom";

const MenuItems = ({ setShowMenu }) => {
    const menuRef = useRef(null);

    // Close menu when clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false); // Close menu if clicked outside
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [setShowMenu]);

    return (
        <div 
            ref={menuRef} 
            className="fixed w-[25%] sm:w-[90%] md:w-[50%] duration-500 bg-gradient-to-r from-blue-500 to-cyan-500 backdrop-blur-lg bg-opacity-80 top-[25%] sm:top-[11%] right-0 py-[2.5%] pt-[2%] h-[100vh] z-50 shadow-2xl rounded-l-3xl border-l-[3px] border-white"
        >
            <Arrow 
                className="float-right mr-[45%] sm:mr-[16%] cursor-pointer sm:mt-[5%] text-white text-[32px] bg-gradient-to-r from-blue-400 to-cyan-400 p-2 rounded-full shadow-lg hover:scale-110 transform duration-300"
                onClick={() => setShowMenu((prev) => !prev)}
            />

            <div className='flex flex-col gap-10 p-5 justify-center rounded-md pl-[25%] text-[18px] w-full text-white h-full'>
                <Link to={"/"} 
                    className='font-medium cursor-pointer relative before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 hover:before:w-full'>
                    Home
                </Link>
                <Link to={"/event/tech"} 
                    className='font-medium cursor-pointer relative before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 hover:before:w-full'>
                    Events
                </Link>
                <Link to={'#contact'} 
                    onClick={() => scrollToContact()}
                    className='font-medium cursor-pointer relative before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 hover:before:w-full'>
                    Contact
                </Link>
            </div>
        </div>
    );
}

export default MenuItems;
