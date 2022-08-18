import React from "react";
import {
  Stack,
  Avatar,
  Text,
  Button,
  Frame,
  Divider,
  Icon,
  Image,
} from "reshaped";
import IconExternal from "../../icons/External";
import IconLightbulb from "../../icons/Lightbulb";
import InterviewCard from "../InterviewCard";
import ProjectList from "../ProjectList";
import * as T from "./InterviewLayout.types";
import s from "./InterviewLayout.module.css";

const InterviewLayout = (props: T.Props) => {
  const { data, suggestedData } = props;
  const date = new Date(data.interview.date);

  return (
    <Frame padding={[30, 0]}>
      <Stack gap={15}>
        <Stack
          direction={{ s: "column", m: "row" }}
          gap={{ s: 6, l: 10 }}
          align="start"
          className={s.wrapper}
        >
          <Avatar
            src={data.interviewee.photoUrl}
            size={18}
            className={s.avatar}
          />

          <Stack.Item size={{ s: 12, l: 8 }}>
            <Stack gap={2}>
              <Text variant="title-1">{data.interviewee.name}</Text>
              <Text variant="body-1">{data.interviewee.bio}</Text>
              <Stack.Item gap={6}>
                <Stack gap={2} direction="row">
                  {data.interviewee?.links?.map((link) => (
                    <Button
                      key={link.href}
                      href={link.href}
                      attributes={{ target: "_blank" }}
                      variant="outline"
                      endIcon={IconExternal}
                    >
                      {link.label}
                    </Button>
                  ))}
                </Stack>
              </Stack.Item>
            </Stack>
          </Stack.Item>
          <Stack.Item size={{ s: 12, l: 4 }}>
            <Stack gap={0} align={{ s: "start", l: "end" }}>
              <Stack
                direction={{ s: "row-reverse", l: "row" }}
                align="center"
                gap={2}
              >
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
                <Text variant="body-medium-1">
                  {[data?.system?.name, data.company?.name]
                    .filter(Boolean)
                    .join(", ")}
                </Text>
              </Stack>

              <Text variant="caption-1" color="neutral-faded">
                {date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </Text>
            </Stack>
          </Stack.Item>
        </Stack>

        <Divider />

        {data.interview.items.map((item) => (
          <Stack gap={5} key={item.question}>
            <Text
              variant="body-strong-1"
              color="neutral-faded"
              className={s.wrapper}
            >
              <Avatar
                src="https://pbs.twimg.com/profile_images/1096029593335676929/OZbE9ZXV_400x400.png"
                size={6}
                className={s.avatar}
              />
              {item.question}
            </Text>
            <Text variant="body-1" className={s.wrapper}>
              <Avatar
                src={data.interviewee.photoUrl}
                size={6}
                className={s.avatar}
              />
              <Stack as="span">
                {Array.isArray(item.answer)
                  ? item.answer.map((item) => (
                      <Stack.Item as="p" key={item}>
                        <span dangerouslySetInnerHTML={{ __html: item }} />
                      </Stack.Item>
                    ))
                  : item.answer}
              </Stack>
            </Text>
          </Stack>
        ))}

        <Divider />

        <Stack gap={6}>
          <Text variant="title-3">Highlights</Text>

          {data.interview.highlights.map((item) => (
            <Stack gap={3} direction="row" key={item}>
              <Icon svg={IconLightbulb} size={5} />
              <Stack.Item grow>
                <Text variant="body-1" color="neutral-faded">
                  {item}
                </Text>
              </Stack.Item>
            </Stack>
          ))}
        </Stack>

        <Stack gap={6}>
          <Text variant="title-3">More interviews</Text>

          <Stack direction="row" align="stretch" gap={4}>
            {suggestedData.map((itemData) => (
              <Stack.Item size={{ s: 12, m: 6 }} key={itemData.id}>
                <InterviewCard data={itemData} />
              </Stack.Item>
            ))}
          </Stack>
        </Stack>

        <Stack gap={6}>
          <Text variant="title-3">Other Formaat projects</Text>
          <ProjectList hiddenProject="interviews" />
        </Stack>
      </Stack>
    </Frame>
  );
};

export default InterviewLayout;
