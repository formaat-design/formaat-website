import React from "react";
import fs from "fs";
import path from "path";
import { GetStaticProps, NextPage } from "next";
import InterviewLayout from "../../components/InterviewLayout";
import type * as G from "../../types/global.types";

const Route: NextPage<{ data: G.Interview }> = (props) => {
  return <InterviewLayout data={props.data} />;
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
  const id = context.params?.id;
  const data = await import(`../../data/interviews/${id}`);

  return {
    props: {
      data: data.default,
    },
  };
};

export default Route;
