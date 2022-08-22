import type { NextPage, GetStaticProps } from "next";
import {
  Text,
  Stack,
  Frame,
  Avatar,
  Actionable,
  Tooltip,
  Hidden,
} from "reshaped";
import TwitterIcon from "../icons/Twitter";
import InterviewCard from "../components/InterviewCard";
import ProjectList from "../components/ProjectList";
import { getInterviews } from "../utilities/data";
import * as G from "../types/global.types";
import s from "./index.module.css";

const Home: NextPage<{ interviews: G.Interview[] }> = (props) => {
  const { interviews } = props;

  return (
    <Frame padding={[20, 0]}>
      <Stack gap={{ s: 15, m: 20 }}>
        <Frame maxWidth="860px">
          <Stack gap={{ s: 4, m: 6 }}>
            <Stack direction="row" gap={0} align="center">
              <Stack
                direction={{ s: "column-reverse", m: "row" }}
                align={{ s: "start", m: "center" }}
                gap={2}
              >
                <Text variant="display-2">Formaat is a tiny</Text>
                <Stack gap={0} as="span" direction="row">
                  <Tooltip
                    text={
                      <Stack direction="row" gap={0} align="center">
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
                        className={s.avatarWrapper}
                      >
                        <Avatar
                          src="/img/studio/avatar-dmitry.png"
                          size={14}
                          className={s.avatar}
                        />
                      </Actionable>
                    )}
                  </Tooltip>
                  <Tooltip
                    text={
                      <Stack direction="row" gap={0} align="center">
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
                        className={s.avatarWrapper}
                      >
                        <Avatar
                          className={s.avatar}
                          src="/img/studio/avatar-oleksii.png"
                          size={14}
                        />
                      </Actionable>
                    )}
                  </Tooltip>
                </Stack>
              </Stack>
              <Text variant="display-2">
                design system studio&nbsp;
                <Hidden hide={{ s: true, m: false }}>
                  {(className) => <br className={className} />}
                </Hidden>
                based in Amsterdam
              </Text>
            </Stack>
            <Text variant="featured-1">
              With more than a decade of experience each,{" "}
              <Hidden hide={{ s: true, l: false }}>
                {(className) => <br className={className} />}
              </Hidden>
              we explore how design systems will work tomorrow
            </Text>
          </Stack>
        </Frame>

        <Stack direction="row" gap={20}>
          <Stack.Item size={{ s: 12, l: 7 }}>
            <Stack gap={3}>
              <Text variant="title-3">Made by us</Text>
              <Text variant="body-1">
                Products that we’ve crafted with utmost care and would
                <Hidden hide={{ s: true, l: false }}>
                  {(className) => <br className={className} />}
                </Hidden>
                love to share with the design system community
              </Text>
              <Stack.Item gap={7}>
                <ProjectList />
              </Stack.Item>
            </Stack>
          </Stack.Item>
          <Stack.Item size={{ s: 12, l: 5 }}>
            <Stack gap={3}>
              <Text variant="title-3">Design system interviews</Text>
              <Text variant="body-1">
                Professionally crafted design system for everyday product
                development with Figma and React
              </Text>
              <Stack.Item gap={7}>
                <Stack gap={3} divided>
                  {interviews.map((item) => (
                    <InterviewCard data={item} key={item.id} />
                  ))}
                </Stack>
              </Stack.Item>
              {/* <Text variant="body-medium-2">
                <NextLink href="/interviews" passHref>
                  <Link variant="plain">See all interviews</Link>
                </NextLink>
              </Text> */}
            </Stack>
          </Stack.Item>
        </Stack>
      </Stack>
    </Frame>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const interviews = await getInterviews();

  return {
    props: {
      interviews: interviews.slice(0, 3),
    },
  };
};

export default Home;
