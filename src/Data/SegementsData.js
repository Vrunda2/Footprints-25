import technotron from "../assets/images/segmentimage/TT1.png";
import Kaleidoscope from "../assets/images/segmentimage/KALEIDOO.png";
import RS from "../assets/images/segmentimage/RSS.png";
import FSE from "../assets/images/segmentimage/FSE.png";
import FSR from "../assets/images/segmentimage/FSRR.png";
import Virtuosity from "../assets/images/segmentimage/VIRTUO.png";
import Schitron from "../assets/images/segmentimage/SCHITRON.png";
import Quest from "../assets/images/segmentimage/QUEST.png";

const segementData = [
  {
    Segment: 1,
    title: "Technotron",
    link: "/technotron",
    imageSource: technotron,

    subItems: [
      {
        title: "Cybernetics",
        link: "/technotron/cybernetics",
      },

      {
        title: "Macheanema",
        link: "/technotron/macheanema",
      },

      {
        title: "Sanganikee",
        link: "/technotron/sanganikee",
      },

      {
        title: "Citadel",
        link: "/technotron/citadel",
      },

      {
        title: "Rasayanam",
        link: "/technotron/rasayanam",
      },

      {
        title: "Lycra",
        link: "/technotron/lycra",
      },

      {
        title: "TechX",
        link: "/technotron/techx",
      },
    ],
  },

  {
    Segment: 2,

    title: "Kaleidoscope",
    imageSource: Kaleidoscope,

    subItems: [
      {
        title: "Guest Lectures",
        link: "/guest-lecture",
      },

      {
        title: "Workshops",
        link: "/workshop",
      },

      {
        title: "Techzibition",
        link: "/techzibition",
      },

      {
        title: "Teleidoscope",
        link: "/taleidoscope",
      },
    ],
  },

  {
    Segment: 3,
    title: "Rolling squares",
    imageSource: RS,

    subItems: [
      {
        title: "Concert",
        link: "/rolling-squares",
      },
      {
        title: "Informal",
        link: "/rolling-squares",
      },
      {
        title: "Jampad",
        link: "/rolling-squares",
      },
    ],
  },

  {
    Segment: 4,
    title: "Quest",
    imageSource:Quest,
    subItems: [
      {
        title: "12th Batallian",
        link: "/quest#12th-batallian",
      },
      {
        title: "War of Words",
        link: "/quest#war-of-words",
      },
      {
        title: "Squid Games",
        link: "/quest#squid-games",
      },
      {
        title: "Takeshi's Castle",
        link: "/quest#takeshi-castle",
      },
      {
        title: "Lost",
        link: "/quest#lost",
      },
      {
        title: "Sub Soccer",
        link: "/quest#sub-soccer",
      },
      {
        title: "Frame it",
        link: "/quest#frame-it",
      },
    ],
  },

  {
    Segment: 5,
    title: "Stock Exchange",
    imageSource:FSE,
    subItems: [
      {
        title: "Inversion",
        link: "/fse#inversion",
      },
      {
        title: "Pitcher's Project",
        link: "/fse#pitcher's-project",
      },
    ],
  },

  {
    Segment: 6,
    title: "Virtuosity",
    imageSource: Virtuosity,
    subItems: [
      {
        title: "BGMI",
        link: "/virtuosity#bgmi",
      },
      {
        title: "Valorant",
        link: "/virtuosity#valorant",
      },
      {
        title: "Free Fire",
        link: "/virtuosity#free-fire",
      },
      {
        title: "Chess",
        link: "/virtuosity#chess",
      },
    ],
  },
  {
    Segment: 7,
    title: "Schitron",
    imageSource:
      Schitron,
    subItems: [
      {
        title: "Schitron",
        link: "/Schitron",
      },
    ],
  },
  {
    Segment: 8,
    title: "FSR",
    imageSource:
      FSR,
    subItems: [
      {
        title: "FSR Drives",
        link: "/fsr",
      },
      
    ],
  },
];

export default segementData;
