import React from "react";
import { Stack, Text, Actionable, Image } from "reshaped";
import * as T from "./ProjectCard.types";

const ProjectCard = (props: T.Props) => {
  const { title, description, thumbnail, alt, href, onClick } = props;

  return (
    <Actionable
      href={href}
      onClick={onClick}
      attributes={href ? { target: "_blank" } : undefined}
    >
      <Stack gap={4} direction={{ s: "row", m: "column" }}>
        <Image
          borderRadius="medium"
          src={thumbnail}
          alt={alt}
          width={{ s: "100px", m: "100%" }}
        />
        <Stack.Item grow>
          <Stack gap={1}>
            <Text variant="body-medium-1">{title}</Text>
            <Text color="neutral-faded">{description}</Text>
          </Stack>
        </Stack.Item>
      </Stack>
    </Actionable>
  );
};

export default ProjectCard;
