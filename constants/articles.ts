import { Article } from "../models/general/Article";
import { SideBarTopic } from "../models/guides/SideBarTopic";
import { MenuItem } from "../models/layouts/MenuItem";

export const DATA_GUIDE_ARTICLES = [
  new Article(
    new MenuItem("Business data analysis", "business-data-analysis"),
    "Business data analysis",
    `A complete beginner's guide to learning everything you should know about business data analysis`,
    new Date(),
    3
  ),
  new Article(
    new MenuItem("What is data entry?", "what-is-data-entry"),
    "What is data entry?",
    `A quick guide to data entry`,
    new Date(),
    3
  ),
  new Article(
    new MenuItem("What is data visualization?", "data-visualization"),
    "What is data visualization?",
    `Data visualization definition and examples`,
    new Date(),
    55
  ),
];

// new Article( '33',`description`, new Date() , 3),
export const BUSINESS_GUIDE_ARTICLES = [
  new Article(
    new MenuItem(
      `What is emotional intelligence & why is it important in the workplace?`,
      "emotional-intelligence-eq"
    ),
    `What is emotional intelligence & why is it important in the workplace?`,
    `Emotional intelligence (EQ) definition and impact on team performance`,
    new Date(),
    3
  ),
  new Article(
    new MenuItem(`What is crowdfunding?`, "what-is-crowdfunding"),
    "What is crowdfunding?",
    `An easy introduction into crowdfunding`,
    new Date(),
    3
  ),
  new Article(
    new MenuItem(`What is a virtual office?`, "virtual-office"),
    "What is a virtual office?",
    `Learn how can a virtual office benefit your business`,
    new Date(),
    3
  ),
];

export const PROGRAMMING_AND_TECH_GUIDE_ARTICLES = [
  new Article(
    new MenuItem(`What is Roblox?`, "what-is-roblox"),
    "What is Roblox?",
    `A beginners' guide to Roblox`,
    new Date(),
    3
  ),
  new Article(
    new MenuItem(
      `Web development basics (a beginner's guide)`,
      "web-development"
    ),
    `Web development basics (a beginner's guide)`,
    `A simple introduction to web development`,
    new Date(),
    3
  ),
  new Article(
    new MenuItem(
      `What is the difference between Java and JavaScript?`,
      "java-vs-javascript"
    ),
    `What is the difference between Java and JavaScript?`,
    `Understanding the key differences between Java and JavaScript`,
    new Date(),
    3
  ),
];

//    new Article( ``,`description`, new Date() , 3),
export const WRITING_AND_COPY_WRITE_GUIDE_ARTICLES = [
  new Article(
    new MenuItem(
      `What is UX writing and what does a UX writer do?`,
      `what-is-ux-writing`
    ),
    `What is UX writing and what does a UX writer do?`,
    `Beginner's guide to UX writing`,
    new Date(),
    3
  ),
  new Article(
    new MenuItem(
      `What is technical writing & what does a technical writer do?`,
      `what-is-technical-writing`
    ),
    `What is technical writing & what does a technical writer do?`,
    `A complete guide to understanding everything you need to know about technical writing, and technical writers`,
    new Date(),
    3
  ),
  new Article(
    new MenuItem(
      `What is copywriting and what does a copywriter do?`,
      `what-is-copywriting`
    ),
    `What is copywriting and what does a copywriter do?`,
    `A complete guide to understanding everything you need to know about copywriting, and copywriters`,
    new Date(),
    3
  ),
];

export const VIDEO_AND_ANIMATION_GUIDE_ARTICLES = [
  new Article(
    new MenuItem(
      `What is a GIF, and how do you make your own?`,
      `what-is-a-gif`
    ),
    `What is a GIF, and how do you make your own?`,
    `Everything you need to know about GIFs`,
    new Date(),
    3
  ),
  new Article(
    new MenuItem(`What is an explainer video?`, `what-is-an-explainer-video`),
    `What is an explainer video?`,
    `Everything you need to know about explainer videos`,
    new Date(),
    3
  ),
  new Article(
    new MenuItem(`How to live stream an event`, `how-to-livestream`),
    `How to live stream an event`,
    `A step-by-step guide covering the key steps for live streaming an event`,
    new Date(),
    3
  ),
];

