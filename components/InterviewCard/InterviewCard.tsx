import NextLink from "next/link";
import { Stack, Text, Image, MenuItem } from "reshaped";
import * as T from "./InterviewCard.types";

const InterviewCard = (props: T.Props) => {
  const { data } = props;
  const date = new Date(data.interview.date);

  return (
    <MenuItem.Aligner>
      <NextLink href={`/interviews/${data.id}`} passHref>
        <MenuItem roundedCorners>
          <Stack gap={2}>
            <Stack direction="row" align="center" gap={3}>
              {data.company?.logo ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.company?.logo,
                  }}
                />
              ) : null}
              <Image
                alt={
                  data.company?.name
                    ? `${data.company.name} logotype`
                    : `${data.interviewee.name} avatar`
                }
                src={data.company?.logoUrl || data.interviewee.photoUrl}
                width="24px"
                height="24px"
                borderRadius="small"
              />
              <Stack.Item grow>
                <Text variant="body-medium-2">
                  {data.system?.name || data.company?.name ? (
                    <>
                      {[data.system?.name, data.company?.name]
                        .filter(Boolean)
                        .join(", ")}
                      &nbsp;—&nbsp;
                      <Text variant="body-2" color="neutral-faded" as="span">
                        {data.interviewee.name}
                      </Text>
                    </>
                  ) : (
                    data.interviewee.name
                  )}
                </Text>
                <Text color="neutral-faded" variant="body-2">
                  {date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </Text>
              </Stack.Item>
            </Stack>
            <Text color="neutral-faded" maxLines={2} variant="body-2">
              {data.interview.description}
            </Text>
          </Stack>
        </MenuItem>
      </NextLink>
    </MenuItem.Aligner>
  );
};

export default InterviewCard;
