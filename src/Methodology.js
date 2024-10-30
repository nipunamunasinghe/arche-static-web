import React from 'react';
import { Typography, Row, Col } from 'antd';
import system from '../src/img/system.png';

const { Title, Paragraph } = Typography;

const Methodology = () => {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: 24 }}>
      <Title level={1}>Methodology</Title>
      
      <Row gutter={[48, 24]} align="stretch">
        <Col xs={24} lg={12}>
          <Paragraph style={{ 
            fontSize: '16px',
            lineHeight: '1.6',
            color: 'rgba(0, 0, 0, 0.65)',
          }}>
            
Our project employs a multi-faceted approach to develop an immersive VR simulation for archaeology, integrating interactive artifact cleaning and excavation processes. In addition to the VR simulation, we designed a 3D artifact visualization mobile app, enabling users to examine high-resolution models of historical artifacts outside of the VR setting. The project further incorporates a haptic feedback tool that replicates the tactile experience of handling and cleaning artifacts, adding a realistic sensory dimension to the learning process. Together, these elements create a comprehensive educational platform, combining VR, mobile accessibility, and haptic technology to enhance archaeological learning and engagement.
          </Paragraph>
        </Col>
        
        <Col xs={24} lg={12}>
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <img 
              src= {system}
              alt="System diagram" 
              style={{
                maxWidth: '100%',
                height: 'auto',
                objectFit: 'contain'
              }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Methodology;