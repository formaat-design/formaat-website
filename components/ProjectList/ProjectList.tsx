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
          thumbnail="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
          alt="Reshaped components preview"
        />
      </Stack.Item>
      <Stack.Item size={{ s: 12, m: 4 }}>
        <ProjectCard
          href="https://www.figma.com/community/plugin/1132648122057236517/Reshaped"
          title="Reshaped tokens"
          description="Free Figma plugin to manage themes and dark mode"
          thumbnail="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
          alt="Figma plugin interface"
        />
      </Stack.Item>
      <Stack.Item size={{ s: 12, m: 4 }}>
        <ProjectCard
          href="https://designsystemchecklist.com"
          title="Design system checklist"
          description="An open-source checklist to help you plan, build and grow your design system"
          thumbnail="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
          alt="Checklist interface"
        />
      </Stack.Item>
    </Stack>
  );
};

export default ProjectList;
