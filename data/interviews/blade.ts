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
    bio: "Kamlesh is a Principal Frontend Engineer at Razorpay, working on their Design System and Frontend Infrastructure. Recently he has developed a fascination for interior designing and has a zest for home decor.",
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
    date: "2022-09-05",
    items: [
      {
        question:
          "What’s your current title in the company, and what’s your role in the design system development?",
        answer: [
          "I’m a principal engineer at Razorpay, and our design system is being developed by the team I’ve started, focusing mainly on two topics. One is the overall infrastructure, which means we’re trying to speed up the process of shipping products from the moment you start working on them till they get to production. The second piece is trying to solve the problem of ensuring that the product has a great design.",
          "When I joined the company, these were the two major problems I saw, and I wasn’t in the position to go and pitch it to others directly. So I was looking for other ways. One of my first projects was building our mobile app experience, and while working on the topic, I started working on these global problems as part of our development.",
          "By the time we had the product built, I already had an MVP solution for the platform, and my role turned out to be setting a vision and figuring out a plan of how we wanted to execute it. We ended up creating a team, and now I’m specifically focused on implementing and scaling our design system.",
        ],
      },
      {
        question:
          "Can you tell me more about the design system you’re building?",
        answer: [
          "Yes, absolutely. It’s called Blade, and we started in late 2019. That was the time when we shipped an MVP, version 0.1. It was not well thought out, and we still didn’t have a dedicated team to work on it. It was more of a side project that we were working on as a group to show the impact while also doing product work.",
          "In late 2020 we started working on it as a dedicated team. We had to step back and rethink many foundational decisions, like design token architecture, color palettes, and other topics. We couldn’t do it initially since we wouldn’t have time to show the value the design system could bring to the company otherwise. So I guess real challenges started in 2020.",
        ],
      },
      {
        question:
          "And what’s the current scope of the design system that you’re maintaining as a team?",
        answer: [
          "Right now, we work across React and React Native. So these are the platforms we support, and we have plans for supporting Svelte, but that’s just an idea since we have one or two projects using it.",
          "We use some existing tools to support our development. For example, we use Storybook and Chromatic for creating component examples and running screenshot tests against them. We use Figma for design, and we've built our own Figma plugin to work with the design tokens. That helps designers edit our design tokens right in Figma, and submitting the change would automatically create a pull request in our codebase on GitHub.",
          "As for the scope, the main problems we’re trying to solve are cross-platform development and supporting multiple brands. We have three business units catering to different markets, each with its own branding that works better for its audience. However, all themes still need to look like they belong to the same organization.",
        ],
      },
      {
        question:
          "I wonder how many people you currently have on the team and how large is the overall community size you have to support?",
        answer: [
          "Our current team size is 9 people with 3 engineers working on the infrastructure, 4 engineers working on the design system, 1 full-time designer, and 1 part-time motion designer, and finally managed by an engineering manager. With this composition, we support a community of around 100 front-end developers and 80 designers.",
          "One of the things I like about our team is that we have different people with different expertise and on top of that one of the designers used to be a developer in the past, which definitely helps in making mutual decisions between the areas of expertise. We’ve also built a habit of coming up with the changes by filling out a template outlining the main details. Then, after that, we have a brainstorming session to see if that makes sense in design and dig deeper into implementation approaches and how they will be consumed by the design and development communities.",
          "Doing this work together, we’re avoiding working in silos, which means we can also plan our work ahead. For example, we know that if designers are working on specific components now, we’ll be able to pick them up next quarter without blocking each other.",
        ],
      },
      {
        question:
          "Combining brainstorming sessions for design and development sounds like a must for cross-platform systems. How does this process work for you so far?",
        answer: [
          "We’ve tuned our process recently and made it a bit more organized. Nowadays, if a developer needs to pick up work on a new component, they will start with a brief API decision talk. We’re hosting all the <a href='https://github.com/razorpay/blade/blob/master/packages/blade/src/components/Typography/_decisions/decisions.md' target='_blank'>decisions on GitHub</a>, where we store a brief introduction for each decision, list down all the properties in the table and explain how this API should work across React and React Native.",
          "Some things are particular to React Native, but that doesn’t necessarily mean that our API will differ on both platforms. Instead, we might translate those props to have generalized names. For example, in React Native, tappable elements work using the onPress property, but in our API, we call it onClick, and then in the React Native code, we map it to onPress.",
          "Once the document is stable, we open it up for all developers in the company. This way, we can ensure people outside the team are not left out, and developers actively working on the product can provide us with real-time feedback.",
        ],
      },
      {
        question:
          "What happens to these documents after the feature is released? Do you keep them and use them as a knowledge base for future decisions?",
        answer: [
          "We definitely use it as a reference later. Especially when we want to know why we made a specific decision in the past. Additionally, we capture <a href='https://github.com/razorpay/blade/blob/master/packages/blade/src/components/Input/TextInput/_decisions/_decisions.md' target='_blank'>all meaningful discussions</a> happening during the development process.",
          "For example, if we receive design specs of a component and during the technical implementation we find any issues with the API of the component, we get back to the designer and decide how to update the component implementation in Figma. All the updates are captured in this case, along with their reasoning.",
        ],
      },
      {
        question:
          "That sounds super helpful for future team members who don’t want to get stuck revising the same problems repeatedly. And when it comes to development, do all developers have experience across both React and React Native?",
        answer: [
          "We have one developer who is more experienced with React Native, but when it comes to implementing components, we all work on both platforms. That helps us achieve the same properties API in both implementations, and we still have that one person to give us input on native platform specifics.",
        ],
      },
      {
        question:
          "What does day-to-day work look like in your team setup? Are there any practices you follow that are different from other companies?",
        answer: [
          "I think that depends on the different phases. When we’re working on the core foundational pieces, like the architecture of the tooling, we spend most of our days <a href='https://github.com/razorpay/blade/tree/master/rfcs' target='_blank'>preparing the RFCs</a> and doing a lot of research. That includes brainstorming with other teams and various groups of people, experimenting with different approaches, and building abstractions to solve the problem we’re working on.",
          "And during the phases when we’re focused on shipping a component – we’re basically following our API document. So the process rotates from implementing the component to reviewing the changes, waiting for others to review them, and then returning to the implementation. And then, we start working on the documentation, writing tests, and ensuring the component is accessible. Then, once we’re all happy with the result, we work on the announcement, which the whole team gets excited about.",
          "One of the initial problems with this phase was how we used to underestimate things. We didn’t know how long items would exactly take, and during planning, we would just say that a new component would take a week worth of story points. Over time we started becoming more granular, and everything that takes more than 2 points would become a separate task. As a result, we’ve begun creating sub-tasks for every piece of work qualifying to help us ship the component. That helps us keep focused on the job and know exactly the progress of the implementation.",
        ],
      },
      {
        question:
          "While working on the components – do people get bored because of how the work is repeating itself and the code being just a small part of it?",
        answer: [
          "Yeah, that happens sometimes when people say that we’re just shipping and shipping new features. So to solve that, we either ask what people would like to work on in addition to the main focus of our team or pick certain infrastructure or tooling-related tasks from our backlog and balance the work between two types of work.",
        ],
      },
      {
        question:
          "How do you combine all of the said work with supporting the development and design communities in the company?",
        answer: [
          "There are multiple types of work we do here. First of all, when someone starts using our design system and finds an issue using it, we have a form which everyone can fill out to send us a bug report or a feature request. As a team, we get notified about the request and plan the work for it.",
          "Then we also have office hours. Every week we have three 30-minute slots available for everyone to book. That’s where we can onboard teams to use the design system or assist with any specific questions that product teams might have.",
          "The third one is talking to the product teams directly and figuring out which features teams could really get value from. We learn their plans and what they are missing in the system that might block them from adopting it. The results of these conversations are then translated to our adoption goals during the quarterly planning, where we can plan to onboard several teams.",
        ],
      },
      {
        question:
          "Do you have any example of how this approach has increased the adoption of the design system?",
        answer: [
          "Yes, there is a recent one. We talked to a team working on the checkout page that hasn’t received major technical updates for the past six years, only product enhancements. So they’ve started working on the page redesign, and we’ve sneaked in to ask if they could use the design system.",
          "They had certain constraints since they were the only team using Svelte, so we agreed to team up and start with the design. We sat down for 2 hours and replicated the layout they needed using the design system; that was an excellent first step for both of us.",
          "For the development side, we had to be more flexible on our side since we were using CSS-in-JS, and it wouldn’t work in their product. That’s why we have agreed that we will expose CSS variables for the same design tokens during the next quarter, and after we have delivered it, they were onboard with using the tokens.",
          "Over time we have realized that product’s design and development teams are more disconnected compared to the design system’s design and development teams. They spend more time working within each of the groups separately, and then their alignment happens during the hand-off of the design work. Because of that design system team sometimes has to figure out how to close that gap between the different parts of the product teams.",
        ],
      },
      {
        question:
          "You’ve mentioned before that you’re a principal engineer. What other levels of engineers do you have, and what does the career growth look like for the team? Is it feasible to grow staying within the team, or do you have to work on other topics?",
        answer: [
          "For a bit more context, our company-wide career framework for front-end engineering, for instance, has levels starting from front-end engineer, followed by senior and lead titles. The lead title is a branching point where you pick either to stay as an individual contributor or to become a manager. So for the IC path, you then have staff, principal, senior principal, and architect.",
          "I think working within the scope of the team is enough. I’ve seen a lot of people in our team getting promoted in the past year. So there is no actual requirement to work on other topics. What matters, though, is how you collaborate with others because understanding how others work is a part of your job when working on platform teams.",
          "A set of problems you will be solving might be different from the product team. When working on a design system team, I would ask people going for the next level questions like: “How well do you scope the problems?” since there is usually no product manager in many such teams; or “How well do you plan the implementation from inception to taking it to production that will unblock other teams?”.",
        ],
      },
      {
        question:
          "And regarding technical challenges, what was the hardest one your team had to work on so far?",
        answer: [
          "I’ve mentioned that making a system cross-platform is hard by itself, but what makes it really challenging is utilizing the native capabilities. Certain things are available on native platforms that are not available on the web, and then HTML is not working the same as React Native either.",
          "That has a direct impact not only on the components API but also drifts down to all the foundational parts like handling animations and design tokens. And when it comes to accessibility, it becomes incredibly noticeable. We’re getting used to web standards with ARIA being used in the component property names, and then you start building for native platforms and realize it’s an entirely different world.",
        ],
      },
      {
        question:
          "Differences between the platforms make the development process so much harder. What about anything non-technical that makes this whole topic challenging?",
        answer: [
          "I think one of them is showing the impact of the design system in absolute numbers. We run a weekly cron job that captures the usage metrics to address that. That’s one way of showing the impact of how many people are using the system and drilling down to different levels of it. For example, we can find how often a particular component has been used.",
          "Another one is about the different aspects of communication. For example, make sure you’re communicating enough and speaking in the correct terminologies for the audience you’re targeting so that both product managers and engineering leaders understand the topic and the impact you’re going to create. And every leader you’re talking to might also have a different set of expectations.",
        ],
      },
      {
        question:
          "With all these challenges you’re trying to solve, have there been any tough mistakes that you’ve made in the past that you would approach differently now?",
        answer: [
          "I think I can name 2 things, and one of them is under communication. Usually, product teams are not involved much in the design system development, which means they will miss the full context, and it will be harder to convince them. And that becomes crucial on your journey to the first released component. For example, when I was working on an input field, it took me 2 days to create the API proposal draft, but it extended to 4 days just because there are so many things you have to handle.",
          "We’re not trying to make everyone experts in the design system since we’re addressing this problem space for them. But, still, we should also make products aware that everything we’re releasing – they won’t be getting for free otherwise. And that’s where we want to translate it to a story and get a narrative of the design system's significance.",
          "And then the second thing is how we’ve started working with a federated team model since we first primarily focused on the app components. So whenever someone needed the same component for the web, we would encourage everyone to contribute. However, that resulted in some components having two different API implementations, and some global features like state management had to be reimplemented. That’s why when we turned into a central team, we took a step back to resolve all the foundational challenges we initially didn’t have time to address. We focused on the components only after the foundational part was solved properly.",
        ],
      },
      {
        question:
          "Based on all your experience, what would you recommend for the teams just starting with their design systems?",
        answer: [
          "Start by talking to others to gather a list of their problems instead of assuming you know what to build yourselves. That should be your phase 0 when you’re just starting since you need to scope and prioritize topics really well. Do they need animation support? Do they need theming? There are dozens of topics you can be solving for yourself just because others are doing that and still solve no problems for the product so talking to people and gathering the problems on ground helps to define scope.",
        ],
      },
    ],
    highlights: [
      "We’re hosting all the decisions on GitHub, where we store a brief introduction for each decision, list down all the properties in the table and explain how this API should work across React and React Native.",
      "Product teams alignment happens during the hand-off of the design work. Because of that design system team sometimes has to figure out how to close that gap between the different parts of the product teams.",
      "We’re not trying to make everyone experts in the design system since we’re addressing this problem space for them. But, still, we should also make products aware that everything we’re releasing – they won’t be getting for free otherwise.",
    ],
  },
};

export default data;
