import React from 'react';
import { Card } from 'antd';
import { Linkedin } from 'lucide-react';
import nipuna from '../src/img/nipuna.png';
import maleesha from '../src/img/maleesha.png';
import vishwa from '../src/img/vishwa.png';
import jenuli from '../src/img/jenuli.png';

const TeamMember = ({ name, role, institution, department, imgUrl, Linkedin, email }) => (
  <Card 
    className="text-center hover:shadow-lg transition-shadow duration-300 border-none shadow-md"
    bodyStyle={{ padding: '0' }}
  >
    <img 
      src={imgUrl || "/api/placeholder/400/400"} 
      alt={name}
      className="w-full h-64 object-cover mb-6"
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

const GroupMembers = () => {
  const teamMembers = [
    {
      name: "Vithanage Don J.O​",
      role: "Group Leader",
      institution: "Sri Lanka Institute Of Information Technology",
      department: "Software Engineering",
      imgUrl: jenuli,
      Linkedin: 'https://www.linkedin.com/feed/',
      email: 'mailto:googlemail@gmail.com',
    },
    {
      name: "Navodya M.A.N",
      role: "Group Member",
      institution: "Sri Lanka Institute Of Information Technology",
      department: "Software Engineering",
      imgUrl: nipuna,
      Linkedin: 'https://www.linkedin.com/feed/',
      email: 'mailto:googlemail@gmail.com'
    },
    {
      name: "Bulegodaarachchi V.V",
      role: "Group Member",
      institution: "Sri Lanka Institute Of Information Technology",
      department: "Software Engineering",
      imgUrl: vishwa,
      Linkedin: 'https://www.linkedin.com/feed/',
      email: 'mailto:googlemail@gmail.com'
    },
    {
        name: "Dissanayake W.D.P.M",
        role: "Group Member",
        institution: "Sri Lanka Institute Of Information Technology",
        department: "Software Engineering",
        imgUrl: maleesha,
        Linkedin: 'https://www.linkedin.com/feed/',
        email: 'mailto:googlemail@gmail.com'
      }
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Group Members</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

export default GroupMembers;