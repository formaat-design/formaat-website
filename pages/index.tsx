import type { NextPage, GetStaticProps } from "next";
import NextLink from "next/link";
import { Text, Stack, Frame, Hidden, Link } from "reshaped";
import Founders from "../components/Founders";
import InterviewCard from "../components/InterviewCard";
import ProjectList from "../components/ProjectList";
import { getInterviews } from "../utilities/data";
import * as G from "../types/global.types";

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
                <Founders />
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
                A collection of interviews with the industry experts to help you
                learn about how design systems are built and maintained at
                scale.
              </Text>
              <Stack.Item gap={7}>
                <Stack gap={3} divided>
                  {interviews.map((item) => (
                    <InterviewCard data={item} key={item.id} />
                  ))}
                </Stack>
              </Stack.Item>
              <NextLink href="/interviews" passHref>
                <Link variant="plain">See all interviews</Link>
              </NextLink>
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
