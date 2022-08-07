import type { AppProps } from "next/app";
import { Reshaped, Container, Stack } from "reshaped";
import Header from "../components/Header";
import "../themes/formaat/theme.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Reshaped theme="formaat" defaultColorMode="dark">
      <Header />
      <Container width="780px">
        <Stack gap={10}>
          <Component {...pageProps} />
        </Stack>
      </Container>
    </Reshaped>
  );
}

export default MyApp;
