// About Page
d3.select("#about")
    .append("p")
    .html("<br><p style='text-align:center;'>Hi, I am <span class='highlight'>Spoorthi Subramanya Bhat</span>, a Software Developer.<p>" +
        "<span style='display: block; text-align: justify; margin: 0 auto; max-width: 900px;'>As a proactive software developer, I'm passionate about innovative technology and continuous growth. " +
        "With an educational background in Computer and Information Science and practical experience in Software development, " +
        "I'm dedicated to contributing my technical expertise to challenging projects and advancing my knowledge and skills in the field.<span>")
    .append("p")
    .html("<div class='button-container'><a href='resume\\SpoorthiSubramanyaBhat_Resume.pdf' download='Spoorthi_Bhat_Resume.pdf'><button>Download Resume</button></a></div>");

//----------------------------------------------------------------------------------------------------------------------------------
// Education
const educationData = [
    {
        institution: "University of Massachusetts, Dartmouth",
        location: "Massachusetts, USA",
        degree: "Master’s in Computer and Information Science",
        duration: "SEPTEMBER 2023 - JULY 2025"
    },
    {
        institution: "Vidyavardhaka College of Engineering",
        location: "Mysore, Karnataka, India",
        degree: "Bachelor of Engineering in Computer Science and Engineering",
        duration: "AUGUST 2018 - AUGUST 2022",
        cgpa: "9.17/10"
    }
];

//skills
const bachelorSkills = ["Object Oriented Programming", "Data Structures", "Algorithms", "Database Management Systems", "Computer Networks", "Unix Programming"]; // Add your bachelor's skills
const masterSkills = ["Data Visualization", "Machine Learning", "Theoritical Computer Science", "Algorithms and Complexity", "Paradigmatic Software Development", " Data Mining"];   // Add your master's skills

// Function to create education HTML
function createEducationHTML(education) {
    return `<hr><p><span style='font-weight:bold;'>${education.institution}, ${education.location}</span> <span style='float:right;'>${education.duration}</span><br><span style='font-style:italic;'>${education.degree}${education.cgpa ? ' | CGPA: ' + education.cgpa : ''}</span></p>`;
}

// Function to create skills HTML
function createSkillsHTML(skills, title) {
    return `<p><span style='font-weight:bold;font-size:smaller;'>Key Skills</span><ul>${skills.map(skill => `<li>${skill}</li>`).join('')}</ul><p>`;
}

// Display education details
educationData.forEach(edu => {
    const educationSection = document.getElementById("education");
    educationSection.insertAdjacentHTML('beforeend', createEducationHTML(edu));
    if (edu.degree.includes("Bachelor")) {
        educationSection.insertAdjacentHTML('beforeend', createSkillsHTML(bachelorSkills, "Bachelor's"));
    } else if (edu.degree.includes("Master")) {
        educationSection.insertAdjacentHTML('beforeend', createSkillsHTML(masterSkills, "Master's"));
    }
});
//-------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//Experience
const experienceData = [
    {
        company: "University of Massachusetts, Dartmouth",
        location: "MA, USA",
        position: "Graduate Student Assitant",
        duration: "JAN 2024 - Present",
        responsibilities: [
             "Designed and developed a mobile application for a university-led substance use recovery program, enhancing usability, streamlining navigation, and boosting user engagement by 80% across 150+ active users using Jetpack Compose and MVVM.",
             "Improved CWE classification accuracy by 22% on 12k+ NVD records using BERT and custom NLP preprocessing; also developed a sonar signal classifier with FFT and ML models, achieving 87% accuracy.",
             "Mentored undergraduate students with Object-Oriented Programming in Java and graduate students with Theoretical Computer Science as a teaching assistant."
        ]
    },
    {
        company: "In Time Tec",
        location: "Bangalore, Karnataka, India",
        position: "Jr. Software Engineer",
        duration: "MARCH 2022 - AUGUST 2023",
        responsibilities: [
            "Developed a secure Android SDK for Equifax Inc. to capture device and behavioural data (sensor activity, location data) for fraud analytics, deployed in 100K+ production devices with support for Kotlin, Java, and cross-platform frameworks.",
            "Boosted bot detection accuracy by 25% by enabling real-time data flow for AI/ML-based fraud detection models, while reducing integration issues by 40% through modular SDK architecture and comprehensive client-facing documentation.",
            "Built scalable backend features for an e-commerce mobile app, reducing API call redundancy by 30% via smart caching and enhancing session security through encrypted local storage and secure token handling.",
            "Automated backend workflows using SQL triggers and stored procedures. Improved query performance by 20% and significantly reduced manual interventions in routine data operations."
        ]
    },
    {
        company: "Svachallan Solutions",
        location: "Bangalore, Karnataka, India",
        position: "Android Development Intern",
        duration: "JAN 2022 - FEB 2022",
        responsibilities: [
            "Played a pivotal role in designing and developing the 'Helping Hand' Android application.",
            "Designed and implemented the app's user interface to ensure a visually appealing design using Java.",
            "Integrated Firebase for robust user authentication."
        ]
    },
    {
        company: "Epsilon Scientific",
        location: "Bangalore, Karnataka, India",
        position: "Web Development Intern",
        duration: "JUNE 2020 - AUG 2020",
        responsibilities: [
            "Strategically restructured an existing 'Social Networking' web application.",
            "Utilized knowledge of HTML, CSS, PHP, JavaScript, and a MYSQL database as a dynamic and innovative full-stack web development intern."
        ]
    }
];

