import React, { useState, useEffect } from 'react';
import 'add-to-calendar-button';

const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const targetDate = new Date('2025-03-28T08:00:00');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((difference % (1000 * 60)) / 1000));

      if (difference <= 0) {
        clearInterval(intervalId);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className=' flex flex-col justify-evenly items-center mb-10 pb-10 gap-4'>
        <div className=' w-[80%] text-center'>
          <h1 className=' font-bold text-[60px]'>Mark Your<span className=' bg-gradient-to-r from-blue-500 via-green-500 to-green-500 bg-clip-text text-transparent'> Calendar</span></h1>
          <p>Join us at the forefront of technological advancements and gain valuable insights at our upcoming technical symposium INFEST 2K25!</p>
        </div>

        <div className=' flex flex-col items-center gap-6'>

          <div className=' flex gap-16'>

            <div className=' relative'>
              <h1 className=' text-[100px] font-Anton'>{days}</h1>
              <p className=' absolute top-[120px] font-bold text-[30px] bg-gradient-to-r from-blue-500 via-green-500 to-green-500 bg-clip-text text-transparent '>Days</p>
            </div>

            <div className=' relative'>
              <h1 className=' text-[100px] font-Anton'>{hours.toString().padStart(2, '0')}</h1>
              <p className=' absolute top-[120px] font-bold text-[30px] bg-gradient-to-r from-blue-500 via-green-500 to-green-500 bg-clip-text text-transparent '>Hours</p>
            </div>
          </div>

          <div className=' flex gap-14'>

            <div className=' relative'>
              <h1 className=' text-[50px] font-Anton'>{minutes.toString().padStart(2, '0')}</h1>
              <p className=' absolute top-[60px]  font-bold text-[20px] bg-gradient-to-r from-blue-500 via-green-500 to-green-500 bg-clip-text text-transparent '>Mins</p>
            </div>

            <div className=' relative'>
              <h1 className=' text-[50px] font-Anton'>{seconds.toString().padStart(2, '0')}</h1>
              <p className=' absolute top-[60px] font-bold text-[20px] bg-gradient-to-r from-blue-500 via-green-500 to-green-500 bg-clip-text text-transparent '>Secs</p>
            </div>
          </div>

        </div>

        <div className=' mt-4'>
          <add-to-calendar-button
            name="INFEST 2K25"
            description="A One day National Level Technical Symposium 2025"
            startDate="2025-03-28"
            endDate="2025-03-28"
            startTime="08:00"
            endTime="16:30"
            location="Info Institute of Engineering"
            options="['Google']"
            timeZone="Asia/Kolkata"
            trigger="click"
            inline
            listStyle="modal"
            iCalFileName="Reminder-Event"
          />
        </div>
      </div>

    </div>
  );
};

export default Countdown;
