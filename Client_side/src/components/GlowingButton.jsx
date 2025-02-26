import React from "react";
import styled from "styled-components";

const GlowingButton = ({ size = "medium" }) => {
  return (
    <StyledWrapper size={size}>
      <button className="shadow__btn">Emergency</button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .shadow__btn {
    padding: ${(props) =>
      props.size === "small" ? "5px 10px" : props.size === "large" ? "15px 30px" : "10px 20px"};
    font-size: ${(props) =>
      props.size === "small" ? "12px" : props.size === "large" ? "20px" : "17px"};
    border: none;
    color: #fff;
    border-radius: 7px;
    letter-spacing: 4px;
    font-weight: 700;
    text-transform: uppercase;
    transition: 0.5s;
    transition-property: box-shadow;
  }

  .shadow__btn {
    background: rgba(240, 78, 47, 255);
    box-shadow: 0 0 25px rgba(240, 78, 47, 255);
  }

  .shadow__btn:hover {
    box-shadow: 0 0 5px rgba(240, 78, 47, 255), 0 0 25px rgba(240, 78, 47, 255),
      0 0 50px rgba(240, 78, 47, 255), 0 0 100px rgba(240, 78, 47, 255);
  }
`;

export default GlowingButton;
