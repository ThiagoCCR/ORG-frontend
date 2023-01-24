import styled from "styled-components";
import MenuIcon from "../../components/Icons/MenuIcon";
import PersonIcon from "../../components/Icons/PersonIcon";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

//import Header from "../../components/Header/Header.js"

export default function Home() {
  const [showSideBar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header>
        <Logo>
          <h1>ORG.</h1>
        </Logo>
        <ProfilePic onClick={() => navigate("/profile")}>
          <PersonIcon
            iconProps={{
              color: "#FFFFFF",
              className: "global-class-name",
              size: "50px",
            }}
          />
        </ProfilePic>
        <Menu>
          {showSideBar ? (
            <></>
          ) : (
            <MenuIcon
              iconProps={{
                color: "#FFFFFF",
                className: "global-class-name",
                size: "50px",
              }}
              onClick={() => setShowSidebar(!showSideBar)}
            />
          )}
        </Menu>
      </Header>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #f8f8f8;
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const Header = styled.div`
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: #040404;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Logo = styled.div`
  width: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  h1 {
    font-family: "Russo One";
    font-size: 36px;
    line-height: 43px;
    color: #ffffff;
  }
`;

const ProfilePic = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 15% 30px 0 0;
  background: #d9d9d9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
