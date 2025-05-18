import React from 'react';
import { Row, Col, Card } from 'antd';
import styled from 'styled-components';

const OfficeWrapper = styled.div`
  background: linear-gradient(to right, #e0f7fa, #80deea);
  padding: 60px 20px;
  min-height: 100vh;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #0d47a1;
  margin-bottom: 40px;
`;

const StyledCard = styled(Card)`
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  }
`;

const OfficeImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

const MapIframe = styled.iframe`
  width: 100%;
  height: 300px;
  border: none;
  border-radius: 12px;
  margin-top: 30px;
`;

const Office = () => {
  return (
    <OfficeWrapper>
      <SectionTitle>Our Office</SectionTitle>
      <Row gutter={[32, 32]} justify="center">
        <Col xs={24} sm={12} md={8}>
          <StyledCard
            cover={
<OfficeImage
        src="https://picsum.photos/seed/office1/400/300"
        alt="Office Image 1"
      />            }
          >
            <Card.Meta title="Head Office" description="123 Fashion Street, New York, NY" />
          </StyledCard>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <StyledCard
            cover={
              <OfficeImage
              src="https://picsum.photos/seed/office2/400/300"
              alt="Office Image 2"
            />            }
          >
            <Card.Meta title="Design Studio" description="98 Trendy Avenue, Los Angeles, CA" />
          </StyledCard>



        </Col>
      </Row>

      {/* Dummy Embedded Google Map */}
      <MapIframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9730762280384!2d-73.98810818459291!3d40.74881707932769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18f3e8a7%3A0xbbb0d270a69c0f9f!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
        loading="lazy"
        allowFullScreen
        title="Office Location"
      />
    </OfficeWrapper>
  );
};

export default Office;
