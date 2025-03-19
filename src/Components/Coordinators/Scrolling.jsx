import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';


SwiperCore.use([Navigation, Pagination]);

import {
  Coordinators1,
  Coordinators2,
  Coordinators3,
} from "./CoordinatorsDetails";
import Swiper from 'react-swiper';

const Scrolling = () => {
  return (
    <div>
      <Swiper
            navigation={true} // Enable navigation arrows (optional)
            pagination={{ clickable: true }} // Enable pagination dots (optional)
            loop={true} // Enable infinite scrolling
        >
            {Coordinators1.map((content) => (
                <div key={content.name} className="w-full h-64 object-cover">
                    <img src={content.image} alt="img" />
                    <h1>{content.name}</h1>
                </div>
            ))}
        </Swiper>
    </div>
  );
};

export default Scrolling;
