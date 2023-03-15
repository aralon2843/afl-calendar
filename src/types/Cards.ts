import { Match } from "./Match";

export interface CardsProps {
  cards?: Match[];
  fetchCalendar: () => void;
  isEnd: boolean;
}
