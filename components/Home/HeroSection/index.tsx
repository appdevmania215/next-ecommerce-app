import * as HERO from "./styles";
import * as W from "@/styles/widgets";

export default function HeroSection() {
  return (
    <HERO.Cover>
      <W.Container>
        <HERO.Layout>
          <HERO.FirstSection>
            <HERO.Title>TOP PRODUCT</HERO.Title>
            <HERO.Heading>XX99 Mark II Headphones</HERO.Heading>
            <HERO.Desc>
              Experience natural, life like audio and exceptional build quality
              made for the passionate music enthusiast.
            </HERO.Desc>
          </HERO.FirstSection>
        </HERO.Layout>
      </W.Container>
    </HERO.Cover>
  );
}
