import { GuideSidebar } from "../models/guides/GuideSidebar";
import { SideBarTopic } from "../models/guides/SideBarTopic";
import { Accordion } from "../models/layouts/Accordion";
import { MenuItem } from "../models/layouts/MenuItem";
import {
  BUSINESS_GUIDE_ARTICLES,
  DATA_GUIDE_ARTICLES,
  DIGITAL_MARKETING_GUIDE_ARTICLES,
  GRAPHIC_AND_DESIGN_GUIDE_ARTICLES,
  MUSIC_AND_AUDIO_GUIDES_ARTICLES,
  PROGRAMMING_AND_TECH_GUIDE_ARTICLES,
  VIDEO_AND_ANIMATION_GUIDE_ARTICLES,
  WRITING_AND_COPY_WRITE_GUIDE_ARTICLES,
} from "./articles";

const BROWSE_ACCORDION = [new MenuItem("Graphic & Design", "/graphic", "")];
const EXPLORE_ACCORDION = [
  new MenuItem("Discover", "/discover", ""),
  new MenuItem("Guides", "/guides", ""),
  new MenuItem("Learn", "/learn", ""),
  new MenuItem("Logo Maker", "/logo-maker", ""),
  new MenuItem("Community", "/community", ""),
  new MenuItem("Podcast", "/podcast", ""),
  new MenuItem("Blog", "/blog", ""),
  new MenuItem("Friendly Workspace", "/friendly-workspace", ""),
];

export const ASIDE_ACCORDIONS = [
  new Accordion("Browse Categories", BROWSE_ACCORDION),
  new Accordion("Explore", EXPLORE_ACCORDION),
];

export const GUIDES_BASIC_TOPICS_ACCORDIONS = [
  new MenuItem("Data Guides", "/resources/guides/data"),
  new MenuItem("Business Guides", "/resources/guides/business"),
  new MenuItem(
    "Programming & Tech Guides",
    "/resources/guides/programming-tech"
  ),
  new MenuItem(
    "Writing & Copywriting Guides",
    "/resources/guides/writing-and-copywriting"
  ),
  new MenuItem("Video & Animation Guides", "/resources/guides/video-animation"),
  new MenuItem("Music & Audio Guides", "/resources/guides/music-audio"),
  new MenuItem("Graphics & Design Guides", "/resources/guides/graphic-design"),
  new MenuItem(
    "Digital Marketing Guides",
    "/resources/guides/digital-marketing"
  ),
];

// export const GUIDES_MOST_POPULAR_TOPICS_ACCORDIONS = [
//   new MenuItem('What is digital marketing?', '/resources/guides/data'),
//   new MenuItem('How to start an online business from home', '/resources/guides/data'),
//   new MenuItem('15 Ways to promote your business online', '/resources/guides/data'),
//   new MenuItem('How to turn your skills into a profitable side business', '/resources/guides/data'),
// ];

// export const DATA_GUIDE_ARTICLES = [
// new MenuItem('Business data analysis', 'business-data-analysis'),
// new MenuItem('What is data entry?', 'what-is-data-entry'),
// new MenuItem('What is data visualization?', 'data-visualization') ] ;

// export const BUSINESS_GUIDE_SUBMENU = [
//   new MenuItem(`What is emotional intelligence & why is it important in the workplace?`, 'emotional-intelligence-eq'),
//   new MenuItem(`What is crowdfunding?`, 'what-is-crowdfunding'),
//   new MenuItem(`What is a virtual office?`, 'virtual-office') ];

// export const PROGRAMMING_AND_TECH_GUIDE_SUBMENU = [
//   new MenuItem(`What is Roblox?`, 'what-is-roblox'),
//   new MenuItem(`Web development basics (a beginner's guide)`, 'web-development'),
//   new MenuItem(`What is the difference between Java and JavaScript?`, 'java-vs-javascript') ] ;

// export const WRITING_AND_COPY_WRITE_GUIDE_SUBMENU = [
//   new MenuItem(`What is UX writing and what does a UX writer do?`, `what-is-ux-writing`),
//   new MenuItem(`What is technical writing & what does a technical writer do?`, `what-is-technical-writing`),
//   new MenuItem(`What is copywriting and what does a copywriter do?`, `what-is-copywriting`) ];

// export const VIDEO_AND_ANIMATION_GUIDE_SUBMENU = [
//   new MenuItem(`What is a GIF, and how do you make your own?`, `what-is-a-gif`),
//   new MenuItem(`What is an explainer video?`, `what-is-an-explainer-video`),
//   new MenuItem(`How to live stream an event`, `how-to-livestream`) ];

// export const MUSIC_AND_AUDIO_GUIDES = [
//   new MenuItem(`What is a webinar?`, 'what-is-a-webinar'),
//   new MenuItem(`what-is-voice-over-and-how-to-record-quality-video-voiceovers`, `What is voice-over? all you need to know (a complete guide)`),
//   new MenuItem(`What is an audiobook and how do you make one?`, `what-is-an-audiobook`) ];

//   export const GRAPHIC_AND_DESIGN_GUIDE_SUBMENU = [
//     new MenuItem(`What is user experience (UX) design?`, `graphic-design/what-is-ux-design`),
//     new MenuItem(`Packaging boxes`, `packaging-boxes`),
//     new MenuItem(`What is an NFT?`, `nft-non-fungible-token`) ];

// export const DIGITAL_MARKETING_GUIDE_SUBMENU = [
//   new MenuItem(`What is affiliate marketing?`, `what-is-affiliate-marketing`),
//   new MenuItem(`What is content marketing?`, `what-is-content-marketing`),
//   new MenuItem(`What is email marketing?`, `digital-marketing/what-is-email-marketing`) ];

export const GUIDES_MOST_POPULAR_TOPICS_ACCORDIONS = [
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
