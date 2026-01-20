import AboutImg from "../../assets/about.jpg";
import { MdOutlineEventNote as Event } from "react-icons/md";
import { IoGiftOutline as Prize } from "react-icons/io5";

const About = () => {
  return (
    <div>
      <div id="about" className="py-20 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-green-500/20 rounded-full blur-[100px] -z-10"></div>

        <div className="px-8 flex md:flex-col justify-evenly gap-16 items-center max-w-7xl mx-auto">

          <div className="md:w-full w-1/2 flex flex-col gap-8 bg-white/5 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 group">
            <h1 className="text-[36px] font-extrabold bg-gradient-to-r from-blue-600 via-cyan-500 to-green-500 bg-clip-text text-transparent drop-shadow-sm">About INFEST</h1>

            <div className="space-y-6 text-gray-800 text-lg leading-relaxed">
              <p>Welcome to <strong className="text-blue-600">INFEST 2K26</strong>, the National Level Technical Symposium organized by <strong className="text-gray-900">INFO Institute of Engineering!</strong> We're thrilled to offer a platform where aspiring engineers and tech enthusiasts from various disciplines can showcase their skills and compete for exciting prizes.</p>

              <p>Attention students from <strong className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent font-bold">CSE, IT, AI&DS, ECE, EEE, MECH, S&H, and MBA!</strong> Are you passionate about technology? Do you have groundbreaking research or innovative projects ready to be showcased? <strong className="text-green-600">INFEST 2K26</strong> is your ideal platform to:</p>

              <p className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-500/5 rounded-r-lg">
                <strong>INFEST 2K26</strong> is more than just a competition, it's a dynamic community of tech enthusiasts uniting to learn, share, and innovate. Be part of an unforgettable experience that leaves a lasting impact.
              </p>
            </div>
          </div>

          <div className="relative w-1/2 md:w-full max-w-[500px] transform hover:scale-[1.02] transition-transform duration-500">
            <div className="relative shadow-2xl rounded-2xl overflow-hidden border-4 border-white/30">
              <img src={AboutImg} className="w-full object-cover transform transition-transform duration-700 hover:scale-110" alt="About Infest" />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-blue-600/40 to-green-500/40 mix-blend-overlay"></div>
            </div>

            {/* Floating Glass Badges */}
            <div className="absolute -bottom-6 -right-6 md:right-0 md:-bottom-10 flex flex-col gap-4">
              <div className="bg-white/80 backdrop-blur-md border border-white/40 p-3 px-5 rounded-2xl shadow-lg flex items-center gap-3 transform -rotate-2 hover:rotate-0 transition-all duration-300">
                <div className="bg-blue-100 p-2 rounded-full text-blue-600 text-xl"><Event /></div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">25+ Events</p>
                  <p className="text-xs text-gray-500 font-medium">Technical & Non-Tech</p>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-md border border-white/40 p-3 px-5 rounded-2xl shadow-lg flex items-center gap-3 transform rotate-2 hover:rotate-0 transition-all duration-300 ml-8 md:ml-0">
                <div className="bg-yellow-100 p-2 rounded-full text-yellow-600 text-xl"><Prize /></div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">Exciting Prizes</p>
                  <p className="text-xs text-gray-500 font-medium">Win Big Rewards</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
