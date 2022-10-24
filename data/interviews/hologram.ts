import type { Interview } from "../../types/global.types";

const data: Interview = {
  id: "hologram",
  system: {
    name: "Dimension",
  },
  company: {
    name: "Hologram",
    logoUrl: "/img/interviews/hologram/logo.svg",
  },
  interviewee: {
    name: "Taylor Cashdan",
    photoUrl: "/img/interviews/hologram/avatar.png",
    bio: "Taylor is a North Carolina-based multidisciplinary creative and community builder that’s passionate about people, design, and all the intersections in between. He has a burning desire to collaborate with others to create exceptional work for people who give a shit.",
    links: [
      {
        label: "@TaylorCashdan",
        href: "https://twitter.com/TaylorCashdan",
      },
    ],
  },
  interview: {
    description:
      "Dimension is a design system built for Hologram products. At the time of interview, the team is moving towards the first stable release with a huge focus on working with the community from day zero.",
    date: "2022-10-25",
    items: [
      {
        question:
          "What's your current title and your role in design system development?",
        answer: [
          "My current title is Design Systems Lead and I work for a company called Hologram. We're a cellular connectivity company for IoT devices. I play the hybrid role of product manager and lead designer on the design systems team. It's a very small team, myself and another engineer, and we're plowing through doing everything together for a very small organization. Our design system is called the Dimension Design System, and if everything goes as planned over the next couple of quarters, it will be public!",
        ],
      },
      {
        question: "How long are you building it for?",
        answer: [
          "I joined Hologram in October of 2021. One thing I immediately noticed was that their component library and UI kit were two separate things. One was maintained by the engineers, one by the designers, and there was just no connective tissue between them. There was also no documentation. Things were obviously named differently, things existed in one and not in the other. So for some time, I was just auditing all those assets, trying to figure out what folks really needed, what was available, and what was used in the product.",
          "Our program formally kicked off in about January/February of 2022, and we had our first major alpha release last month (August). It includes our first set of shared design tokens, visual style, a few components to kick things off, and documentation to start formulating our system as something people can use. We plan to be out of alpha by the end of the year.",
        ],
      },
      {
        question:
          "Does that mean that your scope is currently to get the system libraries out along with the documentation website?",
        answer: [
          "We're in an interesting position because instead of starting a completely new system with no dependencies, we're in the mode of operationalizing the current state of the product. So we're going in and doing some things that aren't typically under the responsibility of a systems team.",
          "For example, we're doing actual implementation work – going into the product and doing some swaps for system components, to train the behavior of the engineers and designers going forward. This work depends on our capacity, and it's a lot about resolving situations when developers already use third-party libraries and removing that dependency layer.",
          "And then there is a cost-benefit analysis that we’re making as well. For example, if we had 74,000 versions of a button everywhere – do we need one to replace them? Do we really need 20 variations? Where are we on the spectrum?",
          "So we pitched it as: \"We've built a new house, and instead of buying new furniture, we're simply moving the furniture from the old house\". The idea behind it is that we're not throwing away all the good work you've done, but we're taking a look at it, restoring the parts that need repairing – fixing a broken chair leg, redoing the cushion. That way, we can put it in the new house, and it'll fit properly.",
        ],
      },
      {
        question:
          "That's a great analogy. Are other teams happy with you doing the integration work? Using your analogy, were there situations when someone comes to their living room and their chair is not there because you have moved it to a new house?",
        answer: [
          "In the beginning, it was very sticky because folks were nervous. They were like: \"The chair's fine. Why do we need to fix it? I can sit in it. It stands. What's the issue?\". But sometimes you're so used to sitting in it that you neglect that squeaky screw on the backside. And we want to improve that. So it took a lot of repositioning and hearing the needs of the teams to make sure they understood we were not coming in to destroy any work already done or throw anything away. It was just to enhance and evolve existing assets.",
          "Sometimes, when doing a discovery task or an audit of the work, we've gone back to the teams and explained why it's worth rebuilding their component from scratch. And there were many cases when the component was 75% done and was working well. So we just needed to polish it and move it to the system.",
          "For example, before our first round of implementation, there were around 20 different colors used for links, and only two of them were accessible. So our first task was to implement a single unified link color, and we went and replaced all the colors used in the product. That way, we can show the impact of using a single source token and how we can get accessibility baked into the product by just recognizing color contrast and type size requirements.",
          "On the other hand, I've made sure to frame it for the leadership and our consuming teams that this kind of work is not typically our responsibility. Generally, we would own the component work (design, code, documentation), releasing the change, and communicating it. Then, we would work with the teams to ensure they know how to use it. But when the only free time on their roadmap is far, far away – that's when we can step in and help.",
        ],
      },
      {
        question:
          "How do you interact with the teams when doing this type of work? ",
        answer: [
          "That's a great question. We have a multi-step process that we align around, the first of which is discovery, where we do the initial audit. We look into what we currently have and want to achieve, what other systems provide, what they're doing, and what's suitable for us.",
          "The second part of that task is ensuring that we take that discovery document to our engineering, design, and product management communities and get their thoughts on the process and feedback. We usually have 15-20 minute meetings with them to share what’s coming and get their opinion before we get deeper into it. We learn if we’ve missed anything or if there is a specific product need we’re unaware of, and all communities become a part of the process.",
          "Sometimes we go into those sessions without knowing our exact plan, so we get a chance to share possible solutions and learn if anyone has any issues with the proposals. So the format depends on what we’re ready to bring, and that’s how we engage with the community over time.",
          "When I joined Hologram, the first thing I did, aside from doing the audit of the current state, was run a “hopes and fears” working session with each discipline group.",
        ],
      },
      {
        question: "What was this session about? How did you structure it?",
        answer: [
          "I facilitated a workshop where I asked engineers, designers, product managers, brand managers, etc., all separately, what are their hopes and fears about having a new system and a systems team.",
          "Some hoped it would introduce shared resources for solving design system-related problems. Some feared that it would only cater to one team or product. But it gave them a chance to share that input directly. And then the second part of the activity was about what's working today and what's not working today.",
          "Afterward, I took the comments and learnings from the session and used them, verbatim, in the roadmap. That way, everyone can see their words in reference to the work we planned which helps ensure they feel heard and can better understand the roadmap as well as our priorities.",
          "As we continue to make progress on the alpha release, it has already paid dividends since we can highlight which company needs we have covered and which goals we’ve met. It can also help us in an opposite way, where we can tell them that something wasn’t done yet, and notify them about the changes to that roadmap item, all using their language.",
        ],
      },
      {
        question:
          "How many people do you work with on this? Is it possible for you to reach out to everyone in the company?",
        answer: [
          "Yes, we're small enough to make it possible. At our peak, we had about 30 engineers and 15 designers. We’ve recently gone through layoffs, so our current headcount got reduced with an intent to get back up to growth eventually. So at any time, we can talk directly to the people that would be consuming your solutions.",
          "Since staffing and trajectory have changed, the question we have now is whether they have the time to collaborate with us. And that is a significant foundational shift from the times before Hologram when I worked at Fidelity Investments. There, our system served thousands of people. We had around 300 designers and 500 engineers that we worked with. Getting their time was very different and a lot easier.",
        ],
      },
      {
        question:
          "From my experience, in bigger companies, people rely more on high-level communication, while in smaller companies everyone expects a more personalized approach. What are your observations about this?",
        answer: [
          "Yes, I think you're correct. What I've experienced at the large organization is they relied heavily on the consistency of when and how we communicated. This smaller environment is much more about direct messages and one-off chats. The communication strategy we needed at the big organization is too much for the smaller company.",
          "But from my perspective, I think it's essential to get in the habit of working on those communications, even if they don't need it today. When we return to a larger size, we will already have a good cadence. We will be used to sharing weekly release notes and documenting crucial parts.",
          "Even when we release off-cycle, having a note and announcement across multiple slack channels and email is important. That way, there's never a chance for someone to say they don't know what Dimension is shipping. And for us, that means we can always point back to the requests created by product teams when we're releasing something and have a place to reference when there are questions.",
        ],
      },
      {
        question:
          "Considering how much preparation you have made for the alpha release, what does your day-to-day work look like?",
        answer: [
          "My role is a little unique because I'm serving between product management and design roles. We're operationalizing the current state, so it takes slightly less design brain power than the PM brain power. I don't have to rethink our color theory or make sure we're doing topography right – a lot of those topics are already solved. Instead, we're ensuring that it still meets our accessibility requirements and systematically makes sense across the product.",
          "For example, we just changed our interactive color palette to a different hue because individual components used different hex values for the same behavior. If we have interactive colors inside our radio buttons, they should match our checkboxes, right? There's no reason to have two different color sets, and none of that was done intentionally. It was just that there was no central source of truth.",
          "That's the bulk of the design work I'm doing now. It's a lot of audits, communication, and sometimes editing or refining the object for accessibility and other requirements. We also operate in three-week sprints, while most other teams work in two-week sprints. We added the third week so we have a chance to get reviews from the community. That helps us get an extra bit of time to jump into critiques and meet people who didn't have time during the first two weeks.",
          "And then, on the PM side, it's ensuring that we have a good and stable long-term roadmap and a few sprints worth of immediate work in the pipeline. I'm used to much more rigor and debate when planning the work, but in Hologram, we have more trust in people making decisions. You are hired because you're an expert in your area, and you don't need to check with everyone for every decision. And while that's okay, I want to make sure others know why we made specific choices since it impacts their work.",
          "Kevin Powell, the engineer I’m working with, is doing the same for the engineering group. He makes sure everyone knows what we’re doing, helps everyone understand and unpack the different ways and methodologies of development, shares more about why we’re using one framework versus another, etc.",
          "We also have our internal sessions – just as a systems team and/or with leadership – to gut-check and make sure we’re still in line with what we’re trying to do.",
        ],
      },
      {
        question:
          "At your scale, do you feel like community contributions are important, or do you expect others to focus on the product's work while handling everything system-related yourself?",
        answer: [
          "We don't have a robust contribution process at the moment, but we've started laying the groundwork for it. For example, recently, we were cleaning up the icon libraries. We omitted many of them during the first pass because they didn't have multiple usages inside the product. Then folks started reaching out to us to do the same for other one-off icons, and we thought this was a perfect opportunity to start creating and talking about the contribution process.",
          "So if you feel that your icon has multiple usage areas or should replace another icon, submit an audit discovery proposal! It’s a straightforward form with questions about the intent and about what other assets it will replace. That way, we can get them thinking in systems. That’s a good first step because otherwise, they’re very focused on a specific goal they are trying to achieve.",
          "That’s also a chance for them to record their thinking process, and if they request a new feature for Dimension in the future, they won’t need us to prepare the requirements. Instead, they will be able to test it in the product to see if it works first and if it will work from the system side for other areas.",
        ],
      },
      {
        question:
          'Good point. As <a href="/interviews/razorpay" target="_blank">Kamlesh</a> said before – design system teams exist because you don’t need everyone in the company to become experts in design systems. How do you balance out the time other teams spend on contribution?',
        answer: [
          "That's an excellent question. For me, it comes down to change fatigue.",
          "The beauty of the situation here at Hologram is that because we are operationalizing the current state, we’re working with many patterns that are already happening. However, teams might not realize it, so we write the documentation for it.",
          '"You guys have already been doing sentence case labels on your buttons? We don\'t need to have a big discussion about which case we should be using and why". Instead, they can help us take those decisions already made for the product and move them to the system level.',
          "At Hologram, we also have an old component library and the old UI kit that are already there, so if they need something immediately, they can put it there with minimal risk. They know that they can use it and that the Dimension team is keeping tabs on that and seeing which parts are used a lot and need to be addressed.",
        ],
      },
      {
        question:
          "You’ve mentioned that you already have the foundations set up, and you’re shipping some of the components for the alpha version. What is the main problem you’re working on at this point?",
        answer: [
          "Defining our longer-term charter is top of mind. It becomes interesting when you think about scale, the purpose of a system, and who it impacts. It’s always good to have some uniformity. Now, do you need 20 engineers and 20 designers working on it? Probably not. You also don’t want to become the design police, who is checking everybody’s work manually.",
          "Instead, we should be trying to make it so good – they wouldn't want not to use it. Teams shouldn't even think twice about using it in the first place because of how the system addresses their needs.",
          "It's easier said than done, especially when you're talking about larger organizations. So we use straightforward examples for that. For instance, if we introduce a single color token for links – it's effortless for everyone to understand its benefit, and we can show how this approach cascades down to other places. Once we started using this token in our component, we also went to various product areas and showed the same change in our system and how teams could use it themselves.",
          "As migration continues, we get another part of the story. We can talk about the overall impact of the system. We can talk about the performance impact we’ve brought or how we took the product one iota close to being fully accessible through unification. It becomes a big selling point for us as it helps product teams not to think about all these problems so much.",
          "There is always a separation. Using accessibility as an example, many teams might think that using the design system automatically makes their product accessible. That’s not the case, though. We can provide many labels and sections where they can put information, but we can’t always pre-fill them for the product teams.",
        ],
      },
      {
        question:
          "Absolutely. It is a common challenge for design system teams where exposing people to the complexity you’re working with is hard. In many cases, product teams are unaware of the technical or design problems the system is solving, making it feel that it’s faster to implement the same components directly on the product.",
        answer: [
          "It’s fascinating because it reminds me of similar problems we were dealing with at Fidelity. Sometimes that is true, but sometimes that also means that they’re overlooking the accessibility portion of it. At the same time, leadership or people funding the teams won’t always understand the impact or value of these implementation details because it’s not a part of their day-to-day job.",
          "So what we also did when we started to ship incremental features was to sit with our community members and let them rebuild a specific experience without using the system. You allow them to begin from scratch, and they would spend two hours building it and solving edge cases. We would record the time and then ask them to do the same with our component. And then it takes them 10 minutes because most of the pieces are already there.",
          "And even if it’s got some bugs or they have to configure components, you can still take that person’s estimated salary, convert it to hourly, and count how much money the company spends when using the system versus not using it. So even that alone can make it easier for design system teams to talk to the leadership. Of course, there are other aspects of business value as well. Like if your product is not accessible, there is always a risk of the company getting sued.",
        ],
      },
      {
        question:
          "What was your most complex challenge during the past year when starting to work on a new design system?",
        answer: [
          "As I said earlier, my previous background is in large enterprise companies. So switching to this very small organization was relatively new to me. It's been a fun challenge to bring the enterprise learnings and processes into a startup environment because there are many things that the startup doesn't need at that moment. But there are some things we want to set in motion now to have those processes in place when we get bigger.",
          "It's been a challenge to rethink my strategy on which things we want to do now versus later and the pace at which we can work. At Fidelity, for example, inception to delivery might have taken six months for a complex component because you have to go through reviews and check with different teams and different verticals across multiple products.",
          "We can get two or three components done in a month in the startup environment. The timeline is so drastically different because of the difference in impact we're making, the number of people involved, and the number of products we're working with.",
          "That's been my biggest challenge – scaling that down but not losing the right essence and the rigor from my previous environment.",
        ],
      },
      {
        question:
          "What have you learned from switching to a faster-moving environment? Were people expecting you to deliver more than you planned initially?",
        answer: [
          "Yes, there was a lot of curiosity around pace and questions about our problem-solving approach and why we couldn’t move faster. I take a lot of pride in how, very early on, I explained the multi-step process we're taking for incoming requests, the reasoning behind it, and why there's so much rigor. And then I explained its benefits and that the design system is like a cruise ship – we don't take 90-degree fast turns. Instead, we steadily move along, continually release, and fix things, and it takes a little longer than you may think. But thanks to that rigor, we ensure that everything we deliver will not be broken and will meet the product expectations.",
          "Everyone was hesitant in the beginning cause there was nothing to back up my explanations. To be honest, I was still thinking enterprise at first and expected everything to move slower until we found ourselves two sprints ahead of the plan. We kept moving according to the original plan though, without reorienting, since I knew there would be more work once we released the first version. People will ask questions, we’ll need to prepare training materials, and so on.",
          "When people think about design systems work, especially those who aren't actively on a team,  tend to think it's just shipping code and design assets. They believe that takes up around 80% of the job, with 20% left for meetings. In reality, it's precisely the opposite. I would say it's 60% communication, documentation, meetings, and demos; 20% writing the actual code and shipping design; 10% project planning (on a sprint-level), 5% for internal discussions, and then 5% panic.",
          "Thankfully we had great leadership support and understanding that this type of work takes longer. Because of that, we had a great reception and actually had time to explore the problem space.",
        ],
      },
      {
        question:
          "That’s so important to have leadership support your work indeed. Otherwise, you have to go an extra mile to get the system into the product, and enjoying your work is much harder.",
        answer: [
          "Exactly. It makes it hard to come to work every day when you don't think people understand what you're doing. And I think there's a difference there too. There is a reality where the leaders may not understand the nitty-gritty of your work, but if you can prove the business value, they will trust you. And then, when your consumers are happy, leadership will also recognize you.",
          "When you pitch a new idea or start working on something, there is usually many questions about whether it will work. I think asking questions is healthy, but it always depends on how that message is delivered. If they're being negative about it or don't back you up, it's tough to get inspired to do the work well. Also, you don't feel like other teams will support you.",
        ],
      },
      {
        question:
          "What do you think is the most complex challenge when talking about design system teams?",
        answer: [
          "I think, for me personally, it's remembering that the work is iterative. What you put out doesn't have to be perfect before it gets released. It could have some questions you haven't figured out yet. You don't want to ship anything broken, but you don't have to solve every problem.",
          "Before you ship something, you need to get people's hands on it. They need to test it, they need to play with it, they need to put it in the product. Sometimes a product will give you the feedback that something is not working, and you will need to revert the change. So you have to make sure not to attach yourself to your choices. Design systems are a tool to serve the product, and finding the best way to help them is always the goal.",
        ],
      },
      {
        question:
          "What would be your advice for the teams who take the first steps in their design systems development?",
        answer: [
          "No matter what size your company is, make sure that you have created channels for receiving feedback. The worst thing that can happen is the design system getting isolated from the people it serves. If you don’t know what their needs are, what’s coming next on the product side – you’re basically working in a bubble. If you do that, you’ll never get advocates for the system, and teams might not want to use your system since you might be solving the wrong problem.",
          "Then for larger companies, I think it’s important to remember that this work takes time and that you don’t have to solve every use case. If you get 50 or 70% coverage, that’s already fantastic! And it’s okay for the design system to say “no” to some requests when there is too much impact on the existing components without having enough evidence to make the adjustment. You can put it on the shelf and get back to it when you have a stronger opinion backed by the data. You don’t have to change with every request.",
          "And for smaller teams, I think it’s about remembering that you can’t do everything right. You have to be able to prioritize and communicate that “we’re not getting these 74 components shipped this year”. You won’t ship all the things, but you can work on fundamentals that allow you to ship faster. For example, if you spend some time on proper planning, you can always pull in a task from your backlog for other teams to contribute.",
          "Regardless of size, it may take a year to build the trust you need before you even ship anything! It's not instant, and you don't start the team to ship components in the first month. It's not going to happen. If you're starting a program early, joining a new team, or the idea of a system is just now formulating at your company, it's going to take time to build the right strategy for your organization.",
          "And that's okay. It's supposed to be like that. You may feel like you're not adding value because you're not doing the design work or shipping the code just yet. But all that discussion, formulation, and investigation work is just as important as the code and the design work you'll eventually get to.",
        ],
      },
    ],
    highlights: [
      "I took the comments and learnings from the session and used them, verbatim, in the roadmap. That way, everyone can see their words in reference to the work we planned which helps ensure they feel heard and can better understand the roadmap as well as our priorities.",
      "Many teams might think that using the design system automatically makes their product accessible. That’s not the case, though. We can provide many labels and sections where they can put information, but we can’t always pre-fill it for the product teams.",
      "You have to make sure not to attach yourself to your choices. Design systems are a tool to serve the product, and finding the best way to help them is always the goal.",
    ],
  },
};

export default data;
