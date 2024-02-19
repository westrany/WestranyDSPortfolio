/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {                 
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Maria Fitas",
  title: "Hi, there! I'm Maria",
  subTitle: emoji(
    "Passionate Data Scientist/Engineer and Machine Learning Engineer, skilled in analytics, predictive modeling, NLP, and automating data processes. I excel in deciphering complex data, providing strategic insights, and building self-updating models for businesses. 🌟"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1I6o045ojQD5uZKiM-I4jlCVWeoAheXzw/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/westrany",
  linkedin: "https://www.linkedin.com/in/mofitas/",
  gmail: "maria.o.fitas@gmail.com",
  kaggle: "https://www.kaggle.com/mariafitas"
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Areas of Expertise",
  subTitle: "Dedicated Data Scientist with a Passion for Unleashing Insights",
  skills: [
    emoji("⚡ Advanced Data Analytics and Predictive Modeling for Informed Decision-Making"),
    emoji("⚡ Natural Language Processing (NLP) for Text Analysis and Interpretation"),
    emoji("⚡ Automated Data Models for Streamlined Operations and Real-time Insights")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "SQL-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MS Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Oracle",
      fontAwesomeClassname: "fab fa-cloud"
    },
    {
      skillName: "NodeJs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "React",            
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Stirling",
      logo: require("./assets/images/StirlingLogo.png"),
      subHeader: "Bachelor of Science in Data Science",
      duration: "September 2020 - June 2023",
      desc: "Enrolled in a diverse data science program, developed a cross-country tree species model, and begun my passion project on mitigating biases in face detection with transformer algorithms.",
      descBullets: [
        "Completed comprehensive coursework in: Machine Learning, Big Data Analytics, and Natural Language Processing",
        "Demonstrated commitment to interdisciplinary learning and data science research",
        "Developed skills in NLP, Deep Learning, Computer Vision, SQL, Python, Javascript, Java, Jupyter, and Artificial Intelligence (AI)"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Science and Machine Learning", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Natural Language Processing (NLP) and AI",
      progressPercentage: "70%"
    },
    {
      Stack: "Software Development and Technology Tools",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Language Contributor and Data Scientist",
      company: "Cohere for AI",
      companylogo: require("./assets/images/AyaLogo.png"),
      date: "Jul 2023 - present",
      desc: "Enriched the Aya Open Science Initiative as a language expert and native speaker proficient in both Portuguese (PT-PT) and English. Collaborated on a pioneering research project dedicated to propelling multilingual AI advancement through open science collaboration.",
      descBullets: [
      "Collaborated with the Aya community to gather and enhance multilingual text data, improving AI models.",
      "Conducted thorough assessments for Portuguese and English NLP models, offering insights through data visualization.",
      "Actively engaged in open science discussions and conducted ongoing research to advance NLP techniques, contributing significantly to multilingual AI research."
      ],
      skills: "Machine Learning · Natural Language Processing (NLP) · Data Science · Data Visualization"
    },
    {
      role: "Ivy Contributor and Machine Learning Engineer",
      company: "Ivy",
      companylogo: require("./assets/images/ivylogo.png"),
      date: "Sep 2022 - Jun 2023 (10 mos)",
      desc: "During my tenure as a Freelance Machine Learning Engineer from September 2022 to June 2023, I was responsible for crafting and implementing code to enhance Ivy frontend frameworks. My commitment to delivering exceptional customer service played a pivotal role in ensuring high levels of customer satisfaction. To stay at the forefront of the Ivy programming language and its goals, I consistently updated and expanded my knowledge.",
      descBullets: [
      "Developed code to implement Ivy frontend frameworks.",
      "Demonstrated exceptional customer service skills, prioritizing customer satisfaction.",
      "Maintained a current and comprehensive understanding of the Ivy language and its objectives.",
      "Proficiency in Software Development, Machine Learning, Artificial Intelligence (AI), Python programming, Jupyter, TensorFlow, Pandas, NumPy, and GitHub allowed me to contribute effectively to various projects and deliver outstanding results."
      ],
      skills: "Machine Learning · Artificial Intelligence (AI) · Python (Programming Language) · Jupyter · TensorFlow · Pandas (Software) · Ivy · NumPy · GitHub"
    },
    {
      role: "Data Scientist and Consultant",
      company: "NDA-Protected",
      companylogo: require("./assets/images/NDAlogo.png"),
      date: "Jul 2021 - Mar 2022 (9 mos)",
      desc: "Led a diverse team in delivering insights through integrated analytics. Spearheaded Natural Language Processing for growth prediction, deployed anomaly detection, and leveraged data analysis. Evaluated data sources, managed logistics, and produced comprehensive reports.",
      descBullets: [
      "Led a diverse team in delivering actionable insights through integrated business analytics.",
      "Spearheaded Natural Language Processing algorithm development for growth curve prediction.",
      "Designed and deployed real-time anomaly detection system for prompt identification of unusual occurrences.",
      "Utilized exploratory data analysis to uncover valuable patterns and relationships.",
      "Evaluated emerging data sources and collection methods for effectiveness and accuracy.",
      "Managed data analysis, interpretation, and logistics.",
      "Produced comprehensive reports, statistical analyses, and visualizations."
      ],
      skills: "Deep Learning · Machine Learning · Natural Language Processing (NLP) · Leadership · Statistical Analysis · Anomaly Detection · Reporting · Communication · Artificial Intelligence (AI) · Python (Programming Language) · Computer Vision · Jupyter · Pandas (Software) · Google Cloud Platform (GCP) · Quantitative Research · Anaconda · SQL · Data Analysis · Data Visualization"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications"),
  /* subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",            --> uncomment if wanted  */ 

  achievementsCards: [
    {
      title: "Microsoft Azure AI Fundamentals (AI-900)",
      subtitle:
        "Completed Microsoft Azure AI Fundamentals (AI-900) certification in September 2022, enhancing skills in Deep Learning, Computer Vision, and Python.",
      image: require("./assets/images/azureLogo.png"),
      imageAlt: "Microsoft Certified: Azure AI Fundamentals",
      footerLink: [
        {
          name: "View Certificate Credentials",
          url: "https://www.credly.com/badges/f745aef9-0e55-4d49-ad61-269900e26fba/linked_in_profile"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Feel free to reach out for project collaborations or to initiate a conversation",
  email_address: "maria.o.fitas@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
