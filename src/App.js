import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import { Provider } from "./state/reducer";
import Theme from "./Theme";
import Selection from "./components/selection";
import Sources from "./components/sources";
import bills from "./generatedData/bills";
import sources from "./generatedData/sources";
import topics from "./generatedData/topics";
import plans from "./generatedData/plans";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    font-weight: ${(props) => props.theme.fontWeight};
    line-height: 1.6;
    padding: 0 0 1px;

    @media screen {
      font-size: ${(props) => props.theme.fontSize};
    }

    @media print {
      font-size: ${(props) => props.theme.printSize};
    }
  }

  * {
    font-family: ${(props) => props.theme.fontFamilies.lato};
  }

  div,
  h1,
  h2,
  h3,
  p {
    page-break-inside: avoid;
  }
`;

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Provider>
        <GlobalStyle />
        <Selection bills={bills} sources={sources} topics={topics} />
        <Sources sources={sources} topics={topics} plans={plans} />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
