import React from 'react';
import { Card, Typography, Divider } from 'antd';

const { Title, Text } = Typography;

const ProjectScope = () => {
  const references = [
    {
      id: 1,
      authors: 'Drossis, Giannis & Birliraki, Chryssi & Stephanidis, Constantine. ',
      title: 'Interaction with Immersive Cultural Heritage Environments Using Virtual Reality Technologies.'
    },
    {
      id: 2,
      authors: 'Romano, M.; Frolli, A.; Aloisio, A.; Russello, C.; Rega, A.; Cerciello, F.; Bisogni, F.',
      title: 'Exploring the Potential of Immersive Virtual Reality in Italian Schools: A Practical Workshop with High School Teachers.'
    },
    {
      id: 3,
      authors: ' J. de la Fuente Prieto, E. Castaño Perea, and F. Labrador Arroyo',
      title: 'Augmented reality in architecture: Rebuilding archeological heritage," in The International Archives of the Photogrammetry, Remote Sensing and Spatial Information Sciences.'
    }
  ];

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: 24 }}>
      <div>
      <h2 className="text-black text-lg mb-2">Project Scope</h2>

        <Title level={1} className="text-gray-800 mb-6">
          Literature Survey
        </Title>
      </div>

      <div className="text-gray-700 space-y-4">
        <p>
          
The literature survey explores existing technologies and methodologies in archaeological education, focusing on virtual reality (VR), augmented reality (AR), and mixed reality (MR) applications for artifact excavation, cleaning, and conservation. It examines current research on immersive learning environments, highlighting how VR simulations and haptic feedback tools enhance user engagement and skill acquisition. Additionally, the survey reviews mobile applications for 3D artifact visualization and restoration, assessing their effectiveness in providing accessible educational experiences for archaeology students and professionals. This analysis identifies gaps that our VR-based approach aims to address for a more comprehensive and interactive learning experience.
        </p>
        
      </div>

      <Divider className="my-6" />

      <div>
        <Title level={3} className="text-gray-800 mb-4">References</Title>
        <div className="space-y-2">
          {references.map((ref) => (
            <Text key={ref.id} className="text-sm text-gray-600">
              [{ref.id}] {ref.authors}. {ref.title}
            </Text>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectScope;
