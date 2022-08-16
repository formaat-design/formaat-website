import type { NextPage } from "next";
import NextLink from "next/link";
import {
  Text,
  Stack,
  Frame,
  Avatar,
  Actionable,
  Tooltip,
  Hidden,
} from "reshaped";

const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 800 800">
    <path
      fill="currentColor"
      d="M679 239s-21 34-55 57c7 156-107 329-314 329-103 0-169-50-169-50s81 17 163-45c-83-5-103-77-103-77s23 6 50-2c-93-23-89-110-89-110s23 14 50 14c-84-65-34-148-34-148s76 107 228 116c-22-121 117-177 188-101 37-6 71-27 71-27s-12 41-49 61c30-2 63-17 63-17z"
    ></path>
  </svg>
);

const Home: NextPage = () => {
  return (
    <Frame
      height={{ s: "auto", m: "100vh" }}
      padding={{ s: [20, 0], m: 0 }}
      align="center"
      justify="center"
    >
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
              With more than a decade of experience each,{" "}
              <Hidden hide={{ s: true, m: false }}>
                {(className) => <br className={className} />}
              </Hidden>
              we explore how design systems will work tomorrow
            </Text>
          </Stack>
        </Frame>
        <Stack direction="row" gap={{ s: 4, l: 8 }}>
          <Stack.Item size={{ s: 12, m: 6 }}>
            <Actionable
              borderRadius="inherit"
              href="https://reshaped.so"
              attributes={{ target: "_blank" }}
            >
              <Frame
                backgroundColor="neutral-faded"
                borderRadius="large"
                padding={6}
              >
                <Stack gap={2}>
                  <Stack direction="row" gap={2} align="center">
                    <Avatar src="/img/studio/avatar-reshaped.svg" size={6} />
                    <Stack.Item grow>
                      <Text variant="featured-3">Reshaped</Text>
                    </Stack.Item>
                  </Stack>
                  <Text variant="body-1" color="neutral-faded">
                    Professionally crafted design system for everyday product
                    development with Figma and React
                  </Text>
                </Stack>
              </Frame>
            </Actionable>
          </Stack.Item>
          <Stack.Item size={{ s: 12, m: 6 }}>
            <NextLink href="/interviews" passHref>
              <Actionable borderRadius="inherit">
                <Frame
                  backgroundColor="neutral-faded"
                  borderRadius="large"
                  padding={6}
                >
                  <Stack gap={2}>
                    <Text variant="featured-3">Design system interviews</Text>
                    <Text variant="body-1" color="neutral-faded">
                      Collection of interviews with professionals working on the
                      best design systems in the industry
                    </Text>
                  </Stack>
                </Frame>
              </Actionable>
            </NextLink>
          </Stack.Item>
        </Stack>
      </Stack>
    </Frame>
  );
};

export default Home;
