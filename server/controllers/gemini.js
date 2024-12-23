const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const apiKey = process.env.GOOGLE_GEMINI_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash-8b",
});

const generationConfig = {
  temperature: 1,
  topP: 0.9,
  topK: 30,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

const gemini = async (req, res) => {
  try {
    const { resumeText, jobDescription } = req.body;

    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {
              text: 'Extract the following details:\n\n              1) Extract all the professional and technical skills from the resume text provided below:\n              Please only extract skills from the resume. Do not mix any job description skills with the resume skills.\n              Resume Text: "SANJAYSUTHAR (519)-818-1726|suthar73@uwindsor.ca |linkedin|github|Portfolio TECHNICALSKILLS Languages: Java, Python, JavaScript Web Development: HTML, CSS, JavaScript, React.js, Express.js, Node.js, REST API Database Technologies: MySQL, MongoDB, SQlite, PostgreSQL Cloud & Deployment:: AWS EC2, AWS S3 Frameworks :: Bootstrap, Material UI, Tailwind Fundamental Concepts :: OOP, DBMS, Data Structures & Algorithms Methodologies :: SDLC (Agile, Scrum) Version Control :: Git, GitHub EDUCATION University of WindsorWindsor, ON Master of Applied ComputingMay 2024 – Present University of MumbaiMumbai, India Bachelor of Engineering Information Technology|CGPI: 8.34/10Aug 2019 – May 2023 EXPERIENCE Web Development Intern|HTML, CSS, JavaScript, MERNApr 2023 – May 2023 CodeClauseMumbai, India • Designed a website exhibiting competency in web development tools as well as problem-solving, time management, and testing/debugging abilities • Emphasized a user-centered design approach, and stayed current with latest web development trends and technologies PERSONALPROJECTS FriendsVault|AWS S3, EC2, React.js, Node.js, Express.js, MongoDB, Redux Toolkit, Material UISept 2024 Live ProjectGithub • Developed a social media platform where users can sign up, log in, post images or text, add friends, and view others’ profile pages • Stored images in AWS S3 buckets for efficient management, and hosted the platform on AWS EC2, ensuring scalable and reliable performance • Built a responsive social media app using the MERN stack for seamless user interaction • Efficiently handled global state management with Redux Toolkit, enabling smooth data flow and improved performance • Integrated Multer for handling media uploads, JWT for authentication, and Formik for form validation • Built profile pages where users can view posts and activities of friends, enhancing the social experience Etherfunds|HTML, CSS, Javascript, SolidityMay 2023 Github • Developed ”Etherfunds”, a DAPP utilizing Blockchain technology to eliminate middlemen and enhance transparency, trust, and security in crowdfunding processes • Organized all information regarding fundraisers, contributions, withdrawals, and funds to be visible on decentralized Blockchain Network, ensuring transparency and anti-fraudulence throughout entire process • Ensured immutable transactions using Blockchain, preventing any tampering or alterations, thus enhancing security and trust in the crowdfunding process • Enabled on-time donations by leveraging Blockchain’s efficiency, reducing the time it takes to deliver funds to recipients from months to mere moments LEADERSHIP/ EXTRA-CURRICULARACTIVITIES Volunteer Work at UCOE College’s VYRO EventSept 2022 Universal College of EngineeringMumbai, India • Volunteered at the VYRO major event, providing logistical support and managing attendee registration Chess Competition at UCOE CollegeSept 2021 Universal College of EngineeringMumbai, India • Achieved 4th place in competitive chess tournament at college, demonstrating proficiency in game and strategic thinking skills LEADERSHIP/ EXTRA-CURRICULARACTIVITIES Research Paper – International Journal of All Research Education & Scientific MethodsApr 2023 View PaperCertificate Published research paper titled ”Fruit and Vegetable Classification Using CNN” in ”International Journal of All Research Education Scientific Methods,” demonstrating expertise in field and contributing to research advancement in computer vision and machine learning CERTIFICATIONS The Complete 2023 Web Development BootcampCertificateMay 2023 Selenium Essential TrainingCertificateMay 2024 React: Creating and Hosting a FullStack SiteCertificateSept 2024 HOBBIES Chess|Cricket|Teaching|Stock Trading"\n\n              2) Extract all the professional and technical skills from the job description text (you need to find highlighted job)provided below:\n              Please only extract skills from the job description. Do not mix any resume skills with the job description skills.\n              Job Description: "0 notifications total Skip to search Skip to main content Keyboard shortcuts Close jump menu Search by title, skill, or company new feed updates notifications Home My Network Jobs Messaging 3 3 new notifications Notifications Me For Business Learning Top job picks for you Based on your profile, preferences, and activity like applies, searches, and saves 223 results Jump to active job details Jump to active search result Associate Veterinarian Associate Veterinarian NVA Canada · North Bay, ON 3 school alumni 3 University of Windsor school alumni work here Viewed Promoted Be an early applicant Veterinary Extern - General Practice Veterinary Extern - General Practice NVA Canada · Chatham, ON 3 school alumni 3 University of Windsor school alumni work here Promoted Be an early applicant Dotnet Developer Dotnet Developer with verification Insight Global · Richmond Hill, ON (Hybrid) Responsive hirer 1 school alum 1 University of Windsor school alum works here Viewed Promoted Easy Apply Front Store Supervisor Front Store Supervisor with verification Shoppers Drug Mart · Windsor, ON 1 connection 159 school alumni 159 University of Windsor school alumni work here Promoted SAP (Concur) Enterprise Architect SAP (Concur) Enterprise Architect with verification Quarry Consulting · Ottawa, ON (On-site) Responsive hirer Promoted Easy Apply Full-Stack Developer | Co-Create A 9-Figure Startup With Me Full-Stack Developer | Co-Create A 9-Figure Startup With Me with verification Megaphone · Canada (Remote) $3,000/month - $6,000/month Promoted Easy Apply Remote Embedded Software Engineer Remote Embedded Software Engineer with verification ORS Partners · Canada (Remote) Promoted Easy Apply Wargame Designer Wargame Designer with verification Akkodis · Ottawa, ON (Hybrid) Promoted Be an early applicant Easy Apply Backend Software Engineer Intern Co-op Backend Software Engineer Intern Co-op with verification ServiceNow · Montreal, QC (On-site) 10 school alumni 10 University of Windsor school alumni work here Promoted Go Developer - Frontend Modules Go Developer - Frontend Modules with verification Botsford Associates · Toronto, ON (Hybrid) 2 school alumni 2 University of Windsor school alumni work here Viewed Promoted Easy Apply Product Developer Product Developer with verification Botsford Associates · Toronto, ON (Hybrid) 2 school alumni 2 University of Windsor school alumni work here Viewed Promoted Easy Apply Stagiaire en recherche - apprentissage automatique | Research Intern - Machine Learning Stagiaire en recherche - apprentissage automatique | Research Intern - Machine Learning with verification Microsoft · Manitoba, Canada (Hybrid) 54 school alumni 54 University of Windsor school alumni work here Promoted Be an early applicant Integration Web Developer – Digital Experience Platform Integration Web Developer – Digital Experience Platform with verification Buchanan Technologies · Mississauga, ON (On-site) CA$65/hr - CA$70/hr Promoted Easy Apply Software Architect Software Architect with verification Akkodis · Greater Toronto Area, Canada (Hybrid) Promoted Easy Apply Software Engineer (12 month contract) Software Engineer (12 month contract) with verification Rakuten Kobo Inc. · Toronto, ON (On-site) 2 school alumni 2 University of Windsor school alumni work here Promoted Software Developer Intern Software Developer Intern with verification Nakisa · Montreal, QC (Hybrid) Promoted Front End / Full Stack developer Front End / Full Stack developer eTeam · Montreal, QC (Hybrid) CA$72/hr Viewed Promoted Easy Apply Java Full Stack Developer Java Full Stack Developer with verification Iris Software Inc. · Toronto, ON (Hybrid) 3 connections 1 school alum 1 University of Windsor school alum works here Promoted Easy Apply 1 2 3 4 5 6 7 8 9 10 Insight Global Share Show more options Dotnet Developer Richmond Hill, ON · 1 week ago · Over 100 applicants Hybrid Matches your job preferences, workplace type is Hybrid. Contract Matches your job preferences, job type is Contract. 0 of 3 skills match Required skills are missing from your profile Easy Apply Save Save Dotnet Developer at Insight Global How your profile and resume fit this job Get AI-powered advice on this job and more exclusive features with Premium. Reactivate Premium Tailor my resume to this job Am I a good fit for this job? How can I best position myself for this job? People you can reach out to Sandeep profile photo Sandeep Kukred · 3rd Sr. DevOps Engineer at Lululemon School alum from University of Windsor Message About the job Day-to-Day Insight Global is a looking for a Dotnet developer to join a leading retail company on a contract basis. The resource will be owning the backend development of new interface for POS terminals. Responsible for working with the API developers and interface team, the resource will be responsible for completing the development and supporting the testing and implementation of the final product. Please note this role will require being hybrid onsite 2-3 days in Richmond Hill. Necessary Skills and Experience: 5+ year C# .Net development experience Experience working on POS or java or Node.js, REST API, MySQL, MongoDB, SQlite, PostgreSQL, AWS EC2. Payments terminals Experience development and integration of APIs. Ability to operate autonomously Plusses: Middleware experience Job search faster with Premium Access company insights like strategic priorities, headcount trends, and more Tanmay and millions of other members use Premium Reactivate Premium: 50% Off Cancel anytime, for any reason. About the company Insight Global 3,399,337 followers Following Staffing and Recruiting 1,001-5,000 employees 13,494 on LinkedIn Insight Global is an international professional services and staffing company specializing in delivering talent and technical solutions to Fortune 1000 companies across the IT, Non-IT, Healthcare, and Engineering industries. Fueled by staffing and talent experts, Evergreen, our professional services brand, brings technical advisors and culture consultants to help customers tackle their biggest challenges. With over 70 locations across North America, Europe, and Asia, and global staffing capabilities in 50+ countries, our teams of tech-enabled recruiters are dedicated to finding the right talent and technical solutions to help our customers thrive. At our core, we are dedicated to empowering people to do great things. That’s why we’re passionate about developing our people personally, professionally, and financially so they can be the light to the world around them. n, Evergreen. To find out more, visit www.insightglobal.com … show more Commitments Social impact We are dedicated to providing social opportunities, ensuring our impact goes beyond just staffing. As a staffing company, our business is people and people are our business. Insight Global recognizes the various challenges that our employees, consultants, and their communities face. Through efforts such as DE&I, employee support groups, parental leave programming, and mental health initiatives we aim to enable our employees to live their fullest potential and encourage giving back to communities that need it most. Through contributions to philanthropic efforts and charity partnerships including OneWorld Health, we’ve taken our impact beyond the office to global communities. … Show more Diversity, equity, and inclusion We believe different perspectives and backgrounds make us better. And we know that employees do their best work when they are able to be themselves and have authentic interactions with colleagues. We’ve been on a journey to ensure our company better reflects the overall workforce, building and maintaining a culture where people can bring their full, authentic selves to work, and sharing what we are learning on our journey with our client and consultant families so they can make similar advances. We are dedicated to achieving real diversity, equity, and inclusion in our company because we recognize the incredible value that DE&I brings to the personal, professional, and financial development of people. Regardless of who you are or where you come from, we believe you should feel safe, welcome, and connected at work, and that if we can create environments like that, people can achieve more together. We still have work to do, but we’re proud to share what we’re doing to advance DE&I at Insight Global. … Show more Environmental sustainability As a services company, our carbon footprint is relatively small compared to businesses that manufacture products. However, we firmly believe that it is our corporate responsibility to take meaningful steps towards getting them to zero. … Show more Career growth and learning We are obsessed with developing our people. Whether we’re training new hires, future leaders, corporate and sales managers, or our executive team, we know that ongoing development helps build perspective and teach invaluable skills that go beyond the day-to-day grind. Our purpose is directly tied to our mission: we want to develop our people personally, professionally, and financially so that they can be the light to the world. So, not only do our people become experts in their trade through our state of the art training programs, but they also spend the same amount of time, if not more, learning how to tend the flame of our culture. … Show more Work-life balance We care about our people’s well-being. After all, one of our Shared Values is “We Take Care of Each Other.” But, as it did for so many others, the COVID-19 pandemic solidified the importance of our people’s overall health. We knew we could only fulfill our mission to be the light to the world if we first took care of our people, including their mental health. When our CEO, Bert Bean, opened a dialogue with the entire company about mental health, it inspired an internal movement. We have been normalizing mental health conversations and support ever since. Maintaining mental wellbeing is a lifelong pursuit , and we’re constantly searching for new ways to support our people in the personal, professional, and financial development. … Show more Learn more Interested in working with us in the future? Privately share your profile with our recruiters – you’ll be noted as expressing interest for up to a year and be notified about jobs and updates. Learn more Learn more about Interested in working for our company I’m interested Company photos Page 1 of 7 Previous Next August 19, 2022 August 19, 2022 Show more"\n\n              3) Extract the following job details from the job description:\n                a) Job Title\n                b) Co-op Start Date\n                c) Tenure (duration)\n                d) Location\n\n              Return the results in this structured JSON format:\n\n              {\n                "resumeSkills": ["skill1", "skill2", "skill3"],\n                "jobDescriptionSkills": ["skill1", "skill2", "skill3"],\n                "missingSkills": ["skill1", "skill2", "skill3"] (only skills that JD skills not found in resume, not vice versa),\n                "percentageMatch": between 0 to 100 (percentage of resume skills found in JD only in % like if 10 skills found out of 20 from jd then 50%),\n                "jobDetails": {\n                  "Company" : "properly Company name ",\n                  "jobTitle": "Job Title Here",\n                  "coOpStartDate": "YYYY-MM-DD",\n                  "jobDuration": "like if it\'s 4 months or 8 months or 12 months or 16 months etc",\n                  "experience": "Experience Level Here",\n                  "location": "Location Here",\n                  "salary":"if given";\n                  "responsibilities":"like what to do in this job in 10 words";\n                }\n              }',
            },
          ],
        },
        {
          role: "model",
          parts: [
            {
              text: '```json\n{\n  "resumeSkills": [\n    "Java",\n    "Python",\n    "JavaScript",\n    "HTML",\n    "CSS",\n    "React.js",\n    "Express.js",\n    "Node.js",\n    "REST API",\n    "MySQL",\n    "MongoDB",\n    "SQlite",\n    "PostgreSQL",\n    "AWS EC2",\n    "AWS S3",\n    "Bootstrap",\n    "Material UI",\n    "Tailwind",\n    "OOP",\n    "DBMS",\n    "Data Structures & Algorithms",\n    "SDLC",\n    "Agile",\n    "Scrum",\n    "Git",\n    "GitHub",\n    "MER",\n    "Solidity",\n    "Redux Toolkit",\n    "Multer",\n    "JWT",\n    "Formik"\n  ],\n  "jobDescriptionSkills": [\n    "C#",\n    ".Net",\n    "POS",\n    "Java",\n    "Node.js",\n    "REST API",\n    "MySQL",\n    "MongoDB",\n    "SQlite",\n    "PostgreSQL",\n    "AWS EC2",\n    "API",\n    "Middleware"\n  ],\n  "missingSkills": [\n    "C#",\n    ".Net",\n    "POS",\n    "Middleware"\n  ],\n  "percentageMatch": 40,\n  "jobDetails": {\n    "Company": "Insight Global",\n    "jobTitle": "Dotnet Developer",\n    "coOpStartDate": null,\n    "jobDuration": "Contract",\n    "experience": "5+ years",\n    "location": "Richmond Hill, ON (Hybrid)",\n    "salary": null,\n    "responsibilities": "Develop backend for POS, collaborate, test, and implement product."\n  }\n}\n```',
            },
          ],
        },
      ],
    });

    const prompt = `Extract the following details:

              1) Extract all the professional and technical skills from the resume text provided below:
              Please only extract skills from the resume. Do not mix any job description skills with the resume skills.
              Resume Text: ${resumeText}

              2) Extract all the professional and technical skills from the job description text (you need to find highlighted job)provided below:
              Please only extract skills from the job description. Do not mix any resume skills with the job description skills.
              Job Description: ${jobDescription}

              3) Extract the following job details from the job description:
                a) Job Title
                b) Co-op Start Date
                c) Tenure (duration)
                d) Location

             

             {
  "context": "The input contains all text extracted from a LinkedIn job posting page and a separate list of skills extracted from the user's resume. The job posting text may include the main job description (JD), sidebar content (e.g., other job postings, recommendations), and general company or site information.",
  "goal": "Identify the main Job Description (JD) from the extracted text and extract relevant details for analysis, while ignoring unrelated content such as sidebar job listings, promotional text, or navigation instructions. Additionally, compare the JD skills against the provided resume skills, accounting for logical equivalences where applicable.",
  "instructions": {
    "step1": "Search for the main JD using specific patterns in the text. Prioritize sections that include headings or keywords like 'Responsibilities', 'Necessary Skills', 'Day-to-Day', 'Qualifications', or 'Requirements'. These sections often follow the job title and are located near company and role-specific details.",
    "step2": "Ignore sections such as:",
    "ignore": [
      "Lists of other job postings (e.g., sidebar jobs).",
      "Generic navigation elements (e.g., 'Home', 'Search', 'Notifications').",
      "Promotional text (e.g., 'Learn more about this company').",
      "Company culture or environmental initiatives unrelated to the specific job posting."
    ],
    "step3": "If multiple jobs are mentioned in the text, identify the most detailed section with information about job responsibilities, required qualifications, and specific skills.",
    "step4": "Extract and organize relevant details from the main JD, and compare them against the provided resume skills to generate insights, incorporating logical equivalences between skills where applicable.",
    "logicalEquivalence": [
      {"JD Skill": "Cascading Style Sheets", "Resume Skill": "CSS"},
      {"JD Skill": "JavaScript", "Resume Skill": "JS"},
      {"JD Skill": "Elastic", "Resume Skill": "AWS EC2"},
      {"JD Skill": "HyperText Markup Language", "Resume Skill": "HTML"},
      {"JD Skill": "Structured Query Language", "Resume Skill": "SQL"}
    ],
    "step5": "If the JD mentions a skill using a long-form name or description (e.g., 'Cascading Style Sheets') and the resume includes its common abbreviation or equivalent (e.g., 'CSS'), treat them as a match.",
    "step6": "Extend logical matches for related technologies (e.g., if JD mentions 'Elastic', check for 'AWS EC2' or similar cloud services in the resume).",
    "step7": "Extract and organize the following fields:",
    "fields": {
      "resumeSkills": "A list of skills extracted from the user's resume.",
      "jobDescriptionSkills": "List all unique skills explicitly mentioned in the JD, including recognized logical equivalents.",
      "missingSkills": "Skills from the JD that are not found in the provided resumeSkills after applying logical matching.",
      "percentageMatch": "Percentage of JD skills found in the resumeSkills, calculated as (matched skills / total JD skills) * 100.",
      "jobDetails": {
        "company": "Properly formatted company name.",
        "jobTitle": "Job title as mentioned in the JD.",
        "coOpStartDate": "Start date in 'YYYY-MM-DD' format if provided; otherwise 'NA'.",
        "jobDuration": "Duration in months (e.g., 4, 8, 12). If not specified, use 'NA'.",
        "experience": "Experience level required (e.g., '5+ years'). If not specified, use 'NA'.",
        "location": "Location as mentioned in the JD (e.g., city, state, or 'Remote').",
        "salary": "Salary details if provided; otherwise 'NA'.",
        "responsibilities": "A concise summary of job responsibilities in 10 words or fewer."
      }
    },
    "step8": "Compare the JD skills with the resume skills provided, considering logical equivalences, to fill the fields for missingSkills and percentageMatch.",
    "step9": "Discard any unrelated content after extracting the main JD."
  },
  "exampleInput": {
    "extractedText": "Full text extracted from the LinkedIn page, including navigation links, sidebar job postings, and detailed JD text.",
    "resumeSkills": ["C#", ".NET", "CSS", "AWS EC2", "MySQL", "MongoDB"]
  },
  "exampleOutput": {
    "resumeSkills": ["C#", ".NET", "CSS", "AWS EC2", "MySQL", "MongoDB"],
    "jobDescriptionSkills": ["C#", ".NET", "Cascading Style Sheets", "Elastic", "MongoDB"],
    "missingSkills": ["Elastic"],
    "percentageMatch": 80,
    "jobDetails": {
      "company": "Insight Global",
      "jobTitle": "Dotnet Developer",
      "coOpStartDate": "NA",
      "jobDuration": "NA",
      "experience": "5+ years",
      "location": "Richmond Hill, ON",
      "salary": "NA",
      "responsibilities": "Backend development for POS terminals."
    }
  }
}

   Return the results in this structured JSON format of exampleOutput

 `;

    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());

    const jsonResponse = result.response.text().replace(/```json\n|\n```/g, "");
    const parsedResult = JSON.parse(jsonResponse);

    // Join skills side by side with commas
    parsedResult.resumeSkills = parsedResult.resumeSkills.join(", ");
    parsedResult.jobDescriptionSkills =
      parsedResult.jobDescriptionSkills.join(", ");

    res.json({ result: parsedResult });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to generate result" });
  }
};

module.exports = { gemini };
