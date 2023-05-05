import React from "react";
import styled from "styled-components";
import Image from "next/image";

export default function Hero() {
  return (
    <StyledHero>
      <StyledHeroImage
        src="/img/hero_background.png"
        width={1440}
        height={1024}
      />

      <StyledRectangle></StyledRectangle>

      <StyledHeroText>
        <p>Hi I'm</p>
        <h1>Lutz Dietterich</h1>
        <h2>Frontend Developer</h2>
      </StyledHeroText>

      <StyledHeroPortrait
        src="/img/hero_portrait.png"
        width={786}
        height={741}
      />
    </StyledHero>
  );
}

const StyledHero = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  width: 100%;
  top: 0;
`;

const StyledHeroImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -200;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const StyledRectangle = styled.div`
  position: absolute;
  width: 80vw;
  height: 175vh;
  left: -40vw;
  top: -50vh;
  z-index: -100;
  min-width: 600px;
  min-height: 300px;

  background: #e2e6f2;
  transform: rotate(13.3deg);
`;

const StyledHeroText = styled.div`
  position: absolute;
  top: 50%;
  left: 60px;
  z-index: 100;
  width: 30%;
  height: 10%;
  display: flex;
  flex-direction: column;

  p {
    font-size: 1.5rem;
    font-weight: 400;
    color: #252326;
    margin: 0;
  }

  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: #252326;
    margin: 0;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    color: #a6806a;
    margin: 0;
  }
`;

const StyledHeroPortrait = styled(Image)`
  width: 53vw;
  height: 50vw;
  max-width: 786px;
  max-height: 741px;
  margin-left: auto;
  margin-top: auto;
  margin-right: 10px;
`;
