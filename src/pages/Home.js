import {
  ContainerDetail,
  DescriptionHeroAbout,
  HeroContainerAbout,
  HeroTextAbout,
} from "../styles";
import { HeroTextPN, HorizentalDetail } from "../styles/styles";

const Home = () => {
  return (
    <>
      <ContainerDetail>
        <HeroContainerAbout>
          <img alt="" src="./assets/images/hero_agility.png" height="18" /> AGILITY
          <HeroTextAbout>
            ANCIENT WARRIOR
            <br />
            <HeroTextPN>SLASHES HIS FOES</HeroTextPN>
          </HeroTextAbout>
          <DescriptionHeroAbout>
            everything about this hero is this one and the latest thing updated
            and the history has been declared but never did it and just begining
            of this life was entire declared but never did it and just begining
            of this life was entire
            <br />
          </DescriptionHeroAbout>
          <DescriptionHeroAbout style={{ fontSize: 24, marginTop: 9 }}>
            attack type
            <br />
            <img alt="" src="./assets/images/melee.svg" /> melee
          </DescriptionHeroAbout>
        </HeroContainerAbout>
      </ContainerDetail>

      <HorizentalDetail>
        AGILITY
        <hr />
      </HorizentalDetail>
    </>
  );
};

export default Home;
