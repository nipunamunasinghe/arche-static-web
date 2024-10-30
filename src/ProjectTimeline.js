import React from 'react';
import { Timeline, Card } from 'antd';

const ProjectTimeline = () => {
  const timelineItems = [
    {
      title: "Project Proposal",
      description: "A project proposal is presented to potential sponsors or clients to receive funding or get your project approved.",
      date: "Feb 2024"
    },
    {
      title: "Requirements Analysis",
      description: "Detailed analysis of project requirements and stakeholder needs to establish clear project scope.",
      date: "Mar 2024"
    },
    {
      title: "Design Phase",
      description: "Creation of system architecture and detailed design documentation for all project components.",
      date: "Apr 2024"
    },
    {
      title: "Development Sprint 1",
      description: "Initial development phase focusing on core functionality and basic features implementation.",
      date: "May 2024"
    },
    {
      title: "Testing & QA",
      description: "Comprehensive testing phase including unit testing, integration testing, and user acceptance testing.",
      date: "Jun 2024"
    },
    {
      title: "Project Delivery",
      description: "Final delivery of the project including documentation, training, and handover to stakeholders.",
      date: "Jul 2024"
    }
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
      <h2 className="text-lg mb-2" style={{ color: '#000'}}>Milestones</h2>

        <h1 className="text-3xl font-bold text-gray-900">Project Timeline</h1>
      </div>
      
      <Timeline
        mode="alternate"
        items={timelineItems.map((item, index) => ({
          children: (
            <Card 
              className="w-80 shadow-md"
              key={index}
            >
              <h3 className="text-lg font-semibold mb-2" style={{color: '#F59E0B'
              }}>{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <div className="text-gray-500 text-sm">{item.date}</div>
            </Card>
          ),
          color: 'blue'
        }))}
      />
    </div>
  );
};

export default ProjectTimeline;