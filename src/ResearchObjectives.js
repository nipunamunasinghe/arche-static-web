import React from 'react';
import { Card, Typography, Row, Col } from 'antd';

const { Title, Paragraph } = Typography;

const ResearchObjectives = () => {
  const objectives = [
    {
      number: "1",
      title: "Archeology Excavation Simulation",
      description: "A VR experience simulating the excavation process, allowing users to virtually uncover artifacts using realistic tools and methods, replicating the steps of an archaeological dig."
    },
    {
      number: "2",
      title: "Haptic Feedback Tool",
      description: "A tool designed to provide tactile feedback during artifact handling in VR, giving users a sense of touch and enhancing realism as they interact with and clean virtual artifacts."
    },
    {
      number: "3",
      title: "Artefacts Cleaning Simulation",
      description: "An interactive VR module where users apply different cleaning techniques, such as dry and wet cleaning, to carefully preserve and restore artifacts, simulating conservation methods used in real archaeology labs."
    },
    {
      number: "4",
      title: "Restoration of Damaged Artifacts Using 3D Modeling",
      description: "A process that uses 3D modeling to reconstruct damaged artifacts, allowing users to visualize and restore artifacts digitally, aiding preservation and study of historical items."
    }
  ];

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: 24 }}>
        <Title level={1}>Research Objectives</Title>

      {/* <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <Title level={4} style={{ color: '#1890ff', marginTop: 16 }}>
          Mobile Application To Enhance And Manage
        </Title>
        <Title level={4} style={{ color: '#1890ff', marginTop: 0 }}>
          The Smart Rainwater Harvesting Tanks In Rural Areas
        </Title>
      </div> */}

      <Row gutter={[24, 24]}>
        {objectives.map((objective, index) => (
          <Col xs={24} md={12} key={index}>
            <Card 
              bordered={true}
              style={{ 
                height: '100%',
                position: 'relative',
                borderRadius: 8,
                borderColor: '#F59E0B'
              }}
              bodyStyle={{ 
                padding: 24,
                paddingRight: 48
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  right: 5,
                  top: 20,
                  backgroundColor: '#F59E0B',
                  color: 'white',
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  fontWeight: 'bold'
                }}
              >
                {objective.number}
              </div>
              <Title level={4} style={{ marginBottom: 16 }}>
                {objective.title}
              </Title>
              <Paragraph style={{ 
                color: 'rgba(0, 0, 0, 0.65)',
                marginBottom: 0
              }}>
                {objective.description}
              </Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ResearchObjectives;