import React from "react";
import { Container } from "../Container/Container";
import { HeaderInner, HeaderLayout, Logo } from "./Header.styles";
import footballIcon from "../../../assets/football-ball.svg";

export const Header = () => {
  return (
    <HeaderLayout>
      <Container>
        <HeaderInner>
          <Logo src={footballIcon} />
          <span>Календарь футбольных матчей</span>
        </HeaderInner>
      </Container>
    </HeaderLayout>
  );
};
