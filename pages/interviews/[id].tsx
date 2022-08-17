import React from "react";
import fs from "fs";
import path from "path";
import { GetStaticProps, NextPage } from "next";
import InterviewLayout from "../../components/InterviewLayout";
import type * as G from "../../types/global.types";

const Route: NextPage<{
  interview: G.Interview;
  suggestedInterviews: G.Interview[];
}> = (props) => {
  return (
    <InterviewLayout
      data={props.interview}
      suggestedData={props.suggestedInterviews}
    />
  );
};

export const getStaticPaths = async () => {
  const interviewsDir = path.resolve(process.cwd(), "data/interviews");
  const paths = fs.readdirSync(interviewsDir).map((id) => ({ params: { id } }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const interviewsDir = path.resolve(process.cwd(), "data/interviews");
  const ids = fs.readdirSync(interviewsDir);
  const currentId = context.params?.id;
  const interviews: G.Interview[] = [];
  const suggestedInterviews: G.Interview[] = [];
  const interview = await import(`../../data/interviews/${currentId}`);

  for (let id of ids) {
    const interviewData = await import(`../../data/interviews/${id}`);

    interviews.push(interviewData.default);
  }

  interviews.sort((a, b) => {
    const tsA = +new Date(a.interview.date);
    const tsB = +new Date(b.interview.date);
    return tsB - tsA;
  });

  interviews.forEach((item, index) => {
    if (item.id !== currentId) return;

    const firstIndex = (index + 1) % interviews.length;
    const secondIndex = (index + 2) % interviews.length;

    suggestedInterviews.push(interviews[firstIndex], interviews[secondIndex]);
  });

  return {
    props: {
      interview: interview.default,
      suggestedInterviews,
    },
  };
};

export default Route;
