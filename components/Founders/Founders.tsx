import React from "react";
import { Stack, Tooltip, Actionable, Avatar } from "reshaped";
import TwitterIcon from "../../icons/Twitter";
import s from "./Founders.module.css";

const Founders = () => {
  return (
    <Stack gap={0} as="span" direction="row">
      <Tooltip
        text={
          <Stack direction="row" gap={0} align="center">
            <TwitterIcon />
            <Stack.Item>@blvdmitry</Stack.Item>
          </Stack>
        }
        position="top"
      >
        {(attributes) => (
          <Actionable
            borderRadius="inherit"
            attributes={{
              ...attributes,
              target: "_blank",
              "aria-label": "Dmitry's twitter",
            }}
            href="https://twitter.com/blvdmitry"
            className={s.avatarWrapper}
          >
            <Avatar
              src="/img/studio/avatar-dmitry.png"
              size={14}
              alt="Dmitry's avatar"
              className={s.avatar}
            />
          </Actionable>
        )}
      </Tooltip>
      <Tooltip
        text={
          <Stack direction="row" gap={0} align="center">
            <TwitterIcon />
            <Stack.Item>@hi_drozdenko</Stack.Item>
          </Stack>
        }
        position="top"
      >
        {(attributes) => (
          <Actionable
            borderRadius="inherit"
            attributes={{
              ...attributes,
              target: "_blank",
              "aria-label": "Oleksii's twitter",
            }}
            href="https://twitter.com/hi_drozdenko"
            className={s.avatarWrapper}
          >
            <Avatar
              className={s.avatar}
              src="/img/studio/avatar-oleksii.png"
              alt="Oleksii's avatar"
              size={14}
            />
          </Actionable>
        )}
      </Tooltip>
    </Stack>
  );
};

export default Founders;
