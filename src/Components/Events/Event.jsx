import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Wave1 } from "../TextAnimation/TextAnimation.jsx";

const Event = () => {
  document.documentElement.scrollTop = 0;
  const location = useLocation();
  const [showEvent, setShowEvent] = useState("tech");

  useEffect(() => {
    // Set showEvent based on the pathname
    const pathname = location.pathname;
    const eventCategory = pathname.split("/")[2];
    setShowEvent(eventCategory || "tech");

    // Scroll to the top on component mount or update
    document.documentElement.scrollTop = 0;
  }, [location.pathname]);

  // Render links dynamically
  const renderLink = (category, label) => (
    <Link
      to={`/event/${category}`}
      className={`cursor-pointer ${
        showEvent === category &&
        "bg-gradient-to-r from-green-500 to-blue-500 text-white"
      } duration-700 ease-linear transition px-[2%] py-[1%] rounded-[25px] text-[15px]`}
      onClick={() => setShowEvent(category)}
    >
      {label}
    </Link>
  );

  return (
    <div className="mt-[10%] mb-[5%] sm:mt-[23%]">
      <div className="my-4 text-[60px] font-extrabold text-center [-webkit-text-stroke:1px_#0092ff] text-transparent animate-colorChange">
        <Wave1 /> {/** Event animated text */}
      </div>

      <div className="font-medium text-center">
        <p>Explore our Events and Register now !</p>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex justify-between w-[85%] sm:w-[92%] my-10 border p-6 rounded-md font-semibold">
          {renderLink("tech", "CSE/IT/AIDS")}
          {renderLink("electrical", "ECE/EEE")}
          {renderLink("mech", "MECH")}
          {renderLink("sh", "S&H")}
          {renderLink("mba", "MBA")}
        </div>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Event;
