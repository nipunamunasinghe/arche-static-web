import React from 'react';
import { Card, Typography, Row, Col } from 'antd';
import { WifiOutlined, LineChartOutlined, NodeIndexOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const ResearchGaps = () => {
  const gaps = [
    {
      icon: <WifiOutlined style={{ fontSize: '32px', color: '#1890ff' }} />,
      title: "Limited Application of Mixed Reality in Archaeological Simulations",
      description: "While mixed reality is being increasingly adopted in various educational fields, its application in archaeology remains limited. There is a need for immersive environments that provide hands-on experience with excavation, artifact cleaning, and conservation, which traditional learning methods fail to offer."
    },
    {
      icon: <LineChartOutlined style={{ fontSize: '32px', color: '#1890ff' }} />,
      title: "Insufficient Feedback Mechanisms in VR Learning Tools",
      description: "Current VR learning tools for archaeology lack realistic feedback mechanisms, such as haptic responses. Without these, users miss out on the tactile experience of handling artifacts, reducing the educational value and engagement in simulation-based training environments."
    },
    {
      icon: <NodeIndexOutlined style={{ fontSize: '32px', color: '#1890ff' }} />,
      title: "Lack of Accessible 3D Modeling Tools for Artifact Restoration",
      description: "Most 3D modeling tools used in archaeological artifact restoration are complex and not easily accessible for educational purposes. Simplified, mobile-friendly applications that enable students to interact with and restore digital replicas of artifacts are needed to enhance hands-on learning experiences."
    }
  ];

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: 24 }}>
      <div style={{ textAlign: 'left', marginBottom: 40 }}>
        <Title level={1}>Research Gap</Title>
        <Paragraph style={{ fontSize: 16, color: 'rgba(0, 0, 0, 0.65)' }}>
          These Are The Identified Research Gaps In Most Of The Researches
        </Paragraph>
      </div>

      <Row gutter={[24, 24]}>
        {gaps.map((gap, index) => (
          <Col xs={24} md={8} key={index}>
            <Card 
              bordered={true}
              style={{ height: '100%' }}
              bodyStyle={{ 
                padding: 24,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
              }}
            >
              <div style={{ 
                backgroundColor: '#F59E0B',
                borderRadius: '50%',
                padding: 16,
                marginBottom: 16
              }}>
           
              </div>
              <Title level={3} style={{ marginBottom: 16 }}>
                {gap.title}
              </Title>
              <Paragraph style={{ color: 'rgba(0, 0, 0, 0.65)' }}>
                {gap.description}
              </Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ResearchGaps;