import Hero from "../components/Hero";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Hero />
      <StyledDiv />
    </>
  );
}

const StyledDiv = styled.div`
  width: 100%;
  height: 100px;
  background-color: blue;
`;
