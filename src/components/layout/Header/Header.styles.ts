import styled from "styled-components";

export const HeaderLayout = styled.header`
  padding: 8px 0px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background-color: #ccc;
`;

export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  height: 48px;
  width: 48px;
  cursor: pointer;
  object-fit: cover;
  object-position: center;
`;
