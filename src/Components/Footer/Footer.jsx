import { FiPhone as Phone } from "react-icons/fi";
import { ImHeart as Love } from "react-icons/im";
import { AiOutlineCopyright as CopyRight } from "react-icons/ai";
import { Link } from 'react-router-dom';


const Footer = () => {

  return (
    <div>
      <div  id="contact">
        <div className=" flex flex-col items-center gap-10 py-10 bg-black text-[#f6efee]">
          <h1 className=" text-[50px] font-bold bg-gradient-to-r from-blue-500 via-green-500 to-green-500 bg-clip-text text-transparent">Contact us</h1>
          <div className=" flex gap-20 md:flex-col md:text-center">

            <div>
              <h1 className=" font-bold text-[20px]">Overall Coordinator</h1>
              <p className=" pt-2 text-gray-400">Dr. G. Selvavinayagam</p>
              <p className=" text-gray-400">Professor & Head (CSE)</p>
              <Link to={"tel:+919865222182"} className=" flex items-center md:justify-center gap-2 text-gray-400"><Phone/>+91 9865222182</Link>
            </div>
            <div className=" flex flex-col gap-4">
              <h1 className=" font-bold text-[20px]">Faculty Coordinators</h1>
              <div>
                <h1 className=" font-bold">CSE</h1>
                <p className=" text-gray-400">Mrs. P. Gokila - AP/CSE</p>
                <Link to={"tel:+917708103693"} className=" flex items-center gap-2 md:justify-center text-gray-400"><Phone/>+91 7708103693</Link>
              </div>
              <div>
                <h1 className=" font-bold">IT</h1>
                <p className=" text-gray-400">Mr. M. Raja - AP/IT</p>
                <Link to={"tel:+919994160955"} className=" flex items-center gap-2 md:justify-center text-gray-400"><Phone/>+91 9994160955</Link>
              </div>
              <div>
                <h1 className=" font-bold">AI & DS</h1>
                <p className=" text-gray-400">Ms. R. S. Gayathri - AP/AI & DS</p>
                <Link to={"tel:+918122299834"} className=" flex items-center gap-2 md:justify-center text-gray-400"><Phone/>+91 8122299834</Link>
              </div>
              <div>
                <h1 className=" font-bold">ECE</h1>
                <p className=" text-gray-400">Ms. M. Kiruthika Devi - AP/ECE</p>
                <Link to={"tel:+919629099432"} className=" flex items-center gap-2 md:justify-center text-gray-400"><Phone/>+91 9629099432</Link>
              </div>
              <div>
                <h1 className=" font-bold">EEE</h1>
                <p className=" text-gray-400">Mr. B. Kaviraj - AP/EEE</p>
                <Link to={"tel:+919629099432"} className=" flex items-center gap-2 md:justify-center text-gray-400"><Phone/>+91 9629099432</Link>
              </div>
              <div>
                <h1 className=" font-bold">MECH</h1>
                <p className=" text-gray-400">Mr. S. Imthiyas - AP/MECH</p>
                <Link to={"tel:+919042867737"} className=" flex items-center gap-2 md:justify-center text-gray-400"><Phone/>+91 9042867737</Link>
              </div>
              <div>
                <h1 className=" font-bold">S&H</h1>
                <p className=" text-gray-400">Dr. S. Russiarani - AP/S&H</p>
                <Link to={"tel:+919894011281"} className=" flex items-center gap-2 md:justify-center text-gray-400"><Phone/>+91 9894011281</Link>
              </div>
              <div>
                <h1 className=" font-bold">MBA</h1>
                <p className=" text-gray-400">Ms. K. Padmapriya - AP/MBA</p>
                <Link to={"tel:+919361573529"} className=" flex items-center gap-2 md:justify-center text-gray-400"><Phone/>+91 9361573529</Link>
              </div>
            </div>
            <div className=" flex flex-col gap-4">
              <h1 className=" font-bold text-[20px]">Student Coordinators</h1>
              <div>
                <h1 className=" font-bold">CSE</h1>
                <p className=" text-gray-400">Mr. S. Vaitheeshwaran</p>
                <Link to={"tel:+918438651831"} className=" flex items-center gap-2 md:justify-center text-gray-400"><Phone/>+91 8438651831</Link>
              </div>
              <div>
                <h1 className=" font-bold">IT</h1>
                <p className=" text-gray-400">Mr. S. Shivashankaran</p>
                <Link to={"tel:+916384048586"} className=" flex items-center gap-2 md:justify-center text-gray-400"><Phone/>+91 6384048586</Link>
              </div>
              <div>
                <h1 className=" font-bold">AI & DS</h1>
                <p className=" text-gray-400">Mr. S. Ajayan</p>
                <Link to={"tel:+919629303987"} className=" flex items-center gap-2 md:justify-center text-gray-400"><Phone/>+91 9629303987</Link>
              </div>
              <div>
                <h1 className=" font-bold">ECE</h1>
                <p className=" text-gray-400">Mr. D. Gopinath</p>
                <Link to={"tel:+919626569152"} className=" flex items-center gap-2 md:justify-center text-gray-400"><Phone/>+91 9626569152</Link>
              </div>
              <div>
                <h1 className=" font-bold">EEE</h1>
                <p className=" text-gray-400">Mr. R. Gagan Kailash</p>
                <Link to={"tel:+917871896070"} className=" flex items-center gap-2 md:justify-center text-gray-400"><Phone/>+91 7871896070</Link>
              </div>
              <div>
                <h1 className=" font-bold">MECH</h1>
                <p className=" text-gray-400">Mr. P. Suryaprakash</p>
                <Link to={"tel:+919344410755"} className=" flex items-center gap-2 md:justify-center text-gray-400"><Phone/>+91 9344410755</Link>
              </div>
              <div>
                <h1 className=" font-bold">S&H</h1>
                <p className=" text-gray-400">Mr. R. Bhoomish</p>
                <Link to={"tel:+919843797687"} className=" flex items-center gap-2 md:justify-center text-gray-400"><Phone/>+91 9843797687</Link>
              </div>
              <div>
                <h1 className=" font-bold">MBA</h1>
                <p className=" text-gray-400">Ms. M. Dharani</p>
                <Link to={"tel:+919345389360"} className=" flex items-center gap-2 md:justify-center text-gray-400"><Phone/>+91 9345389360</Link>
              </div>
            </div>
          </div>
        </div>
          <div className=" flex flex-col items-center justify-center p-4 gap-3 bg-black border-t-2 border-t-gray-400">
            <h1 className=" flex items-center gap-2 text-gray-400">Made with <Love className=" text-[#ff9200]"/> by <Link to={"https://coderscave.in"} className=" text-[#ff9200]">SprinkleLight Technologies</Link> For IIE</h1>
            <p className="  flex items-center gap-2 text-gray-400"><CopyRight/> Copyright <Link to={"http://infoengg.com"} className=" bg-gradient-to-r from-blue-500 via-green-500 to-green-500 bg-clip-text text-transparent">Info Engg.</Link>  All Rights Reserved by CSE & IT Dept of INFO Institute of Engineering.</p>
          </div>
      </div>
    </div>
  )
}

export default Footer