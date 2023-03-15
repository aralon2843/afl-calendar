import {
  CardLayout,
  MatchDate,
  Image,
  Score,
  Stadium,
  TeamLayout,
  TeamsLayout,
  TeamTitle,
  TourNumber,
  CardFooter,
} from "./Card.styles";
import React, { FC } from "react";
import { CardProps } from "../../../types/Card";
import { getImageUrl } from "../../../utils/getImageUrl";

export const Card: FC<CardProps> = ({ card }): JSX.Element => {
  return (
    <CardLayout>
      {card.stadium?.name && <Stadium>ст. {card.stadium.name}</Stadium>}

      <TeamsLayout>
        <TeamLayout>
          <Image src={getImageUrl(card.teamHome.logo, card.teamHome.logoId)} />
          <TeamTitle>{card.teamHome?.name}</TeamTitle>
          <Score>{card.scoreFtHome}</Score>
        </TeamLayout>
        <TeamLayout>
          <Image src={getImageUrl(card.teamAway.logo, card.teamAway.logoId)} />
          <TeamTitle>{card.teamAway?.name}</TeamTitle>

          <Score>{card.scoreFtAway}</Score>
        </TeamLayout>
      </TeamsLayout>
      <CardFooter>
        <TourNumber>Номер тура: {card.tourNumber}</TourNumber>
        <MatchDate>{new Date(card.date).toLocaleString("ru-RU")}</MatchDate>
      </CardFooter>
    </CardLayout>
  );
};
