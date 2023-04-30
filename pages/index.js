import styled from "styled-components";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <StyledCard>
        <StyledLogo
          src="/logo.png"
          alt="Lutz Dietterich"
          width={400}
          height={250}
        />

        {/* <StyledTitle>Lutz Dietterich</StyledTitle>
        <StyledSubtitle>Software Engineer</StyledSubtitle> */}

        <StyledDescription>
          Ich bin ein leidenschaftlicher Webentwickler, der seinen Kunden
          benutzerdefinierte Lösungen bietet. Durch eine Kombination aus
          Funktion, Design und Engagement helfe ich meinen Kunden, ihre Visionen
          im Online-Bereich umzusetzen und erfolgreichere Online-Präsenzen
          aufzubauen.
        </StyledDescription>
      </StyledCard>

      <StyledHeroImage
        src="/hero.png"
        alt="Lutz Dietterich"
        width={1920}
        height={1080}
      />
    </div>
  );
}

const StyledLogo = styled(Image)`
  width: 85%;
  heigth: 20%;
  object-fit: contain;
  background-color: transparent;
  z-index: 1;
`;

const StyledTitle = styled.h1`
  top: 40vh;
  left: 80px;
  font-size: 4rem;
  font-weight: 700;
  color: #fff;
  z-index: 1;
`;

const StyledSubtitle = styled.h2`
  top: 50vh;
  left: 80px;
  font-size: 2rem;
  font-weight: 400;
  color: #fff;
  z-index: 1;
`;

const StyledDescription = styled.p`
  width: 75%;
  font-size: 1.2rem;
  line-height: 1.5;
  letter-spacing: 0.8px;
  font-weight: 400;
  color: #fff;
  z-index: 1;
  text-align: center;
`;

const StyledLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  ovrflow: hidden;

  @media (min-width: 768px) {
    font-size: 0.5rem;
  }
`;

const StyledCard = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0.4);
  width: 27vw;
  height: 70vh;
  top: 15vh;
  left: 10vw;
  z-index: 1;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);

  @media (max-width: 768px) {
    width: 80vw;
    height: auto;
    top: 20px;
    left: 10vw;
  }
`;

const StyledHeroImage = styled(Image)`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  top: 0;
  z-index: -1;
  margin: 0;
  padding: 0;
`;
