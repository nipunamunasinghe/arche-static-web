import React from 'react';
import { Button } from 'antd';

const DownloadApp = () => {
  return (
    <div className="bg-[#F59E0B] min-h-[500px] flex items-center justify-center">
      <div className="container mx-auto px-8 flex flex-col items-center text-center">
        {/* Left Section */}
        <div className="text-white max-w-xl mb-8">
          <h1 className="text-5xl font-bold mb-6">
            Request a Demo!
          </h1>
          <p className="text-xl">
            ARCHE is now available for a demo request. Click below to request a demo of the app now!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
