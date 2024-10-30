import React from 'react';
import { Card } from 'antd';
import ishara from '../src/img/ishara.png';
import didula from '../src/img/didual.png';
import lal from '../src/img/lal.png';

const TeamMember = ({ name, role, institution, department, imgUrl, Linkedin, email }) => (
  <Card 
    className="text-center hover:shadow-lg transition-shadow duration-300 border-none shadow-md"
    bodyStyle={{ padding: '0' }}
  >
    <img 
      src={imgUrl || "/api/placeholder/400/400"} 
      alt={name}
      className="w-full h-full object-cover mb-6"
    />
    <div className="px-6 pb-6">
      <h3 className="text-blue-500 text-xl font-medium mb-2">
        {name}
      </h3>
      <p className="text-gray-700 mb-3">
        {role}
      </p>
      <p className="text-gray-600 mb-2">
        {institution}
      </p>
      <p className="text-gray-600">
        <span className="font-medium">Department:</span> {department}
      </p>
      <p className="text-gray-600 mb-2 font-medium flex justify-center  space-x-4">
        <a href={Linkedin} className="text-blue-400 hover:underline">LinkedIn</a>
        <a href={email} className="text-blue-400 hover:underline">Email</a>
      </p>
    </div>
  </Card>
);

const MeetOurTeam = () => {
  const teamMembers = [
    {
      name: "Mr. Aruna Ishara Gamage​",
      role: "Supervisor",
      institution: "Sri Lanka Institute Of Information Technology",
      department: "Computer Science and Software Engineering",
      imgUrl: ishara,
      Linkedin: 'https://www.linkedin.com/feed/',
      email: 'mailto:googlemail@gmail.com',
    },
    {
      name: "Mr. Didula Chamara Thanaweerarachchi​",
      role: "Co-Supervisor",
      institution: "Sri Lanka Institute Of Information Technology",
      department: "Computer Science and Software Engineering",
      imgUrl: didula,
      Linkedin: 'https://www.linkedin.com/feed/',
      email: 'mailto:googlemail@gmail.com',
    },
    {
      name: "Mr. Lal Dasanayake​",
      role: "Co-Supervisor",
      institution: "Central Cultural Fund​",
      department: "Information Systems Engineering",
      imgUrl: lal,
      Linkedin: 'https://www.linkedin.com/feed/',
      email: 'mailto:googlemail@gmail.com',
    }
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-blue-500 text-lg mb-2">About Us</h2>
        <h1 className="text-4xl font-bold text-gray-800">Meet Our Team</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            {...member}
          />
        ))}
      </div>
    </div>
  );
};

export default MeetOurTeam;