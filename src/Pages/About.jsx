import React from "react";
import { Typography, Row, Col, Card } from "antd";
import styled from "styled-components";
import founderImg from "../Components/Assets/raguBhai.jpeg"; // Adjust path if different

const { Title, Paragraph } = Typography;

const Container = styled.div`
  background: linear-gradient(to right, #ffdee9, #b5fffc);
  padding: 60px 20px;
  min-height: 100vh;
`;

const Section = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const StyledCard = styled(Card)`
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  background: #ffffff;
  padding: 20px;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.2);
  }
`;

const TitleStyled = styled(Title)`
  && {
    color: #2c3e50;
  }
`;

const ParagraphStyled = styled(Paragraph)`
  && {
    color: #4a4a4a;
    font-size: 1.1rem;
  }
`;

const FounderCardWrapper = styled(Row)`
  margin-top: 60px;
  justify-content: center;
  align-items: center;
`;

const FounderImage = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${founderImg});
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  position: relative;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const FounderDetails = styled.div`
  text-align: left;
  padding-left: 30px;
`;

const About = () => {
  const features = [
    {
      title: "Premium Quality",
      description: "Crafted from high-end fabrics with precise stitching for durability and luxury.",
    },
    {
      title: "Trend-Driven Designs",
      description: "We follow fashion trends globally to keep your style updated every season.",
    },
    {
      title: "Fast Global Delivery",
      description: "Swift and secure delivery, no matter where you are in the world.",
    },
  ];

  return (
    <Container>
      <Section>
        {/* Hero */}
        <TitleStyled level={2}>About CartNest</TitleStyled>
        <ParagraphStyled>
        CartNest is your go-to online destination for elegant, trendy, and comfortable dresses. We are committed to delivering fashion-forward pieces that combine style, quality, and comfort.
        </ParagraphStyled>

        {/* Mission */}
        <StyledCard style={{ margin: "40px 0" }}>
          <Title level={3}>Our Mission</Title>
          <Paragraph>
            At  CartNest, we aim to empower women worldwide with the confidence to express their unique style. Our pieces are designed to reflect your personality, whether bold, sophisticated, or playful.
          </Paragraph>
        </StyledCard>

        {/* Features */}
        <TitleStyled level={3}>Why Shop With Us?</TitleStyled>
        <Row gutter={[24, 24]} justify="center" style={{ marginTop: 30 }}>
          {features.map((item, idx) => (
            <Col xs={24} sm={12} md={8} key={idx}>
              <StyledCard>
                <Title level={4}>{item.title}</Title>
                <Paragraph>{item.description}</Paragraph>
              </StyledCard>
            </Col>
          ))}
        </Row>

        {/* Founder */}
        <TitleStyled level={3} style={{ marginTop: "60px" }}>
          Meet Our Founder
        </TitleStyled>
        <FounderCardWrapper>
          <Col xs={24} sm={10} md={8}>
            <FounderImage />
          </Col>
          <Col xs={24} sm={14} md={10}>
            <FounderDetails>
              <Title level={4}>Tatheer Ali Chinari</Title>
              <Paragraph>Founder & CEO</Paragraph>
              <ParagraphStyled>
                Chinari vision behind  CartNest was to create a brand that embraces timeless elegance while empowering women to feel confident and express their style. With a passion for fashion and an eye for trends, she leads the brand to reach women across the globe.
              </ParagraphStyled>
            </FounderDetails>
          </Col>
        </FounderCardWrapper>
      </Section>
    </Container>
  );
};

export default About;
