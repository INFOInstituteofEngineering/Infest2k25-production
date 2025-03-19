import Tech from "../../../../assets/Dept/tech.jpg";
import Electrial from "../../../../assets/Dept/chip.jpg";
import Mech from "../../../../assets/Dept/mech.jpg";
import MBA from "../../../../assets/Dept/mba.jpg";
import SH from "../../../../assets/Dept/sh.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

const HomeDeptCard = () => {
  const [dept, setDept] = useState("tech");
  return (
    <div>

      <div className=" flex gap-2 justify-center md:flex-col">

        {/** Tech */}
        <div
          className={`${dept === "tech" ? "w-[30%]" : "w-[8%]"} relative duration-500 h-[65vh]  rounded-[7px] overflow-hidden md:w-full md:h-[25vh]`}
          onMouseOver={() => { setDept("tech") }}
        >
          <img src={Tech} alt="Tech_Departments" className=" object-cover h-full w-full" />

           <div className="absolute top-0 left-0 w-full h-full bg-blue-500 bg-opacity-50 rounded-[7px] flex flex-col gap-[5%] justify-center items-center">
            
            <p className={`${dept === "tech" ? "" : "rotate-[-90deg] md:rotate-0"} ${dept !== "tech" && "animate-pulse"}  duration-700 text-white font-bold text-[25px] text-center `} >CSE&#160;/&#160;IT&#160;/&#160;AI&DS</p>

            <Link to={"/event/tech"} className={`${dept === "tech" ? "block" : "hidden"} text-[14px] px-[5%] py-[3%] cursor-pointer rounded-[25px] bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold uppercase hover:shadow-lg`}>
              <p>View&#160;Events</p>
            </Link>

          </div>

        </div>

        {/** Electrical */}
        <div
          className={`${dept === "electrical" ? "w-[30%]" : "w-[8%]"} relative duration-500 h-[65vh]  rounded-[7px] overflow-hidden md:w-full md:h-[25vh]`}
          onMouseOver={() => { setDept("electrical") }}
        >
          <img src={Electrial} alt="Electrial_Departments" className=" object-cover h-full w-full" />

           <div className="absolute top-0 left-0 w-full h-full bg-green-400 bg-opacity-50 rounded-[7px] flex flex-col gap-[5%] justify-center items-center">

            <p className={`${dept === "electrical" ? "" : "rotate-[-90deg] md:rotate-0"} ${dept !== "electrical" && "animate-pulse"}  duration-700 text-white font-bold text-[25px] text-center`}>EEE&#160;/&#160;ECE</p>

            <Link to={"/event/electrical"} className={`${dept === "electrical" ? "block" : "hidden"} text-[14px] px-[5%] py-[3%] cursor-pointer rounded-[25px] bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold uppercase hover:shadow-lg`}>
              <p>View&#160;Events</p>
            </Link>

          </div>

        </div>

        {/**Mech */}
        <div
          className={`${dept === "mech" ? "w-[30%]" : "w-[8%]"} relative duration-500 h-[65vh]  rounded-[7px] overflow-hidden md:w-full md:h-[25vh]`}
          onMouseOver={() => { setDept("mech") }}
        >
          <img src={Mech} alt="Mech_Departments" className=" object-cover h-full w-full" />

           <div className="absolute top-0 left-0 w-full h-full bg-blue-500 bg-opacity-50 rounded-[7px] flex flex-col gap-[5%] justify-center items-center">

            <p className={`${dept === "mech" ? "" : "rotate-[-90deg] md:rotate-0"} ${dept !== "mech" && "animate-pulse"}  duration-700 text-white font-bold text-[25px] text-center`}>MECH</p>

            <Link to={"/event/mech"} className={`${dept === "mech" ? "block" : "hidden"} text-[14px] px-[5%] py-[3%] cursor-pointer rounded-[25px] bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold uppercase hover:shadow-lg`}>
              <p>View&#160;Events</p>
            </Link>

          </div>

        </div>

        {/**S&H */}
        <div
          className={`${dept === "sh" ? "w-[30%]" : "w-[8%]"} relative duration-500 h-[65vh]  rounded-[7px] overflow-hidden md:w-full md:h-[25vh]`}
          onMouseOver={() => { setDept("sh") }}
        >
          <img src={SH} alt="SH_Departments" className=" object-cover h-full w-full" />

           <div className="absolute top-0 left-0 w-full h-full bg-green-400 bg-opacity-50 rounded-[7px] flex flex-col gap-[5%] justify-center items-center">

            <p className={`${dept === "sh" ? "" : "rotate-[-90deg] md:rotate-0"} ${dept !== "sh" && "animate-pulse"}  duration-700 text-white font-bold text-[25px] text-center`}>S&H</p>

            <Link to={"/event/sh"} className={`${dept === "sh" ? "block" : "hidden"} text-[14px] px-[5%] py-[3%] cursor-pointer rounded-[25px] bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold uppercase hover:shadow-lg`}>
              <p>View&#160;Events</p>
            </Link>

          </div>

        </div>

        {/**MBA */}
        <div
          className={`${dept === "mba" ? "w-[30%]" : "w-[8%]"} relative duration-500 h-[65vh]  rounded-[7px] overflow-hidden md:w-full md:h-[25vh]`}
          onMouseOver={() => { setDept("mba") }}
        >
          <img src={MBA} alt="MBA_Departments" className=" object-cover h-full w-full" />

          <div className="absolute top-0 left-0 w-full h-full bg-blue-500 bg-opacity-50 rounded-[7px] flex flex-col gap-[5%] justify-center items-center pb-[5%]">

            <p className={`${dept === "mba" ? "" : "rotate-[-90deg] md:rotate-0"} ${dept !== "mba" && "animate-pulse"}  duration-700 text-white font-bold text-[25px] text-center`}>MBA</p>

            <Link to={"/event/mba"} className={`${dept === "mba" ? "block" : "hidden"} text-[14px] px-[5%] py-[3%] cursor-pointer rounded-[25px] bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold uppercase hover:shadow-lg`}>
              <p>View&#160;Events</p>
            </Link>

          </div>

        </div>

      </div>

    </div>
  )
}

export default HomeDeptCard;