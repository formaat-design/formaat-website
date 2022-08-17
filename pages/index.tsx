import type { NextPage } from "next";
import { Text, Stack, Frame, Avatar, Actionable, Tooltip } from "reshaped";
import TwitterIcon from "../icons/Twitter";
import ProjectList from "../components/ProjectList";

const Home: NextPage = () => {
  return (
    <Frame padding={[20, 0]}>
      <Stack gap={{ s: 15, m: 20 }}>
        <Frame maxWidth="860px">
          <Stack gap={{ s: 4, m: 6 }}>
            <Stack direction="row" gap={0} align="center">
              <Stack
                direction={{ s: "column-reverse", m: "row" }}
                align={{ s: "start", m: "center" }}
                gap={4}
              >
                <Text variant="display-2">Formaat is a tiny</Text>
                <Stack gap={2} as="span" direction="row">
                  <Tooltip
                    text={
                      <Stack direction="row" gap={1} align="center">
                        <TwitterIcon />
                        <Stack.Item>@blvdmitry</Stack.Item>
                      </Stack>
                    }
                    position="top"
                  >
                    {(attributes) => (
                      <Actionable
                        borderRadius="inherit"
                        attributes={{ ...attributes, target: "_blank" }}
                        href="https://twitter.com/blvdmitry"
                      >
                        <Avatar src="/img/studio/avatar-dmitry.png" size={9} />
                      </Actionable>
                    )}
                  </Tooltip>
                  <Tooltip
                    text={
                      <Stack direction="row" gap={1} align="center">
                        <TwitterIcon />
                        <Stack.Item>@hi_drozdenko</Stack.Item>
                      </Stack>
                    }
                    position="top"
                  >
                    {(attributes) => (
                      <Actionable
                        borderRadius="inherit"
                        attributes={{ ...attributes, target: "_blank" }}
                        href="https://twitter.com/hi_drozdenko"
                      >
                        <Avatar src="/img/studio/avatar-oleksii.png" size={9} />
                      </Actionable>
                    )}
                  </Tooltip>
                </Stack>
              </Stack>
              <Text variant="display-2">
                design system studio <br />
                based in Amsterdam
              </Text>
            </Stack>
            <Text variant="featured-1">
              With more than a decade of experience each, we explore how design
              systems will work tomorrow
            </Text>
          </Stack>
        </Frame>
        <ProjectList />
      </Stack>
    </Frame>
  );
};

export default Home;
