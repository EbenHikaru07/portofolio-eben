//    MOBILE MENU
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

/* Close menu after clicking a link */
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

//    NAVBAR SCROLL EFFECT
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

//    ACTIVE NAVIGATION
const sections = document.querySelectorAll("section[id]");

function updateActiveNav() {
  const scrollPosition = window.scrollY + 200;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });

      const activeLink = document.querySelector(
        `.nav-link[href="#${sectionId}"]`,
      );

      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
}

window.addEventListener("scroll", updateActiveNav);

//    REVEAL ANIMATION
const revealElements = document.querySelectorAll(
  ".section-heading, .about-grid, .skill-card, .project-card, .contact-box",
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
  },
);

revealElements.forEach((element) => {
  observer.observe(element);
});

//    CURRENT YEAR
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// =========================================
// SKILL DATA
// =========================================

const skillCategories = [
  {
    title: "Languages & Frameworks",
    items: [
      "C#",
      "C/C++",
      "Python",
      "PHP",
      "JavaScript",
      "Dart",
      "HTML",
      "CSS",
      "SQL",
      "ASP.NET",
      "Laravel",
      "Flutter",
    ],
  },

  {
    title: "Database & Tools",
    items: [
      "Microsoft SQL Server",
      "MySQL",
      "Firebase",
      "Visual Studio",
      "Visual Studio Code",
      "GitHub",
      "Postman",
    ],
  },

  {
    title: "IoT & System Integration",
    items: [
      "ESP32",
      "Arduino",
      "Arduino IDE",
      "IoT Integration",
      "REST API",
      "OCR Technology",
      "Barcode Integration",
    ],
  },

  {
    title: "Testing & Quality",
    items: [
      "Selenium",
      "Appium",
      "Functional Testing",
      "Black Box Testing",
      "Usability Testing",
    ],
  },

  {
    title: "Software Engineering",
    items: [
      "Requirements Analysis",
      "System Design",
      "Troubleshooting",
      "Process Improvement",
    ],
  },

  {
    title: "Soft Skills",
    items: ["Problem Solving", "Teamwork", "Communication", "Adaptability"],
  },
];

// =========================================
// RENDER SKILLS
// =========================================

const skillsContainer = document.getElementById("skillsContainer");

skillsContainer.innerHTML = skillCategories
  .map(
    (category) => `
      <div class="skill-card">

        <h3>${category.title}</h3>

        <div class="skill-items">
          ${category.items.map((item) => `<span>${item}</span>`).join("")}
        </div>

      </div>
    `,
  )
  .join("");

//    PROJECTS DATA

// =========================================
// PROJECTS DATA

