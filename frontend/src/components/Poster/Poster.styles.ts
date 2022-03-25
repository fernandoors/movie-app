import styled from "styled-components";

export const Container = styled.div`
  margin: 2rem;
  width: 200px;
`;

export const Image = styled.img`
  width: auto;
  height: 300px;
  border: 1px solid #ff9800;
  border-radius: 5px;
  &:hover {
    box-shadow: 0px 0px 2rem 1.5px #ff9800ba;
    animation-duration: 2s;
  }
`;

export const Rating = styled.p`
  color: black;
  display: inline;
  margin: 0;
  top: 40px;
  left: 150px;
  padding: 1rem;
  font-size: 2rem;
  position: relative;
  border-radius: 50%;
  background: #ffffff96;
  text-decoration: none;
  box-shadow: 0px 0px 2rem 1.5px #ff9800ba;
`;
