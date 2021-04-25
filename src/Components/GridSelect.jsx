import React from 'react';
import styled from "styled-components";

const GridSelect = ({gridSize, onGridChange}) => {
    const GridBtn = styled.button`
    border: none;
    border-radius: 10px;
    height: 40px;
    width: 100px;
    margin: 1rem;
    background: gold;
    box-shadow: 0 3px 0px 0px goldenrod;
    transition: all 0.1s;
    }
    &:active {
        transform: translateY(3px);
        box-shadow: none;
    }`;

    return ( 
        <GridBtn onClick={onGridChange}>Grid: {gridSize} x {gridSize}</GridBtn>
     );
}
 
export default GridSelect;