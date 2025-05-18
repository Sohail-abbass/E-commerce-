import React from "react";
import styled from "styled-components";
import { Row, Col, Card, Carousel, Pagination } from "antd";

const Container = styled.div`
  padding: 2rem;
  background: #f0f2f5;
  min-height: 100vh;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #1890ff;
  text-align: center;
  margin-bottom: 2rem;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  color: #444;
  line-height: 1.7;
  text-align: justify;
  margin-bottom: 2rem;
`;

const StyledCard = styled(Card)`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

const StyledCarousel = styled(Carousel)`
  margin: 2rem 0;

  .slick-slide img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 12px;
  }
`;

const Footer = styled.footer`
  margin-top: 3rem;
  text-align: center;
  color: #777;
  font-size: 0.9rem;
  padding: 1rem 0;
  border-top: 1px solid #ccc;
`;

const CompanyDetail = () => {
  return (
    <Container>
      <Title>About Our Company</Title>
      <Paragraph>
        We are a forward-thinking tech company focused on building scalable, innovative solutions
        for modern businesses. From AI-powered tools to cloud-based platforms, our mission is to
        empower teams to do their best work. With a strong commitment to excellence, we combine
        technology, design, and strategy to drive growth and efficiency for our clients.
      </Paragraph>

      <Row gutter={[16, 16]}>
        {[1, 2, 3].map((item) => (
          <Col key={item} xs={24} sm={12} md={8}>
            <StyledCard
              cover={<img alt={`Company ${item}`} src={`https://picsum.photos/300/200?random=${item}`} />}
              hoverable
            >
              <Card.Meta
                title={`Our Mission ${item}`}
                description="We believe in innovation, collaboration, and making a meaningful impact."
              />
            </StyledCard>
          </Col>
        ))}
      </Row>

      <Title>Gallery</Title>
      <StyledCarousel autoplay dots>
        {[4, 5, 6, 7].map((num) => (
          <div key={num}>
            <img src={`https://picsum.photos/800/300?random=${num}`} alt={`Slide ${num}`} />
          </div>
        ))}
      </StyledCarousel>

     
    </Container>
  );
};

export default CompanyDetail;
