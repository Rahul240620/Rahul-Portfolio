import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          color: "white",
          marginBottom: "20px",
          textDecoration: "none",
        }}
      >
        <DiCssdeck size="3rem" />
        <Span>Portfolio</Span>
      </Link>
    </Div1>

    <Div2>
      <li>
        <Link href="#projects" className="nav-link">
          Projects
        </Link>
      </li>
      <li>
        <Link href="#tech" className="nav-link">
          Technologies
        </Link>
      </li>
      <li>
        <Link href="#about" className="nav-link">
          About
        </Link>
      </li>
    </Div2>

    <Div3>
      <SocialIcons href="https://github.com/Rahul240620">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/rahul-ranjan-mahato-5b84a9234/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/rahulranjan2400">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
