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
              {data.company?.logoUrl ? (
                <Image
                  alt={`${data.company.name} logotype`}
                  src={data.company.logoUrl}
                  width="24px"
                  height="24px"
                />
              ) : null}
              <Stack.Item grow>
                <Text variant="body-medium-2">
                  {[data?.system?.name, data.company?.name]
                    .filter(Boolean)
                    .join(", ")}
                  &nbsp;—&nbsp;
                  <Text variant="body-2" color="neutral-faded" as="span">
                    {data.interviewee.name}
                  </Text>
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
