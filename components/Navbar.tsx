import React from "react";
import styled from "styled-components";

const Navbar: React.FC = () => {
  const toggleNavBar = () => {
    const navBar = document.getElementById("navBar")!;
    const overlay = document.getElementById("overlay")!;

    if (!navBar.classList.contains("open")) {
      navBar.classList.add("open");
      overlay.classList.add("open");
    } else {
      navBar.classList.remove("open");
      overlay.classList.remove("open");
    }
  };
  return (
    <>
      <Overlay id="overlay" onClick={toggleNavBar} />

      <NavbarStyled id="navBar" aria-label="mob-navigation"></NavbarStyled>
    </>
  );
};

export default Navbar;

export const NavbarStyled = styled.nav`
  background-color: #fff;
  width: 100%;
  height: 340px;
  position: fixed;
  top: 96px;
  left: 0;
  z-index: 22;
  border-radius: 0 0 8px 8px;
  padding: 80px 40px 0 40px;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;

  @media (max-width: 910px) {
    &.open {
      transform: translateX(0);
    }
  }

  @media (max-width: 574px) {
    height: calc(90vh - 96px);
    overflow-y: scroll;
    padding: 80px 20px 20px 20px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #000;
  z-index: 19;
  display: none;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  @media (max-width: 910px) {
    &.open {
      display: block;
      opacity: 0.7;
    }
  }
`;
