import React, { FC, useState } from "react";
import { Cards } from "../components/layout/Cards/Cards";
import { useGetCalendarQuery } from "../store/calendar/calendarApi";
import Loader from "../components/shared/Loader/Loader";

export const CalendarPage: FC = (): JSX.Element => {
  const LIMIT = 12;
  const [offset, setOffset] = useState<number>(0);
  const [isEnd, setIsEnd] = useState<boolean>(false);

  const { data, error, isLoading, refetch } = useGetCalendarQuery({
    offset,
    limit: LIMIT,
  });

  console.log(data);

  if (isLoading) return <Loader />;
  if (error) return <h1>Возникла ошибка. Попробуйте обновить страницу</h1>;

  return (
    <>
      <Cards
        cards={data?.items}
        fetchCalendar={() => {
          if (data) {
            setIsEnd(offset + LIMIT >= data?.total - LIMIT);
            setOffset(
              offset + LIMIT < data?.total ? offset + LIMIT : data.total - LIMIT
            );
            refetch;
          }
        }}
        isEnd={isEnd}
      />
    </>
  );
};
