import React from "react";
import { GetStaticProps, NextPage } from "next";
import Meta from "../../components/Meta";
import InterviewLayout from "../../components/InterviewLayout";
import {
  getInterview,
  getSuggestedInterviews,
  getInterviewIds,
} from "../../utilities/data";
import type * as G from "../../types/global.types";

const Route: NextPage<{
  interview: G.Interview;
  suggestedInterviews: G.Interview[];
}> = (props) => {
  const { interview, suggestedInterviews } = props;
  if (!interview) return null;
  const metaTitle = [interview.interviewee.name, interview.company?.name]
    .filter(Boolean)
    .join(", ");

  return (
    <>
      <Meta
        img={interview.meta?.preview}
        title={`${metaTitle} - Design System Interviews`}
      />
      <InterviewLayout data={interview} suggestedData={suggestedInterviews} />
    </>
  );
};

export const getStaticPaths = async () => {
  const ids = getInterviewIds();
  const paths = ids.map((id) => ({ params: { id } }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const currentId = context.params?.id as string;
  const interview = await getInterview(currentId);
  const suggestedInterviews = await getSuggestedInterviews(currentId);

  return {
    props: {
      interview,
      suggestedInterviews,
    },
  };
};

export default Route;
