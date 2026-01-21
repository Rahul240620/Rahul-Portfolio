import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello ! <br />I am Rahul Ranjan Mahato
        </SectionTitle>
        <SectionText>
          I am a Full Stack Developer with expertise in building scalable
          full-stack applications using MERN stack. Welcome to my Portfolio
          Website.
        </SectionText>
        <Button
          onClick={() =>
            (window.location =
              "https://www.linkedin.com/in/rahul-ranjan-mahato-5b84a9234/")
          }
        >
          Learn More
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
