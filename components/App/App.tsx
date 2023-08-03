"use client";

import { Reshaped, Container, View } from "reshaped";
import "reshaped/themes/reshaped/theme.css";

const App = (props: React.PropsWithChildren) => {
  return (
    <Reshaped theme="reshaped" defaultColorMode="dark">
      <View
        paddingBlock={{ s: 20, l: 10, xl: 30 }}
        paddingInline={{ s: 4, l: 10, xl: 30 }}
      >
        <Container width="1520px" padding={0}>
          {props.children}
        </Container>
      </View>
    </Reshaped>
  );
};

export default App;
