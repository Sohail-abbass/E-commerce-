import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Form, Input, Button, message } from 'antd';
import styled from 'styled-components';

// 🌈 Styled Components
const ContactWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(to right, #fceabb, #f8b500);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
`;

const StyledCard = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  padding: 40px;
  width: 100%;
  max-width: 700px;
  transition: 0.3s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 600px) {
    padding: 30px 20px;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const ContactForm = () => {
  const formRef = useRef(null);

  const sendEmail = (values) => {
    emailjs
      .send('service_p2xkli8', 'template_7a152ef', values, '9WN-5bK3dG6l0lYEM')
      .then(
        () => {
          message.success('Message sent successfully!');
          formRef.current.resetFields();
        },
        (error) => {
          message.error('Failed to send message!');
          console.error(error.text);
        }
      );
  };

  return (
    <ContactWrapper>
      <StyledCard>
        <Title>Contact Us</Title>
        <Form ref={formRef} layout="vertical" onFinish={sendEmail}>
          <Form.Item name="name" label="Your Name" rules={[{ required: true }]}>
            <Input size="large" placeholder="Enter your name" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Your Email"
            rules={[{ required: true, type: 'email' }]}
          >
            <Input size="large" placeholder="Enter your email" />
          </Form.Item>
          <Form.Item name="message" label="Message" rules={[{ required: true }]}>
            <Input.TextArea rows={4} placeholder="Write your message" />
          </Form.Item>
          <Button type="primary" htmlType="submit" size="large" block>
            Send Message
          </Button>
        </Form>
      </StyledCard>
    </ContactWrapper>
  );
};

export default ContactForm;
