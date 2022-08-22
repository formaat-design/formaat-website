import React from "react";
import { GetStaticProps, NextPage } from "next";
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
  if (!props.interview) {
    return null;
  }

  return (
    <InterviewLayout
      data={props.interview}
      suggestedData={props.suggestedInterviews}
    />
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
