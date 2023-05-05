import styled from "styled-components";
import MainMenu from "../MainMenu";
import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <StyledHeader>
        <StyledLogo
          src="/img/logo_large.png"
          width={380}
          height={112}
        ></StyledLogo>
        <MainMenu />
      </StyledHeader>
      <StyledMain>{children}</StyledMain>
      <StyledFooter />
    </>
  );
}

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  width: 100%;
  height: 20vw;
  max-height: 180px;
`;

const StyledLogo = styled(Image)`
  width: 30vw;
  height: 10vw;
  max-width: 380px;
  max-height: 112px;
  margin-left: 60px;
`;

const StyledMain = styled.main`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  top: 0;
`;

const StyledFooter = styled.footer`
  display: flex;
  width: 100%;
  height: 35vh;
  background-color: #252326;
  margin-top: 2000px;
  bottom: 0;
`;
