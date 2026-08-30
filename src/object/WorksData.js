// Each work has a unique `id`. Use these ids to choose which works appear on
// the /home-uds-crag variant page (edit `selectedIds` in
// src/components/HomeUdsCrag.js). Active works are 1–9 in display order;
// commented-out works use 10+ so uncommenting them never collides with an id.
//
//   id 1  Refresh Bar (Hackathon)
//   id 2  Safety (TTC)
//   id 3  Eden Story (food bank)
//   id 4  Travel Offline
//   id 5  Account Manager
//   id 6  Pet App
//   id 7  Claude Design (prototyping to handoff)
//   id 8  Transaction Management (real estate)
//   id 9  About
const worksData = [
  { id: 1, imagePath: require("../image/work_index/top_refresh_bar.png"), alt: 'ArtSharingWebsiteDetail', link: '/works/refreshbar', tag1: " ", tag2: "Service Design", number: "01", title: "Maintaining the creativity of 200 people at a day-long Hackathon", status: "Client Work (Internship) / 2019", question: "How might we maintain creativity at a day-long Hackathon?" },
  { id: 2, imagePath: require("../image/work_index/top_ttc_research.png"), alt: 'ArtSharingWebsiteDetail', link: '/works/safety', tag1: "", tag2: "Service Design", number: "02", title: "Providing a safer experience in public transit (TTC)", status: "School Project / 2023(2nd Year)", question: "How might we provide a safer experience in public transit?" },
  { id: 3, imagePath: require("../image/work_index/top_eden_story.jpg"), alt: 'ArtSharingWebsiteDetail', link: '/works/edenstory', tag1: " ", tag2: "Service Design", number: "03", title: "Mitigating the emotional pain for newcomers visiting the food bank", status: "Client Work (School) / 2023(3rd Year)", question: "How might we ease the emotional pain of first-time users at a food bank?" },
  // { id: 10, imagePath: require("../image/work_index/top_lettura.jpeg"), alt: 'work_responsive_website_design1', link: "/works/lettura", tag1: "Branding", tag2: "Marketing", number: "04", title: "Building a community for college students studying in the morning", status: "Client Work / 2019", question: "How might we attract university students to the online community?" },
  { id: 4, imagePath: require("../image/work_index/top_traveloffline.png"), alt: 'work_responsive_website_design1', link: "/works/traveloffline", tag1: "UX design", tag2: "Marketing", number: "04", title: "Designing UX as a competitive advantage for offline travel guide", status: "Personal Project / 2024", question: "How might we attract university students to the online community?" },
  { id: 5, imagePath: require("../image/work_index/top_accountmanager.png"), alt: 'ArtSharingWebsiteDetail', link: '/works/accountmanager', tag1: "UX design", tag2: "UI design", number: "05", title: "Consolidating finance accounts for household management", status: "School Project / 2022", question: "How might we lalala" },
  // { id: 11, imagePath: require("../image/work_index/top_icebreaker.jpg"), alt: 'ArtSharingWebsiteDetail', link: '/works/hamoriharmony', tag1: "Product Design", tag2: "Marketing", number: "05", title: "Fostering a sense of closeness among the workshop attendees", status: "Personal Project / 2019", question: "How might we make strangers feel close at a workshop?" },

  { id: 6, imagePath: require("../image/work_index/top_pet_app.jpg"), alt: 'ArtSharingWebsiteDetail', link: '/works/petapp', tag1: "UX Design", tag2: "UI Design", number: "06", title: "Assisting first-time pet owners in ensuring their pets' health", status: "School Project / 2022(2nd Year)", question: "How might we create an app for first-time pet owners?" },
  // { id: 12, imagePath: require("../image/work_index/top_creative_works.jpg"), alt: 'ArtSharingWebsiteDetail', link: '/works/creativeworks' ,tag1: "Branding",tag2: "UX Design", number:"07", title:"Artist Collaboration Hub", status: "School Project / 2022(2nd Year)", question:"How might we help artists to collaborate on the website?" },
  // { id: 13, imagePath: require("../image/work_index/top_atomos.JPG"), alt: 'ArtSharingWebsiteDetail', link: '/works/atomos' ,tag1: "Design Research",tag2: "Product Development", number:"08", title:"An Ice breaker for workshop", status: "Client Work / 2016", question:"How might we design a new computer for students?" },
  // { id: 14, imagePath: require("../image/work_index/top_printer.png"), alt: 'ArtSharingWebsiteDetail', link: '/works/ethnography' ,tag1: "",tag2: "Design Research", number:"09", title:"Ethnography Research", status: "School Project / 2022(2nd Year)", question:"How might we identify the issue of the long line of printing" },
  { id: 7, imagePath: require("../image/work_index/top_ai_streamline.png"), alt: 'ArtSharingWebsiteDetail', link: '/works/claudedesign', tag1: "UX design", tag2: "Product Management", number: "07", title: "Reimagining the design process without using Figma", status: "Professional Experience 2026", question: "" },

  { id: 8, imagePath: require("../image/work_index/top_transactionmanagement.png"), alt: 'ArtSharingWebsiteDetail', link: '/works/transactionmanagement', tag1: "UX design", tag2: "", number: "08", title: "Managing legal documents for real estate transactions", status: "Professional Experience 2026", question: "" },

  { id: 9, imagePath: require("../image/about/profile.jpeg"), alt: 'ArtSharingWebsiteDetail', link: '/about', tag1: " ", tag2: "Service Designer ", number: "About", title: "Jun Funakawa", status: "Human / Born in 1999", question: "How might we create an app for first-time pet owners?" }

];

// The ordered list of works for a world: a list of ids -> objects (in that
// order), or every work when the world has no selection (null).
export const getWorldWorks = (worldWorkIds) =>
  worldWorkIds
    ? worldWorkIds.map((id) => worksData.find((w) => w.id === id)).filter(Boolean)
    : worksData;

// Display number for a work = its position among the numbered works within the
// current world's ordered list (01, 02, ...). Non-numeric labels (e.g. About)
// and works not present in the world fall back to the work's own `number`.
export const getWorkNumber = (workId, worldWorkIds) => {
  const list = getWorldWorks(worldWorkIds);
  let order = 0;
  for (const w of list) {
    const isNumbered = /^\d+$/.test(String(w.number).trim());
    if (isNumbered) order += 1;
    if (w.id === workId) {
      return isNumbered ? String(order).padStart(2, '0') : w.number;
    }
  }
  const self = worksData.find((w) => w.id === workId);
  return self ? self.number : '';
};

export default worksData;
