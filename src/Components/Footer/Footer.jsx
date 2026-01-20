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
              <p className=" pt-2 text-gray-400">Dr. J Balasubramanian</p>
              <p className=" text-gray-400">Professor & Head (MECH)</p>
              <Link to={"tel:+919488831838"} className=" flex items-center md:justify-center gap-2 text-gray-400"><Phone/>+91 9488831838</Link>
              <Link to={"tel:+916380559371"} className=" flex items-center md:justify-center gap-2 text-gray-400"><Phone/>+91 6380559371</Link>
            </div>
            <div className=" flex flex-col gap-4">
              <h1 className=" font-bold text-[20px]">Faculty Coordinators</h1>
              <div>
                <h1 className=" font-bold">CSE</h1>
                <p className=" text-gray-400">Mrs. M. Nagarajan - AP/CSE</p>
                <Link to={"tel:+919003372454"} className=" flex items-center gap-2 md:justify-center text-gray-400"><Phone/>+91 9003372454</Link>
              </div>
              <div>
                <h1 className=" font-bold">IT</h1>
                <p className=" text-gray-400">Mr. M. Raja - AP/IT</p>
                <Link to={"tel:+919994160955"} className=" flex items-center gap-2 md:justify-center text-gray-400"><Phone/>+91 9994160955</Link>
              </div>
              <div>
                <h1 className=" font-bold">AI & DS</h1>
                <p className=" text-gray-400">Ms. P.K - Prakash AP/AI & DS</p>
                <Link to={"tel:+919894495630"} className=" flex items-center gap-2 md:justify-center text-gray-400"><Phone/>+91 9894495630</Link>
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
                <p className=" text-gray-400">Mr. P. Varatharajan - AP/MECH</p>
                <Link to={"tel:+919943659947"} className=" flex items-center gap-2 md:justify-center text-gray-400"><Phone/>+91 9943659947</Link>
              </div>
              <div>
                <h1 className=" font-bold">S&H</h1>
                <p className=" text-gray-400">Dr. S. Russiarani - AP/S&H</p>
                <Link to={"tel:+919894011281"} className=" flex items-center gap-2 md:justify-center text-gray-400"><Phone/>+91 9894011281</Link>
              </div>
              <div>
                <h1 className=" font-bold">MBA</h1>
                <p className=" text-gray-400">Ms. S. Sivakumar - AP/MBA</p>
                <Link to={"tel:+919786265706"} className=" flex items-center gap-2 md:justify-center text-gray-400"><Phone/>+91 9786265706</Link>
              </div>
            </div>
            <div className=" flex flex-col gap-4">
              <h1 className=" font-bold text-[20px]">Student Coordinators</h1>
              <div>
                <h1 className=" font-bold">CSE</h1>
                <p className=" text-gray-400">Ms. S. Priyadharsini</p>
                <Link to={"tel:+918122103695"} className=" flex items-center gap-2 md:justify-center text-gray-400"><Phone/>+91 8122103695</Link>
              </div>
              <div>
                <h1 className=" font-bold">IT</h1>
                <p className=" text-gray-400">Mr. B. Mega Adhith</p>
                <Link to={"tel:+916374354188"} className=" flex items-center gap-2 md:justify-center text-gray-400"><Phone/>+91 6374354188</Link>
              </div>
              <div>
                <h1 className=" font-bold">AI & DS</h1>
                <p className=" text-gray-400">Mr. S S. Harish</p>
                <Link to={"tel:+917418217931"} className=" flex items-center gap-2 md:justify-center text-gray-400"><Phone/>+91 7418217931</Link>
              </div>
              <div>
                <h1 className=" font-bold">ECE</h1>
                <p className=" text-gray-400">Mr. R R. Enbaarasan</p>
                <Link to={"tel:+917695891201"} className=" flex items-center gap-2 md:justify-center text-gray-400"><Phone/>+91 7695891201</Link>
              </div>
              <div>
                <h1 className=" font-bold">EEE</h1>
                <p className=" text-gray-400">Mr. G. Parthiban</p>
                <Link to={"tel:+919789590071"} className=" flex items-center gap-2 md:justify-center text-gray-400"><Phone/>+91 9789590071</Link>
              </div>
              <div>
                <h1 className=" font-bold">MECH</h1>
                <p className=" text-gray-400">Mr. S. Dharun</p>
                <Link to={"tel:+918870829410"} className=" flex items-center gap-2 md:justify-center text-gray-400"><Phone/>+91 8870829410</Link>
              </div>
              <div>
                <h1 className=" font-bold">S&H</h1>
                <p className=" text-gray-400">Mr. S. Priyadharsan</p>
                <Link to={"tel:+919342174096"} className=" flex items-center gap-2 md:justify-center text-gray-400"><Phone/>+91 9342174096</Link>
              </div>
              <div>
                <h1 className=" font-bold">MBA</h1>
                <p className=" text-gray-400">Ms. P. Vinothkumar</p>
                <Link to={"tel:+919677790344"} className=" flex items-center gap-2 md:justify-center text-gray-400"><Phone/>+91 9677790344</Link>
              </div>
            </div>
          </div>
        </div>
          <div className=" flex flex-col items-center justify-center p-4 gap-3 bg-black border-t-2 border-t-gray-400">
            <h1 className=" flex items-center gap-2 text-gray-400">Made with <Love className=" text-[#7d1ae0]"/> by <Link to={"http://redefyne.in/"} className=" text-[#7d1ae0]">ReDefyne Labs</Link> For IIE</h1>
            <p className="  flex items-center gap-2 text-gray-400"><CopyRight/> Copyright <Link to={"http://infoengg.com"} className=" bg-gradient-to-r from-blue-500 via-green-500 to-green-500 bg-clip-text text-transparent">Info Engg.</Link>  All Rights Reserved by CSE & IT Dept of INFO Institute of Engineering.</p>
          </div>
      </div>
    </div>
  )
}

export default Footer