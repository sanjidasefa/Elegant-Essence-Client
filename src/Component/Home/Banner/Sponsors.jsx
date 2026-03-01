import React, { use } from 'react';
import Marquee from "react-fast-marquee";

const sponsors = fetch('/Sponsors.json').then(res => res.json())
const Sponsors = () => {
  const sponsorData = use(sponsors)
  return (
    <div className='bg-white border-t-2  text-cyan-800 p-20'>
        <h1 className="font-bold text-center  text-3xl md:text-5xl mb-20 text-cyan-800">Our Sponsors</h1>
     <Marquee pauseOnHover={true} speed={40} gradient={true}>
      <div className='flex justify-center items-center gap-20 '>
       {
        sponsorData.map((item)=>{
          return <div key={item.id}>
              <div className="opacity-70 flex flex-col justify-center items-center">
            <h1 className="text-6xl font-bold text-black">{item.name}</h1>
          
            <p className="text-lg my-2 text-amber-400 font-medium ">
               {item.level}
            </p>
          
        </div>
          </div>
        })
      }
     </div>
     </Marquee>
    </div>
  );
};

export default Sponsors;