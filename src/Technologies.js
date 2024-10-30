import React from 'react';
import { Card, Typography, Row, Col } from 'antd';
import unreal from '../src/img/unreal.png';
import unity from '../src/img/unity.png';
import arduino from '../src/img/arduino.png';
import cplus from '../src/img/cplus.png';
import substance from '../src/img/substance.png';
import blender from '../src/img/blender.png';
import sketchfab from '../src/img/sketchfab.png';
import marmoset from '../src/img/marmoset.png';
import vscode from '../src/img/vscode.png';
import tensorflow from '../src/img/tensorflow.png';

const { Title } = Typography;

const Technologies = () => {
  const technologies = [
    { name: "Unreal Engine", imageUrl: unreal, alt: "Unreal Engine logo" },
    { name: "Unity", imageUrl: unity, alt: "Unity logo" },
    { name: "Arduino", imageUrl: arduino, alt: "Arduino logo" },
    { name: "C++", imageUrl: cplus, alt: "C++ programming language logo" },
    { name: "Substance Painter", imageUrl: substance, alt: "Substance Painter logo" },
    { name: "Blender", imageUrl: blender, alt: "Blender logo" },
    { name: "Sketchfab", imageUrl: sketchfab, alt: "Sketchfab logo" },
    { name: "Marmoset Toolbag", imageUrl: marmoset, alt: "Marmoset Toolbag logo" },
    { name: "Visual Studio Code", imageUrl: vscode, alt: "Visual Studio Code logo" },
    { name: "TensorFlow", imageUrl: tensorflow, alt: "TensorFlow logo" }
  ];

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: 24 }}>
      <Title level={1} style={{ marginBottom: 40, textAlign: 'center' }}>
        Technologies Used
      </Title>

      <Row gutter={[24, 24]} justify="center">
        {technologies.map((tech, index) => (
          <Col xs={12} sm={8} md={6} lg={4.8} key={index}>
            <Card
              hoverable
              style={{ 
                textAlign: 'center',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
              }}
              bodyStyle={{
                padding: '12px 0 0 0',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <div style={{
                width: '120px',
                height: '120px',
                marginBottom: '12px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <img
                  src={tech.imageUrl}
                  alt={tech.alt}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <Title 
                level={5} 
                style={{ 
                  margin: 0,
                  fontSize: '14px',
                  fontWeight: '500',
                  color: 'rgba(0, 0, 0, 0.85)'
                }}
              >
                {tech.name}
              </Title>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Technologies;
