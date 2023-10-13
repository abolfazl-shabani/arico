import style, { createGlobalStyle } from "styled-components";

const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const devices = {
  mobileS: `(max-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: fontDGJory;
    src: url(./assets/fonts/DGJory.ttf);
  }

::-webkit-scrollbar {
  width: 4.7px;
  height: 100%;
  background: none;
}
::-webkit-scrollbar-thumb {
  background: #505050;
  border-radius: 40px;
  transition: all 0.4s;
}
::-webkit-scrollbar-thumb:hover {
  background: #b1b1b1;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
    text-decoration: none;
    color: #ffffff;
    font-weight:200;
    font-family: fontDGJory;
    user-select: text;
    -webkit-user-select: text; /* Safari 3.1+ */
    -moz-user-select: text; /* Firefox 2+ */
    -ms-user-select: text; /* IE 10+ */
  }

  ::selection {
    background: #ffffff10;
    backdrop-filter: blur(18px);
  }
  /*::-moz-selection*/

  html,
  body,
  #root {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    // background: #000066 !important;
    background-image: url("./assets/images/bg.jpg");
    position:relative;
  }
  .canvas{
    inset:0;
    position:fixed;
    width:100vw;
    height:100vh;
  }
  .ActiveNavLink{
    border-bottom: 3px solid orangered;
  }
`;

export const Nav = style.nav`
  position:fixed;
  top:0;
  width:100%;
  padding-top: 18px;
  z-index: 100000;
`;

export const NavLinks = style.ul`
  display:flex;
  flex-flow:row wrap;
  justify-content:space-evenly;
  // justify-content:center;
`;

export const UINavLink = style.li`
  font-weight:100;
  margin:0 3px;
  font-size: calc(3vh + 0.36vw);
  font-family: fontDGJory;
  @media ${devices.tablet} {
    font-size: 18px
  }
`;

export const LogoImage = style.img`
  width:200px;
  @media ${devices.tablet} {
    width: 100px;
  }
`;

export const HorizentalLine = style.hr`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 4vw;
  height: 60%;
`;

export const HorizentalDetail = style.div`
  position: fixed;
  top: 0;
  // bottom: 0;
  transform: rotate(-90deg) translateY(-47vh);
  width: 100vh;
  @media ${devices.tablet} {
    display: none;
  }
`;

export const HeroTextPN = style.div`
  color: lightblue;
  font-size: 21px;
  @media ${devices.tablet} {
    font-size: 18px;
  }
`;
