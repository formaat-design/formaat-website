import React from "react";
import { Stack } from "reshaped";
import ProjectCard from "../ProjectCard";

const ProjectList = () => {
  return (
    <Stack direction="row" gap={6}>
      <Stack.Item size={{ s: 12, m: 4 }}>
        <ProjectCard
          href="https://reshaped.so"
          title="Reshaped"
          description="Design system built for your scale in React & Figma"
          thumbnail="/img/studio/thumbnail-reshaped.png"
          alt="Reshaped components preview"
        />
      </Stack.Item>
      <Stack.Item size={{ s: 12, m: 4 }}>
        <ProjectCard
          href="https://www.figma.com/community/plugin/1132648122057236517/Reshaped"
          title="Reshaped tokens"
          description="Free Figma plugin to manage themes and dark mode"
          thumbnail="/img/studio/thumbnail-reshaped-tokens.png"
          alt="Figma plugin interface"
        />
      </Stack.Item>
      <Stack.Item size={{ s: 12, m: 4 }}>
        <ProjectCard
          href="https://designsystemchecklist.com"
          title="Design system checklist"
          description="An open-source checklist to help you plan, build and grow your design system"
          alt="Checklist interface"
          thumbnail="/img/studio/thumbnail-checklist.png"
        />
      </Stack.Item>
    </Stack>
  );
};

export default ProjectList;
