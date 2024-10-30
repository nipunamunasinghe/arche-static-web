import React from 'react';
import { Button } from 'antd';
import herovr from './img/vr2.jpg';

function Hero() {
  return (
    <section className="flex items-center justify-around p-24 bg-gradient-to-b from-[#F59E0B] to-white">
      {/* Text Container */}
      <div className="w-2/4 mr-4">
        <h1 className="text-4xl font-bold leading-tight text-white mb-4">
        Mix Reality Application for ​<br />
          <span className="text-[#000]">Training Archeological Students in <br />Excavation Processes</span>
        </h1>
        <Button className="mt-4 px-6 py-6 bg-[#000] text-white text-lg font-semibold border-none rounded-md hover:bg-[#000000] transition duration-300">
          Explore More →
        </Button>
      </div>
      
      {/* Image */}
      <img 
        src={herovr}
        alt="Water Tank" 
        className="w-1/2 rounded-lg shadow-lg m-10" 
      />
    </section>
  );
}

export default Hero;
