import styled from "styled-components";
import { useContext } from "react";
import TrackContext from "../../TrackContext";

export default function NavBar() {
  const {user} = useContext(TrackContext);
  return (
    <NavBarPage>
      <h1>TrackIt</h1>
      <img src={user.image} alt="profile picture" />
    </NavBarPage>
  );
}

const NavBarPage = styled.div`
  height: 70px;
  width: 100%;
  box-shadow: 0px 4px 4px 0px #00000026;
  background-color: #126ba5;
  display: flex;
  position: fixed;
  top: 0;
  align-items: center;
  justify-content: space-between;
  padding-left: 18px;
  padding-right: 18px;
  h1 {
    font-family: "Playball";
    font-size: 39px;
    font-weight: 400;
    color: #FFFFFF;
  }
  img {
    object-fit: cover;
    border-radius: 50%;
    height: 51px;
    width: 51px;
    background-color: #fff;
  }
`;
