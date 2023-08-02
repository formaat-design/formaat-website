import NextLink from "next/link";
import { View, Text, Image, MenuItem } from "reshaped";
import * as T from "./InterviewCard.types";

const InterviewCard = (props: T.Props) => {
  const { data } = props;
  const date = new Date(data.interview.date);

  return (
    <MenuItem.Aligner>
      <NextLink href={`/interviews/${data.id}`} passHref legacyBehavior>
        <MenuItem roundedCorners size="large">
          <View gap={2}>
            <View direction="row" align="center" gap={2}>
              <Image
                alt={`${data.interviewee.name} avatar`}
                src={data.interviewee.photoUrl}
                width="24px"
                height="24px"
                borderRadius="small"
              />
              {data.company?.logo ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.company?.logo,
                  }}
                />
              ) : null}
              {data.company?.logoUrl && (
                <Image
                  alt={`${data.company.name} logotype`}
                  src={data.company?.logoUrl}
                  width="24px"
                  height="24px"
                  borderRadius="small"
                />
              )}
              <View.Item grow gapBefore={3}>
                <Text variant="body-3" weight="medium">
                  {data.system?.name || data.company?.name ? (
                    <>
                      {[data.system?.name, data.company?.name]
                        .filter(Boolean)
                        .join(", ")}
                      &nbsp;—&nbsp;
                      <Text
                        variant="body-3"
                        color="neutral-faded"
                        as="span"
                        weight="regular"
                      >
                        {data.interviewee.name}
                      </Text>
                    </>
                  ) : (
                    data.interviewee.name
                  )}
                </Text>
                <Text color="neutral-faded" variant="body-3" weight="regular">
                  {date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </Text>
              </View.Item>
            </View>
            <Text
              color="neutral-faded"
              maxLines={2}
              variant="body-3"
              weight="regular"
            >
              {data.interview.description}
            </Text>
          </View>
        </MenuItem>
      </NextLink>
    </MenuItem.Aligner>
  );
};

export default InterviewCard;
