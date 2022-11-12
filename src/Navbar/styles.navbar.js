import styled from "styled-components";

export const Base = styled.div`
  display: flex;
`;

export const Container = styled(Base)`
  width: 100%;
  padding: 0 10px;
  background-color: #e5e4e2;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  overflow: hidden;
`;

export const NavBarLinkContainer = styled(Base)`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #000000;
  margin: 0 5px;
  padding: 0 10px;
  min-height: 40px;
  position: relative;
  width: 80px;
  :hover {
    cursor: pointer;
  }
`;

export const NavBarLinkFooter = styled.div`
  width: ${(props) => (props.isHovered ? "60" : "0")}px;
  height: 3px;
  background-color: #000000;
  transition: width 0.3s ease-in-out;
  position: absolute;
  bottom: 0;
`;

export const LogoContainer = styled.div`
  font-size: 20px;
  width: 100%;
  font-weight: bold;
  overflow: hidden;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const MiddleLogoContainer = styled(LogoContainer)`
  display: none;
  text-align: center;
  @media (max-width: 800px) {
    display: block;
  }
`;

export const Logo = styled.img`
  width: 80px;
  //Because of image whitespace
  transform: translateX(-20px);
`;

export const NavBarSection = styled(Base)`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

export const NavMenuContainer = styled(NavBarSection)`
  @media (max-width: 800px) {
    display: none;
  }
`;

export const ButtonContainer = styled.button`
  padding: 10px 20px;
  border-radius: 50px;
  background-color: #000000;
  border: none;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.1s ease-in-out;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const MobileMenuButton = styled.div`
  display: ${(props) => (props.mobileMenuIsOpen ? "flex" : "none")};
  :hover {
    cursor: pointer;
  }
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const MobileMenu = styled.div`
  width: ${(props) => (props.mobileMenuIsOpen.isOpen ? "200px" : "0")};
  height: 100vh;
  background-color: #ffffff;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  visibility: ${(props) =>
    props.mobileMenuIsOpen.isOpen ? "visible" : "hidden"};
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

export const MobileMenuHeader = styled(Base)`
  justify-content: flex-end;
  width: 100%;
  padding: 10px;
`;

export const MobileMenuCloseButton = styled(Base)`
  visibility: ${(props) =>
    props.mobileMenuIsOpen.isOpen ? "visible" : "hidden"};
  :hover {
    cursor: pointer;
  }
`;

export const MobileMenuLink = styled.div`
  margin: 10px;
  margin-left: 20px;
  opacity: ${(props) => (props.mobileMenuIsOpen.isOpen ? "1" : "0")};
  transform: translateX(
    ${(props) => (props.mobileMenuIsOpen.isOpen ? "0" : "-20px")}
  );
  transition: all 0.3s ease-in-out;
`;

export const GreyScreen = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  opacity: ${(props) => (props.mobileMenuIsOpen.isOpen ? "1" : "0")};
  visibility: ${(props) =>
    props.mobileMenuIsOpen.isOpen ? "visible" : "hidden"};
  transition: opacity 0.3s ease-in-out,
    ${(props) => (props.mobileMenuIsOpen.isOpen ? "" : "visibility 0s 0.3s")}; ;
`;

export const Body = styled.div`
  width: 100%;
  position: absolute;
`;

export const Footer = styled.div`
  width: 100%;
  height: 40px;
  position: absolute;
`;
