import { CardsLayout } from "./Cards.styles";
import React, { FC } from "react";
import { CardsProps } from "../../../types/Cards";
import { Card } from "../../ui/Card/Card";
import { Button } from "../../ui/Button/Button";

export const Cards: FC<CardsProps> = ({ cards, fetchCalendar, isEnd }) => {
  return (
    <CardsLayout>
      {cards && cards.map((card) => <Card card={card} key={card._id} />)}
      {!isEnd && <Button onClickHandler={fetchCalendar} text="Загрузить еще" />}
    </CardsLayout>
  );
};
