import { useState } from "react";
import {
  Container,
  NavBarLinkContainer,
  NavBarLinkFooter,
  NavBarSection,
  LogoContainer,
  ButtonContainer,
  ButtonWrapper,
  Logo,
  MobileMenuButton,
  NavMenuContainer,
  GreyScreen,
  MobileMenu,
  MobileMenuHeader,
  MobileMenuCloseButton,
  MobileMenuLink,
  MiddleLogoContainer
} from "./styles.navbar";

function Button(props) {
  return <ButtonContainer>{props.text || "Contact"}</ButtonContainer>;
}

const NavBarLink = ({ element }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <NavBarLinkContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {element.name || "HERE"}
      <NavBarLinkFooter isHovered={isHovered} />
    </NavBarLinkContainer>
  );
};

export default function NavBar() {
  const list = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Careers", link: "/careers" },
  ];

  const handleToggle = () => {
    setMobileMenuIsOpen({ isOpen: !mobileMenuIsOpen.isOpen });
  };

  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState({ isOpen: false });
  return (
    <Container>
      <MobileMenu mobileMenuIsOpen={mobileMenuIsOpen}>
        <MobileMenuHeader>
          <MobileMenuCloseButton
            mobileMenuIsOpen={mobileMenuIsOpen}
            onClick={handleToggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="36px"
              viewBox="0 0 24 24"
              width="36px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
            </svg>
          </MobileMenuCloseButton>
        </MobileMenuHeader>
        {list.map((element) => (
          <MobileMenuLink
            mobileMenuIsOpen={mobileMenuIsOpen}
            key={element.name}
          >
            {element.name}
          </MobileMenuLink>
        ))}
      </MobileMenu>
      <GreyScreen mobileMenuIsOpen={mobileMenuIsOpen} />
      <NavBarSection>
        <LogoContainer>
          <Logo src="logo.png" />{" "}
        </LogoContainer>
        <MobileMenuButton onClick={handleToggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="36px"
            viewBox="0 0 24 24"
            width="36px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </MobileMenuButton>
      </NavBarSection>
      <NavBarSection>
        <NavMenuContainer>
          {list.map((element) => {
            return <NavBarLink key={element.name} element={element} />;
          })}
        </NavMenuContainer>
        <MiddleLogoContainer>
        <Logo src="logo.png" />{" "}
        </MiddleLogoContainer>
      </NavBarSection>
      <NavBarSection>
        <ButtonWrapper>
          <Button />
        </ButtonWrapper>
      </NavBarSection>
    </Container>
  );
}
