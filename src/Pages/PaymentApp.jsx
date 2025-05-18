import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CheckoutButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
`;

const PaymentForm = styled.div`
  margin-top: 2rem;
  width: 100%;
  max-width: 400px;
  border: 1px solid #ddd;
  padding: 2rem;
  border-radius: 12px;
  background: #f8f9fa;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const PayButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  color: #333;
`;

// Main Component
const PaymentApp = () => {
  const [showPaymentPage, setShowPaymentPage] = useState(false);

  const handleCheckout = () => {
    setShowPaymentPage(true);
  };

  const handlePayment = () => {
    alert("Payment successful! 🎉");
    setShowPaymentPage(false);
  };

  return (
    <Container>
      {!showPaymentPage ? (
        <>
          <h1>Your Cart</h1>
          <CheckoutButton onClick={handleCheckout}>Checkout</CheckoutButton>
        </>
      ) : (
        <PaymentForm>
          <Title>Payment Details</Title>
          <Input type="text" placeholder="Card Number" />
          <Input type="text" placeholder="Card Holder Name" />
          <Input type="text" placeholder="MM/YY" />
          <Input type="password" placeholder="CVV" />
          <PayButton onClick={handlePayment}>Pay Now</PayButton>
        </PaymentForm>
      )}
    </Container>
  );
};

export default PaymentApp;