const projects = [
  {
    number: "01",
    imageClass: "project-image-one",
    type: "PROJECT / PROBLEM-BASED LEARNING",
    category: "Web Application",
    title: "Application of Lecturer Schedule (LESCH)",
    description:
      "A web-based lecturer scheduling application designed to help manage and organize lecture schedules for students and lecturers. The system provides a centralized platform for managing scheduling data and related information.",
    tags: ["HTML", "CSS", "PHP", "phpMyAdmin"],
    link: "#",
  },

  {
    number: "02",
    imageClass: "project-image-two",
    type: "PROJECT / PROBLEM-BASED LEARNING",
    category: "Web Application",
    title: "Correspondence Service for Informatics Department (LetteR)",
    description:
      "A web-based correspondence service application developed to support academic administration in the Informatics Department. The system helps students manage requests for documents such as permission letters and academic leave through a centralized web application.",
    tags: ["Laravel", "PHP", "HTML", "CSS", "phpMyAdmin"],
    link: "#",
  },

  {
    number: "03",
    imageClass: "project-image-three",
    type: "PROJECT / PROBLEM-BASED LEARNING",
    category: "Mobile Application",
    title: "Mollery - Studio Gallery Mobile App",
    description:
      "A mobile application designed to help users find and book photography studios and photographer services. The application allows users to view available services, manage bookings, and schedule photography sessions through a mobile platform.",
    tags: ["Flutter", "Dart", "Firebase"],
    link: "#",
  },

  {
    number: "04",
    imageClass: "project-image-four",
    type: "PROJECT / PROBLEM-BASED LEARNING",
    category: "IoT / Web / Mobile",
    title: "DeeFeeD - IoT-based Automatic Feeding System for Aquaculture",
    description:
      "An IoT-based automatic feeding system designed to help fish farmers manage feeding remotely. The system allows feeding schedules and feed quantities to be controlled through web and mobile applications connected to an ESP32-based device.",
    tags: [
      "Laravel",
      "PHP",
      "HTML",
      "CSS",
      "ESP32",
      "Arduino IDE",
      "Flutter",
      "Dart",
      "Firebase",
    ],
    link: "#",
  },

  {
    number: "05",
    imageClass: "project-image-five",
    type: "INDUSTRY PROJECT",
    category: "Desktop Application",
    title: "Packing System",
    description:
      "A desktop application developed to support production packing activities. The system is used to manage product information and generate barcodes to support the packaging and production process.",
    tags: [
      ".NET",
      "C#",
      "Microsoft SQL Server",
      "Desktop Application",
      "Barcode",
      "Production System",
    ],
    link: "#",
  },

  {
    number: "06",
    imageClass: "project-image-six",
    type: "INDUSTRY PROJECT",
    category: "IoT / Desktop Application",
    title: "Helpdesk Andon System",
    description:
      "A production support system developed to help monitor and manage issues reported through an Andon system. The solution integrates IoT-based devices with software and database systems to support issue monitoring and production response.",
    tags: [
      ".NET",
      "C#",
      "Python",
      "ESP32",
      "Arduino IDE",
      "Microsoft SQL Server",
      "IoT",
      "Andon System",
      "Text-to-Speech",
    ],
    link: "#",
  },

  {
    number: "07",
    imageClass: "project-image-seven",
    type: "PROJECT / PROBLEM-BASED LEARNING",
    category: "Mobile Application",
    title: "DombaKu App",
    description:
      "A mobile application designed to support sheep farming management through digital data processing and intelligent features. The application applies self-supervised learning and rule-based methods to help improve farming efficiency and decision-making.",
    tags: ["Flutter", "Dart", "Firebase", "OCR Technology", "Machine Learning"],
    link: "#",
  },

  {
    number: "08",
    imageClass: "project-image-eight",
    type: "INDUSTRY PROJECT",
    category: "Web Application",
    title: "SPC Project",
    description:
      "A web-based Statistical Process Control (SPC) system developed for measurement data entry, data management, and quality analysis. The system supports CRUD operations and calculates control limits for X̄ and R charts to help monitor process stability.",
    tags: [
      ".NET",
      "C#",
      "ASP.NET MVC",
      "SQL Server",
      "SPC",
      "X & R Chart",
      "Data Entry",
    ],
    link: "#",
  },

  {
    number: "09",
    imageClass: "project-image-nine",
    type: "INDUSTRY PROJECT",
    category: "Web Application",
    title: "Web Event Management (Christmas 2025)",
    description:
      "A web-based event management system developed to support Christmas event registration and participant data management. The system helps manage participant registration, attendance, meals, snacks, gifts, and other event-related information.",
    tags: [
      ".NET",
      "C#",
      "ASP.NET MVC",
      "SQL Server",
      "Event Management",
      "Registration",
      "Participant Management",
    ],
    link: "#",
  },

  {
    number: "10",
    imageClass: "project-image-ten",
    type: "INDUSTRY PROJECT",
    category: "Web Application",
    title: "Web Event Management (ADnD 2026)",
    description:
      "A comprehensive web-based event management system developed to support an internal company event with more than 3,000 participants. The system manages participant registration and validation, ticket and wristband scanning, snack and dinner distribution, lucky draws, and grand prize activities, with dashboards for monitoring event data and scanning results.",
    tags: [
      ".NET",
      "C#",
      "ASP.NET MVC",
      "SQL Server",
      "Event Management",
      "Registration",
      "Participant Validation",
      "Barcode Scanner",
      "Wristband Scanner",
      "Lucky Draw",
      "Dashboard",
    ],
    link: "#",
  },

  {
    number: "11",
    imageClass: "project-image-eleven",
    type: "INDUSTRY PROJECT",
    category: "Web / IoT",
    title: "Aging Test Monitoring System",
    description:
      "An IoT-based monitoring system developed to monitor electrical current during the lamp aging test process. The system collects data from ESP32-based devices, provides real-time monitoring, tracks current trends, and helps identify abnormal conditions while managing aging test data through a web application.",
    tags: [
      ".NET",
      "C#",
      "ASP.NET MVC",
      "SQL Server",
      "IoT",
      "ESP32",
      "Arduino",
      "Current Monitoring",
      "Data Monitoring",
    ],
    link: "#",
  },

  {
    number: "12",
    imageClass: "project-image-twelve",
    type: "INDUSTRY PROJECT",
    category: "Web Application",
    title: "ATR System",
    description:
      "A web-based Acceptance Test Record (ATR) management system developed to support sample data entry and management during the acceptance testing process. The system provides a structured way to record, organize, and manage test sample information.",
    tags: [
      ".NET",
      "C#",
      "ASP.NET MVC",
      "SQL Server",
      "Data Entry",
      "ATR",
    ],
    link: "#",
  },

  {
    number: "13",
    imageClass: "project-image-thirteen",
    type: "INDUSTRY PROJECT",
    category: "Desktop Application",
    title: ".TPS Parser",
    description:
      "A Windows desktop application developed to parse .TPS files and convert their contents into readable string-based data. The application simplifies the process of extracting and processing information from TPS files for further use by other applications or systems.",
    tags: [
      "C#",
      ".NET",
      "Windows Forms",
      "Desktop Application",
      "File Parser",
      ".TPS",
      "Data Processing",
    ],
    link: "#",
  },
];

