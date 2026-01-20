import Tech from "../../../../assets/Dept/tech.jpg";
import Electrial from "../../../../assets/Dept/chip.jpg";
import Mech from "../../../../assets/Dept/mech.jpg";
import MBA from "../../../../assets/Dept/mba.jpg";
import SH from "../../../../assets/Dept/sh.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

const HomeDeptCard = () => {
  const [dept, setDept] = useState("tech");

  const departments = [
    { id: "tech", label: "CSE / IT / AI&DS", img: Tech, link: "/event/tech" },
    { id: "electrical", label: "EEE / ECE", img: Electrial, link: "/event/electrical" },
    { id: "mech", label: "MECH", img: Mech, link: "/event/mech" },
    { id: "sh", label: "S&H", img: SH, link: "/event/sh" },
    { id: "mba", label: "MBA", img: MBA, link: "/event/mba" }
  ];

  return (
    <div className="w-full max-w-[95%] mx-auto my-10">
      <div className="flex gap-4 justify-center md:flex-col h-[70vh] md:h-auto">

        {departments.map((item) => (
          <div
            key={item.id}
            className={`${dept === item.id ? "w-[40%] md:h-[40vh]" : "w-[12%] md:h-[10vh]"
              } relative transition-all duration-700 ease-in-out rounded-2xl overflow-hidden md:w-full group shadow-lg hover:shadow-2xl border border-white/20`}
            onMouseEnter={() => setDept(item.id)}
          >
            {/* Background Image with Zoom Effect */}
            <img
              src={item.img}
              alt={`${item.label} Department`}
              className={`object-cover h-full w-full transition-transform duration-1000 ${dept === item.id ? "scale-110" : "scale-100"}`}
            />

            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80 transition-opacity duration-500 ${dept === item.id ? "opacity-100" : "opacity-70"}`}></div>

            {/* Active State Content */}
            <div className={`absolute inset-0 flex flex-col justify-end p-8 pb-12 transition-all duration-700 z-10 ${dept === item.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <h3 className="text-white font-black text-[32px] md:text-[24px] uppercase tracking-wider drop-shadow-lg mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  {item.label}
                </span>
              </h3>

              <Link
                to={item.link}
                className="w-fit text-[14px] px-8 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white font-bold uppercase hover:bg-white hover:text-black transition-all duration-300 shadow-lg flex items-center gap-2 group-hover:gap-4"
              >
                <span>View Events</span>
                <span>→</span>
              </Link>
            </div>

            {/* Inactive State Vertical Text */}
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${dept === item.id ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
              <p className="text-white/80 font-bold text-[18px] tracking-[0.5em] uppercase rotate-[-90deg] whitespace-nowrap drop-shadow-md md:rotate-0 md:tracking-normal">
                {item.label}
              </p>
            </div>

            {/* Highlight Border on Active */}
            <div className={`absolute inset-0 border-2 border-white/0 transition-all duration-500 rounded-2xl pointer-events-none ${dept === item.id ? "border-white/20" : ""}`}></div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default HomeDeptCard;