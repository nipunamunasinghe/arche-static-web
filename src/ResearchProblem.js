import React from 'react';
import { Typography, Row, Col } from 'antd';
import heroimg from '../src/img/vr.jpg';

const { Title, Paragraph } = Typography;

const ResearchProblem = () => {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: 24 }}>
      <Title level={1}>Research Problem & Solution</Title>
      
      <Row gutter={[48, 24]} align="stretch">
        <Col xs={24} lg={12}>
          <Paragraph style={{ 
            fontSize: '16px',
            lineHeight: '1.6',
            color: 'rgba(0, 0, 0, 0.65)',
          }}>
            <h3 className="text-lg font-semibold text-[#F59E0B] mb-2">Problem</h3>
            The research problem focuses on the limited accessibility and interactive learning methods available in archaeology education, particularly in the hands-on processes of excavation, artifact cleaning, and restoration. Traditional methods often lack immersive elements, making it challenging for students to fully grasp and engage with these meticulous processes. This project addresses this gap by developing a VR-based simulation that provides students with a realistic, interactive environment to practice and understand essential archaeological techniques, enhancing learning and preserving artifact integrity.

            <h3 className="text-lg font-semibold text-[#F59E0B] mb-2">Proposed Solution</h3>
            The proposed solution is a MR-based simulation that immerses users in a realistic archaeology lab, allowing them to engage in artifact excavation, cleaning, and restoration practices. Through interactive, hands-on learning tools, including haptic feedback and 3D artifact visualization on a mobile app, this solution offers an accessible and engaging way to understand and apply archaeological methods safely and effectively.
          </Paragraph>
        </Col>
        
        <Col xs={24} lg={12}>
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '10px',
              borderRadius: '10px',
              overflow: 'hidden'
            }}
          >
            <img 
              src={heroimg}
              alt="Research Illustration" 
              style={{ 
                width: '100%', 
                height: 'auto', 
                borderRadius: '10px',
                objectFit: 'cover' 
              }} 
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ResearchProblem;