//    RENDER PROJECTS
const projectsContainer = document.getElementById("projectsContainer");

projects.forEach((project) => {
  const projectCard = document.createElement("article");

  projectCard.classList.add("project-card");

  projectCard.innerHTML = `
        <div class="project-image ${project.imageClass}">
            <span>
                PROJECT ${project.number}
            </span>
            <div class="project-image-label">
                <small>
                    ${project.type}
                </small>
            </div>
        </div>


        <div class="project-content">
            <p class="project-type">
                ${project.category}
            </p>
            <h3>
                ${project.title}
            </h3>
            <p>
                ${project.description}
            </p>
            <div class="project-tags">
                ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
            </div>
            <a href="${project.link}" class="project-link">
                View Project →
            </a>
        </div>

    `;

  projectsContainer.appendChild(projectCard);
});

// =========================================
// CERTIFICATIONS DATA
// =========================================

const certifications = [
  {
    year: "2026",
    title: "Certificate in Fullstack Developer Associate",
    issuer: "CertNexus",
    credential: "Credential ID",
  },

  {
    year: "2025",
    title: "International PBL Expo 2025 - Appropriate Technology Category",
    issuer: "Batam State Polytechnic",
    credential: "Credential ID",
  },

  {
    year: "2024",
    title:
      "PBL EXPO Politeknik Negeri Batam 2024 - Internet Of Things Category",
    issuer: "Batam State Polytechnic",
    credential: "Credential ID",
  },

  {
    year: "2024",
    title: "#HACK4ID KEPRI - POLIBATAM X LINTASARTA, 22 - 23 AGUSTUS 2023",
    issuer: "Batam State Polytechnic",
    credential: "Credential ID",
  },
];

// =========================================
// RENDER CERTIFICATIONS
// =========================================

const certificationsContainer = document.getElementById(
  "certificationsContainer",
);

certificationsContainer.innerHTML = certifications
  .map((cert) => {
    return `
      <article class="certification-card">

        <div class="certification-top">
          <span class="certification-year">
            ${cert.year}
          </span>
        </div>

        <div class="certification-content">
          <h3>
            ${cert.title}
          </h3>
          <p class="certification-issuer">
            ${cert.issuer}
          </p>
          
        </div>

      </article>
    `;
  })
  .join("");

// =========================================
// EXPERIENCE DATA
// =========================================
const experiences = [
  {
    date: "Aug 2025 - Aug 2026",
    position: "Operation Technologies | OTG Development Intern",
    company: "PT. Excelitas Technologies Batam",
    description:
      "Developed and maintained internal web applications and IoT systems to support production operations and process improvements.",
    responsibilities: [
      "Developed web applications and IoT-based solutions to support production operations and improve existing processes.",
      "Worked with engineering teams and mentors to understand requirements, solve problems, and develop solutions.",
      "Tested applications functionality and fixed issues to ensure features worked properly.",
      "Contributed to Improving existing processes by reducing manual work through software and IoT solutions.",
      "Developed an event management system and supported internal event for company activities for 3,000+ participants.",
    ],
    tags: [
      ".NET",
      "C#",
      "SQL Server",
      "Web Development",
      "Internet of Things",
      "ESP32",
    ],
  },
  {
    date: "Aug 2024 - Jan 2025",
    position: "Programmer Intern",
    company: "PT. SIIX Electronics Indonesia",
    description:
      "Developed and supported web, desktop, and IoT applications for engineering and production needs.",
    responsibilities: [
      "Developed and supported web, desktop, and IoT applications for engineering and production activities.",
      "Assisted with application development, requirement gathering, testing, and troubleshooting.",
      "Worked with mentor to understand requirements and develop solutions based on project needs.",
    ],
    tags: [
      ".NET",
      "C#",
      "SQL Server",
      "Desktop Application",
      "Web Development",
      "Internet of Things",
      "Arduino",
    ],
  },

  // {
  //   date: "Aug 2020 - Aug 2022",
  //   position: "Senior Material Handler",
  //   company: "PT. Shimano Batam",
  //   description:
  //     "Managed material flow to support daily production activities. Coordinated with team members to ensure materials were available according to production requirements while maintaining effective teamwork and communication.",
  //   tags: ["Material Handling", "Teamwork", "Communication", "Team Leadership"],
  // },

  // {
  //   date: "Aug 2019 - Dec 2019",
  //   position: "Electrical Technician Intern",
  //   company: "PT. USDA Seroja Jaya",
  //   description:
  //     "Worked on ship electrical installation and maintenance, including lighting installation on decks and bridges, three-phase motor installation, and water pump systems for tugboats and tankers.",
  //   tags: [
  //     "Electrical Installation",
  //     "Ship Electrical",
  //     "Three-Phase Motor",
  //     "Electrical Maintenance",
  //   ],
  // },
];