// Function to create experience HTML
function createExperienceHTML(experience) {
    const responsibilitiesList = experience.responsibilities.map(responsibility => `<li>${responsibility}</li>`).join('');
    return `<hr>
            <p><span style='font-weight:bold;'>${experience.company} - ${experience.location}</span> <span style='float:right;'>${experience.duration}</span> <br><span style='font-style:italic;'>${experience.position} </span></p>
            <ul>${responsibilitiesList}</ul>`;
}

// Display experience details
experienceData.forEach(exp => {
    const experienceSection = document.getElementById("experience");
    experienceSection.insertAdjacentHTML('beforeend', createExperienceHTML(exp));
});
//--------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------

//Academic Projects
const projectsData = [
    {
        title: "ReLeaf – Android Application for Substance Use Disorder",
        link: "https://github.com/Spoorthi-09/ReleafTestApp", // Add actual link
        description: "Built an end-to-end Android app using Jetpack Compose, Room, and MVVM architecture to support goal tracking, daily check-ins, and journaling for substance use recovery. Implemented push notifications, encrypted storage, and Firebase sync to ensure data privacy and user engagement.",
        skills: ["Kotlin", "Jetpack Compose", "Firebase", "Room Database", "MVVM"],
        images: ["images/Releaf1.jpg", "images/Releaf2.jpg", "images/Releaf3.jpg", "images/Releaf4.jpg", "images/Releaf5.jpg"]
    },
    {
        title: "Weather Forecast App – Android (Jetpack Compose + Hilt)",
        link: "https://github.com/Spoorthi-09/WeatherForecastApp",  // Add your actual link here
        description: "Developed a modern Weather Forecast Android application using Jetpack Compose and Dagger-Hilt. Integrated live weather data with location-based forecasts, including timezone, temperature, and conditions. Implemented rate limiting to handle API restrictions and enhance app stability. Focused on clean MVVM architecture, dependency injection, and Compose UI design.",
        skills: ["Kotlin", "Jetpack Compose", "Dagger-Hilt", "MVVM", "Weather API", "Rate Limiting"],
        images: [
            "images/weatherApp1.jpg",   // Update to correct relative path if needed
            "images/WeatherApp2.jpg"
        ]
    },
    {
        title: "Personal Expense Manager – Full Stack Web Application",
        // link: "https://github.com/Spoorthi-09/ExpenseManager", // Add actual link
        description: "Designed and developed a full-stack expense manager using Spring Boot, JavaScript, and MongoDB. Implemented RESTful APIs, secure authentication, multi-account tracking, and responsive front-end with real-time search and filtering.",
        skills: ["Spring Boot", "JavaScript", "MongoDB", "REST APIs", "HTML", "CSS"],
        image: "images/pems1.png"
    },
    {
        title: "Global Mortality Rate Data Visualization",
        link: "https://spoorthi-09.github.io/CausesOfDeath_DataVizProject/index.html",
        description: "Developed a D3.js-based interactive data visualization website to explore global mortality rates from 1990 to 2019, including geomaps, dual-axis plots, cluster visualizations, and stacked bar charts.",
        skills: ["D3.js", "HTML", "CSS"],
        image: "images/dataViz.png"
    },
    {
        title: "Sports Management Client-Server Application",
        // link: "https://github.com/Spoorthi-09/SportsManagement_clientServerSystem",
        description: "Built a Java-based client-server system for real-time sports management using socket programming, multi-threaded servers, and JSON-based communication with MySQL integration for persistent storage.",
        skills: ["Java", "Socket Programming", "Multi-threading", "JSON", "MySQL"]
    },
    {
        title: "Indoor Navigation System Using BLE Beacons – Android Application",
        link: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003363781-23/indoor-navigation-using-ble-beacons-chaya-kumari-spoorthi-bhat-sucharith-pooja-thanmayi", // CRC Press link or placeholder
        description: "Developed Android BLE transmitter and receiver apps for indoor navigation, with cloud database management and a web-based admin module. Published in CRC Press: Recent Trends in Computational Sciences, 2023.",
        skills: ["Android (Java)", "BLE", "SQLyog", "Angular", "ASP.NET", "REST API"]
    },
    {
        title: "Job Recruitment Portal – Web Application",
        // link: "https://github.com/Spoorthi-09/JobRecruitmentPortal", // Add actual link
        description: "Crafted a job recruitment portal with candidate and employer interfaces, job vacancy listings, resume submissions, and application tracking to streamline the hiring process.",
        skills: ["HTML", "CSS", "PHP", "JavaScript", "MySQL"]
    },
    {
        title: "Automated Medical Coding Using Hybrid Decision Trees – Master’s Thesis",
        // link: "https://ieeexplore.ieee.org/document/YourPaperID", // Add actual IEEE link when available
        description: "Designed a hybrid classification pipeline combining rule-based decision trees and LSTM models for ICD code prediction using clinical discharge summaries, achieving a 17% accuracy improvement. Accepted for publication at IEEE CISOSE 2025.",
        skills: ["Python", "Scikit-learn", "LSTM", "GPT-4", "MIMIC-IV"],
        image: "images/icdCode.png"
    }
];


