import { Link, useParams } from "react-router-dom";
import TechCardContent from "./TECH/TechCardContent.js";
import ElectricalCardContent from "./ELECTRICAL/ElectricalCardContent";
import MbaCardContent from "./MBA/MbaCardContent";
import ShCardContent from "./SH/ShCardContent";
import MechCardContent from "./MECH/MechCardContent";
import { GoDotFill as DotIcon } from "react-icons/go";
import { FaWhatsapp as WhatsappIcon } from "react-icons/fa";
import logo from "../../assets/logo.png";

const EventDetailsComponent = ({ title, desc, img, rules, criteria, mobile, coordinator, studentCoordinator, stdmobile, email }) => {
  document.documentElement.scrollTop = 0;
  return (
    <div className="md:mt-[20%]  mt-[9%] flex flex-col gap-4  mb-[4%] overflow-x-hidden">
      {/* Banner Image */}
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="w-full h-[60vh] sm:h-[25vh] md:h-[40vh]  bg-cover bg-center relative"
      >
        {/**Green shade */}
        <div
          className="w-[45%] md:w-[60%] bg-green-500 md:h-[7vh] h-[10vh]   flex justify-center items-center absolute left-0 top-0"
          style={{ borderRadius: "0px 0px 130px 0px" }}
        >
          <h1 className="text-[25px] md:text-[18px] font-bold text-white uppercase">
            register your event
          </h1>
        </div>

        {/**Infest Logo */}
        <div className=" bg-gray-500 absolute flex justify-center items-center bottom-[8%] right-[3%] h-[70px] w-[70px] p-2 rounded-[50%]">
          <img src={logo} alt="" className=" " />
        </div>
      </div>

      <div className=" flex flex-row md:flex-col mt-[2%] md:mt-[4%] md:gap-4 items-center justify-between">
        <div className=" ml-[5%]">
          {/**Event title */}
          <h1 className=" font-bold text-[24px] md:text-[20px] md:my-[2%] my-[2%]">
            Event Title : {title}
          </h1>

          {/**Starts, Ends, Venue */}
          <div className=" flex flex-col gap-3 md:gap-4 text-[12px]  text-gray-500">
            <div className=" flex flex-row gap-2">
              <p className=" uppercase font-bold ">starts on :</p>
              <p>March 28,2025 9:00 AM (IST)</p>
            </div>

            <div className=" flex flex-row gap-2">
              <p className=" uppercase font-bold ">ends on :</p>
              <p>March 28,2025 4:00 PM (IST)</p>
            </div>

            <div className=" flex flex-row gap-2">
              <p className=" uppercase font-bold ">venue :</p>
              <p>INFO Institute of Engineering</p>
            </div>
          </div>
        </div>

        <div className=" py-[7px] px-[15px] md:mt-[5%] text-[14px] rounded-[5px] font-bold text-white bg-blue-500 cursor-pointer hover:shadow-xl mr-[10%]">
          <Link to={'https://infest-2k25-registration-page.vercel.app/'}>Register Now</Link>
        </div>
      </div>

      <div className="ml-[5%] md:mt-[5%]">
        <div className=" my-[2%]">
          <p className=" font-bold text-[20px]">Description :</p>
          <p className=" text-gray-500 text-[15px] my-[2%] md:my-[4%] w-[90%]">{desc}</p>
        </div>
      </div>

      <div className=" ml-[5%] flex flex-col gap-4 my-[1%]">
        <h1 className=" font-bold text-[20px]">Rules :</h1>
        <div className=" flex flex-col gap-4 text-[13px] ml-[3%]">
        {
          rules.map((rule)=>(
            <div key={rule} className="flex flex-row gap-2 items-center">
              <DotIcon/>{rule}
            </div>
          ))
        }
        </div>
      </div>

      <div className=" ml-[5%] flex flex-col gap-4 my-[1%]">
        <h1 className=" font-bold text-[20px]">Judging Criteria :</h1>
        <div className=" flex flex-col gap-4 text-[13px] ml-[3%]">
          {
            criteria.map((criteria)=>(
              <div key={criteria} className="flex flex-row gap-2 items-center">
                <DotIcon/>{criteria}
              </div>
            ))
          }
        </div>
      </div>

      <div className=" flex flex-col items-center border gap-[5%] px-[4%] py-[2%] w-[90%] bg-gray-100 my-[2%] mt-[3%] mx-auto justify-center">

        
        <div className=" flex flex-row gap-2 items-start font-bold text-[20px]">
          <h1> Coordinator :</h1>
          <h1>{coordinator}</h1>
        </div>

        <Link to={`https://api.whatsapp.com/send?phone=${mobile}`} className=" text-[20px] text-green-500 p-1" > 
          <WhatsappIcon/>
        </Link>
        
          <h1>Student Coordinator :</h1>
          <h1>{studentCoordinator}</h1>
          <Link to={`https://api.whatsapp.com/send?phone=${stdmobile}`} className=" text-[20px] text-green-500 p-1" > 
          <WhatsappIcon/>
        </Link>
        </div>
        
        <div className="w-full text-center font-bold text-[20px] mt-2">
    <h1>Email :</h1>
  <h1>{email}</h1>
  </div>
      </div>
  );
};

const EventDetails = () => {
  const { techTitle, electricalTitle, mbaTitle, shTitle, mechTitle } = useParams();

  const findDept = () => {
    switch (true) {
      case !!techTitle:
        return TechCardContent.find(
          (content) => content.eventTitle === techTitle
        );
      case !!electricalTitle:
        return ElectricalCardContent.find(
          (content) => content.eventTitle === electricalTitle
        );
      case !!mbaTitle:
        return MbaCardContent.find(
          (content) => content.eventTitle === mbaTitle
        );
      case !!shTitle:
        return ShCardContent.find((content) => content.eventTitle === shTitle);
      case !!mechTitle:
        return MechCardContent.find(
          (content) => content.eventTitle === mechTitle
        );
      default:
        return null;
    }
  };
  

  const EventContentDetails = findDept();
  

  return (
    <div>
      <div>
        <EventDetailsComponent
          banner={EventContentDetails.banner}
          img={EventContentDetails.img}
          title={EventContentDetails.eventTitle}
          desc={EventContentDetails.eventDesc}
          rules={EventContentDetails.rules}
          criteria={EventContentDetails.criteria}
          mobile={EventContentDetails.mobile}
          stdmobile={EventContentDetails.stdmobile}
          coordinator={EventContentDetails.coordinator}
          studentCoordinator={EventContentDetails.studentCoordinator}
          email={EventContentDetails.email}
        />
      </div>
    </div>
  );
};

export default EventDetails;
