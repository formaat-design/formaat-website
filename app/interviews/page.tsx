import React from "react";
import { Metadata } from "next";
import { Text, View, Container } from "reshaped";
import InterviewCard from "../../components/InterviewCard";
import Header from "../../components/Header";
import { getInterviews } from "../../utilities/data";

export const metadata: Metadata = {
  title: "Design System Interviews",
  description:
    "A collection of interviews with the industry experts to help you learn about how design systems are built and maintained at scale.",
};

export default async function Page() {
  const interviews = await getInterviews();

  return (
    <Container width="600px" padding={0}>
      <Header />
      <View gap={3}>
        <Text variant={{ s: "featured-2", m: "title-6" }} weight="bold">
          Design system interviews
        </Text>
        <Text variant={{ s: "body-1", m: "featured-3" }} weight="regular">
          A collection of interviews with the industry experts to help you learn
          about how design systems are built and maintained at scale.
        </Text>

        <View.Item gapBefore={{ s: 10, m: 20 }}>
          <View gap={{ s: 2, m: 8 }}>
            {interviews.map((item) => (
              <InterviewCard data={item} key={item.id} />
            ))}
          </View>
        </View.Item>
      </View>
    </Container>
  );
}