// =========================================
// RENDER EXPERIENCE
// =========================================

const experienceContainer = document.getElementById("experienceContainer");

experienceContainer.innerHTML = experiences
  .map((experience) => {
    return `
      <article class="timeline-item">
        <div class="timeline-dot"></div>

        <div class="timeline-content">
          <span class="timeline-date">
            ${experience.date} &nbsp; | &nbsp;
            ${experience.company}
          </span>

          <h3>
            ${experience.position}
          </h3>

          <p class="experience-description">
            ${experience.description}
          </p>

          <ul class="experience-responsibilities">
            ${experience.responsibilities
              .map(
                (responsibility) => `
                  <li>${responsibility}</li>
                `,
              )
              .join("")}
          </ul>

        </div>
      </article>
    `;
  })
  .join("");

// =========================================
// EDUCATION DATA
// =========================================

const education = [
  {
    date: "2022 - 2026",
    degree: "Bachelor of Software Engineering",
    institution: "Batam State Polytechnic",

    description:
      "Studied Software Engineering with a focus on the software development lifecycle, including requirements analysis, software development, testing, and deployment, along with web and mobile applications, databases, and Internet of Things.",

    tags: [
      "Software Development",
      "Web Development",
      "Mobile Development",
      "IoT Development",
      "Software Development Life Cycle",
      "Full-Stack Development",
    ],

    activities: [
      "Led a Project-Based Learning team, coordinating tasks, monitoring progress, and collaborating with team members throughout the development process.",
      "Collaborated on web, mobile, and IoT-based projects as part of the Project-Based Learning program.",
      "Presented and demonstrated a project at the PBL Expo, explaining the developed solution, technologies used, and project outcomes.",
      "Participated in organizational activities, contributing to teamwork, coordination, and member development.",
      "Contributed to campus events and activities through collaboration, coordination, and mentoring.",
    ],
  },
];

// =========================================
// RENDER EDUCATION
// =========================================

const educationContainer = document.getElementById("educationContainer");

if (educationContainer) {
  educationContainer.innerHTML = education
    .map((item) => {
      return `
        <article class="timeline-item">

          <!-- TIMELINE DOT -->
          <div class="timeline-dot"></div>

          <!-- CONTENT -->
          <div class="timeline-content">

            <!-- DATE & INSTITUTION -->
            <span class="timeline-date">
              ${item.date} | ${item.institution}
            </span>

            <!-- DEGREE -->
            <h3>
              ${item.degree}
            </h3>

            <!-- DESCRIPTION -->
            <p>
              ${item.description}
            </p>

            <!-- FOCUS / TECHNOLOGIES -->
            ${
              item.tags && item.tags.length > 0
                ? `
                  <div class="timeline-tags">
                    ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
                  </div>
                `
                : ""
            }

            <!-- DURING MY STUDIES -->
           ${
             item.activities && item.activities.length > 0
               ? `
      <div class="timeline-activities">

        <div class="activities-heading">

          <div>
            <span class="activities-label">
              ACADEMIC HIGHLIGHTS
            </span>

          </div>
        </div>

        <ul>
          ${item.activities
            .map(
              (activity, index) => `
                <li>
                  <span class="activity-number">
                    ${String(index + 1).padStart(2, "0")}
                  </span>

                  <span class="activity-text">
                    ${activity}
                  </span>
                </li>
              `,
            )
            .join("")}
        </ul>

      </div>
    `
               : ""
           }

          </div>
        </article>
      `;
    })
    .join("");
}
