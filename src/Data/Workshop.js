import W1 from "../assets/DTA MANAGEMENT.jpg";
import W2 from "../assets/GENERATIVE AI.jpg";
import W3 from "../assets/gesture robot.jpg";
import W4 from "../assets/ethical hacking.jpg";
import W5 from "../assets/power BI.jpg";
import W6 from "../assets/Aerotech drone.jpg";

const CurrentWorkshopData = [
  {
    id: 1,

    name: "Data Management By Microsoft",

    details: "",

    imgSrc:
      W1,

    content:
      " Microsoft Fabric is a unified platform designed to simplify Big Data management and analytics, offering tools like **OneLake** and **Lakehouse** for efficient data storage and analysis. It integrates seamlessly with **Power BI**, allowing for advanced data manipulation and visualization, creating powerful reports and dashboards. The platform also includes **Data Factory**, which helps automate data processes by building pipelines for smooth data flow and transformation. With its unified interface and robust tools, Microsoft Fabric enables the creation of **end-to-end data analytics solutions**, streamlining the process of managing and analyzing large datasets for better decision-making and business intelligence.",

    date: "7th March, 2024",
  },
  {
    id: 2,

    name: "Generative AI With GOOGLE",

    details: "",

    imgSrc:
      W2,

    content:
      "Generative AI, harnesses the potential of AI across various disciplines by utilizing technologies like Machine Learning and Deep Learning. These technologies power AI models to learn from data, make predictions, and create new content. In this training, you'll explore real-life examples of AI tailored for all branches, from healthcare to finance, engineering, and beyond. You will also learn the step-by-step process of collecting and preparing data to build basic AI models using drag-and-drop features or pre-built tools. Additionally, the course will cover methods to improve AI models, providing hands-on experience in creating and refining models. The training will introduce you to the workings of Large Language Models (LLM), teaching you how to create personalized LLMs for specific use cases. Finally, you'll explore the integration of AI in various applications and web services, understanding how AI is transforming industries and enhancing everyday technology.",

    date: "8th March, 2024",
  },
  {
    id: 3,

    name: "Gesture & Motion-based Robotics",

    details: "",

    imgSrc:
      W3,

    content:
      "Gesture and motion-based robotics involves using hardware and sensors to create robots that can respond to human movements. The course starts with an introduction to the hardware for gesture robotics, focusing on the integration of sensors like accelerometers, gyroscopes, and Leap Motion Sensors to detect acceleration, tilt, and rotation. Data from these sensors is processed by a micro-controller (e.g., Arduino or Raspberry Pi) to interpret gestures. Students will also explore key hardware components, such as motors and servos for robotic movements. On the software side, programming languages like Python, C++, or Arduino IDE will be used to interface sensors with the robots and program the motion response. The hands-on activities include building the robot by assembling motors, sensors, and other components, programming gesture control, and fine-tuning the robot's movements based on gestures. By the end of the course, students will have the opportunity to apply their learning to build and program their own gesture-control robotics projects, integrating both hardware and software in an engaging, practical way.",

    date: "9th March, 2024",
  },
  
];
const PrevWorkshopData = [
  {
    id: 1,

    name: "Ethical Hacking ",

    details: "",

    imgSrc:

      W4,

//       "https://res.cloudinary.com/dwevqwmg7/image/upload/v1705601916/workshop/r6eda7ddi8ycszya2pl1.jpg",


    content:
      " Introduction to ethical hacking Scanning and enumeration. Exploitation Post exploitation and privilege escalation Persistence and covering tracks. Network hacking and defense. Web Application penetration testing. Conclusion.",
  },
  {
    id: 2,

    name: "Power BI",

    details: "By Microsoft",

    imgSrc:

      W5,

//       "https://res.cloudinary.com/dwevqwmg7/image/upload/v1705601916/workshop/drxpaq9ovfpno9mvinhl.jpg",


    content:
      "The program consists of blocks combining theory and practice.Introduction into Microsoft Power BI and the Power Query EditorHands-on: extracting, transforming and loading data into the Power Query EditorDatamodeling and data visualizationHands-on: building a data model and creating and sharing a dashboardHands-on: adding extra functionalities to your dashboards, such as navigation andteraction or building a dashboard based on your own data set.Extract, transform and load data into Microsoft Power BI from various sourcesDescribe storage options using Microsoft Power BI when connecting to databasePerform various types of data transformation in Power Query EditorMashupdatabyintegrating different sourcesNOTE: This software is useful for all the business purposes, to manage the data.-It is very useful for stock related ratios and to maintain the record",

  },
  {
    id: 3,

    name: "AeroTech Drone",

    details: "",

    imgSrc:

      W6,

//       "https://res.cloudinary.com/du1tas6pe/image/upload/v1705675354/gl/wwdxoszuehj1ojw14xjo.jpg",


    content:
      "Engage in an immersive Workshop that introduces Engineering Students to the exciting World of Unmanned Aerial Vehicles(UAVs) through a hands on DIY approach. Participants will gain practical Insights into drone design, assembly, programming and flight testing.",

  },
];

export { PrevWorkshopData, CurrentWorkshopData };
