import React from "react";

export type Props = {
  title: string;
  description: string;
  thumbnail: string;
  alt: string;
  href?: string;
  onClick?: () => void;
};
