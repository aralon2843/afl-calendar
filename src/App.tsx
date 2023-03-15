import React, { FC } from "react";
import { Provider } from "react-redux";
import { Container } from "./components/layout/Container/Container";
import { ContentLayout } from "./components/layout/Container/Container.styles";
import { Header } from "./components/layout/Header/Header";
import { CalendarPage } from "./pages/CalendarPage";
import { store } from "./store/store";
import { GlobalStyles } from "./styles/globalStyles";

export const App: FC = (): JSX.Element => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Container>
        <Header />
        <ContentLayout>
          <CalendarPage />
        </ContentLayout>
      </Container>
    </Provider>
  );
};
