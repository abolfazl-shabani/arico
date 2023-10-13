import React from "react";
import { Nav, NavLinks, UINavLink, LogoImage } from "../styles/styles";
import { NavigationLink } from "./navlink";

const Navigation = () => {
  let Links = ["heroes", "test-3D", "news"];
  return (
    <Nav>
      <NavLinks>
        <NavigationLink path="">
          <LogoImage alt="DOTA 2" src="./assets/images/dota2_logo_horiz.png" />
        </NavigationLink>
        {false ? (
          <>
            <button>::</button>
          </>
        ) : (
          Links.map((link) => {
            return <NavigationLink key={Links.indexOf(link)} path={link} />;
          })
        )}
      </NavLinks>
    </Nav>
  );
};

export default Navigation;
