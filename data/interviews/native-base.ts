import type { Interview } from "../../types/global.types";

const data: Interview = {
  id: "native-base",
  company: {
    name: "GeekyAnts",
    logoUrl: "/img/interviews/native-base/logo.png",
  },
  system: {
    name: "NativeBase",
  },
  interviewee: {
    name: "Sanket Sahu",
    photoUrl: "/img/interviews/native-base/avatar.png",
    bio: `
    Sanket has co-created universal React & React Native UI library called NativeBase which has over 18,000 Github stars and over 60,000 projects depending on it.
    He has co-created React Native Aria and built a design tool called BuilderX that generates React & React Native code.
    Following the passion of bringing design and code closer, he currently works on a tool that helps brands build and document their design systems which can be consumed by both developers and designers.
    `,
    links: [
      {
        label: "@sanketsahu",
        href: "https://twitter.com/sanketsahu",
      },
      {
        label: "NativeBase website",
        href: "https://nativebase.io/",
      },
    ],
  },
  interview: {
    description:
      "NativeBase is a utility-first component library to build consistent UI across Android, iOS and Web. NativeBase is built upon React Native and was one of the first UI libraries for it.",
    date: "2022-07-20",
    items: [
      {
        question:
          "How did you start with the UI development and what’s your current role in the design systems industry?",
        answer: [
          "I was lucky in life that I started very early with coding and a bit of design. My first computer language was QBasic. Back then, we had an early version of Photoshop and CorelDraw, and there I was on the overlap of design and code. Right after I graduated in 2011 as an engineer, I started a product studio called GeekyAnts.",
          "We are very active in the developer community of React, React Native, and sometimes Flutter. At the same time, we are doing a lot of UX/UI design using tools like Figma, and now we stand at the intersection of design and code. So it has a lot to do with design systems.",
        ],
      },
      {
        question:
          "I know that GeekyAnts is building a cross-platform component library. How has it all started, and where is it heading?",
        answer: [
          "In 2016 React Native was released for Android, and we jumped right in. After some research, we built a UI component library called NativeBase, which is the most significant open-source contribution by GeekyAnts.",
          "We used to call it the Bootstrap of React Native back then because it was the missing piece in the React Native community. There was no component library, so we built one, but lately, it has evolved into more of an ecosystem. And now, NativeBase is supported on web platforms as well.",
          "Right now, we are moving in a direction that makes it more of a base layer that people can use to build their design system, and it includes an entirely replaceable theme that can be customized.",
        ],
      },
      {
        question:
          "Building and evolving a library for 6 years is quite impressive! You mentioned that you started as a native library and scaled it for the web. How does that work exactly in your case?",
        answer:
          "Yes, we are using React Native, which essentially gets its API from the web and then converts it to native code. So mapping React Native to the web is not much of a change with the library called React Native Web. We can support all three platforms now, and I like the React Native API because it doesn’t feel foreign for each of these platforms. We can even break out whenever we want and implement a different design for specific platforms, including dark mode and other features.",
      },
      {
        question: "Can you tell me more about the team behind the project?",
        answer:
          "If we talk about the NativeBase overall ecosystem – we have about 22 to 23 people. NativeBase open-source core team is close to 5 people working on it full-time. It owns everything open-source-related, from handling releases to documentation and website updates. Apart from that, it also works on building the community around the project. For instance, they provide developer advocacy kind of support and join communities and Twitter spaces.",
      },
      {
        question:
          "What are the current roles of the team working on the open-source part?",
        answer: [
          "We have 2-3 developers working on the codebase full-time and ensuring all the issues are resolved. Apart from that, we have 1 designer and 1 architect who are involved part-time after the release of v3. They primarily ensure that all changes and merge requests follow our guidelines. And then we have someone responsible for building out the community as well because you can’t really run an open-sourced project without a community.",
        ],
      },
      {
        question:
          "How do you work, and how do you prioritize the requests in this setup?",
        answer: [
          "At this point, new feature development is not the main priority, and most of our focus goes into interacting with our users and making sure they’re happy. For example, our last sprint was focused on performance enhancements. Along with that, we do general maintenance of the library, and it’s a part that goes forever. It means that people can get bored of it, so we keep shuffling people to let them work on new challenges.",
        ],
      },
      {
        question:
          "When you shuffle people, do you follow a specific schedule, or do you just do it ad hoc?",
        answer:
          "Mostly ad hoc. It mainly depends on the motivation and the type of challenge these folks are facing. If they come across new kinds of challenges all the time, they’re usually happy to work on them, but it definitely can get boring sometimes. So we keep an eye on everyone’s happiness, and if they need a switch – we have a pool of developers, including new interns joining GeekyAnts.",
      },
      {
        question:
          "How does the team handle external requests and contributions? Are you open to people creating new components, or do you have a specific roadmap for the project you’re following?",
        answer: [
          "In NativeBase, we must follow specific design guidelines, best practices, and a particular coding style. We’re trying to involve more external teams and encourage them to create pull requests, but we don’t get many new components built since there is a long checklist they would have to go through.",
          "We’re trying to get a lot more contribution guidelines in place. I mean detailed guidelines and a roadmap which is a complex task. Doing that is more manageable when working on an open-source project driven by a company, but we want NativeBase to stay a community project.",
        ],
      },
      {
        question:
          "One last question about the team. You’ve mentioned you have one architect and a couple of developers. Is becoming an architect in the team a career growth step for the team members?",
        answer: [
          "Growing people within this team is problematic because it's focused on a small piece of the company's overall focus. For example, people working in the NativeBase team wouldn't have enough exposure to topics like state management or handling API calls.",
          "At GeekyAnts, your career might start as an intern, and then we have 3 levels going from software engineer to principal engineer. To help our employees grow, we mix and match them across different teams and help them learn full stack development to ensure they can work across multiple domains.",
        ],
      },
      {
        question:
          "So does it mean that if you go outside just building the component library and start working on the whole NativeBase ecosystem, it also provides better career growth opportunities?",
        answer: [
          "Totally. React Native market sizing is much smaller than React and web, and you’re targetting a very specific audience in the end. So we’re looking outside of the React Native ecosystem and are building another tool that helps you build design systems, which allows defining the core system parts and then generates a website of the system for a specific brand.",
          "We’re also experimenting with different types of outputs for it. For example, we are experimenting with generating a Figma component library with these tools, and later we’ll be able to have other types of output as well.",
          "This means there are many more topics to work on when growing outside the component library itself.",
        ],
      },
      {
        question:
          "All of this makes your project stand out compared to others. Even if your audience might be pretty limited at the moment, this also means that people building across multiple platforms will have you on the top of their list. Is there something else that makes working on your project different from other design systems?",
        answer: [
          "Since we’re building across platforms, we couldn’t just implement the UI library. Instead, we had to go deeper and create a cross-platform accessibility library to handle all the complexity of working with components like dropdowns and its focus management. To address that, we’ve built a library called React Native Aria, which brings React Aria package functionality to native platforms.",
        ],
      },
      {
        question:
          "Are there any issues aligning component features and their API across all platforms?",
        answer: [
          "It’s more or less acceptable for us since React Native addresses many platform-related challenges. We have a few places where we would write conditionals based on the platform. Still, they are not many since development principles started converging more over the last few years, and many applications look the same across all 3 platforms.",
        ],
      },
      {
        question:
          "You’ve started exploring React Native since its first days, and it’s tough to avoid making mistakes when researching and building a project for 6 years. Do you have an example of a significant mistake you’ve made while building NativeBase?",
        answer: [
          "I can talk about a specific technical issue we've faced in v2 of NativeBase. We tried to implement an API close to vanilla CSS in React Native, including how style cascades work on the web. So, for instance, if you're applying a style like font-family on the wrapper component, it would trickle down to every element inside it.",
          "Once the engine for the feature was built, the runtime overhead of calculating all those styles was huge since we were running this operation for every single element on the screen, and performance dropped severely.",
          "We have fixed this issue in v3 and at the same time realized how people around us were already talking about how CSS cascading effect doesn't apply smoothly to native code. To fix this, we had to rewrite our styling model, and we've moved most of the style computations to the build time.",
        ],
      },
      {
        question:
          "Considering that this was a significant change for your users, how do you handle major changes and their migrations?",
        answer: [
          "In our case, we haven’t seen a lot of people switching from v2 to v3 since there was a 1-1,5 year gap between these major releases. We’re still supporting some parts of v2, but new people using our library are just jumping to v3 directly.",
        ],
      },
      {
        question:
          "Switching to positive topics, what are the NativeBase achievements you’re most proud of?",
        answer: [
          "If you talk about achievements in terms of numbers, this is the largest open source project that we’ve ever done. We’re close to 18,000 stars and around 60,000 weekly downloads on NPM, which is 7% of the overall React Native downloads. That means that 7 applications out of 100 built with React Native are using NativeBase. That’s pretty exciting!",
          "Apart from that, we have the largest React Native meetup group in the world here in Bangalore. We host meetups almost every month and see people joining from large organizations and product companies using React Native and really like what we have built. So that feels really good.",
          "Besides local communities, we connected to many people we would’ve never met otherwise. I think that’s the magic of the technology that connects people because we’ve all picked the same tech stack.",
        ],
      },
      {
        question:
          "So a lot of people learn from your experience during the meetups. What do you think is the most challenging topic when building design systems?",
        answer: [
          "I think it would be the education part because design systems are built on an intersection of multiple teams. Designers and developers can’t pitch for funding the design system separately, and the person pitching needs to have exposure to all of its platforms and problems.",
          "For example, we’re working with the design system of one of the largest companies in the world. The person who made it possible in that company had a good idea of both design and code. He worked on building a UI library there, so he had more chances at successfully pitching for this project in a vast organization.",
          "We currently have a very limited number of people with experience in all design system aspects that could do this kind of work. That’s the missing piece and the hardest problem, I would say.",
        ],
      },
      {
        question:
          "What would you recommend for the teams starting to build their design system?",
        answer: [
          "I think it’s very subjective, and there is no single answer. There are multiple factors, like the size of the company or the type of work they’re doing. For example, a company that does a back-office management solution differs from that deep into consumer marketing.",
          "But one answer I really like is the one I heard from <a href='/interviews/primer' target='_blank'>Sid</a> in a design system meetup a few weeks back. He talked about a mood board experiment that companies should run when starting with design systems. Get all the primary decision-makers in the room, ask them what you want people to think when they hear about the company, and write them down on the board.",
          "Arrange these words, and they become your central piece. That’s the starting point for choosing typography, colors reflecting that identity, and so on. Of course, for some companies, parts of it might already be well defined compared to those just starting. But we want to have these words so we can still go back to the mood board when we start defining our design systems end to end and refer to them later in the process.",
        ],
      },
    ],
    highlights: [
      "Growing people within this team is problematic because it's focused on a small piece of the company's overall focus. For example, people working in the NativeBase team wouldn't have enough exposure to topics like state management or handling API calls.",
      "Since we’re building across platforms, we couldn’t just implement the UI library. Instead, we had to go deeper and create a cross-platform accessibility library to handle all the complexity of working with components.",
      "Besides local communities, we connected to many people we would’ve never met otherwise. I think that’s the magic of the technology that connects people because we’ve all picked the same tech stack.",
    ],
  },
};

export default data;
