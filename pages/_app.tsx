import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { Reshaped, Container, Stack } from "reshaped";
import Header from "../components/Header";
import "../themes/formaat/theme.css";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  let title = "Formaat - Design system studio";
  if (router.asPath.startsWith("/interviews")) {
    title = "Design system interviews - Formaat";
  }

  const description =
    "With more than a decade of experience each, we explore how design systems will work tomorrow";

  return (
    <>
      <Head>
        <link rel="canonical" href={`https://formaat.design${router.asPath}`} />
        <meta name="viewport" content="width=device-width" />
        <meta name="theme-color" content="#0d1117" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="image" content="https://formaat.design/img/share.png" />
        <meta
          name="twitter:image"
          content="https://formaat.design/img/share.png"
        />
        <meta
          property="og:image"
          content="https://formaat.design/img/share.png"
        />

        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        <meta property="og:site_name" content="Formaat" />
        <meta property="og:url" content="https://formaat.design" />
        <meta name="twitter:url" content="https://formaat.design" />
        <meta property="og:type" content="website" />

        <title key="title">{title}</title>
        <meta name="twitter:title" content={title} />
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="twitter:description" content={description} />
        <meta name="image" content="https://formaat.design/img/share.png" />
        <meta
          name="twitter:image"
          content="https://formaat.design/img/share.png"
        />
        <meta
          property="og:image"
          content="https://formaat.design/img/share.png"
        />
      </Head>

      <Reshaped theme="formaat" defaultColorMode="dark">
        <Header />
        <Container width="780px">
          <Stack gap={10}>
            <Component {...pageProps} />
          </Stack>
        </Container>
      </Reshaped>
    </>
  );
}

export default App;
