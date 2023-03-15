import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CalendarRequest, CalendarResponse } from "../../types/Calendar";

export const calendarApi = createApi({
  reducerPath: "api/calendar",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getCalendar: builder.query<CalendarResponse, CalendarRequest>({
      query: ({ limit, offset }) =>
        `/calendar_paginated?limit=${limit}&offset=${offset}`,
      merge: (currentCache, newItems) => {
        currentCache.items.push(...newItems.items);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
    }),
  }),
});

export const { useGetCalendarQuery } = calendarApi;
