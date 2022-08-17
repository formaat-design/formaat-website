import React from "react";
import { Card, Stack, Text, Icon } from "reshaped";
import ExternalIcon from "../../icons/External";
import * as T from "./ProjectCard.types";

const ProjectCard = (props: T.Props) => {
  const { title, description, thumbnail, href, onClick, className } = props;
  const isExternal = href && !onClick;

  return (
    <Card
      className={className}
      href={href}
      attributes={isExternal ? { target: "_blank" } : undefined}
      onClick={onClick}
      padding={6}
    >
      <Stack gap={2}>
        <Stack direction="row" gap={2} align="center">
          {thumbnail}
          <Stack.Item grow>
            <Text variant="featured-3">{title}</Text>
          </Stack.Item>
          {isExternal && (
            <Icon svg={ExternalIcon} size={4} color="neutral-faded" />
          )}
        </Stack>
        <Text variant="body-1" color="neutral-faded">
          {description}
        </Text>
      </Stack>
    </Card>
  );
};

export default ProjectCard;
