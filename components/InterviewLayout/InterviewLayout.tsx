import React from "react";
import {
  View,
  Avatar,
  Text,
  Button,
  Divider,
  Icon,
  Image,
  Container,
} from "reshaped";
import IconExternal from "../../icons/External";
import IconLightbulb from "../../icons/Lightbulb";
import InterviewCard from "../InterviewCard";
import * as T from "./InterviewLayout.types";
import s from "./InterviewLayout.module.css";

const InterviewLayout = (props: T.Props) => {
  const { data, suggestedData } = props;
  const date = new Date(data.interview.date);

  return (
    <Container width="800px" padding={0}>
      <View gap={15}>
        <View
          direction={{ s: "column", m: "row" }}
          gap={{ s: 6, l: 10 }}
          align="start"
          className={s.wrapper}
        >
          <View.Item columns={{ s: 12, l: 8 }}>
            <View gap={2} align="start">
              <Avatar
                src={data.interviewee.photoUrl}
                size={18}
                className={s.avatar}
              />
              <Text variant="title-6">{data.interviewee.name}</Text>
              <Text variant="body-2" color="neutral-faded">
                {data.interviewee.bio}
              </Text>
              <View.Item gapBefore={6}>
                <View gap={2} direction="row">
                  {data.interviewee?.links?.map((link) => (
                    <Button
                      key={link.href}
                      href={link.href}
                      attributes={{ target: "_blank" }}
                      variant="faded"
                      endIcon={IconExternal}
                    >
                      {link.label}
                    </Button>
                  ))}
                </View>
              </View.Item>
            </View>
          </View.Item>
          <View.Item columns={{ s: 12, l: 4 }}>
            <View gap={0} align={{ s: "start", l: "end" }}>
              <View
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
                    width={6}
                    height={6}
                  />
                ) : null}
                <Text variant="body-2" weight="medium">
                  {[data?.system?.name, data.company?.name]
                    .filter(Boolean)
                    .join(", ")}
                </Text>
              </View>

              <Text variant="caption-1" color="neutral-faded">
                {date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </Text>
            </View>
          </View.Item>
        </View>

        <Divider />

        <View gap={15}>
          {data.interview.items.map((item) => (
            <View gap={5} key={item.question}>
              <Text
                variant={{ s: "body-2", m: "body-1" }}
                weight="medium"
                className={s.wrapper}
              >
                <Avatar
                  src="https://pbs.twimg.com/profile_images/1096029593335676929/OZbE9ZXV_400x400.png"
                  size={6}
                  className={s.avatar}
                />
                <span dangerouslySetInnerHTML={{ __html: item.question }} />
              </Text>
              <Text
                variant={{ s: "body-2", m: "body-1" }}
                color="neutral-faded"
                className={s.wrapper}
              >
                <Avatar
                  src={data.interviewee.photoUrl}
                  size={6}
                  className={s.avatar}
                />
                <View as="span" gap={4}>
                  {Array.isArray(item.answer)
                    ? item.answer.map((item) => (
                        <View.Item as="p" key={item}>
                          <span dangerouslySetInnerHTML={{ __html: item }} />
                        </View.Item>
                      ))
                    : item.answer}
                </View>
              </Text>
            </View>
          ))}
        </View>

        <Divider />

        <View gap={6}>
          <Text variant={{ s: "body-1", m: "featured-3" }} weight="bold">
            Highlights
          </Text>

          {data.interview.highlights.map((item) => (
            <View gap={3} direction="row" key={item}>
              <Icon svg={IconLightbulb} size={5} color="primary" />
              <View.Item grow>
                <Text variant="body-2" color="neutral-faded">
                  {item}
                </Text>
              </View.Item>
            </View>
          ))}
        </View>

        <View gap={4}>
          <Text variant={{ s: "body-1", m: "featured-3" }} weight="bold">
            More interviews
          </Text>

          <View
            direction={{ s: "column", m: "row" }}
            align="stretch"
            gap={{ s: 4, m: 10 }}
            divided
          >
            {suggestedData.map((itemData) => (
              <View.Item columns={{ s: 12, m: 6 }} key={itemData.id}>
                <InterviewCard data={itemData} />
              </View.Item>
            ))}
          </View>
        </View>
      </View>
    </Container>
  );
};

export default InterviewLayout;
