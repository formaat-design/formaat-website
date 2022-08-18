import type { Interview } from "../../types/global.types";

const data: Interview = {
  id: "primer",
  company: {
    name: "Github",
    // Embedded logo to keep its color inherit color mode colors
    logo: `
      <svg viewBox="0 0 16 16" version="1.1" width="24" height="24" style="display: block">
        <path
          fill="currentColor"
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
        />
      </svg>
    `,
  },
  system: {
    name: "Primer",
  },
  interviewee: {
    name: "Siddharth Kshetrapal",
    photoUrl: "/img/interviews/primer/avatar.png",
    bio: "Bio placeholder",
    links: [
      {
        label: "@siddharthkp",
        href: "https://twitter.com/siddharthkp",
      },
      {
        label: "Primer website",
        href: "https://primer.style/",
      },
    ],
  },
  interview: {
    description:
      "Primer is the design system powering Github products. It exists for more than 10 years now and it has gone a long way to scale from a css library to multi-framework solution.",
    date: "2022-07-27",
    items: [
      {
        question:
          "Where do you currently work and what's your role in the team?",
        answer:
          "My current title is senior software engineer in Github. I'm working on our design system called Primer in design engineering team. In the design org we have two teams working on the design system: design engineering and design infrastructure.",
      },
      {
        question: "Is Primer available externally?",
        answer:
          "It's open-sourced, yes. Its artifacts like code and Figma library are published publicly and then there is a sea of documents, like information from our planning sessions, roadmap, etc, which stay private.",
      },
      {
        question:
          "How long does Primer exist for? When did the team start building it? ",
        answer:
          "It was before I joined so let me look it up. It was June 15, 2012. I haven’t realized it was its 10th birthday! ",
      },
      {
        question:
          "Haha, that’s so cool! Maybe you can tell me a bit about different parts you have in Primer?",
        answer:
          "First of all, we have the design part which includes Figma files and assets for the presentations. And then there is engineering part. We have a CSS library as a base and then we have 2 framework libraries, for React and Ruby. Regarding the tooling we don’t have a single recommended tool or plugin for the design system at the moment. We currently are only focusing on web and design, while for the native app they’re just following the design guidelines and implement the components themselves.",
      },
      {
        question:
          "And how many component do you have in the design system? Are they supported just by your team?",
        answer:
          "We currently have around 30 components but that also includes utilities, so around 20 if you strip those out. And we maintain them across all libraries. As for the teams, both teams in our org are working on the libraries and there is some overlap with the main difference being the management reporting line.",
      },
      {
        question:
          "By the way, how big are the teams working on the design system in your case? Has it grown much since the team was created?",
        answer: [
          "Let me count. So there are 9 designers and 7-8-9 engineers. And then we have two folks working on accessibility, design manager and two directors. There are more people working on the docs who are not on the <a href='https://primer.style/about/#team/' target='_blank'>team page</a>.",
          "Back when the design system was just started, I think it was only 2 people. When I joined the company around a year ago, there were about 4-5 developers and 5 designers. So the team scaled almost 2x in the past year.",
        ],
      },
      {
        question:
          "That’s huge! Do you know what has changed in the past year that made your hiring go so much faster? ",
        answer: [
          "I think the design team has actually not grown that much overall since some people have also left prior to this year. On the other hand, engineering team was tiny – two people on the Ruby side, two on React side and designers were also writing CSS.",
          "So what has changed? From what I saw, there’s just more adoption and interest in Primer doing more. For example there is one big focus on accessibility and without design systems being accessible, products can be accessible either.",
          "Also when I was still interviewing, they have mentioned that React library was more of an experiment and by the time I was joining the company, the experiment proved to be working. Because of that we started adding more people to the team. At the same time more and more teams at Github are trying out React which helps us justify the investment.",
        ],
      },
      {
        question:
          "Let’s talk about how you structure your work. Do you try to be more of a service team or do you also partially work on the product to increase the adoption and improve the system integration?",
        answer: [
          "That’s something that has changed a lot in the recent months or the last year. We used to have this luxury of being able to go into the product when you’re shipping a breaking change and fix it yourself. Nowadays we have more products using the system and the overall component inventory has grown so we can’t keep up with the amount of work if we keep the previous approach.",
          "Instead we’re switching our focus towards documentation, tests and working on the feedback we receive from the teams. We also encourage other teams to contribute to the system instead of building everything ourselves.",
          "For example, we’ve released a major version of the library with a few breaking changes so we’ve started thinking about how we can automate the migration months ahead. At the same time we’ve been working with the team so that people can see what’s coming. So that’s different from working on just one-two products. But since I know how those products are working, I still use them for testing the releases.",
        ],
      },
      {
        question:
          "I can imagine, it’s like growing from a startup to a corporation when you can no longer just raise your hand and get attention of all the developers in the compnay. I think contributions from other teams definitely help with the work here. Do you have a specific model of working with those teams?",
        answer:
          "We’re currently in the process of figuring that our but a lot of our processes are built around helping the community and pairing together. So if someone needs help with contributions, we’re ready to pair with them or help them understand how to create a pull request that would follow our guidelines. We also have general contribution docs but I think we can do a lot better there.",
      },
      {
        question:
          "How do you work with feature requests or contributions that you can’t implement or merge immediately, that might be blocking a feature release?",
        answer: [
          "A lot of times we’re looking for a workaround that would unblock the team. For example if they need a tiny change in a specific part of the card, we can suggest temprorarily moving from the pre-built component to a manual composition of box container and layout utilities.",
          "Thankfully that works in many situations. And then sometimes we might not have a requested component. In those situations we are encouraging teams to build the component themselves and later on we’ll replace it with the component in the system. You’re basically telling the person to do what they feel is right for the component and on our side we’ll already know if the solution works well for the product or has any flaws. This also means they don’t have to go through all of our extensive requirements lists to include a component into the system.",
        ],
      },
      {
        question:
          "So with all of these team changes rolling out, how does it affect your day-to-day work as a senior engineer?",
        answer: [
          "My day-to-day work is changing a lot. I started leaving two of the days to focus on the meetings, which is Monday and Thursday for me. So that’s basically 40% of the time I spend on topics like planning and support, while another 60% is spent on the feature development and bug fixing.",
          "I’m lucky enough not be inbolved in the “spreadsheets” type of work since we have managers and directors handling that. Also because I’m senior, I can still spend 60% of my time on the individual contributions, while if you move towards staff it becomes vice versa with just 40% of the time spent coding.",
        ],
      },
      {
        question:
          "Definitely, I’ve seen this trajectory for any engineering and designer roles as well. What do you think in general about growing within design system teams to staff+ roles?",
        answer: [
          "We have a few staff engineers in our team and I’ve seen people getting promoted to staff design positions in the design system area as well. I find it tricky to be an engineer in the design org though because it changes the people you’re sitting in the room with.",
          "Since it’s design engineering, you’re a part of the design org but you’re still working with the engineering IC (individual contributors) track and their ways of measuring your performance. I haven’t seen enough people to go through a promotion cycle in this environment yet but the experience can be different based on the people making the decision. If there is not enough engineers on the promotion panel, it’s hard for them to relate to the work you’re doing. On the other hand, it’s good to have design represantatives there when you’re work is design or accessibility oriented.",
          "For example, I’m reporting to the director of design engineering and she reports to the head of design. So you kind of need a healthy mix of roles to make this work.",
        ],
      },
      {
        question:
          "What do you think is the difference between being senior and staff on the design system team?",
        answer: [
          "That’s a good question. There is not much difference when it comes specifically to design systems. I think responsibilities are similar but kind of projects you might be working on or organisational conversations might be different and depend on the team you’re working on. I’ve been recently on a call with a group of our staff engineers and if you listen to them, they would work on completely different things with the only common thread being that they impact multiple teams.",
          "Another important highlight is mentoring. All of them are mentoring other developers and are helping them grow and get more relevant experience.",
        ],
      },
      {
        question:
          "Let’s get back to Primer. When we’re building products, overall tech foundations are usually the same but there is that one thing that makes the problem space unique. Do you have this unique aspect of Primer as well?",
        answer: [
          "I think one aspect that is the most obvious to me is how long Primer exists. Having a library released 10 years ago means that we also have users from all those 10 years. The product is quite big and if you made any flaws in the library design, it’s really hard to change now.",
          "For example, a conversation we had recently was if we should reuse CSS from vanilla library in our React components. In theory, it should be pretty simple but you’re instantly thrown back to 10 years of products using the library where it won’t be easy to replace.",
          "So I think that’s the tricky part since you’re basically glueing two versions of the design system together so all breaking changes from one library are also breaking for the other one. Different combinations of the libraries used is also possible. There are products that were using the vanilla library and are now adopting react one and are taking a performance hit while migrating.",
        ],
      },
      {
        question:
          "What’s the hardest thing the team has working on so far in your opinion?",
        answer: [
          "I wasn’t there when the project started, but I think that was the release of dark mode at Github because we had to rethink how CSS gets shipped and how we treat design tokens. What helped us is that at that time CSS variables were available in all browsers we’re supporting. Still it was a complete re-architecture of our CSS and it took us 1.5 years to complete the project, including the product migration. That’s way longer that anyone could estimate originally.",
          "As for me personally, I spend a lot of time working on accessibility and it’s very challenging to handle all the small behavior edge cases. For example, I’m working on the menus and when you navigate to the menu through keyboard – where should the focus go? It’s easy to understand that in a Storybook environment but the moment I start integrating it with the product – I see so many edge cases and places where something is already built on top of the current menu implementation.",
          "That’s a general tricky part of maintaining a library for a long time, when your first implementation wasn’t perfect, so people start building on top of existing bugs and they suddenly become features. And when you try fixing those bugs, your fix becomes a breaking change.",
        ],
      },
      {
        question:
          "What do you think was the biggest mistake that was made during the Primer development?",
        answer: [
          "I’ve been contributing long enough to see consequences of my actions so that’s a hard question. But I think one topic related to this is about the guidelines for building your own components. When building design systems for the first time we’re usually naive that system could include all UI components but you’ll always need more components in the product so you would rather focus on extending or composing them.",
          "Since we were using styled components, everyone would just build custom components using this styling approach and now we can’t switch it out because of the amount of layers built on top of each other.",
          "I think we could be in a better place now if we would have started with a recommended way to build components and kind of own the styling layer not only for components but also for the product.",
        ],
      },
      {
        question: "What do you think is the most positive quality of the team?",
        answer: [
          "For me that’s definitely the team as they’re all cross discipline. Everyone is a bit of a designer and a bit of an engineer. Each person has their own specialisation but there is a lot of overlap. We never had conversations where engineer would mention something and designers wouldn’t get it.",
          "At the same time people on the team understand our scope really well. We can’t move fast and break things. Our team has to be intentionally slow, think about the changes for a while, sleep on it and then decide. And the whole team likes this way of working.",
          "Both of these make working in the team much more enjoyable. Even though it takes longer for us to go through the implementation and ship features, I think the end result has a higher quality.",
        ],
      },
      {
        question:
          "Is there something you would recommend for the teams just starting to work on their design system?",
        answer: [
          "A common challenge when just starting is to get the team funded as it’s a huge long-term investment. So when I was working on design systems in the past, what helped us was not just telling the people what we want to build but showing the work. On one hand, we showed them all the ways in which the product was broken and where it would benefit from having a design system. On the other hand, we built prototypes and demo them to show how our development process could look like if we had more adoption and more people working on the system.",
          "Design systems mean different things for every company so you have to adapt it in a way and show some results before getting any buy-in from the leadership.",
        ],
      },
    ],
    highlights: [
      "That’s a general tricky part of maintaining a library for a long time, when your first implementation wasn’t perfect, so people start building on top of existing bugs and they suddenly become features. And when you try fixing those bugs, your fix becomes a breaking change.",
      "We can’t move fast and break things. Our team has to be intentionally slow, sleep about things for a while, sleep on it and then decide. And the whole team likes this way of working.",
      "Having a library released 10 years ago means that we also have users from all those 10 years. The product is quite big and if you made any flaws in the library design, it’s really hard to change now.",
    ],
  },
};

export default data;
