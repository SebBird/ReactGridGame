import React from 'react';
import styled from "styled-components";

const Container = styled.div`
display: flex`;

const GridButton = styled.button`
border: none;
border-radius: 10px;
height: 40px;
width: 100px;
margin: 1rem 0;
background: gold;
box-shadow: 0 3px 0px 0px goldenrod;
transition: all 0.1s;
`;

const ChangeBtn = styled.button`
border: none;
border-radius: 10px;
height: 40px;
width: 40px;
margin: 1rem;
background: gold;
box-shadow: 0 3px 0px 0px goldenrod;
font-size: 1.25rem;
transition: all 0.1s;
}
&:active {
    transform: translateY(3px);
    box-shadow: none;
`;

const GridSelect = ({gridSize, onGridChange}) => {
    return (
        <Container>
            <ChangeBtn onClick={() => onGridChange("-")}>-</ChangeBtn>
            <GridButton>Grid: {gridSize} x {gridSize}</GridButton>
            <ChangeBtn onClick={() => onGridChange("+")}>+</ChangeBtn>
        </Container>

     );
}
 
export default GridSelect;