import type { Interview } from "../../types/global.types";

const data: Interview = {
  id: "blade",
  company: {
    name: "Razorpay",
    logoUrl: "/img/interviews/blade/logo.svg",
  },
  interviewee: {
    name: "Kamlesh Chandnani",
    photoUrl: "/img/interviews/blade/avatar.png",
    bio: "[Placeholder]",
    links: [
      {
        label: "@_kamlesh_",
        href: "https://twitter.com/_kamlesh_",
      },
      {
        label: "Blade repository",
        href: "https://github.com/razorpay/blade",
      },
    ],
  },
  interview: {
    description:
      "Blade is a cross-platform design system that powers Razorpay. All major features are implemented through API documents and decision logs to ensure the codebase works across React and React Native.",
    date: "2022-08-29",
    items: [],
    highlights: [
      "We’re hosting all the decisions on GitHub, where we store a brief introduction for each decision, list down all the properties in the table and explain how this API should work across React and React Native.",
      "Product teams alignment happens during the hand-off of the design work. Because of that design system team sometimes has to figure out how to close that gap between the different parts of the product teams.",
      "We’re not trying to make everyone experts in the design system since we’re addressing this problem space for them. But, still, we should also make products aware that everything we’re releasing – they won’t be getting for free otherwise.",
    ],
  },
};

export default data;
