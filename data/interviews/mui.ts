import type { Interview } from "../../types/global.types";

const data: Interview = {
  id: "mui",
  company: {
    name: "MUI",
    logoUrl: "/img/interviews/mui/logo.svg",
  },
  interviewee: {
    name: "Marija Najdova",
    photoUrl: "/img/interviews/mui/avatar.png",
    bio: "Marija is part of the Core team at MUI, contributing to libraries that in total have more than 14M downloads monthly. She is passionate about design systems and the workflows around them. She spends her time building tools for developers that aim to help create UIs faster and more consistently. Recently, she's focused on helping developers grow and reach their full potential through great leadership.",
    links: [
      {
        label: "@marijanajdova",
        href: "https://twitter.com/marijanajdova",
      },
      {
        label: "MUI website",
        href: "https://mui.com/",
      },
    ],
  },
  interview: {
    description:
      "MUI offers a comprehensive suite of UI tools to help you ship new features faster. It started with a React library implementing Material guidelines and now also provides additional libraries like unstyled base components.",
    date: "2022-08-09",
    items: [
      {
        question:
          "What’s your current title, and what’s your role in the design systems development?",
        answer: [
          "I'm the team lead of the Core team at MUI. The Core team is responsible for the open-source MIT core projects we have, the most popular one being Material UI. At the same time, we have other streams ongoing, like MUI Base, which is a set of headless hooks and unstyled components. This library doesn't have any opinion on how you build the design system. And we also have Joy UI, an alternative to Material UI for people who do not want to depend on Material Design.",
          "My role is more or less overlooking all of these parts and making sure that we’re on track. When necessary, I am also helping with the implementation and making decisions when multiple options are on the table for solving some specific problem.",
        ],
      },
      {
        question:
          "Sounds pretty cool! And how long does MUI exist, and do the libraries you’ve mentioned depend on each other?",
        answer: [
          "The original project (Material UI) was initially started in 2014. Regarding the dependencies between the packages, Joy UI is built using the headless hooks from MUI Base, while Material UI's components use custom implementation. In the future, we plan to migrate Material UI to also use the headless hooks from MUI Base, but we are waiting for it to become more stable.",
          "At this moment, we're focused strictly on React. We don't work on native components and currently don't plan to support other frameworks.",
        ],
      },
      {
        question:
          "Now that we know your scope let’s talk about the team that maintains the libraries. How large is the team, and what is its composition?",
        answer: [
          "The team size of the core library right now is 4 developers, including me, but I’m not playing the developer role 100% of the time. Then we have a designer and a developer experience engineer, who helps out with the documentation, promotion of the packages, etc.",
          "Regarding the general team's structure, we have one lead for each ongoing effort, but teams might differ. For example, MUI Base has one developer driving most of the development. So we're currently looking for extra developers who can help him with building out the library and someone who can help with the design execution for the libraries.",
          "That might include helping with designing small details of the components to improve their UX and documentation. For example, displaying components from the Base library doesn’t make sense since it’s just browser native elements. So we need someone to cover that gap with great design examples, attractive demos, and custom design system elements. That should help others understand that they can build custom experiences not provided by Material or Joy UI.",
        ],
      },
      {
        question:
          "I remember, some time ago, you had examples of how developers can customize the components overriding the styles. Have you taken the Base components approach instead because you think it’s a better scaling solution?",
        answer: [
          "Let me elaborate on this. Different products need different kinds/levels of customization. For example, if I’m responsible for a team building an internal application, I will probably just choose Material UI and use it as is. I can maybe change the brand color, but honestly, I won’t bother much about how the application looks besides that. The most important thing is to get the job done using your existing knowledge.",
          "But if I build an application that’s widely used, I would definitely want to be the person who defines how the design system looks like, what the rules are, and which design guidelines to follow. So, for this task, I would prefer to choose something more primitive and then add a styling solution on top. That is something we provide with Base components.",
          "And if I want an application with a modern design that looks minimalistic and I just want to tweak some details, then I would choose Joy UI and try to pick the parts I need from what the system offers.",
          "Therefore it’s not really about replacement. It’s about filling the gap that the existing frameworks have.",
        ],
      },
      {
        question:
          "Can you tell me more about what day-to-day work looks like for the team members working on design systems?",
        answer: [
          "Working on an open-source project is quite unique compared to working on a design system for a product. Previously, I worked at Microsoft on Fluent UI, where the design system guidelines would mostly follow the company requirements. It was very different when I moved to MUI, although the projects were quite similar. This was mainly because the whole project is community driven instead. And what I mean by this is that 99% of the topics we are working on are the most common problems the community faces.",
          "For example, MUI Base started this way. It was one of the most requested features since people wanted to build custom component implementations without depending on the Material Design guidelines. Our community was the reason why we decided to kick off this effort.",
          "It's similar with Joy UI. The community asked us to implement another theme different from the Material Design guidelines. We have been thinking about it for a long time since creating a theme would still mean we're limited by the components API decisions and the design system structure made by Material Design. That's why we thought it's a good idea to extract the most common features into MUI Base components and start implementing another design system on top of it that won't have those design limitations.",
          "Because we’re an open-source project, we spend around 40% of our time on community support and another 40% on the new feature development. The last 20% we’re using for what we call personal goals. That’s basically learning or experimenting with anything that would have a long-term benefit for the team.",
        ],
      },
      {
        question:
          "That’s a great practice. Do you have reserved time for personal goals every week?",
        answer: [
          "It really depends on the person. Some people prefer to squash it and then spend a few days in a row on it. Others might spend 1-2 hours every day, for example, watching online tutorials or reading about new relevant technologies.",
        ],
      },
      {
        question:
          "Is it purely about personal development and growing one's craft skills, or does it include working on projects you won't have time to spend on otherwise?",
        answer: [
          "It can be. For example, one of the topics we wanted to dig deeper into was the ways of creating charts because it was one of the hackathon projects we had. So for a few weeks after that, we were still spending time on the topic, and one day it might end up in MUI X, who knows :)",
        ],
      },
      {
        question:
          "Since the community is driving the development in some way, how do you approach the governance of your projects? How do you know that community requests don’t conflict with the overall vision for the system?",
        answer: [
          "That’s an interesting question. First of all, the difference in the number of requests is quite significant if you compare it with the team size. Sometimes it’s even hard to respond to everyone. To improve this, we have a schedule where each person is responsible for the community for one week every month. The person working on the support is triaging the issues or reviewing them with the community, and then they can purely focus on craft for the next three weeks. They also don’t work on solving the issues immediately during the triage. They only need to validate it and assign it to the correct team member.",
          "As for the priorities and potential conflicts, we keep some of the reported issues on hold to see how the community reacts, even though we might not necessarily agree with the initial request. You can have an opinion on how some issue or feature is not important, but if thousand people ask for it – you're probably wrong.",
        ],
      },
      {
        question:
          "Do you resolve most of the issues within the team, or are many people contributing?",
        answer: [
          "We do have a lot of contributors. Sometimes it might be even hard for us since we can’t always handle all the contributions. But in general, that’s amazing, and we have contributors helping with more significant efforts.",
        ],
      },
      {
        question:
          "Speaking of the team, is there any separation between different levels of developers? Do you have senior, staff, or other levels?",
        answer: [
          "We have levels that we differentiate when we’re opening new positions. Most of the time, we’re looking for senior-level developers. But then we’re assigning a level during the first performance review, which we repeat every 6 months. During those, the person can map his work and skills to one of the four criteria, like communication and technical knowledge.",
          "That helps us differentiate our assumptions based on the technical challenge solved during the interview and the actual work skills uncovered during the past few months of work.",
        ],
      },
      {
        question:
          "I noticed that many people in the industry struggle with getting to the staff+ levels when working purely on the user interface. Is that something you’ve seen before?",
        answer: [
          "I don't agree with this, and it depends on the main focus area of the person. We have different descriptions of the responsibilities for different types of roles so people can grow within their scope. Additionally, I wouldn’t expect people to be experts in more than one area. If you guide someone to improve in all areas at once, you will probably get a developer of average quality. Instead, you want to push people to develop into those areas they like the most. This is where they will shine.",
        ],
      },
      {
        question:
          "Getting back to the craft related topics, what do you think are the common complex topics for the UI libraries?",
        answer: [
          "A common challenge for UI libraries is deciding what should go into the library and what should be implemented by its users. We might be making a trade-off here, but if you implement a feature that just one person needs, you still bundle it for all your users. And in our case, that's millions of people. One of the benefits of Material UI is the system's general code quality and maturity. With a lot of people using it – it has become one of the most important things we can offer.",
        ],
      },
      {
        question:
          "Considering how many people you’re supporting, what was the most challenging topic your team has been working on so far?",
        answer: [
          "When I joined, we had just started working on v5 and had problems with our theming engine. We were using a different CSS-in-JS approach back then, and it was causing performance issues. Everything was fine when all the styles were defined in the build time, but it was getting much worse when it came to dynamic styles. So we had to completely switch the way we approach styling.",
          "We had a whole investigation around different solutions, which turned out to be the most significant breaking change in v5. It was a completely new syntax, so you can imagine how everyone with custom style overrides had to reiterate and update their codebases to get the same output.",
          "In the end, some people didn’t like the change because they were not using dynamic styles, and everything was already working fine for them. But, on the other hand, many people were happy because it unlocked many new possibilities.",
        ],
      },
      {
        question:
          "And now, when it’s been some time since v5 was released, do you think that was the right decision? How is the migration to v5 going so far?",
        answer: [
          "I think it was a good decision overall, but we’ve also made one wrong decision along with it. Since it was a major release, we had this styling approach change bundled together with all other breaking changes. And people using the library don’t usually care much about the reasons for the breaking changes. They just want the library to operate as before. So if I could go back in time, I would probably split these changes into two separate major releases and simplify the migration for everyone.",
          "Regarding the migration, we track the progress every month. So far, we have 43% of the downloads on v5 and the other 57% on v4. The goal is to get to 50% by the end of the quarter, and that’s a good number considering that not all the projects have to move to the latest major version, and all the new projects are built using v5.",
        ],
      },
      {
        question:
          "It’s incredible how transparent you are about all the challenges. Is there something that you think helps them overcome these challenges? What makes you proud of the team?",
        answer: [
          "Our biggest asset as a team is the diversity of ideas offered. We have people who are very technically strong, and we also have people who are passionate about design. We have people with experience in different areas. That helps us deliver on so many different fronts, and people can complement each other as they work together. Don’t get me wrong, but if you find just the best React engineers for the project, they won’t execute as well as a diverse team with different backgrounds.",
        ],
      },
      {
        question:
          "Speaking of the design system development in general. What do you think is the most complex topic for the teams?",
        answer: [
          "Nowadays, I think it's to find people who can fill the gap between designers and engineers because of the differences in their mindsets. So it's essential to have that one person who can do the translation between both and has empathy for both types of problems. Moreover, it will help the team understand each domain's possibilities and constraints.",
          "That doesn’t mean the person has to be equally good in design and development. For example, I’m an engineer with no eye for design, but I feel I’m empathetic and can understand the topics important to the designers.",
        ],
      },
      {
        question:
          "What would be your advice for the teams just starting with building their design systems?",
        answer: [
          "That’s a hard question. The first thing I’m thinking of is to make sure you allocate more time to building a system than you initially anticipated. If you’re just starting with the design system and you’re done with the initial investigation, you can probably put the required constraints to help you move faster in the long term.",
          "For the new design systems, there are a lot of resources with pieces of advice that can help you avoid the common pitfalls. But if you’re scaling the system, be sure it will take a lot of time since the problem space becomes different.",
        ],
      },
    ],
    highlights: [
      "You can have an opinion on how some issue or feature is not important, but if thousand people ask for it – you're probably wrong.",
      "I wouldn’t expect people to be experts in more than one area. If you guide someone to improve in all areas at once, you will probably get a developer of average quality.",
      "If you find just the best React engineers for the project, they won’t execute as well as a diverse team with different backgrounds.",
    ],
  },
};

export default data;
