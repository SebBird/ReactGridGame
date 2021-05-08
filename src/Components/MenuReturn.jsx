import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const ReturnButton = styled.button`
  border: none;
  border-radius: 10px;
  height: 40px;
  width: 100px;
  margin: 1rem 0;
  background: gold;
  box-shadow: 0 3px 0px 0px goldenrod;
  transition: all 0.1s;
`;

const MenuReturn = ({ onMenuReturn }) => {
  return (
    <Container>
      <ReturnButton onClick={onMenuReturn}>Return to Main Menu</ReturnButton>
    </Container>
  );
};

export default MenuReturn;
