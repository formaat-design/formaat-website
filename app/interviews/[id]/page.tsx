import React from "react";
import { Metadata } from "next";
import InterviewLayout from "../../../components/InterviewLayout";
import { getInterview, getSuggestedInterviews } from "../../../utilities/data";
import Header from "../../../components/Header";

export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> => {
  const currentId = params.id;
  const interview = await getInterview(currentId);
  const title = [interview.interviewee.name, interview.company?.name]
    .filter(Boolean)
    .join(", ");

  return {
    title: `${title} - Design System Interviews`,
    description:
      "A collection of interviews with the industry experts to help you learn about how design systems are built and maintained at scale.",
    openGraph: {
      images: interview.meta?.preview,
    },
  };
};

export default async function Page({ params }: { params: { id: string } }) {
  const currentId = params.id;
  const interview = await getInterview(currentId);
  const suggestedInterviews = await getSuggestedInterviews(currentId);

  if (!interview) return null;

  return (
    <>
      <Header />
      <InterviewLayout data={interview} suggestedData={suggestedInterviews} />
    </>
  );
}
