import ShCardContent from "./ShCardContent.js"
import { FaArrowRight as Register } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

import {hoverbottom,
  bottomshade,
  topshade,
} from "../../../assets/index.js";

const ShCard = () => {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (id) => {
    setHovered(id);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div className="flex flex-wrap sm:flex-col justify-center gap-[7%] w-[80%] mx-auto md:grid-cols-1 cursor-pointer">
      {ShCardContent.map((content) => (
        <div
          key={content.id}
          className="relative z-10 border m-4 rounded-[1px] overflow-hidden h-[50vh] duration-500 bg-cover bg-center w-[40%] sm:w-[93%]"
          style={{ backgroundImage: `url(${content.img})` }}
          onMouseOver={() => handleMouseEnter(content.id)}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`absolute bg-opacity-25 top-0 z-30 w-full h-full ${hovered === content.id ? "bg-gray-900" : "bg-gray-800"}`}></div>

          {hovered === content.id && (
            <div className="absolute z-50 top-[22%] left-[5%]  p-6 flex flex-col justify-between gap-4 w-[80%] sm:w-[95%]">

              <h1 className="text-[22px] font-extrabold text-white  bg-clip-text text-transparent">
                {content.eventTitle}
              </h1>
              <p className="text-white font-normal text-[12px] custom-truncate">
                {content.eventDesc}
              </p>
              
              <Link to={`/event/sh/${content.eventTitle}`} className="text-[13px] text-center flex items-center font-bold  w-[60%] p-3 rounded-[2px] bg-white cursor-pointer hover:bg-transparent hover:border border-gray-500 hover:shadow-lg">
                Register Now&#160;
                <Register />
              </Link>
            </div>
          ) }

          {
            hovered !== content.id && <div className="flex pt-[20%] justify-center h-full w-full z-40">
            <h1 className="text-center text-[22px] font-extrabold z-40 text-white">{content.eventTitle}</h1>
          </div>
          }

          {/* Topshade */}
          {hovered === content.id && (
            <div className="absolute top-[-30px] right-0 z-40">
              <img src={topshade} alt="" />
            </div>
          )}

          {/* Bottom shade */}
          {hovered === content.id ? (
            <div className="absolute duration-500 bottom-[-30px] left-0  z-40">
              <img src={hoverbottom} alt="" />
            </div>
          ) : (
            <div className="absolute duration-500 bottom-[-15px] left-0 z-40">
              <img src={bottomshade} alt="" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ShCard;

