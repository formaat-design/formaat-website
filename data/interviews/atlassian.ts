import type { Interview } from "../../types/global.types";

const data: Interview = {
  id: "atlassian",
  meta: {
    preview: "/img/interviews/atlassian/social.png",
  },
  company: {
    name: "Atlassian Design System",
    logoUrl: "/img/interviews/atlassian/logo.svg",
  },
  interviewee: {
    name: "Jennie S Yip",
    photoUrl: "/img/interviews/atlassian/avatar.png",
    bio: "Hybrid design engineer who loves elegant user interfaces, intuitive user experiences, and beautifully crafted code. Loves building scalable design systems while helping designers and engineers work better together.",
    links: [
      {
        label: "Atlassian Design",
        href: "https://atlassian.design/",
      },
      {
        label: "@jenniesyip",
        href: "https://twitter.com/jenniesyip",
      },
    ],
  },
  interview: {
    description:
      "Atlassian’s end-to-end design language to create simple, intuitive and beautiful experiences. It's passing its 10 year mark at the time of interview and is developed to work across all Atlassian products.",
    date: "2022-10-31",
    items: [
      {
        question:
          "What's your current title, and what is your role in the team?",
        answer: [
          "My title has recently evolved to Principal Design Architect for Atlassian Design System. I'm part of the craft leadership squad, where we oversee the end-to-end vision and strategy for the team. This cross-functional squad comprises our architects and most senior ICs — a design architect, an engineering architect, a content design lead, a product manager, and a program manager.",
          "We call ourselves the “crafties” and help oversee all the streams of work at a big-picture level. We partner with another leadership squad, which consists of people leaders who oversee the business and operations for the team.",
        ],
      },
      {
        question:
          "Is there someone overlooking both of these groups? Or do you operate on the same level independently?",
        answer: [
          "We're embedded in a larger UI Platform organization, which consists of 3 main teams: developer experience, front-end platform, and design system.",
        ],
      },
      {
        question:
          "That makes sense. And a bit about the design system itself, does it have a name, and what's the story behind it?",
        answer: [
          "Our design system is called Atlassian Design System and it is turning ten years old this year!",
          "When our Chief Experience Officer, Jurgen Spangl, joined in 2012, he advocated the need for a design system for establishing a shared language. The first version of our design guidelines was called Atlassian Design Guidelines (ADG), and the code implementation was called Atlassian UI (AUI) — an HTML, CSS, and JS framework.",
          "Two years later, ADG 2 was released. That is when Atlassian brought the brand and product closer together as a brand personality began to form. In 2016, ADG 3 revealed a huge rebrand, and that's the look and feel you see in all the Atlassian products today. We released Atlaskit with ADG 3 and moved from the HTML, CSS, and JS framework to React.",
          'Over the years, Atlaskit and ADG became very inconsistent and hard to maintain. So when I joined the team in 2019 as a Lead Designer, my first project was redesigning the experience and combining all the content guidelines and components into a new home, which is what you see on <a href="https://atlassian.design" target="_blank">atlassian.design</a> today. This is the beginning of transforming our entity more formally into a design system.',
        ],
      },
      {
        question:
          "Wow, it sounds like Atlassian Design System has a long history. I still remember when I visited Atlaskit for the first time. It looked more like a collection of components, and some of the components were purely technical. Now your documentation looks way more aligned with the design guidelines.",
        answer: [
          "Over the years, Atlaskit evolved into a monorepo that shared infrastructure for all developers. More and more developers started putting their front-end components in there. What you see on Atlaskit now is a shared library of various components created and maintained by many teams, not just ours.",
          "A key thing to note is that Atlaskit is NOT the Atlassian Design System. It’s just a UI component library. There are design system components and other components from product teams like Confluence and Jira, all co-located there.",
          "We moved the design system components out of the Atlaskit website specifically to harden that boundary and clarify which parts belong to the design system. That way, users know which ones our team owns and maintains.",
        ],
      },
      {
        question:
          "And what is the current scope of the design system? For example, do you only maintain component libraries, or do you also invest in tooling?",
        answer: [
          "There are the typical outputs that we have — we have Figma and React libraries and our documentation site. Along with that, we are creating tooling and always thinking about the user's experience of using our design system. How do we continuously evolve and take the system forward easily and harmoniously? What's the next big thing for it?",
          "For example, we've been putting a lot of thought into our new color system, design token, and theming infrastructure. With these new systems, how do we onboard our users? How do we assist them in easily refactoring their code bases or updating their design files?",
          "For developers, we are investing in tools, such as IDE plugins and codemods to help automate migrations. For designers, we want them to migrate seamlessly from our old color palettes to the new palette, so we're building a Figma plugin to assist with that. Along with tooling, we have to think about creating methods and systems to support onboarding as well.",
        ],
      },
      {
        question:
          "Let's talk about your team for a while. First of all, how big is it, and what's the ratio of designers to developers to other roles?",
        answer: [
          "We have a pretty big team right now. It fluctuates around 30 people, but we're doubling the team because we got funding with our new vision. Securing the funding helps a lot because we're setting our team up for success by helping us operate like product teams — finally, we're treating our system like a product!",
          "For each team, we’re setting them up with a product manager, an engineering manager, and a design manager. Then we have about three designers per team, one content designer, and up to ten engineers. We have two teams now, and we’re adding two more teams over the next year.",
        ],
      },
      {
        question:
          "You said you are scaling because you are thinking about building more tools for specific use cases your design system needs to support. Does that mean that people who join will be focused more on the tooling side of things?",
        answer: [
          "A little bit of everything. Tooling is just one part. Our new vision and strategy are about reimagining how all the parts in our system can work better at scale. For example, if you look at our components, they're really not atomic nor composable. Everything is superglued together. So you'll see that we are reinvesting in hardening our foundations to redefine our sub-systems such as color, space, typography, and layout.",
          "Atlassian is going through hypergrowth. We used to have five products, and now we have over 18. We started with six designers back in the day, and we have over 450 designers now. So we definitely have to make the system more flexible and composable to meet our needs.",
        ],
      },
      {
        question:
          "At this scale, how do you think design system teams should operate?",
        answer: [
          'There are different layers and types of work. There is a book called "Org Design for Design Orgs" by Peter Merholz and Kristin Skinner, where they talk about the layers of scope and scale — the surface layer, structure, strategy, and the big picture. So speaking in these terms, I\'m covering strategy and the big picture, and then I have other teammates at each layer working from surface to structure to strategy.',
          "Starting out in design systems, we enter the surface layer. In their day to day, they're receiving focused and specific tasks. They're looking at research, visual design, and things like typography, color, layout, etc. They're developing their craft and learning about design systems.",
          "The next layer up, we have those with mid-level to senior experience. They're working on the overall strategy of how to lay our foundation, setting infrastructure, and creating new tooling. They are establishing standards and best practices, helping shape that language.",
          "For leads and principals, we start working more with leadership, working together to get buy-in and funding, hiring and scaling our team, and big-picture things like our new vision and strategy. We’re connecting the design system to more of the business value. Every layer leads and coaches others.",
        ],
      },
      {
        question: "How does that translate to your role in the organization?",
        answer: [
          "I've been learning a lot as I've grown in my role over the past few years. What are we working on, and why? Why do we exist? What direction are we heading in? What makes a vision and strategy concrete? How do we get buy-in and funding to reinvest in the system to evolve it? My day-to-day is very much less in surface and structure layers these days.",
          "A big part of my role is leading the creation and evangelization of our vision and strategy. It’s about looking into the future, leading strategic initiatives, and engaging with stakeholders to define how our systems of systems will become.",
          "I've learned how to let go of all the day-to-day in-the-weeds things. The more I let go, the more others have room to grow in their roles. So I'm staying high level, and if they get stuck or need some coaching – I'm always there to help.",
        ],
      },
      {
        question:
          "You mentioned before that you are getting more funding, which connects well with the story and helps people understand that system has to evolve. What was the switch between these two situations? How did you get people from not seeing the potential to having their full buy-in?",
        answer: [
          "You know how I said that the third version was released, and there was no formal team governing it? So you can imagine how almost everything automatically went into the system through all sorts of varying contributions, which created API and designs that were quite inconsistent. All these factors are invisible, all very messy.",
          'All the pains the team faced also stayed invisible, and it felt like this for a good two and a half years. It got me to a point when I wrote up an extensive diagnosis of "The State of Atlassian Design System" — I articulated our deepest systemic problems: why the system was not modern, why it couldn\'t scale, and what patterns we faced repeatedly.',
          "This analysis drew the attention of the CXO, who was shocked at the state it was in, since the design system was near and dear to him. So he started getting closer to the problem to understand why we needed to invest in the design system again.",
          "The team hit a point where we just couldn't scale or evolve the system further. Instead, we were drowning in KTLO, support, and maintenance. The diagnosis was the catalyst of a months-long effort — the creation of a strong business case with our leadership team — where we crafted a story to share our vision and strategy, backed up by ROI numbers to secure funding, trust, and a shared understanding.",
        ],
      },
      {
        question:
          "That's great that your business case played out well. How do you govern the design systems now that you have more resources?",
        answer: [
          "When you're creating a vision, not only do you need to establish a story and strategy for where you want to go, you want to take others along the journey. You want to inspire them to help make the vision come true because they want to live in the future where the vision is a reality.",
          "In Atlassian, we've called our approach to governance — local design systems, which empower systems of systems. Teams are already organically forming local systems. There are tons of them created by product teams, and there is a brand design system created by marketing. They all inherit the design guidance and foundations from Atlassian Design System.",
          'There is a lot for us to structure and document to create methods and systems for scale. We need to answer questions like "What are local systems" or "What belongs in this system or that system" or "How do we help them govern or manage their local systems"?',
          'We\'re also thinking of the concept of "pervasive API". As a developer or designer using components from different local systems, I wouldn\'t care much about which team is maintaining them. I just want all the components I\'m using to work cohesively together — the API should be consistent, intuitive, and easy to use. It should be "pervasive" across our entire ecosystem.',
          'As a team, we consider this to be our responsibility to provide the best practices for a "pervasive API" that powers the best experience of using our tools and systems of systems. We will guide other teams to seamlessly design their components\' API for their local systems.',
        ],
      },
      {
        question:
          "With such detailed guidelines, how do you make sure teams are following them?",
        answer: [
          "Our vision is: Atlassian Design System is the cornerstone of crafting quality user interfaces at scale. Our values talk about moving from an enforcing model to an empowering one.",
          "Our foundations have to be easy to understand and consume, and we'll support this through tooling. We want to guide teams to make the right decision, not police them. We've done the research and would like you to trust our guidance to empower you to make confident design decisions. If they decide to stray from it – that's up to them.",
          'As a team, this is our responsibility to provide API design guidance for other teams. For example, create guidance to avoid rethinking how we work with interaction states of the components. If we call it an "error" in one place, we don\'t want a component from a local system to call it "danger".',
        ],
      },
      {
        question:
          "Speaking about your design system implementation, what do you think makes your design system stand out when compared to other design systems? Any problem you're solving that makes it unique?",
        answer: [
          "I think many people implement design tokens and theming to support multibrand. When it comes to us, Atlassian is a branded house, not a house of brands. We have many different products, and we want them all to look harmonious and look Atlassian. Whereas many other teams doing theming apply the same theme but for different brands, right? Those are the house of brands. Often when you meet or see systems doing that, you see that the output is all the same templates and flows. Our system was originally built for our Flagship products like Jira and Confluence. But now we're maturing and growing, and we need to get additional products on board, to serve a variety of needs.",
          "We're launching new products. They need to spin up as fast as possible. They need to have more flexibility, they have more personality. Then we also acquire other companies. They could be on different tech stacks and already have a design system.",
          "Our design system now needs to serve this whole spectrum of different brands and different products. So it's a little bit harder to rebuild these foundations to be extensible but adaptable for that spectrum.",
        ],
      },
      {
        question:
          "And how do you approach theming in general? For example, do you allow for more customization of components based on which brand is using the system?",
        answer: [
          "Great question. We cannot just do whatever we want; the brand strategy always informs us. So we split our products into three layers with a spectrum of flexibility.",
          "First, we have our flagship products: Jira, Confluence, and Trello. They have a little more flexibility to bring more personality and signature experiences.",
          "Then we have another layer of platform products. We want them to be consistent enough. Teams can use primitive components to compose custom UI for those products.",
          "Finally, we have another layer of products, which are all the rest of the Atlassian products, like Bitbucket and Statuspage. They should be the least flexible on this spectrum and look very consistent across. For example, they use the system as it is and shouldn't be applying random colors via themes. They all should look very uniformly Atlassian.",
        ],
      },
      {
        question:
          "That's interesting how you split them into groups based on the purpose of the product, and it clearly shows how much history your design system has. What do you think was the most complex challenge for the team when working on the system so far?",
        answer: [
          "We are building for internal Atlassians but also for external developers and designers using the system to build integrations to our products. One of the biggest challenges is communicating clearly and transparently to create trust. It’s like working with an open-source community, but sometimes we can't tell them everything related to the business side of things. We need a better change management strategy. So that's one of the hardest things. External users can't see what you're working on to see the bigger picture.",
        ],
      },
      {
        question:
          "I never thought external developers and designers also used the Atlassian design system. And having external users always makes you move slower and question the decisions more. Was any decision in the past few years that went wrong and that you would do differently now?",
        answer: [
          'When I joined three years ago, we developed a strategy for the team. We got all the leads together and said: "Here are ALL the topics we need to work on". I learned from that experience that we\'ve created that poor strategy without thinking of ways to put them in a framework for sequencing and prioritizing them better. I used to joke that it was our 10-year wishlist. We tried to stack them in priority, but it really was a long list that we chipped away at. Not strategic.',
          "I've learned a lot about what a good strategy and a bad strategy are. It was a big difference for us when we refreshed the strategy the past year. We created frameworks to chunk topics down into sequences. For example, we've used the Horizons of Growth and Innovation framework.",
          "The first horizon concerns laying the foundations, building the infrastructure, fixing existing parts, and meeting compliance to modernize the system. The second horizon is about building on top of the first one. It's taking those parts to extend and mature them. And the third horizon is focused on innovation. It's about projecting the future, thinking about how we evolve at scale, and building a community around it. The key, though, is working on all of the horizons concurrently. And through all of it, we are focusing on the best designer/developer experience.",
        ],
      },
      {
        question:
          "How do you handle the situation when you're working on something from the first horizon, and you get a request from your users asking for the implementation from the third horizon, for example?",
        answer: [
          "That's something that happens all the time. And that's something that makes using the new vision and strategy really helpful for us. We can use it to tell them which direction we're heading and why and work together with everyone to shape this future.",
          "We've also learned over the past few years to avoid trying to solve all the problems simultaneously and then feel overwhelmed. Our vision and strategy artifacts helped us have a strong stance, united voice, and mature as a system.",
        ],
      },
      {
        question:
          "It sounds like you all have spent a lot of effort to make this work. Is there something that makes you proud when working with your team?",
        answer: [
          "I love our team. We've gone through a lot over the past couple of years, but together we've made it through. Now we have new leadership along with vision and strategy, which helps us stay aligned and motivated. Going through all these ups and downs has brought the team closer because we are very open and vulnerable. That has also generated more trust within the team.",
          "I'm also really happy that we now have a lot of hybrids on the team. More designers are interested in engineering, and more engineers are interested in design. Years ago, our team was pretty siloed between design and engineering. Hybrids are helping bridge the gaps between siloes. We've been actively working on changing the culture and getting everyone working on initiatives together from the beginning, and this part has really evolved in the past years. It puts us in a great spot as we prepare to scale up our team.",
        ],
      },
      {
        question:
          "What would be the best advice you could give to people just starting with the design systems?",
        answer: [
          'When design systems start out, they immediately look to all these "world-class" design systems as a reference. I experienced this myself. A lot is happening behind the scenes. I always remind myself and others not to compare what they\'re building to these massive design systems because, most of the time, they are building for a different scale and spectrum of complexity. Products are different. Needs are different. The size of the team is different.',
          "Instead, go and meet and greet with the people you're building the system for. Learn what they need from the system, and establish relationships with them. Build what they need, meet them where they are, and then just start. We can synthesize learnings from the big design systems, but what you should be aiming for is to start small. Start small and strategically implement your system as a living thing so it can continuously evolve. Stay humble, friends!",
          "If you think that you have to build 60 components to cover the whole product from the start, it's usually better to ship just a small part of that and see how it works in the product instead of building everything immediately just to find out people don't need all of it.",
          "Start small and strategically implement your system as a living thing so it can continuously evolve. ",
        ],
      },
    ],
    highlights: [
      "When you're creating a vision, not only do you need to establish a story and strategy for where you want to go, you want to take others along the journey. You want to inspire them to help make the vision come true because they want to live in the future where the vision is a reality.",
      "I've learned how to let go of all the day-to-day in-the-weeds things. The more I let go, the more others have room to grow in their roles. So I'm staying high level, and if they get stuck or need some coaching – I'm always there to help.",
      "We've learned over the past few years to avoid trying to solve all the problems simultaneously and then feel overwhelmed. Our vision and strategy artifacts helped us have a strong stance, united voice, and mature as a system.",
    ],
  },
};

export default data;
