import AboutImg from "../../assets/about.jpg";
import { MdOutlineEventNote as Event } from "react-icons/md";
import { IoGiftOutline as Prize } from "react-icons/io5";

const About = () => {
  return (
    <div>
      <div id="about">
        <div className=" px-8 pt-8 flex md:flex-col justify-evenly gap-10 items-center">

          <div className=" w-[50%] md:w-[90%] gap-10 md:gap-5 flex flex-col">
            <h1 className=" text-[30px] font-bold bg-gradient-to-r from-blue-500 via-green-500 to-green-500 bg-clip-text text-transparent">About INFEST</h1>

            <p className=" text-gray-700">Welcome to <strong>INFEST 2K25</strong>, the National Level Technical Symposium organized by <strong>INFO Institute of Engineering!</strong> We're thrilled to offer a platform where aspiring engineers and tech enthusiasts from various disciplines can showcase their skills and compete for exciting prizes.
            </p>

            <p className=" text-gray-700">Attention students from <strong>CSE, IT, AI&DS, ECE, EEE, MECH, S&H, and MBA!</strong> Are you passionate about technology? Do you have groundbreaking research or innovative projects ready to be showcased? <strong>INFEST 2K25</strong> is your ideal platform to:
            </p>

            <p className=" text-gray-700">
            <strong>INFEST 2K25</strong> is more than just a competition, it's a dynamic community of tech enthusiasts uniting to learn, share, and innovate. Be part of an unforgettable experience that leaves a lasting impact.
            </p>
            
          </div>

          <div className="relative shadow-2xl">
            <img src={AboutImg} width={500} className="rounded-xl" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 to-green-500 opacity-50 rounded-[10px] "></div>

            <div className=" absolute top-[60%] right-[50%] w-[60%] md:w-[70%] md:right-[40%]">
              <div className="bg-blue-500 bg-opacity-50 p-1 px-2 m-2 w-auto rounded-full font-bold shadow-xl border-gray-200 border">
                <p className=" flex items-center gap-2 md:text-[14px]"><Event className=" text-blue-500"/>25+ Events on INFEST 2K25</p>
              </div>
              <div className="bg-green-500 bg-opacity-50p-1 px-2 m-2 w-[75%] rounded-full font-bold  shadow-xl border-gray-200 border">
                <p className=" flex items-center gap-2 md:text-[14px]"><Prize className=" text-yellow-600"/>Exiciting Prizes</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
