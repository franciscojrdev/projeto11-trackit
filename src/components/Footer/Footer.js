import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const percentage = 100;

export default function Footer() {
  return (
    <FooterPage>
      <h2>Hábitos</h2>
      <ProgressContainer>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: "#3e98c7",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent",
          })}
        />
      </ProgressContainer>
      <h2>Histórico</h2>
    </FooterPage>
  );
}

const FooterPage = styled.footer`
  height: 70px;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  position: fixed;
  align-items: center;
  bottom: 0;
  font-family: "Lexend Deca";
  font-size: 18px;
  font-weight: 400;
  color: #52B6FF;
`;
const ProgressContainer = styled.div`
  width: 91px;
  height: 91px;
  position: absolute;
  bottom: 20px;
  text-align: center;
`;
