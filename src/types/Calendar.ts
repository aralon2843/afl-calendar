import { Match } from "./Match";

export interface CalendarResponse {
  items: Match[];
  total: number;
}

export interface CalendarRequest {
  offset: number;
  limit: number;
}
