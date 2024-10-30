import React from 'react';
import { Form, Input, Button } from 'antd';

const { TextArea } = Input;

const ContactForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Form submitted:', values);
  };

  return (
    <div className="max-w-4xl mx-auto px-8 py-16">
      <div className="mb-12">
        <h2 className="text-2xl mb-2">Contact Us</h2>
        <h1 className="text-4xl font-bold text-gray-800">Get In Touch With Us</h1>
      </div>

      <div className="p-8 rounded-xl" style={{ backgroundColor: '#FFFBEB' }}>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          className="max-w-2xl mx-auto"
        >
          <Form.Item
            label={<span style={{ color: '#000' }}>Your Name</span>}
            name="name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input
              placeholder="Enter your name"
              className="p-3 rounded-lg"
            />
          </Form.Item>

          <Form.Item
            label={<span style={{ color: '#000' }}>Your Email</span>}
            name="email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Please enter a valid email' }
            ]}
          >
            <Input
              placeholder="Enter your email"
              className="p-3 rounded-lg"
            />
          </Form.Item>

          <Form.Item
            label={<span style={{ color: '#000' }}>Your Message</span>}
            name="message"
            rules={[{ required: true, message: 'Please enter your message' }]}
          >
            <TextArea
              placeholder="Enter your message"
              rows={6}
              className="p-3 rounded-lg"
            />
          </Form.Item>


          <Form.Item className="mb-0">
            <Button
              type="primary"
              htmlType="submit"
              className="w-full h-12 text-lg font-medium"
              style={{ backgroundColor: '#F59E0B', borderColor: '#F59E0B' }}
            >
              Submit
            </Button>

          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;