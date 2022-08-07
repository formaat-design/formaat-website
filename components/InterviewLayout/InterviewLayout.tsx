import React from "react";
import { Stack, Avatar, Text, Button, Frame, Divider, Icon } from "reshaped";
import IconExternal from "../../icons/External";
import IconLightbulb from "../../icons/Lightbulb";
import * as T from "./InterviewLayout.types";
import s from "./InterviewLayout.module.css";

const InterviewLayout = (props: T.Props) => {
  const { data } = props;

  return (
    <Frame padding={[30, 0]}>
      <Stack gap={15}>
        <Stack direction="row" gap={10} align="start" className={s.wrapper}>
          <Avatar
            src={data.interviewee.photoUrl}
            size={18}
            className={s.avatar}
          />

          <Stack.Item grow>
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
          <Stack gap={0} align="end">
            <Stack direction="row" align="center" gap={2}>
              {data.company?.logo || data.system.logo ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.company?.logo || data.system.logo!,
                  }}
                />
              ) : null}
              <Text variant="body-medium-1">
                {data.system.name}
                {data.company ? `, ${data.company.name}` : ""}
              </Text>
            </Stack>

            <Text variant="caption-1" color="neutral-faded">
              {data.interview.date}
            </Text>
          </Stack>
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
          <Text variant="title-2">Highlights</Text>

          {data.interview.highlights.map((item) => (
            <Stack gap={3} direction="row">
              <Icon svg={IconLightbulb} size={5} />
              <Stack.Item grow>
                <Text variant="body-1" color="neutral-faded">
                  {item}
                </Text>
              </Stack.Item>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Frame>
  );
};

export default InterviewLayout;
