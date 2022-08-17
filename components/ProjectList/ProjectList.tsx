import React from "react";
import NextLink from "next/link";
import { Stack, Avatar } from "reshaped";
import ProjectCard from "../ProjectCard";
import * as T from "./ProjectList.types";
import s from "./ProjectList.module.css";

const ProjectList = (props: T.Props) => {
  const { hiddenProject } = props;

  return (
    <Stack direction="row" gap={4} align="stretch">
      {hiddenProject !== "reshaped" && (
        <Stack.Item size={{ s: 12, m: 6 }}>
          <ProjectCard
            className={s.card}
            title="Reshaped"
            description="Professionally crafted design system for everyday product development with Figma and React"
            thumbnail={
              <Avatar src="/img/studio/avatar-reshaped.svg" size={6} />
            }
            href="https://reshaped.so"
          />
        </Stack.Item>
      )}

      {hiddenProject !== "interviews" && (
        <Stack.Item size={{ s: 12, m: 6 }}>
          <NextLink href="/interviews" passHref>
            <ProjectCard
              className={s.card}
              title="🎙️ Design system interviews"
              description="Professionally crafted design system for everyday product development with Figma and React"
            />
          </NextLink>
        </Stack.Item>
      )}

      {hiddenProject !== "checklist" && (
        <Stack.Item size={{ s: 12, m: 6 }}>
          <ProjectCard
            className={s.card}
            title="Design system checklist"
            description="An open-source checklist to help you plan, build and grow your design system"
            href="https://www.designsystemchecklist.com/"
          />
        </Stack.Item>
      )}
    </Stack>
  );
};

export default ProjectList;
