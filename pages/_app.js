import React from "react";
import Head from "next/head";
import { EpisodeProvider } from "../contexts/EpisodeContext";
import GlobalStyle from "../GlobalStyles";

const MyApp = ({ Component, pageProps }) => {
  let Wrapper = React.Fragment;
  let wrapperProps = {};

  if (Component.Layout) {
    Wrapper = Component.Layout;
    wrapperProps = pageProps.layout || {};
  }
  return (
    <EpisodeProvider>
      <GlobalStyle />
      <Wrapper {...wrapperProps}>
        <Head>
          <title>Bravoure Frontend Assessment</title>
        </Head>
        <Component {...pageProps} />
      </Wrapper>
    </EpisodeProvider>
  );
};

export default MyApp;
