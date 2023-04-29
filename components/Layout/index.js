import styled from "styled-components";
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <>
      <StyledHeader></StyledHeader>
      <StyledMain>{children}</StyledMain>
      <StyledFooter />
    </>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  background-color: transparent;
  width: 100%;
  z-index: 1;
  margin: 0;
`;

const StyledMain = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  top: 0;
  margin: 0;
`;

const StyledFooter = styled.footer`
  position: fixed;
  display: flex;
  justify-content: center;
  background-color: #fff;
  bottom: 0;
  left: 0;
  width: 100%;
`;
