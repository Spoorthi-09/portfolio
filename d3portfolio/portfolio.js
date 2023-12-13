// About Page
d3.select("#about")
    .append("p")
    .html("<br><p style='text-align:center;'>Hi, I am <span class='highlight'>Spoorthi Subramanya Bhat</span>, a Software Developer.<p>" +
        "<span style='display: block; text-align: justify; margin: 0 auto; max-width: 900px;'>As a proactive software developer, I'm passionate about innovative technology and continuous growth. " +
        "With an educational background in Computer and Information Science and practical experience in Software development, " +
        "I'm dedicated to contributing my technical expertise to challenging projects and advancing my knowledge and skills in the field.<span>")
    .append("p")
    .html("<div class='button-container'><a href='resume\\Resume_08Nov23.pdf' download='Spoorthi_Bhat_Resume.pdf'><button>Download Resume</button></a></div>");

//----------------------------------------------------------------------------------------------------------------------------------
// Education
const educationData = [
    {
        institution: "University of Massachusetts, Dartmouth",
        location: "Massachusetts, USA",
        degree: "Master’s in Computer and Information Science",
        duration: "SEPTEMBER 2023 - SEPTEMBER 2025"
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
        company: "In Time Tec",
        location: "Bangalore, Karnataka, India",
        position: "Jr. Software Engineer",
        duration: "MARCH 2022 - AUGUST 2023",
        responsibilities: [
            "Developed and fine-tuned an Android SDK for Equifax Inc.'s Research and Development department, utilizing Kotlin to gather and scrutinize user and bot behavioral data on Android devices.",
            "Designed an E-commerce application (Drip Drop Distro) for Android using Jetpack Compose in Kotlin.",
            "Contributed to front-end and back-end web application development with the cloud-based low-code platform - CALS PLATZ, optimizing database queries for precise, efficient data retrieval and improved performance using MySQL."
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
        title: "Indoor Navigation System Using Bluetooth Low Energy Beacons - Android Application",
        link: "",
        description: "Created two Android applications, serving as BLE transmitter and receiver (Beacon Module). Managed a cloud database and a WebView interface (Admin Module). Implemented user interface for indoor navigation using the receiver Android application (User Module).",
        skills: "Android Java, Angular, SQLyog, MYSQL, ASP.NET RESTful API, Eddystone format Android Beacon Library."
    },
    {
        title: "Job Recruitment Portal - Web Application",
        link: "",
        description: "Crafted and developed a Job Recruitment Portal to streamline the recruitment process, to address and eliminate inefficiencies in the traditional manual recruitment system. Provided separate interfaces for candidates and employers (Candidate and Employer Portals). Enabled employers to post job vacancies (Job Vacancy Listings). Allowed candidates to upload their resumes (Resume Submission). Enabled candidates to view their applied jobs and application status (Job Application Tracking).",
        skills: "HTML, CSS, PHP, Javascript, and MYSQL Database."
    },
    {
        title: "Sports Management Client-Server Application - Console Application",
        link: "https://github.com/Spoorthi-09/SportsManagement_clientServerSystem",
        description: "Designed and implemented a Java-based client-server application for sports team and game management. Developed a multi-threaded server to handle concurrent client connections. Implemented JSON serialization for efficient data exchange. Integrated a MySQL database for persistent data storage. Focused on code modularity and error handling for a robust system. Effectively used the concepts of Object-Oriented Programming.",
        skills: "Java Programming, Socket Communication, JSON Serialization, Database Integration, and Multi-Threading."
    },
    {
        title: "Global Mortality Rate Data Visualization",
        link: "https://spoorthi-09.github.io/CausesOfDeath_DataVizProject/index.html",
        description: "Developed a data visualization website using D3.js, HTML, and CSS to represent global mortality rates from 1990 to 2019. The project features a home screen with a color-coded geomap displaying global mortality rates for the year 1990. Users can interactively change the displayed year from 1990 to 2019. An on-click function triggers a dual-axis plot for total deaths and GDP over the years for the selected country. The project also includes a cluster visualization depicting the leading causes of deaths for each country in each year and a stacked bar chart to illustrate the causes of deaths over the years.",
        skills: ["D3.js", "HTML", "CSS"]
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
    { category: "Programming Languages", skills: ["Professional Experience : ", "Kotlin", "PHP", "Javascript", "Personal Projects : ","Java", "C", "Python"], proficiency: [90, 80, 85, 75, 70, 95] },
    { category: "Database Systems", skills: ["SQL Server", "MYSQL"], proficiency: [85, 90] },
    { category: "Operating Systems", skills: ["Windows 7/11", "Ubuntu"], proficiency: [90, 80] },
    { category: "Version Control", skills: ["Github", "Gitlab", "Bitbucket"], proficiency: [95, 85, 90] }
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








