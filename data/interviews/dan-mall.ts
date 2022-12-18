import type { Interview } from "../../types/global.types";

const data: Interview = {
  id: "dan-mall",
  interviewee: {
    name: "Dan Mall",
    photoUrl: "/img/interviews/dan-mall/avatar.png",
    bio: "Dan Mall is a husband, dad, teacher, creative director, designer, founder, and entrepreneur from Philly. He shares as much as he can to create better opportunities for those who wouldn’t have them otherwise. Most recently, he ran design system consultancy SuperFriendly for over a decade. Now he's trying to share as much of what he's learned to help designers get the respect they deserve.",
    links: [
      {
        label: "Personal website",
        href: "https://danmall.com",
      },
      {
        label: "@danmall",
        href: "https://twitter.com/danmall",
      },
    ],
  },
  interview: {
    description:
      "Dan Mall is a design system coach and consultant and he's been running a design system consultancy called SuperFriendly for over a decade, helping all types of companies to build their design systems and improve their team processes.",
    date: "2022-12-20",
    items: [
      {
        question:
          "Can you tell me a bit about yourself and your role in the design systems industry?",
        answer: [
          "My name is Dan Mall. I am a design system coach and consultant. Until a few weeks ago, I ran a design system consultancy called SuperFriendly, working with many clients on their design systems. I ran that for about ten years. Now I am passionate about educating people about design systems as they get more important in the digital design world.",
        ],
      },
      {
        question:
          "Can you share more about your role there and your typical responsibilities?",
        answer: [
          "It changed over time. Every couple of years, I would change it partially because that's what the business and the clients needed, and then to keep myself interested as well.",
          "There were times when I was mostly just administrating, being an official CEO, and not working with clients directly, but working with our teams who helped clients. And then there were also periods where I was very hands-on with clients, creating deliverables, creating a design system, documentation and designs, and code.",
          "For the last two years, most of my role became coaching in-house teams. So not creating anything myself but helping people figure out what to create, when to create it, and how to work on their design systems. That way, they knew how to do it instead of just getting dumped a bunch of deliverables on them.",
        ],
      },
      {
        question: "What kind of format did you use when coaching them?",
        answer: [
          "It was a bunch of different things. I would act as part of their team. The closest option would be me playing the temporary role of VP of design systems. That could last as short as eight weeks and sometimes as long as eight months for larger companies. Many times that included starting new initiatives, teams, or programs. So I would help to shepherd a lot of those things along.",
        ],
      },
      {
        question:
          "Considering that you have worked with many companies, what are the common problems companies have been facing?",
        answer: [
          `One of the most common things I saw is that design systems are a tool for scale; they work best and are most powerful at large scales. So there's a lot to do. And everyone I worked with was super smart. I don't think I've ever worked with a team or a person that I'm like: "Well, they're kind of dumb." Everybody on the teams I work with is smart and capable, and excellent.`,
          "But there are too many things to decide, and a lot of teams need someone to decide for them or help them with what decisions to make. So a big part of my role tended to be helping create decision frameworks for what we should work on.",
          "What should we work on next? What should we delay, what should we not do right now? What team should we partner with? Which things should we just let go of even though we want to work on them?",
          "So it was about helping the team keep a manageable scope of work at all times and the practice of maintaining that over time.",
        ],
      },
      {
        question:
          "What do you think is the best size for the design system teams, and how different is it usually between small startups and larger companies?",
        answer: [
          "It's interesting because the size of the design system team is only sometimes proportionate to the organization's size. For example, right now, I'm working with a big enterprise, and their design system team is one person. And then I've also worked with startups that have 40 employees and then have a ten-person design system team. So it was an interesting surprise for me that it's not always one-to-one proportion across companies of different sizes.",
        ],
      },
      {
        question:
          "Is there a big difference in the day-to-day type of work for large and small design system teams?",
        answer: [
          "I think so, and much of it is predicated on the organization's culture. I've seen consistently that larger companies usually move more slowly regardless of their size because the culture can only accept a particular pace or is used to a particular pace. That influences very directly the amount of work and the pace of work a team of any size can do when there's just so fast they can move.",
          "I've worked with startups, and whether they have a team of one or a team of ten, they can move much faster. Their scale of change is much more manageable than at a larger company, which tends to move slowly because one change has significant impact across multiple products.",
        ],
      },
      {
        question:
          "And for these smaller companies that have an opportunity to move faster, is it also easier for them to get a return on investment in the design system space?",
        answer: [
          "Yes, it's easier for them to see the return on investment because they see their impact faster. I can think of working with a startup two years ago, and they had a six-person design system team. Their startup is well funded, I think they just raised their series B. Their design system team has an official buy-in, and you can immediately see the product's impact. So if something changes in the design system – it makes its way into the product very quickly and vice versa.",
          `So you can see that virtuous cycle of design system feeding product and product feeding design system much more closely and much more frequently. Unlike some larger companies, where these cycles are longer, and it's hard to see the impact. Many people will attribute impact to multiple things because the actual truth is: "yes, the design system helps our product, but so did the market, and so did this team's pace, and so did this new hire that we made here." So it's a lot more opaque to tie design system value directly to the design system.`,
        ],
      },
      {
        question:
          "Do you also think the team should be more hands-on with the product for it to have more impact? Or would you recommend they stay a bit distanced from the product?",
        answer: [
          "My general perspective on that, regardless of the company size, is that design system teams need to be very involved in the product. I think that with design system teams that tend to work only on the system itself – there is a bigger chance they're making a monster in a lab, and they have no idea what that monster will do once it's in public. So I generally recommend that teams of any size keep connected to products and their roadmaps. You have to stay connected to the product, infrastructure, technology, design, all of that. And if you're not – that's always a significant risk.",
        ],
      },
      {
        question:
          "Have you seen any examples in the past where the design system team wanted to stay hands-on on the product, but they would get pushback from the product teams?",
        answer: [
          "Yes, almost every time. I do think the design system teams need to be hands-on with the product. What that doesn't mean is – it doesn't mean them to become the design police on the product. Product designers and product teams should govern their products, and the design system team should be in service of the product teams and make their jobs easier. Because if you have a fantastic design system, but you're not shipping the product – what's the point?",
          `I think design system teams sometimes overreach in the power they want to have. They want to be the ones who establish the standards. And I'm responding: "No, that's not really how the role goes." In my opinion, they're the ones who take the standards that are emerging from the product teams, and then they can make them official and scale them. But the work on the standard's original definitions should happen on the product instead.`,
        ],
      },
      {
        question:
          "Working with various companies, which common models of working with the product teams have you seen?",
        answer: [
          "There's a lot of stock put into articles written by Jina Anne and Nathan Curtis on contribution models, specifically team models. The usual suspects are federated models or cyclical models, which I think are good. One of the things I've seen, though, and maybe it's my hot take that I believe that contributions from product teams might be dangerous.",
          "So I think design system teams have this dream that if we establish guidelines well enough and we establish processes well enough – we can sit back and relax. Product teams will then follow this process and contribute perfect components to the system. We don't have to do anything.",
          "I've never seen that work. And most of the time, when I've seen product teams contributing a component or a pattern to a design system, it's always problematic because the product teams are not working at the scale of the organization. They're not supposed to. They're supposed to work on their feature or their product or whatever they are in charge of. The design system team's job is to work at scale.",
          "So what I've found to be more successful is for design system team members to contribute components to the design system themselves based on what they see product teams are working on. Their job is to go around and collect the common things happening across multiple product teams, abstract them, and then contribute them back to the design system and reintroduce them back to the product teams in an abstracted form.",
          "So it's a slightly different contribution model, and many people just don't expect it to go that way.",
        ],
      },
      {
        question:
          "And have you been in situations when component requirements coming from the product conflict with the long-term design system vision or processes? How would you balance these requirements?",
        answer: [
          "I encourage design system teams to establish the standard before they get requests. So one example of those standards is that the design system team will support requests that happen in three or more teams.",
          "So if a product team says that they have a component change request and they are the only ones asking for it – they can make the modification on their side. We're not going to make that change from a system standpoint because our job is to work at scale. And design system teams should establish this rule early to ensure they're not becoming staff augmentation for product teams.",
          "That doesn't mean the design system team needs to support these modifications. The design system may get you half of the way there and give you a starting point, and you have to do half of the modifications yourself on the product side. That's fine. That's an excellent cycle for the design system team and a product team to have.",
          "It's risky when expectations from a product team are that the design system team will give them exactly what they need in the exact form they need. That's not a design system. That's a product team augmentation. And the same thing the other way around is if the design system team is expecting perfect contributions from a product team. That's not it either. That's the product team becoming a design system team. So it's somewhere in the middle between those two.",
        ],
      },
      {
        question:
          "Have you seen any examples of encouraging teams to customize the component growing into a habit when product teams stop reaching out to the design system team because they can just modify the component?",
        answer: [
          "Yes, and I placed the blame on the design system team for that. I don't think the product team should reach out to the design system team. The design system team should be in the mix of the product teams. I think that's their job to market and evangelize because product teams are their customers.",
          `It would be like saying, "I use Google Docs. I should be reaching out to the Google Docs team all the time". It's a weird premise. If they want to keep me as a customer – their job is to work with me. That's why lots of product teams have customer advocates or customer advisory boards.`,
          "A good model for a design system team to follow is: as they are trying to reach out to their customers – they have to be proactive about it.",
        ],
      },
      {
        question:
          "In my opinion, that works well for small to medium-sized companies. What about larger ones where you can't talk to every team in person?",
        answer: [
          "This goes back to one of the earlier questions you asked me, and these are the hard questions. Who do we leave? Who do we choose not to work with? And so I spend more time on that kind of problem than on topics like component APIs. And again, those guidelines and those rules start to come in handy there. If the design system team has established from the jump that they are working at scale – well, then you work with the most scaled teams. You don't have to work with all of them.",
          `It's reasonable to say a design system team cannot do everything and cannot serve everyone. However, we must define what "as many people as possible" actually means. Does that mean that of the hundred teams we're serving, we can only serve 10? What are our criteria for those 10? And it is not about picking your most and least favorite teams. You know, we love them, and we hate them, but it's actually based on some objective criteria.`,
          `And the best case is a product team can see those criteria in advance and can self-serve out of it. They can understand they don't meet those criteria because they don't have that many people on their team or they don't have that many components that they need supported. So they can look at the criteria and go: "That's not us." Then it feels like they're not being discriminated against.`,
        ],
      },
      {
        question:
          "So when consulting companies, have you primarily focused on the cultural type of problems instead of the craft problems?",
        answer: [
          "Yes, definitely on a cultural level because that defines the ceiling of what is possible. If the culture moves slowly, it's impossible to ship ten components in one week, even if it's technically possible. The organization won't handle it. It won't accept that level of change.",
          "One of the first places I start with is just looking at what is normal here. Is it normal to ship once a year? Is it normal to ship twice a year? Four times a year? Weekly? Monthly?",
          "All systems are connected, and for a design system to work at an organization, it has to be connected to the cadence, process, and teams for it to be successful. So in order to do that, we have to understand the organization.",
        ],
      },
      {
        question:
          "Were there any cases where you had to challenge how the company works?",
        answer: [
          `Yes. Ideally, for me and for my prospective client, we identify that before we even start working together. Some clients come in and say: "This is how we want to do design system work." And that might be the opposite of how I would recommend doing it. So if we disagree on a specific way to do the work from the start – it's good for both sides choosing not to work together.`,
          "After deciding to work together, I have had a couple of instances, realizing then that we're not on the same page about how this goes, and it has been a conflict. And I don't mean that in a rude or mean sense.",
          "I remember working with one client who wanted to spend six months working on their foundations and reintroduce them to the product teams afterward. For me, it felt like a mistake since you get disconnected from the product needs for six months, and I suggested piloting something really small and really quickly. And the leader that I was talking to just wouldn't agree with that approach. It doesn't matter who's right or wrong in this situation, we just had different opinions, and I'm okay with that.",
          `There are a lot of different ways to be successful in design systems. I tend to go toward the ways that I have seen work before. I'm less confident, especially as a consultant, if somebody says: "We want you to get the results that you know how to get, but we want you to do it in this other way that you're unfamiliar with." I can no longer stand behind those approaches. So I tend to go towards the practices I've seen work, and it's okay if people disagree.`,
        ],
      },
      {
        question:
          "Right, that makes a lot of sense. So once you actually start working with the teams – what kind of team compositions have you seen? Do you think there are different phases at which the ratio of designers to engineers starts to change?",
        answer: [
          "Yeah, I think design system teams generally start with a designer or an engineer or sometimes both. And the system includes a Figma file or a code library. So usually, it begins very tactically with a willingness to create tangible components that others can reuse. Many teams stay there, so the smaller design system teams that I've found either can't get funding past a certain point or open up headcount past a certain point, or they have tried and then had layoffs.",
          "The ones that can surpass that generally realize that they have way more engineering and design needs which they need to support. So they tend to add another designer or engineer to the mix. Often it's an engineer, so the team starts following one designer to two or three engineers ratio. Past that point, some level of management generally needs to happen, and sometimes one of those original team members becomes the design system product owner or design/engineering manager of that team.",
          "That's another plateau where it might sit for a while with around 5-6 people. The next level after that is the focus on the infrastructure. Some teams will add a project manager or a technical program manager. Many teams would also supplement a design ops person as a part of the design system. More mature teams also start hiring for less tactical roles and rather people who would focus on the team's holistic view. That could be a writer, a content designer, a strategist, or similar roles. So the larger teams that I've found are much more multidisciplinary.",
        ],
      },
      {
        question:
          "And regarding one of the team members growing into a product owner. Have you seen that happening a lot?",
        answer: [
          "Some people do. I think it depends on where they are in their career. Many people I've worked with in that role have been individual contributors for a while, and they wanted to try managing. And they know a ton about design systems. So a design system product owner is a good transition role for someone who wants to move into people management because it's still a technical role. It's still a contribution role. But it's more about making connections with people in the organization.",
          "I've seen that role happen a lot, especially with designers who didn't know what the next step in their career was. They didn't want to stay an individual contributor and didn't want to be a manager of like 30 people. So managing a team of three on a subject matter they're intimately familiar with – is a good role.",
        ],
      },
      {
        question:
          "What do you think are the most critical skills for the people transitioning into that role? It sounds quite different from a regular product owner role.",
        answer: [
          "Making friends. That's the largest skill that I've seen. I've worked with good product managers and product owners for design systems who are just really good at making friends. They're really good at knowing what other people are doing and finding a way they can present the design system as a help to them.",
          "They're the ones that are always snooping in people's roadmaps and staying interested in what's coming up for those teams. And then, they find an opportunity to help those teams by staying ahead on certain topics. So they're able to look ahead, but they're also able to make those connections and get people to confirm that they will spend time working with the design system team. That's a crucial skill.",
        ],
      },
      {
        question:
          "Let's talk a bit about craft now. One of the analogies I usually use is how many products are actually built in the same way. It's all lists and forms, they say. But every product still has its nuances that make them unique. Is the same applicable to design systems?",
        answer: [
          "To me, that is where I encourage teams to spend a lot of time. Everybody wants to build their version of Material Design or Polaris or whatever the popular public design systems are out there because they look great and helpful. They're well made, and they're well maintained.",
          "But for that, you might as well use those things, right? Material design's been working on their design system for ten years now. So what's to say that in one quarter, you're going to build your version of Material Design that they've been working on for ten years? People on those design system teams are also very experienced and smart. So I encourage teams not to make their version of Material Design. Instead, make a design system that you really need.",
          "I've worked with teams who don't need buttons in their design system because there could be a better use of their time. Instead, they could focus on a data table, for example, because that's a thing that 60% of their teams use. And so they'll spend a lot of time on that, and their data table will be very different than the one that MUI supports or that Lightning Design System supports because their table is for banking and not for a public-facing website.",
          "So I tend to encourage teams to look for what your design system needs. For example, you're an event company – make it easy for people to register for events. You're a bank – make it easy for people to open accounts. Then there are components that are well-suited to the company's value proposition.",
          "And again, you're now connecting your design system to the company's mission and purpose. It's not a handful of general things like tables, headers, and footers anymore.",
        ],
      },
      {
        question:
          "That's interesting you mentioned that if you are an event company, you should make it easier for people to book event tickets. How do you think that applies to a design system team? What is the right balance to improve the product experience and stay a platform team?",
        answer: [
          `I think that being a platform team is overrated. I think about it in the tension between questions like: "Do we choose our own goals as a design system team, or do we prioritize the product team's goals?".`,
          "For me, that's an easy answer. We prioritize the product team's goals because if you make an amazing platform, but your product teams can't sell the product or have people booking tickets – your company folds. What good is your platform at that point then? Of course, that's a highly exaggerated example, but I think design system teams are in service of product teams.",
          "So you pick their goals and make their jobs easier. You don't have to create something that helps the company make revenue, but you have to create something that helps someone help the company make revenue. The worst thing is when design systems have an offsite to go away and make a design system. I can only wish them good luck. It's one of the worst things you can do because you're intentionally disconnecting from what your organization needs to do.",
          "And at that point, you're building a library. How good is the library if nobody reads the books? Instead, if you were a library and focused on having books that people in your community wanted to read, you would have a lot of people there. And so that is the thing that design system teams get too caught up with making the best platform ever. They get disconnected, and you get the hierarchy of goals mixed up.",
        ],
      },
      {
        question:
          "And when you start paying more attention to the product, how would you measure that your approach is successful and that you're bringing value?",
        answer: [
          "It's tough. There are many things, but I'll narrow it down to one. All metrics are trailing indicators, so it's tough to measure them directly. But the one that I always look at first is retention for teams that have worked with the design system or design system team and teams that haven't.",
          `Most of the time, the teams that have worked with the design system team have higher retention over any given period. Over a quarter, over a year, over five years. That's what I think design systems should do. Design systems should make people's work easier. I think there's a correlation between "my work has been made easier, so I'm gonna stick around longer."`,
          "So I look at retention as a thing. It's useful to look at quantitative metrics, and the number of bugs filed and watch those reduced. Those things are important, but retention to me is one of the biggest indicators that design system work is going well.",
        ],
      },
      {
        question:
          "That's quite interesting, and it is the first time I have heard about someone measuring retention as a metric for their design team! Since we've started talking about craft, what do you think design system teams usually struggle with the most?",
        answer: [
          "There are generally two things I consider mandatory teaching when working with teams. The one big one is workflow. So even though it's not related to the design system specifically, I cannot work on design systems with teams without teaching them new workflow. That's because they tend to do things that work against the benefits of having a design system.",
          `For example, just yesterday, I was in a meeting with a client where the designer was planning to make a bunch of components the team needed, and everybody in the meeting was cool with that. But then I asked engineers in that meeting, and it turned out engineers didn't need those components. So I asked the designer why are we building them, and the answer was: "Because I thought engineers needed them."`,
          "What engineers really needed in that case was to get a list of the components and the tokens that had to be applied to drive the change, and it made sense for the designer as well. So instead of spending two days making all these components, we spent two hours putting together a spreadsheet of the token changes, and that was that.",
          "So it's all those things, and that's an isolated incident. But there's like hundreds of those things that add up and add up and add up. And that happens to the point that if we're working this way, we don't even need a design system because we're not taking advantage of it.",
          "If we're more collaborative and work together, you can do it very easily if you have a design system. You draw a box, and the engineer knows what that box is, and they just put it in the build. But instead, designers work the way they normally work, which pushes all of the work downstream. And that's what we've got to change because otherwise, it doesn't matter how good our design system is. No one's going to use it.",
          "If we predicate a new process and a new workflow on a design system as a central tool, it unlocks a ton of things, and it makes work easier for everybody. But we have to fight against how work has normally been done here in order to do that. That's one of the big ones that I face every single time.",
        ],
      },
      {
        question:
          "Definitely agree with this one. And what's the second hardest challenge you mentioned?",
        answer: [
          "The second thing that I like to teach is piloting. Many design system teams want to start by creating foundations – typography, color, and essential components. I wrote a blog post about this, but I think the word foundations is one of the most toxic ideas to enter design systems. I think it sets the precedent that first, you build a bunch of things that are really good, and then people use them. But has that ever worked? It has never worked because you're not starting with the people who use it; you're ending with those who are supposed to use it.",
          "That is the way I teach design systems to teams. We always start with what's done in the product, and then we pull stuff out of the existing product into a system.",
          "There are so many good things about doing it that way. You get an automatic contribution model if you take things out of the product. You get easier usage and adoption. And you're solving these challenges through the typical workflow that's much more natural to the teams rather than teaching them this whole new way of doing things.",
          "So that's the second thing that I always teach: how to pilot and how to use the product to pilot a design system.",
        ],
      },
      {
        question:
          "Those are great suggestions. How do you suggest teams keep following these as they grow? I've seen teams splitting design and engineering work sometimes, and some of the processes stop working so well because people get more isolated. What, in your experience, works better in those cases?",
        answer: [
          "I forbid them from being separate! Haha, no, I mean, that's a joke. I can't forbid anybody from doing anything, but as much as I can encourage it, I try to keep the design system team very cross-disciplinary. Good work comes from there. Designers and engineers need each other to work on these things, and they need them to be connected. Otherwise, how's their tool going to be connected?",
          "It's impossible. So I want to keep people, especially designers and engineers, together on the same team. Not even on the same team. In the same room, sitting next to each other so that they can wheel to each other's desks and work together and collaborate and work on things simultaneously.",
          "I have a process that I've put together with my friend Brad Frost. It's called a Hot Potato Process, which is about passing work back and forth as quickly as possible from designer to engineer because it keeps them in sync and connected. So when teams want to separate the design and engineering teams, I usually say no. We're not going to do that.",
          "We're actually going to make a cross-functional team. What's nice about doing this now as opposed to doing it seven years ago is there's much more precedent now for cross-functional teams that have more success than non-cross-functional teams. So usually, I don't have to argue too hard to make the point.",
        ],
      },
      {
        question:
          "When working with the teams, do you prefer having people who are already experienced in the design system space?",
        answer: [
          "My answer here is a bit self-selecting. In general, people who have more experience with design systems are an asset to any team. Especially if the design system is a new idea at a company, and the more people you have that have done it before, the better.",
          `However, when people bring me in and already have people on their team who have experience with design systems, there's that fundamental question: "If you already have experience, why would you bring me in?". So there's already potential conflict, and my answer is based on that since people admit that what they are doing is not working. Then they're open-minded enough to adopt new things.`,
          `So I very much subscribe to the famous Dr. Phil line: "How's that working for you?". If you already know what you're doing – cool. At that point, I understand that my role is maybe to say things they've already said but just from a different person's perspective, which can be helpful.`,
          "So it's a bit of a self-selecting scenario that I find myself in, where design system expertise is generally good. But if you're unwilling to unlearn new things that I might bring to the table, that becomes difficult for me and everybody else.",
        ],
      },
      {
        question: `And were there cases when you were invited, and there were almost no people or exactly zero people on the design system team, and you had to build the team from the ground up?`,
        answer: [
          "Yeah, one of the clients that I worked with a year ago. I started on day one with everybody else. It was a new team, and they met each other for the first time. So we formed it right from scratch. And in many ways, it was one of the most challenging things I've done because we're now forming new culture, bonds, and rituals.",
          "In another way, it was cool because we had no precedent to fight. So definitely pros and cons to it. But I will say that I enjoy it more that way when we're starting from scratch.",
        ],
      },
      {
        question:
          "If you were starting from scratch, what would you expect from people? What kind of skills do you think are most important for designers and engineers?",
        answer: [
          "Open-mindedness and curiosity. I can work with anyone at any level that has those two things. The opposite end of the spectrum is people who are super skilled, close-minded, and not curious. And I don't know how to work with those people because it's tough. So I'd instead take junior designers and engineers who are open, and there's so much benefit to that attitude. Those are the kinds of people who are not afraid of getting things wrong. So they try a lot of things, and I think design system work is you get a bunch of things wrong, and that has to be fine. You have to miss a couple of times.",
          "I don't have any criteria where they have to know this much about React or be this good with Figma. We could easily work on that. We can grow those things over time, but it takes time to develop open-mindedness and curiosity.",
        ],
      },
      {
        question:
          "I agree with that. It's fine to make mistakes when you start, but there are also probably use cases when making mistakes can cost you a lot in the future because they might be fundamental mistakes. Have you seen teams making such mistakes?",
        answer: [
          "One of the biggest mistakes teams make is spending too much time on something. For example, when they go away for six months because they're going to make really good fundamentals. The expectation that comes with that this thing they're coming back with is better be amazing. Whereas it's okay to make mistakes if you spent six hours on something. People can only expect that it would be so good. So if you mess it up, it's fine. No problem.",
          "That way, we gain more confidence that certain things work and do more of them. Other things don't work, so we'll do a little bit less of them, and we could tailor from there. I think when design systems teams try to take on too much, they raise expectations whether they know it or not, which becomes a problem.",
        ],
      },
      {
        question:
          "Those were a lot of great and applicable practices you've shared, thank you. One last question I ask everyone about. What would be one most valuable thing you suggest for the design system teams just starting to build their system now?",
        answer: [
          "I think the list of things they're not going to do should be longer than the list of things they are. When they're just starting, teams try to do everything. We're going to have 60 components, and we're going to have 10 variants of each component, and it's going to be this great, amazing, big-scale system. But you have no idea whether or not that could be successful at this point. It's just too big of an ask. It's too big of a promise.",
          "What I work on with teams a lot is that we're going to ship two things in the next three months. That's trivial. And we could always do more. But it's hard to do less. It's hard to say we will do 50 things and then show up with two. It's much easier to say that we're going to do two things and show up with 50. So you should set expectations correctly, and it is fine if you want to overdeliver on that. You could reset the expectations when you know that you will deliver more.",
          "But many teams have a lot of ambition, which is good, but they can't deliver on that ambition, which then becomes problematic.",
        ],
      },
    ],
    highlights: [
      "With design system teams that tend to work only on the system itself – there is a bigger chance they're making a monster in a lab, and they have no idea what that monster will do once it's in public.",
      "I think design system teams sometimes overreach in the power they want to have. They want to be the ones who establish the standards. In my opinion, they're the ones who should take the standards that are emerging from the product teams, and then they can make them official and scale them.",
      "I'd instead take junior designers and engineers who are open-minded, and there's so much benefit to that attitude. Those are the kinds of people who are not afraid of getting things wrong. They try a lot of things, and I think design system work is you get a bunch of things wrong, and that has to be fine.",
      "It's risky when expectations from a product team are that the design system team will give them exactly what they need in the exact form they need. That's not a design system. That's a product team augmentation.",
    ],
  },
};

export default data;
