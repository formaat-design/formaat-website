import React from "react";
import type { NextPage, GetStaticProps } from "next";
import path from "path";
import fs from "fs";
import { Text, Stack, Frame } from "reshaped";
import InterviewCard from "../../components/InterviewCard";
import type * as G from "../../types/global.types";

const Interviews: NextPage<{ data: G.Interview[] }> = (props) => {
  const { data } = props;
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Frame maxWidth="720px" padding={[30, 0]}>
        <Stack gap={3}>
          <Text variant="display-3">Design system interviews</Text>
          <Text variant="featured-2">
            A collection of interviews with the industry experts to help you
            learn about how design systems are built and maintained at scale.
          </Text>

          {mounted && (
            <Stack.Item gap={20}>
              <Stack direction="row" align="stretch" gap={4}>
                {data.map((item) => (
                  <Stack.Item size={{ s: 12, m: 6 }} key={item.id}>
                    <InterviewCard data={item} />
                  </Stack.Item>
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
  const interviewsDir = path.resolve(process.cwd(), "data/interviews");
  const ids = fs.readdirSync(interviewsDir);

  const data: G.Interview[] = [];

  for (let id of ids) {
    const interviewData = await import(`../../data/interviews/${id}`);
    data.push(interviewData.default);
  }

  return {
    props: {
      data: data.sort((a, b) => {
        const tsA = +new Date(a.interview.date);
        const tsB = +new Date(b.interview.date);

        return tsB - tsA;
      }),
    },
  };
};

export default Interviews;
