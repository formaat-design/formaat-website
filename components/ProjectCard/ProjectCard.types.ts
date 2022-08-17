import React from "react";

export type Props = {
  title: string;
  description: string;
  thumbnail?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
};