export const MUSIC_AND_AUDIO_GUIDES_ARTICLES = [
  new Article(
    new MenuItem(`What is a webinar?`, "what-is-a-webinar"),
    `Title`,
    `description`,
    new Date(),
    3
  ),
  new Article(
    new MenuItem(
      `what-is-voice-over-and-how-to-record-quality-video-voiceovers`,
      `What is voice-over? all you need to know (a complete guide)`
    ),
    `Title`,
    `description`,
    new Date(),
    3
  ),
  new Article(
    new MenuItem(
      `What is an audiobook and how do you make one?`,
      `what-is-an-audiobook`
    ),
    `Title`,
    `description`,
    new Date(),
    3
  ),
];

export const GRAPHIC_AND_DESIGN_GUIDE_ARTICLES = [
  new Article(
    new MenuItem(
      `What is user experience (UX) design?`,
      `graphic-design/what-is-ux-design`
    ),
    `Title`,
    `description`,
    new Date(),
    3
  ),
  new Article(
    new MenuItem(`Packaging boxes`, `packaging-boxes`),
    `Title`,
    `description`,
    new Date(),
    3
  ),
  new Article(
    new MenuItem(`What is an NFT?`, `nft-non-fungible-token`),
    `Title`,
    `description`,
    new Date(),
    3
  ),
];

export const DIGITAL_MARKETING_GUIDE_ARTICLES = [
  new Article(
    new MenuItem(`What is affiliate marketing?`, `what-is-affiliate-marketing`),
    `Title`,
    `description`,
    new Date(),
    3
  ),
  new Article(
    new MenuItem(`What is content marketing?`, `what-is-content-marketing`),
    `Title`,
    `description`,
    new Date(),
    3
  ),
  new Article(
    new MenuItem(
      `What is email marketing?`,
      `digital-marketing/what-is-email-marketing`
    ),
    `Title`,
    `description`,
    new Date(),
    3
  ),
];

export const ALL_GUIDES_ARTICLES = [
  new SideBarTopic(
    new MenuItem("Data Guides", "/resources/guides/data"),
    DATA_GUIDE_ARTICLES,
    DATA_GUIDE_ARTICLES.slice(0, 3)
  ),
  new SideBarTopic(
    new MenuItem(`Business guides`, "/resources/guides/business"),
    BUSINESS_GUIDE_ARTICLES,
    BUSINESS_GUIDE_ARTICLES.slice(0, 3)
  ),
  new SideBarTopic(
    new MenuItem(
      `Programming & tech guides`,
      "/resources/guides/programming-tech"
    ),
    PROGRAMMING_AND_TECH_GUIDE_ARTICLES,
    PROGRAMMING_AND_TECH_GUIDE_ARTICLES.slice(0, 3)
  ),
  new SideBarTopic(
    new MenuItem(
      `Writing and copywriting guides`,
      "/resources/guides/writing-and-copywriting"
    ),
    WRITING_AND_COPY_WRITE_GUIDE_ARTICLES,
    WRITING_AND_COPY_WRITE_GUIDE_ARTICLES.slice(0, 3)
  ),
  new SideBarTopic(
    new MenuItem(
      `Video & animation guides`,
      "/resources/guides/video-animation"
    ),
    VIDEO_AND_ANIMATION_GUIDE_ARTICLES,
    VIDEO_AND_ANIMATION_GUIDE_ARTICLES.slice(0, 3)
  ),
  new SideBarTopic(
    new MenuItem(`Music & audio guides`, "/resources/guides/music-audio"),
    MUSIC_AND_AUDIO_GUIDES_ARTICLES,
    MUSIC_AND_AUDIO_GUIDES_ARTICLES.slice(0, 3)
  ),
  new SideBarTopic(
    new MenuItem(
      `Graphics & design guides`,
      "/resources/guides/graphic-design"
    ),
    GRAPHIC_AND_DESIGN_GUIDE_ARTICLES,
    GRAPHIC_AND_DESIGN_GUIDE_ARTICLES.slice(0, 3)
  ),
  new SideBarTopic(
    new MenuItem(
      `Digital marketing guides`,
      "/resources/guides/digital-marketing"
    ),
    DIGITAL_MARKETING_GUIDE_ARTICLES,
    DIGITAL_MARKETING_GUIDE_ARTICLES.slice(0, 3)
  ),
];

export const ARTICLE_PARAGRAPH = `Making the best decisions for your business, achieving your goals, and overcoming potential problems can all be attributed to business data analysis, yet sadly, not every business owner is embracing this process.

We get it: business data analysis can be hard to wrap your head around, especially when the discipline isn’t only relatively new, but also has its roots firmly in concepts such as Big Data and complex mathematical equations. Yet here’s the thing: 100% of US marketers feel that data and analytics will play a crucial role in the future of business, and they’re certainly not wrong.

Thankfully, we’ve developed this helpful guide to tell you everything you need to know about business data analysis.`;
