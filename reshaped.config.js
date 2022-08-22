// @ts-check
/** @type {import('reshaped').ReshapedConfig} */
const config = {
  themes: {
    formaat: {
      fontFamily: {
        display: {
          family: "Basier, Arial, sans-serif",
        },
        body: {
          family: "Basier, Arial, sans-serif",
        },
      },
    },
  },
  themeFragments: {
    prose: {
      font: {
        bodyStrong1: {
          fontSize: { px: 18 },
          lineHeight: { px: 28 },
          fontWeightToken: "bold",
          fontFamilyToken: "body",
        },
        bodyMedium1: {
          fontSize: { px: 18 },
          lineHeight: { px: 28 },
          fontWeightToken: "medium",
          fontFamilyToken: "body",
        },
        body1: {
          fontSize: { px: 18 },
          lineHeight: { px: 28 },
          fontWeightToken: "regular",
          fontFamilyToken: "body",
        },
      },
    },
  },
};

module.exports = config;