// Function to create projects HTML
function createProjectsHTML(project) {
    let projectInfo = `<hr>
                        <p style='font-weight:bold;'><a href="${project.link}" target="_blank">${project.title}</a></p>`;

    if (project.description) {
        projectInfo += `<p>${project.description}</p>`;
    }

    if (project.skills) {
        projectInfo += `<p><strong>Key Skills:</strong> ${Array.isArray(project.skills) ? project.skills.join(', ') : project.skills}</p>`;
    }
    if(project.image) {
        projectInfo += `<div class="image-container" style="width: 500px; height: 300px; margin-left: 200px; object-fit: cover; border-radius: 8px;">
            <img src="${project.image}" alt="data Viz" class="project_image">
        </div>`
    }
    if (project.images && project.images.length > 0) {
        projectInfo += `<div class="image-gallery" style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">`;

        project.images.forEach(img => {
            projectInfo += `
                <div class="image-container" style="flex: 0 0 15%; max-width: 30%; box-sizing: border-box;">
                    <img src="${img}" alt="Project Image" style="width: 150px; height: 300px; object-fit: contain; border-radius: 8px; background-color:rgb(255, 250, 250);" class="project_image">
                </div>
            `;
        });

        projectInfo += `</div>`;
    }


    return projectInfo;
}

// Display projects details
projectsData.forEach(proj => {
    const projectsSection = document.getElementById("projects");
    projectsSection.insertAdjacentHTML('beforeend', createProjectsHTML(proj));
});


//-----------------------------------------------------------------------------------------------------------------
// Smooth scroll to the clicked section
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetSection = document.querySelector(this.getAttribute('href'));
        const offset = document.querySelector('header').offsetHeight;

        window.scrollTo({
            top: targetSection.offsetTop - offset,
            behavior: 'smooth'
        });
    });
});

//------------------------------------------------------------------------------------------------------------------------

//skills
const skillsData = [
    { category: "Languages", skills: ["Kotlin", "Java", "Python", "Javascript"], proficiency: [90, 80] },
    { category: "Software Developement", skills: ["Jetpack Compose", "Compose Multiplatform", "MVVM", "Retrofit", "Hilt", "WorkManager", "Jetpack Navigation",
"Firebase Realtime Database", "Room", "Ktor Server", "Spring Boot", "SQLite", "MySQL", "Firebase", "MongoDB"], proficiency: [85, 90] },
    { category: "Machine Learning", skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "NLTK", "SpaCy", "BERT", "d3.js"], proficiency: [95, 85, 90] }
];

function renderSkills() {
    const section = document.getElementById("skills-container");

    skillsData.forEach(skillCategory => {
        const skillGroup = document.createElement("div");
        skillGroup.className = "skill-group";

        const category = document.createElement("div");
        category.className = "category";
        category.textContent = skillCategory.category;
        category.addEventListener("click", () => toggleSkillsList(skillGroup));

        const skillsList = document.createElement("div");
        skillsList.className = "skills-list";

        skillCategory.skills.forEach((skill, index) => {
            const skillElement = document.createElement("div");
            skillElement.className = "skill";
            skillElement.textContent = (skill.includes("Professional Experience") || skill.includes("Personal Projects")) ? `${skill}` : `${skill}`;
            if (skill.includes("Professional Experience") || skill.includes("Personal Projects")) {
                skillElement.classList.add("bold");
            };
            skillsList.appendChild(skillElement);
        });

        skillGroup.appendChild(category);
        skillGroup.appendChild(skillsList);
        section.appendChild(skillGroup);
    });
}

function toggleSkillsList(skillGroup) {
    const skillsList = skillGroup.querySelector(".skills-list");
    skillsList.style.display = (skillsList.style.display === "block") ? "none" : "block";
}

renderSkills();








