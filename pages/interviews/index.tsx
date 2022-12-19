import React from "react";
import type { NextPage, GetStaticProps } from "next";
import { Text, Stack, Frame } from "reshaped";
import Meta from "../../components/Meta";
import InterviewCard from "../../components/InterviewCard";
import Founders from "../../components/Founders";
import { getInterviews } from "../../utilities/data";
import type * as G from "../../types/global.types";

const Interviews: NextPage<{ data: G.Interview[] }> = (props) => {
  const { data } = props;
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Meta title="Design System Interviews" />
      <Frame maxWidth="720px" padding={[30, 0]}>
        <Stack gap={3}>
          <Text variant="display-3">Design system interviews</Text>
          <Text variant="featured-2">
            A collection of interviews with the industry experts to help you
            learn about how design systems are built and maintained at scale.
          </Text>

          <Stack.Item gap={4}>
            <Stack direction="row" align="center" gap={3}>
              <Text variant="featured-2">Follow us for updates:</Text>
              <Founders />
            </Stack>
          </Stack.Item>

          {mounted && (
            <Stack.Item gap={20}>
              <Stack gap={8}>
                {data.map((item) => (
                  <InterviewCard data={item} key={item.id} />
                ))}
              </Stack>
            </Stack.Item>
          )}
        </Stack>
      </Frame>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const interviews = await getInterviews();

  return {
    props: {
      data: interviews,
    },
  };
};

export default Interviews;
