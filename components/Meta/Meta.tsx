import React from "react";
import Head from "next/head";
import * as T from "./Meta.types";

const Meta = (props: T.Props) => {
  const { title, img } = props;

  let resolvedTitle;

  if (!title) {
    resolvedTitle = "Formaat - Design system studio";
  } else {
    resolvedTitle = `${title} - Formaat`;
  }

  return (
    <Head>
      <meta
        key="image"
        name="image"
        content={img || "https://formaat.design/img/share.png"}
      />
      <meta
        key="twitter:image"
        name="twitter:image"
        content={img || "https://formaat.design/img/share.png"}
      />
      <meta
        key="og:image"
        property="og:image"
        content={img || "https://formaat.design/img/share.png"}
      />

      <title key="title">{resolvedTitle}</title>
      <meta key="twitter:title" name="twitter:title" content={resolvedTitle} />
      <meta key="og:title" property="og:title" content={resolvedTitle} />
    </Head>
  );
};

export default Meta;
