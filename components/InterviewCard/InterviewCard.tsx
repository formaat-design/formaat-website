import NextLink from "next/link";
import { Card, Stack, Avatar, Text, Image } from "reshaped";
import * as T from "./InterviewCard.types";

const InterviewCard = (props: T.Props) => {
  const { data } = props;

  return (
    <NextLink href={`/interviews/${data.id}`} passHref>
      <Card attributes={{ style: { height: "100%" } }}>
        <Stack gap={6} height="100%">
          <Stack.Item grow>
            <Stack gap={2}>
              <Stack direction="row" gap={2} align="center">
                {data.company?.logo ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.company?.logo,
                    }}
                  />
                ) : null}
                {data.company?.logoUrl ? (
                  <Image
                    src={data.company.logoUrl}
                    width="24px"
                    height="24px"
                  />
                ) : null}
                <Text variant="featured-3">
                  {[data?.system?.name, data.company?.name]
                    .filter(Boolean)
                    .join(", ")}
                </Text>
              </Stack>
              <Text color="neutral-faded" variant="body-1">
                {data.interview.description}
              </Text>
            </Stack>
          </Stack.Item>
          <Stack direction="row" gap={2} align="center">
            <Avatar size={8} src={data.interviewee.photoUrl} />
            <Text variant="body-2" color="neutral-faded">
              {data.interviewee.name} &middot; {data.interview.date}
            </Text>
          </Stack>
        </Stack>
      </Card>
    </NextLink>
  );
};

export default InterviewCard;
