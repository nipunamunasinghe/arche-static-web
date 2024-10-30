import React from 'react';
import logo from '../src/img/Logo.png';

function Navbar({ refs }) {
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="flex justify-between items-center pl-8 pr-8 pt-4 pb-4 bg-white shadow-md fixed w-full z-10">
      <div className="text-2xl font-bold text-[#0073E6]">
        <img src={logo} alt="HydroSmart Logo" className="h-8 w-auto" />
      </div>
      <ul className="list-none flex gap-6">
        <li className="text-lg cursor-pointer text-gray-700 hover:text-[#FBBF24]" onClick={() => scrollToSection(refs.heroRef)}>Home</li>
        <li className="text-lg cursor-pointer text-gray-700 hover:text-[#FBBF24]" onClick={() => scrollToSection(refs.projectScopeRef)}>Project Scope</li>
        <li className="text-lg cursor-pointer text-gray-700 hover:text-[#FBBF24]" onClick={() => scrollToSection(refs.projectTimelineRef)}>Milestones</li>
        <li className="text-lg cursor-pointer text-gray-700 hover:text-[#FBBF24]" onClick={() => scrollToSection(refs.documentDownloadsRef)}>Downloads</li>
        <li className="text-lg cursor-pointer text-gray-700 hover:text-[#FBBF24]" onClick={() => scrollToSection(refs.meetOurTeamRef)}>About Us</li>
        <li className="text-lg cursor-pointer text-gray-700 hover:text-[#FBBF24]" onClick={() => scrollToSection(refs.downloadAppRef)}>Download App</li>
        <li className="text-lg cursor-pointer text-gray-700 hover:text-[#FBBF24]" onClick={() => scrollToSection(refs.contactFormRef)}>Contact Us</li>
      </ul>
    </nav>
  );
}

export default Navbar;
