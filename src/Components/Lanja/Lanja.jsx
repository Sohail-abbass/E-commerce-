import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Container with padding and max-width
const Container = styled.div`
  padding: 10px;
  width:90%;
  margin: 0 auto;
`;

// Centered heading
const Heading = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 34px;
  color: #222;
`;

// Grid layout
const Grid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.08);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 12px 24px rgb(0 0 0 / 0.15);
  }
`;

const ImageWrapper = styled.div`
  padding: 12px;
  background: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;

  img {
    max-height: 180px;
    max-width: 100%;
    object-fit: contain;
  }
`;

const Content = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 1.1rem;
  margin: 0 0 10px;
  color: #333;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Price = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  color: #1a8917;
`;

const Loading = styled.div`
  padding: 50px;
  font-size: 1.5rem;
  text-align: center;
  color: #666;
`;


import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";



export default function Lanja() {
    const { apiproducts } = useContext(ShopContext);

    return (
        <Container>
            <Heading>All Categories</Heading>
            <Grid>
                {apiproducts.map((product) => (
                    <Card key={product.id}>
                        <ImageWrapper>
                            <Link to={`/product/${product.id}`}> <img onClick={window.scroll(0, 0)} src={product.image} alt="" /></Link>

                        </ImageWrapper>
                        <Content>
                            <Title>{product.title}</Title>
                            <Description>{product.description}</Description>
                            <Price>${product.price.toFixed(2)}</Price>
                        </Content>
                    </Card>
                ))}
            </Grid>
        </Container>
    );
}
