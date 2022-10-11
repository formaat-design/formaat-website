import type { Interview } from "../../types/global.types";

const data: Interview = {
  id: "amplitude",
  system: {
    name: "Cerulean",
  },
  company: {
    name: "Amplitude",
    logoUrl: "/img/interviews/amplitude/logo.svg",
  },
  interviewee: {
    name: "Jack McCloy",
    photoUrl: "/img/interviews/amplitude/avatar.png",
    bio: "Jack is an Engineering Manager at Amplitude (NASDAQ:AMPL) where he works on design systems, frontend infrastructure, and developer experience. He and his partner Shinji Kim are early investors in devtools / infrastructure startups including Stellate, StackBlitz, Hex, Motif, and Drifting in Space.",
    links: [
      {
        label: "@JackMcCloy",
        href: "https://twitter.com/JackMcCloy",
      },
    ],
  },
  interview: {
    description:
      "Cerulean is a design system built and used in Amplitude. In Cerulean, code is used as a source of truth for the system and one of the team core challenges is around syncing code to their Figma libraries.",
    date: "2022-10-11",
    items: [
      {
        question:
          "Can you tell me about your current title at the company and your role in working with design systems?",
        answer: [
          "I am the engineering manager on the design systems team at Amplitude. When I first joined here, I worked on the design system part-time as a product engineer. We had a pretty well-developed component library that my predecessor, a guy named Ryan Ashcraft, and a couple other people collaborated on and built.",
          "So when I joined Amplitude two and a half years ago, there was already a component library that was very flexible and did a great job of serving engineering needs. But it wasn't doing a great job of serving design needs. It provided components that allowed engineers to put together product experiences very quickly. However, they were sometimes too flexible, exposing a way to change styles and not having strong opinions about the design side.",
          "This library helped us build fast, but it didn't help us iterate quickly, and it didn't help the design team drive consistency. So a lot of my job at Amplitude over the past two and a half years was to take this really good component library that Ryan and others built for Amplitude and turn that into a design system that would scale with us now that we're a larger and public company.",
        ],
      },
      {
        question:
          "And maybe you can tell a bit about the system itself. Does it have a name, and how long does it exist?",
        answer: [
          "The name of the system today is Cerulean. When the original component library started, the color blue that Amplitude used in its branding was called Cerulean Blue, so the design system was named after that. Amplitude has moved away from that specific color, but the name remains.",
          "Regarding the timelines, the component library work started three and a half or four years ago. And then the process of migrating it to a more controlled design system experience began two years ago. Initially, that was just me, and now we're a four-person team that will be growing from there.",
          "The team has been growing really over the past year or so. Before that, it was a team of one alongside my design colleague Meredith, who split her time between design systems work and product work.",
        ],
      },
      {
        question:
          "What is the scope of your design system in terms of platforms? Do you target React and Figma primarily?",
        answer: [
          'Yes, we do both, but there are a couple of things that we approach a little bit differently than many other design systems. One is that we view component implementation in code as a source of truth. So we spend a lot of time and effort trying to solve the "how do you get what\'s in Storybook into Figma" problem. Whereas a lot of other companies, I find, try to operate things from the opposite direction.',
          "Even though it's focused on bringing the code into sync with Figma, in reality, it works both ways because you're trying to ensure that the experience that designers live in reflects the developer's work and what our customers see.",
        ],
      },
      {
        question:
          "That's quite interesting. I honestly haven't seen many design systems taking this approach so far. What's your composition of the team to maintain this setup?",
        answer: [
          "We're 3 engineers and 1 designer on the team, and then there are people from other teams who work closely with us and help us out a lot. One thing that might also be different is that we own some parts of the front-end infrastructure. So it's not just a design system as a product. We work closely with vertical teams on the application architecture and resolve topics like third-party dependency and monorepo management.",
        ],
      },
      {
        question:
          "Does this mean you can adjust the overall infrastructure based on the design system requirements?",
        answer: [
          "Yes. One of our core principles as a team is that you drive iteration by making it easier for engineers to change things. That requires having strong opinions about architecture and how things are built. So the way that we can drive design iteration is through architectural consistency. If we were only to have opinions about the individual components themselves and not how they came together and not the platform they were built on, it would limit our ability to drive iteration throughout Amplitude.",
          "And that's kind of like our primary goal. We don't view design systems as a cost savings measure. We view design systems as a way to help engineers iterate faster and design to scale their work more readily. And that means owning the design system and significant parts of infrastructure and process.",
        ],
      },
      {
        question:
          "Considering the different types of work you're doing, can you describe what a day to day work looks like for the people working on the team?",
        answer: [
          "It differs a lot based on the day or based on the project. I think that one significant workstream is the design flow of Meredith. She is a designer on our team, working with other designers, product managers, and vertical teams to gather requirements and figure out from a design perspective what's our target.",
          "The way we hit that target is gonna be a sort of cooperation between the foundation work on the design systems side to enable what needs to be done and work on the product engineering side to build on top of the foundation that we're providing them with.",
          "Let's say we're building a dropdown or another component like that. We want to ensure that we're working on stuff that will end up in the product. So in a relatively short time horizon, we don't wanna build the most generic dropdown ever with the hope that one day it will be used.",
          "But even though we're aiming for this particular design, we want to build it in a generic enough way. So we make sure that when the design changes six months from now, we don't have to throw out the infrastructure work or the architectural work that was done before.",
          "Simply put, prioritizing our work is primarily driven by specific product needs. Still, the way we build is very forward-looking, so we can accommodate future iterations without too much heavy lifting.",
        ],
      },
      {
        question:
          "You've mentioned that you have other teams contributing to the system as well. Do you have any model of working with those teams regarding governance, guidelines, or how you support their contributions?",
        answer: [
          "In terms of governance and guidelines, we're formalizing much of that as we grow as a team. So I can't speak based on what's worked in the past, but I will say that our current contribution model that's working really well is a \"base and variants\" pattern. We didn't innovate it, and it occurs in a couple of other places as well.",
          "Airbnb was the first place to use this pattern a few years back. How it works is we have two levels of abstraction in our system. One of the levels is the base level. For example, a base button includes the type interface for a button, the prop interface for a button, how it works, and its low-level functionality, like loading states or how we handle accessibility. What it doesn't have to care about is the styling layer.",
          "We have a layer of variants on top of our base that includes styling, and they have fairly strict rules as to what CSS properties are implemented but not strict rules as to how the CSS properties are implemented.",
          "So we can have two buttons built on top of the same base button that look entirely different. Because each of our buttons is architecturally consistent, this architecture makes replacing any one button with another button a pretty trivial operation, even if their design is different.",
          "It allows product teams to easily create new variants, which will show up in our visual regression tests. And when they show up there, it's our job to resolve that inconsistency.",
        ],
      },
      {
        question:
          "I really like how you have an overview of what was customized using the system. How do you take it from there?",
        answer: [
          "It can happen in one of three ways. First, it can be that this new design is better than the old one, which means we should replace the old one with the new one. And since they're architecturally similar, that's not hard to do.",
          "Or it can be a design drift. Probably it shouldn't have been used in the first place, and then we're looking to get rid of it. We will also talk to the team and explain that we understand what they're doing but that it will not live in the system and why.",
          "And the third option is when this design drift keeps happening and shows that it's valid for the product. In that case, it can make it into the system, but it has to be documented and scoped.",
          "If someone is introducing a purple button, they must also introduce rules and heuristics. When you should choose that relative to other buttons and when you should choose other buttons relative to that. So if a purple button is supposed to be used on landing pages for the upsell action – okay, that's perfectly reasonable. But introducing it without any documentation around intent is not.",
        ],
      },
      {
        question:
          "How do you decide when a design drift shouldn't exist in the system compared to valid cases?",
        answer: [
          "Well, one of the advantages that we have been a very engineering-focused design system is we try not to make those decisions. We want to empower our design org as a whole to define these things, not just the designer who's on my team. We provide an architectural foundation and tooling so that they can identify drift more efficiently, and deciding what is the right amount of drift is deciding how design should change over time.",
          "I don't view that as a design systems problem. I consider that a design problem, so we try to decouple these topics. We’ll help lead and drive those conversations, but we want those design decisions to be owned by the design org, separate from the systems team.",
        ],
      },
      {
        question:
          "Let's talk a bit about the people side of things. How do you think career growth works for people working on design systems nowadays?",
        answer: [
          "I don't think there's ever been a more exciting time to be a front-end engineer. Complex technical problems are moving to the front-end. A lot of them are becoming easier to solve at the back-end layer through SaaS tools that most companies use.",
          "Because of that, more engineering full-stack work ends up being front-end work. So it creates this unique place in time where things like design systems work, front-end engineering, performance engineering on the front end, and state management are some of the most valuable problems in a whole wide class of companies.",
          "Another factor driving that is that design is becoming a real differentiator for companies. In web 2.0 days, just being able to do something on the internet was already impressive. The fact that it even worked was bonkers. Now that's not nearly enough. People expect products to be refined. They're expecting products to work like Figma, Notion, Airtable, and Webflow. And to get a good design output on web, there's a massive front-end engineering component to it. It's not just \"design it, and it's done\" anymore. It depends on how you architect systems, manage performance, etc.",
          "The challenge of being a design systems engineer, or any systems engineer in general, is making sure your work looks valuable, especially if the leadership doesn't fully understand the system's problems.",
        ],
      },
      {
        question:
          "I can definitely agree with you here. So you think there is sometimes a big gap when comparing product developers with system developers and their impact?",
        answer: [
          "Yes, if you're a product engineer and you execute on a feature, and that feature becomes something that everyone uses – it's easy for you as a product engineer to get credit for that. But, on the other hand, if you are a systems engineer and do a piece of work that makes every product engineer at your company or every product team at your company 15% faster, you've added a tremendous amount of value to any company.",
          "If your leadership doesn't wholly understand systems problems, it doesn't look like you've unlocked this fantastic amount of value. Instead, it just looks like engineers on product teams are performing a lot better.",
          "So an essential piece of advice I could give to anyone embarking on a design systems path is to make sure you're joining a company that understands why good design systems or any other systems are valuable. That's also one of my biggest goals in Amplitude to make sure my leadership stakeholders, other engineering managers, and product managers grok this.",
          "It's a challenge at most places, and anyone interviewing for a design systems role should ask questions about how this work will be evaluated. Otherwise, people get in those frustrating situations when you're doing great work and not getting rewarded for it.",
        ],
      },
      {
        question:
          "And considering that all front-end and UI topics are becoming more and more complicated, what was your team's most complex challenge to solve so far?",
        answer: [
          "One problem related to my work is getting the stakeholders excited about the work, especially for the long-term projects that are unlikely to move the needle in a short timeframe. For example, when I joined Amplitude, we were using Flow as a static type checker, and it was clear that the entire JavaScript community was moving to TypeScript. New projects at other companies were not using Flow, and third-party libraries were not supporting Flow. From a technical perspective, maybe Flow was better, but many libraries didn't have Flow types available. So we were paying a real penalty by having to iterate slower because we hadn’t migrated off of Flow and on to TypeScript.",
          "So how do you turn this into a business objective? Moving to TypeScript doesn't let you build anything new tomorrow that you can't make today. It doesn't unlock any customer value in the near term. The problem I'm focusing on is getting the right metrics on how we can iterate rapidly over time and how to get these kinds of projects resourced.",
          "When it comes to the team, the hardest problem is definitely the adoption of the system. That is where you have to go beyond just having a well-built system, and you've got to work with product teams closely. It requires a lot of education, understanding the problems product teams are solving, and making sure that design system components do a good job satisfying those use cases.",
          "And that's also hard to get people excited about this type of work. Of course, people get quickly excited about building new components or implementing new features. But what unlocks a design system's value is when it's well adopted.",
        ],
      },
      {
        question:
          "That sounds so relatable and reminds me of how many different mistakes we can make when solving complex challenges. Was there something any architectural decision that you now have to work against or a thing that you would do differently now?",
        answer: [
          "Definitely, yes. I've made a ton of different mistakes but I think one of the things that's always interesting in talking about these things is that there are things that I am frustrated by and lament right now that were not mistakes at the time that the decision was made.",
          "For example, I had the privileged position of inheriting a well-made component library. And one of our frustrations now, as we move to a design system, is how do we control the styling more strictly? How do we replace these component library components that allow for arbitrary styling with design system components that don't? Was it a mistake that the original button component we used when we were a 50-person company allowed for arbitrary class names? It's a decision I lament now, because it makes my job harder. But it also allowed Amplitude to scale rapidly from a 50-person startup to a nearly 800-person public company.",
          "That's an example of a decision that was the right one when it was made and is now being undone because it's become wrong as circumstances have changed. A right decision that we’ve grown out of.",
        ],
      },
      {
        question:
          "How do this kind of migrations work for you? Does it become a challenge for the team, or have you found your own way to handle them?",
        answer: [
          "Migrations are always challenging, in any aging codebase or growing company. A lot of the work in any growing company will always be migrating to more scalable solutions, newer solutions, and better solutions. So I don't think that it's different here than anywhere else.",
          "I just think that's part of the job of any systems engineer and probably any engineer, and the roadmap for doing that is pretty straightforward – stop the bleeding, and then drive improvement. This means that all new stuff gets done the way you're moving towards, and you're not continuing to build in the old way.",
          "Then, for the actual migration work, focus on the key workflows first. Find the most critical areas that are mostly related to the problem you're solving are touched very often and bring the highest value to the product when migrated.",
          "This is the typical migration plan, but in reality, you're always walking and chewing gum at the same time. There is no such thing as a clean migration, and you have to solve a lot of immediate complexity during the migrations. You get good at migrations over time, but they never feel good when they're happening.",
        ],
      },
      {
        question:
          "What do you think it takes to do this kind of work and do it well as a design systems engineer/designer?",
        answer: [
          "I think that there are kind of two vectors that really matter a lot when working on design systems: social and technical.",
          "Whenever you're working on a system, you've got a lot of stakeholders. You've got a lot of people with different priorities and concerns, and it's your job to prioritize between them. And you won't be able to please all the people all the time, so you have to help them understand why you're making specific decisions and why it's the right way to sequence the work.",
          "That requires a lot of firmness, emotional intelligence, and good communication skills. And it's definitely one of the things that we look for in anyone we hire onto our team. Can this person effectively work with all of the stakeholders that they're gonna have to work with because it's not as easy as if you're a product engineer and you have fewer stakeholders.",
          "From the technical side of things, I think it requires a certain amount of rigor and knowing what to be rigorous about. When they start doing design systems work, many people feel like everything matters. In the end, everything does matter, but there are some things that are tough to iterate on and other things that are really easy to iterate on.",
          "Updating the color of a button and adding new functionality to a component is fairly straightforward. Planning the property interface of a button and removing functionality from a component is really hard.",
          "The cadence of product engineering work is “two steps forward, one step back” because the cost of undoing work is relatively small. But when you're doing systems work people are building on top of the systems you're building, and the cost of undoing something is really high. So I think any good design systems engineer focuses on getting the interfaces right and making sure that those decisions are made carefully. Then, they ensure those decisions don't have to be undone, especially when a design system component interacts with other product work.",
        ],
      },
      {
        question:
          "Teams that are just embarking on the journey of building their own design system for the company – what is your top advice for them?",
        answer: [
          'If I were to boil it down into a soundbite, when you say the words "design system", especially at the beginning, whisper the word "design" and shout the word "system". If you build the system right, design decisions will be very easy to change. Systems decisions, if you get them wrong, will be very hard to change.',
          "There are exceptions to this, so know what you're optimizing for. For example, things could be different if you're working at a publication and design consistency is the most important thing. At a place like that, maybe you do a redesign every two or three years, but you're not really iterating much in the interim, you're just trying to drive brand consistency – that's a differently shaped problem.",
          "But suppose you're working on a SaaS or consumer product where you're trying to change things and run tests all the time. Basically, iterating on features, and improve things incrementally. Driving that iteration speed is really important and does require good design work. And you have designers outside the design systems team that are always thinking about those design problems. So the value you can provide on a design systems team is getting the systems stuff right so that those designers have a solid foundation to build and iterate on.",
          "So focusing less on the design and more on the system would be the drum beat that we talk about a lot on my team at Amplitude, and what I would advise anyone embarking on the design systems challenge to really think long and hard about.",
        ],
      },
    ],
    highlights: [
      "I don't view design drift as a design systems problem. I consider that a design problem, so we try to decouple these topics. We’ll help lead and drive those conversations, but we want those design decisions to be owned by the design org, separate from the systems team.",
      "Was it a mistake that the original button component we used when we were a 50-person company allowed for arbitrary class names? It's a decision I lament now, because it makes my job harder. But it also allowed Amplitude to scale rapidly from a 50-person startup to a nearly 800-person public company.",
      "There is no such thing as a clean migration, and you have to solve a lot of immediate complexity during the migrations. You get good at migrations over time, but they never feel good when they're happening.",
    ],
  },
};

export default data;
