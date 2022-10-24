import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export default function Footer() {
  const percentage = 40;
  return (
    <FooterPage>
      <Link to="/habitos">
        <h2>Hábitos</h2>
      </Link>
      <ProgressContainer>
        <Link to="/hoje">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: "#52B6FF",
              strokeLinecap: "round",
              textColor: "#fff",
              pathColor: "#fff",
              trailColor: "transparent",
              textSize: "18px",
            })}
          />
        </Link>
      </ProgressContainer>
      <Link>
        <h2>Histórico</h2>
      </Link>
    </FooterPage>
  );
}

const FooterPage = styled.footer`
  height: 70px;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  box-shadow: 0px 4px 4px 0px #00000026;
  position: fixed;
  align-items: center;
  bottom: 0;
  font-family: "Lexend Deca";
  font-size: 18px;
  font-weight: 400;
  color: #52b6ff;
`;
const ProgressContainer = styled.div`
  width: 91px;
  height: 91px;
  position: absolute;
  bottom: 20px;
  text-align: center;
`;
