import styled from "styled-components";

export default function NavBar({logo}) {
  return (
    <NavBarPage>
      <h1>TrackIt</h1>
      <img src={logo} alt="profile picture" />
    </NavBarPage>
  );
}

const NavBarPage = styled.div`
  height: 70px;
  width: 100%;
  box-shadow: 0px 4px 4px 0px #00000026;
  background-color: #126ba5;
  display: flex;
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
