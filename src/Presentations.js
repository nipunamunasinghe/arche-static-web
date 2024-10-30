import React from 'react';
import { Card, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Presentation } from 'lucide-react';

const Presentations = () => {
  const documents = [
    {
      title: "Topic Assessment",
      submissionDate: "23/02/2024",
      types: ["Group"]
    },
    {
      title: "Final Report",
      submissionDate: "23/02/2024",
      types: ["Individual", "Group"]
    },
    {
      title: "Topic Assessment",
      submissionDate: "23/02/2024",
      types: ["Group"]
    },
    {
      title: "Topic Assessment",
      submissionDate: "23/02/2024",
      types: ["Group"]
    },
    {
      title: "Topic Assessment",
      submissionDate: "23/02/2024",
      types: ["Group"]
    },
    {
      title: "Topic Assessment",
      submissionDate: "23/02/2024",
      types: ["Group"]
    }
  ];

  return (
    <div className="p-8 bg-blue-50/30 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Presentations</h1>
          <p className="text-gray-600">Please Find All Presentations Related To This Project Below.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <Card 
              key={index}
              className="rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
              bodyStyle={{ padding: '24px' }}
            >
              <h3 className="text-xl font-semibold text-blue-500 mb-4">
                {doc.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                Submitted On {doc.submissionDate}
              </p>

              <div className="space-y-2">
                {doc.types.map((type, typeIndex) => (
                  <div key={typeIndex} className="flex justify-between items-center">
                    <span className="text-gray-700">{type}</span>
                    <Button 
                      type="primary"
                      className="bg-blue-500 hover:bg-blue-600"
                      icon={<ArrowRightOutlined />}
                    >
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Presentations;