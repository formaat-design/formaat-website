import React from "react";
import { View, Text, Actionable, Image } from "reshaped";
import * as T from "./ProjectCard.types";

const ProjectCard = (props: T.Props) => {
  const { title, description, thumbnail, alt, href, onClick } = props;

  return (
    <Actionable
      href={href}
      onClick={onClick}
      attributes={href ? { target: "_blank" } : undefined}
    >
      <View gap={4} direction={{ s: "row", m: "column" }}>
        <View aspectRatio={4 / 3}>
          <Image
            borderRadius="medium"
            src={thumbnail}
            alt={alt}
            width={{ s: "100px", m: "100%" }}
          />
        </View>
        <View gap={1} grow>
          <Text variant="body-2" weight="medium">
            {title}
          </Text>
          <Text color="neutral-faded">{description}</Text>
        </View>
      </View>
    </Actionable>
  );
};

export default ProjectCard;
