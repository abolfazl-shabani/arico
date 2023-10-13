import style from "styled-components";

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

export const Main = style.div`
width: 100vw;
height: 100vh;
background: transparent;
position: fixed;
z-index: 1;
display: flex;
flex-direction: column;
align-items: center;
`;

export const OrbitCTRLIcon = style.div`
  position:fixed;
`;

// overlay
// width:100vw;
// height:100vh;
// background: #ffffff10;
// backdrop-filter: blur(18px);

export const Container = style.div`
  margin-top: 15px;
  width: 100%;
  @media ${devices.tablet} {
    margin-top: 0 ;
  }
`;

//About__START
export const ContainerDetail = style.div`
  margin-top: 12vh;
  padding: 3vw 0 0 6vw;
  display:flex;
`;

export const HeroContainerAbout = style.div`
  font-size:20px ;
  color:#b1b1b1 ;
  @media ${devices.tablet} {
    padding: 9px;
    border-radius: 12px;
    width:80%;
    font-size:16px ;
    background: #ffffff10;
    backdrop-filter: blur(18px);
  }
`;

export const HeroTextAbout = style.div`
  width: 50vw;
  font-size: 47px;
  line-height: 100%;
  @media ${devices.tablet} {
    font-size: 31px;
    width: 60vw
  }
`;

export const HeroDetailTextAbout = style.span`
  font-size: 3.5vw;
  color:#b1b1b1;
  line-height: 100%;
  @media ${devices.tablet} {
    font-size: 1.4rem;
  }
`;

export const DescriptionHeroAbout = style.div`
  width: 43%;
  color:#b1b1b1 ;
  @media ${devices.tablet} {
    width: 100%;
    font-size: 15px;
    font-weight: 500;
  }
`;

export const CTAAbout = style.button`
  // text-decoration: underline;
  padding: 9px 15px;
  // border:#dadada solid 2px;
  border: #c748e5 solid 2px;
  border-radius:5px;
  background: transparent;
  transition:all 0.09s linear;
  &:hover{
    background: #ffffff10;
    backdrop-filter: blur(18px);
  }
  margin:12px 0 0 1px;
  font-size:20px ;
  color:#b1b1b1 ;
  @media ${devices.tablet} {
    font-size: 18px ;
  }
`;

export const PageAboutMe = style.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background: #121212b8;
  backdrop-filter: blur(18px);
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MoreAboutMe = style.div`
  width: 69%;
  font-family: auto;
  font-size: 1.3rem;
  @media ${devices.tablet} {
    width: 87%;
  }
`;

// export const closeBTN_AboutMe = style.button``
//About__END

//Work__START

export const CardWork = style.div`
  background: #ffffff10;
  backdrop-filter: blur(18px);
  width: 36%;
  // height: 40vh;
  border: 1px solid #dadada;
  border-radius: 12px;
  margin: 12px 0 0 36px;
  display:flex;
  flex-direction:column;
  padding: 20px 22px 20px 23px;
  *{font-family: auto !important;}
  @media ${devices.tablet} {
    margin: 12px auto 0 auto;
    width: 91%;
  }
`;

export const CardTitleWork = style.h3`
  font-size: 36px;
  font-weight: 600;
  border-bottom: 1px solid white;
  margin-bottom:9px;
  @media ${devices.tablet} {
    font-size: 23px;
  }
  `;

export const CardTitleDetWork = style.span`
  font-size: 18px;
  font-weight: 300;
  display:block;
  @media ${devices.tablet} {
    font-size: 14px;
  }
`;

export const CardBodyWork = style.div`
  font-weight: 500;
`;

export const CardBodyTitleWork = style.div`
  font-size: 23px;
  font-weight: 500;
  @media ${devices.tablet} {
    font-size: 18px;
  }
  `;

export const CardBodyTitleDetWork = style.span`
  font-size: 18px;
  font-weight: 300;
  @media ${devices.tablet} {
    font-size: 14px;
    display:block;
  }
  `;

export const CardBodyDetailWork = style.div`
  margin-top: 12px;
  font-size: 17px;
  font-weight: 400;
  @media ${devices.tablet} {
    margin-top: 9px;
    font-size: 16px;
  }
`;
//Work__END

//Skills___START
export const ContainerSkills = style.div`
  width:100%;
  display:flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

export const CardSkills = style.div`
  width: 30%;
  height: 21vh;
  padding: 15px 9px 12px 16px;
  margin-bottom: 2vw;
  border-radius: 9px;
  background: #ffffff10;
  backdrop-filter: blur(18px);
  overflow-y: scroll;
  @media ${devices.tablet} {
    width: 46%;
    height: 29.8vh;
    padding: 6px;
  }
`;

export const TitleCardSkills = style.h3`
  font-size: 1.5rem;
`;

export const DetailCardSkills = style.div`
  // font-family: auto;
  font-size: 1.06rem;
`;
//Skills___END

//Contact__START
export const ContainerContact = style.div`
  width: 69%;
  margin: 21vh auto 0 auto;
  padding: 25px 18px 30px 18px;
  border-radius: 12px;
  background: #ffffff10;
  backdrop-filter: blur(18px);
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  *{
    font-weight: 300;
  }
  @media ${devices.tablet} {
    width: 87%;
    margin: 2vh auto 0 auto;
  }
`;

export const TitleContact = style.h3`
  font-size: 3rem;
  @media ${devices.tablet} {
    font-size: 2.3rem;
  }
`;

export const DetailContact = style.div`
  width: 87%;
  font-size: 1.2rem;
  text-align:center;
  margin: 20px 0 36px 0;
  @media ${devices.tablet} {
    font-size: 1.3rem;
    width: 100%;
    margin: 12px 0 24px 0;
  }
`;

export const ButtonContact = style.button`
  background: transparent;
  color: white;
  padding: 9px 15px;
  font-size:20px;
  border: white solid 2px;
  border-radius:5px;
  transition:all 0.1s ease-out;
  &:hover{
    background: #ffffff10;
    backdrop-filter: blur(18px);
    border:#c7c7c7 solid 2px;
  }
  @media ${devices.tablet} {
    font-size: 18px;
  }
`;
//Contact___END

/*
// export const _Contact = style.div`
// `;
export const _ = style.div`
`;

fontDGJory
Nexa
*/
