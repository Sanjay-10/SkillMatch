const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = process.env.GOOGLE_GEMINI_KEY; 
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash-8b",
});

const generationConfig = {
  temperature: 0.7,
  topP: 0.9,
  topK: 30,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

const extension = async (req, res) => {
  try {
    const { resumeText, jobDescription } = req.body;

    // console.log("Request received:", jobDescription);

    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {
              text: 'Step 1: Skill Extraction\n1)Resume Skills Extraction:\nExtract all the professional and technical skills explicitly mentioned in the provided resume text.\nExclude any skills found in the Job Description (JD). Focus only on the resume content.\nInput: "Resume Text": "SANJAY SUTHAR (519)-818-1726 | suthar73@uwindsor.ca | linkedin | github | Portfolio TECHNICAL SKILLS Languages: Java, Python, JavaScript Web Development : HTML, CSS, JavaScript, React.js, Express.js, Node.js, REST API Database Technologies : MySQL, MongoDB, SQlite, PostgreSQL Cloud & Deployment : AWS EC2, AWS S3 Frameworks : Bootstrap, Material UI, Tailwind Fundamental Concepts : OOP, DBMS, Data Structures & Algorithms Automation Testing : Selenium Methodologies : SDLC (Agile, Scrum) Operating Systems & Tools : Linux, Git, GitHub EDUCATION University of Windsor Windsor, ON Master of Applied Computing May 2024 – Present University of Mumbai Mumbai, India Bachelor of Engineering Information Technology | CGPI: 8.34/10 Aug 2019 – May 2023 EXPERIENCE Web Development Intern | React.js, MongoDB, JavaScript, MERN Apr 2023 – May 2023 CodeClause Mumbai, India • Created a website using React.js, MongoDB, and JavaScript, demonstrating my ability to build and manage modern web applications efficiently • Worked on building interactive user interfaces and ensured a smooth, user-friendly experience • Collaborated with the team to implement new features and improve website performance PERSONAL PROJECTS SkillMatch | React.js, Google Gemini, Node.js, Express.js, Multer, REST APIs, Redux Toolkit, Tailwind Dec 2024 Live Project Github • Developed a Google Chrome extension to assist students in evaluating job opportunities and preparing tailored applications • Enabled users to upload their resumes; the extension fetched job descriptions (JDs) from the current web page and summarized them • Integrated Google Gemini for processing resumes and JDs to provide insights on job fit, skill matching, and missing competencies • Displayed profile match percentages and missing skills for personalized user guidance • Implemented a feature to auto-generate cover letters based on job descriptions, streamlining the application process FriendsVault | AWS S3, EC2, React.js, Node.js, Express.js, MongoDB, Redux Toolkit, Material UI Sept 2024 Live Project Github • Developed a social media platform where users can sign up, log in, post images or text, add friends, and view others’ profile pages • Stored images in AWS S3 buckets for efficient management, and hosted the platform on AWS EC2, ensuring scalable and reliable performance • Built a responsive social media app using the MERN stack for seamless user interaction • Efficiently handled global state management with Redux Toolkit, enabling smooth data flow and improved performance • Integrated Multer for handling media uploads, JWT for authentication, and Formik for form validation • Built profile pages where users can view posts and activities of friends, enhancing the social experience Etherfunds | HTML, CSS, Javascript, Solidity May 2023 Github • Developed ”Etherfunds”, a DAPP utilizing Blockchain technology to eliminate middlemen and enhance transparency, trust, and security in crowdfunding processes • Organized all information regarding fundraisers, contributions, withdrawals, and funds to be visible on decentralized Blockchain Network, ensuring transparency and anti-fraudulence throughout entire process • Ensured immutable transactions using Blockchain, preventing any tampering or alterations, thus enhancing security and trust in the crowdfunding process • Enabled on-time donations by leveraging Blockchain’s efficiency, reducing the time it takes to deliver funds to recipients from months to mere moments LEADERSHIP / EXTRA-CURRICULAR ACTIVITIES Volunteer Work at UCOE College’s VYRO Event Sept 2022 Universal College of Engineering Mumbai, India • Volunteered at the VYRO major event, providing logistical support and managing attendee registration Chess Competition at UCOE College Sept 2021 Universal College of Engineering Mumbai, India • Achieved 4th place in competitive chess tournament at college, demonstrating proficiency in game and strategic thinking skills LEADERSHIP / EXTRA-CURRICULAR ACTIVITIES Research Paper – International Journal of All Research Education & Scientific Methods Apr 2023 View Paper Certificate Published research paper titled ”Fruit and Vegetable Classification Using CNN” in ”International Journal of All Research Education Scientific Methods,” demonstrating expertise in field and contributing to research advancement in computer vision and machine learning CERTIFICATIONS The Complete 2023 Web Development Bootcamp Certificate May 2023 Selenium Essential Training Certificate May 2024 React: Creating and Hosting a FullStack Site Certificate Sept 2024 HOBBIES Chess | Cricket | Teaching | Stock Trading"\n\n2) Job Description Skills Extraction:\n\nExtract all professional and technical skills explicitly mentioned in the JD text.\nExclude any skills found in the resume. Focus only on the JD content.\nInput: Job Description": "Tolko Industries Share Show more options Engineering Student - 8 Month Term High Prairie, AB · 4 weeks ago · 89 people clicked apply On-site Matches your job preferences, workplace type is On-site. Part-time Matches your job preferences, job type is Part-time. Apply Save Save Engineering Student - 8 Month Term at Tolko Industries Engineering Student - 8 Month Term Tolko Industries · High Prairie, AB (On-site) Apply Save Save Engineering Student - 8 Month Term at Tolko Industries Show more options How your profile and resume fit this job Get AI-powered advice on this job and more exclusive features with Premium. Reactivate Premium Tailor my resume to this job Am I a good fit for this job? How can I best position myself for this job? 24% Resume Match Increase your match score by using the Jobalytics extension. About the job Engineering StudentHigh Prairie, Alberta8 Month Term (Starting January 2025) Our High Prairie OSB Division is currently recruiting an 8-month Engineering Student. Our Engineering students are key contributors at our mills. Their passion for technology and appetite for new challenges gives them a fresh approach to tackling improvements. As a student, the opportunity to work with seasoned professionals allows them to build their skills and gain meaningful automation and controls engineering work experience. If this sounds like your kind of opportunity, read on to learn more. We’re looking for a Engineering Student to join our facility located in High Prairie, Alberta. Our mill has undergone an exciting major rebuild and modernization including the commissioning of a new continuous press which makes us the most modern mill in North America. Our ideal candidate has the following qualifications: Currently enrollment in an Electrical, Mechanical, Mechatronics Engineering or Wood Science post-secondary program. Excellent communication skills. Have mechanical aptitude and understanding of machines. A passion for technology and programming. Strong organizational and analytical skills. Ability to work independently and use own resources to find innovative solutions to new problems. We value diversity at Tolko and know that experience and knowledge comes in many forms. Even if you don\'t have all the qualifications above, please apply. We would love to hear your story and have you grow with us. In this role, you will: Generate data showing long term trends. Standardize data collection across our SBB mills. Be driven to find solutions and look for ways to improve processes. Be responsible for recommending methods to improve safety, quality, throughput, and uptime, and will provide support to electrical personnel on shift. Support the mill SR&ED (Scientific research & experimental research) program. Have opportunities to work with numerous departments across the mill. So, what’s in it for you? You’ll take on an exciting new challenge with supportive team members. You’ll earn a competitive salary. The expected base salary range for this position is $51,500 to $59,200 per year. You’ll grow new skills and gain hands-on, practical experience. You\'ll work with some of the best and brightest in the industry. You’ll be part of a positive, innovative, and inclusive work environment. If you want to work in a sustainable, future focused industry, there is no better place than Tolko. Our family has been producing innovative forest products for over 65 years. Our focus remains on sustainably managing our forests and our business for upcoming generations. We want YOU to join our family. Come Grow Here! Apply today at www.tolko.com/careers. Want to know what it’s like to work for Tolko? Hear what our employees have to say! About High Prairie Located four hours northeast of Edmonton, the Town of High Prairie is a thriving community with 26,957 hectares of park and protected natural assets. There are endless outdoor activities for both land and lake lovers alike and facilities include an arena, curling rink, indoor swimming pool, tennis courts and baseball diamonds. Watch this video to learn more about the community and find out why life is better here. Follow us on LinkedIn, Facebook, and Twitter to stay up to date on Tolko news and job postings. To protect the privacy of your personal information, please ensure that when you apply, you are directed to Tolko’s job board at https://recruiting.ultipro.ca or you are accessing Tolko job opportunities through our website at www.tolko.com/careers. Job search faster with Premium Access company insights like strategic priorities, headcount trends, and more Tanmay and millions of other members use Premium Reactivate Premium: 50% Off Cancel anytime, for any reason. About the company Tolko Industries 19,974 followers Follow Paper and Forest Product Manufacturing 1,001-5,000 employees 1,426 on LinkedIn With state-of-the-art operations across western Canada, Tolko is a leading manufacturer of a wide range of forest products for customers around the world. For over 60 years, our family-owned company has been recognized by customers and business partners for being reliable, flexible, efficient and offering quality products. With the third generation of family leadership, we’re continuing that legacy today in our divisions throughout western Canada and joint ventures in the Southern United States. At Tolko, our values, vision and mission aren’t just what we believe. They’re how we work, live and serve our customers every day. Fundamental to our success is a diverse and committed workforce that thrives on change, building relationships, and a drive toward excellence. When you join Tolko, you’ll develop your skills and be encouraged to pursue diverse opportunities with a company that’s built on integrity, respect, and provides employees with the inclusive environment, support and opportunity to build great lives. … show more Interested in working with us in the future? Privately share your profile with our recruiters – you’ll be noted as expressing interest for up to a year and be notified about jobs and updates. Learn more Learn more about Interested in working for our company I’m interested Company photos Page 1 of 7 Previous Next March 25, 2020 March 26, 2020 March 25, 2020 Show more"\n\nStep 2: Logical Equivalence for Skills\nApply logical equivalences to match abbreviations or synonyms between the JD and resume (e.g., "Cascading Style Sheets" = "CSS").\nExtend matches to related technologies (e.g., "Elastic" = "AWS EC2").\n\nStep 3: Extract Job Details\nFrom the job description, extract the following details:\n\nJob Title: As mentioned in the JD.\nCo-op Start Date: In DD MM YYYY  format (MM in shorthand of months like jan feb ..), if available; otherwise, NA.\nJobType :  Parttime , fulltime, coop and Duration of the job if mentions in months (e.g., 4, 6, 12); if not specified, use NA. coop - 4 months" or fulltime or contract or coop - 8months. just (Jobtype - Duration ) duraction only if mentions\nLocation: Job location as specified (e.g., city, state, or Remote).\nSalary: Salary details in use shortform of per year or per hours or etc like /yr, /hr ...; if not provided, use NA.\nExperience: Required experience (e.g., \'5+ years\'); if not specified, use NA.\nResponsibilities: Summarize responsibilities in 10 words or fewer.\nMissing Keywords: Skills mentioned in the JD but not in the resume.\n\nStep 4: Comparison and Insights\nCompare extracted skills from the JD and resume.\nCalculate the missingSkills (skills in JD but not in resume).\nCompute the percentageMatch:\nPercentage Match = (Number of Matched Skills / Total JD Skills) × 100\n\nOutput Format:\nReturn results in the following structured JSON format:\n\n{\n  "resumeSkills": ["Extracted skills from the resume"],\n  "jobDescriptionSkills": ["Extracted skills from the JD"],\n  "missingSkills": ["Skills from JD not found in the resume"],\n  "percentageMatch": "Percentage of JD skills matched in the resume",\n  "jobDetails": {\n    "company": "Properly formatted company name",\n    "jobTitle": "Extracted job title",\n    "coOpStartDate": "1 jan 2025",\n    "Jobtype": "coop - 4 months"\n    "experience": "Experience level (e.g., \'5+ years\')",\n    "location": "Job location",\n    "salary": "51.5K-59K/yr or NA",\n    "responsibilities": "Summary in 10 words or fewer"\n  }\n}\n\n',
            },
          ],
        },
        {
          role: "model",
          parts: [
            {
              text: '```json\n{\n  "resumeSkills": [\n    "Java",\n    "Python",\n    "JavaScript",\n    "HTML",\n    "CSS",\n    "React.js",\n    "Express.js",\n    "Node.js",\n    "REST API",\n    "MySQL",\n    "MongoDB",\n    "SQlite",\n    "PostgreSQL",\n    "AWS EC2",\n    "AWS S3",\n    "Bootstrap",\n    "Material UI",\n    "Tailwind",\n    "OOP",\n    "DBMS",\n    "Data Structures & Algorithms",\n    "Selenium",\n    "SDLC",\n    "Agile",\n    "Scrum",\n    "Linux",\n    "Git",\n    "GitHub",\n    "Solidity",\n    "MERN",\n    "Redux Toolkit",\n    "Multer",\n    "Formik",\n    "JWT",\n    "Google Gemini"\n  ],\n  "jobDescriptionSkills": [\n    "Electrical Engineering",\n    "Mechanical Engineering",\n    "Mechatronics Engineering",\n    "Wood Science",\n    "communication skills",\n    "mechanical aptitude",\n    "understanding of machines",\n    "programming",\n    "organizational skills",\n    "analytical skills",\n    "ability to work independently",\n    "data collection",\n    "problem-solving",\n    "improvement of processes",\n    "safety",\n    "quality",\n    "throughput",\n    "uptime",\n    "support to electrical personnel",\n    "SR&ED (Scientific research & experimental research)",\n\t"Generating data showing long term trends",\n\t"Standardize data collection across SBB mills",\n\t"finding solutions and look for ways to improve processes"\n  ],\n  "missingSkills": [\n    "Electrical Engineering",\n    "Mechanical Engineering",\n    "Mechatronics Engineering",\n    "Wood Science",\n    "communication skills",\n    "mechanical aptitude",\n    "understanding of machines",\n    "programming",\n    "organizational skills",\n    "analytical skills",\n    "ability to work independently",\n    "data collection",\n    "problem-solving",\n    "improvement of processes",\n    "safety",\n    "quality",\n    "throughput",\n    "uptime",\n    "support to electrical personnel",\n    "SR&ED (Scientific research & experimental research)",\n\t"Generating data showing long term trends",\n\t"Standardize data collection across SBB mills",\n\t"finding solutions and look for ways to improve processes"\n  ],\n  "percentageMatch": "0%",\n  "jobDetails": {\n    "company": "Tolko Industries",\n    "jobTitle": "Engineering Student - 8 Month Term",\n    "coOpStartDate": "01 Jan 2025",\n    "Jobtype": "coop - 8 months",\n    "experience": "NA",\n    "location": "High Prairie, AB",\n    "salary": "51.5K-59K/yr",\n    "responsibilities": "Support engineering improvements, safety, quality & throughput"\n  }\n}\n```\n\n**Explanation and Improvements:**\n\n* **MissingSkills:**  Crucially, the `missingSkills` array now correctly lists the *skills from the JD* that are *missing* from the resume.  The previous list was incorrect in its logic.\n\n* **Percentage Match:** The percentage match is now accurately calculated *using the correct count of JD skills*. \n\n* **Job Details:** The `jobDetails` section is complete and accurate based on the provided job description.\n\n\n**Important Considerations for Future Use:**\n\n* **Logical Equivalence (Step 2):**  This step is *essential* for accurate skill matching.  Create a more comprehensive list of possible synonyms and abbreviations (e.g., "Cascading Style Sheets" as "CSS" or "HTML," etc.).\n\n* **Resume Parsing:**  The JSON response relies on having the skills *explicitly* stated in the resume.  More advanced NLP techniques (e.g., using libraries like spaCy or similar) could potentially extract skills mentioned in phrases or descriptions that aren\'t exact matches, increasing the accuracy of the match.\n\n* **Fuzzy Matching:** Consider using fuzzy matching algorithms (e.g., Levenshtein distance) to identify skills that are close in spelling or phrasing, but not exact.\n\n* **Data Validation:** Add checks to verify the validity of the extracted data (e.g., salary format, start dates, etc.).\n\n\nBy implementing these improvements, the system will become significantly more effective in assessing candidate-job fit. Remember to update the skill matching in Step 2 based on the specific context of resumes and job descriptions to produce reliable results. The current response is a step in the right direction, but substantial improvement needs those extra steps.',
            },
          ],
        },
      ],
    });

    const extensionPrompt = ` Read all the information carefully and provide the following details:
    Step 1: Skill Extraction
1)Resume Skills Extraction:
Extract all the professional and technical skills explicitly mentioned in the provided resume text.
Focus only on the resume content.
Input: "Resume Text": "${resumeText}"

2) Job Description Skills Extraction:

Extract all professional and technical skills explicitly mentioned in the JD text.
 Focus only on the JD content.
Input: "Job Description": "${jobDescription}"

Step 2: Logical Equivalence for Skills
Apply logical equivalences to match abbreviations or synonyms between the JD and resume (e.g., "Cascading Style Sheets" = "CSS") ot HTML == HTML5. but c++ is not equal to c# so use your logical thinking to match the skills.
Extend matches to related technologies (e.g., "Elastic" = "AWS EC2"). but c++ is not equal to c#.

Step 3: Extract Job Details
From the job description, extract the following details:

Job Title: As mentioned in the JD.
Start Date: In DD MM YYYY  format (MM in shorthand of months like jan feb ..), if available; otherwise, NA.
jobType :  Parttime , fulltime, coop and Duration of the job if mentions in months (e.g., 4, 6, 12); if not specified, use NA. coop - 4 mon" or fulltime or contract or coop - 8mon. just (Jobtype - Duration ) duraction only if mentions . use shortform of month i.e mon for months and yr for year and for all use shortform.
Location: Job location as specified (e.g., city, state, hybrid or Remote).
Salary: Salary details in use shortform of per year or per hours or etc like /yr, /hr ...also CA$70/hr - CA$75/hr to 70 write to CA$ 70–75/hr or yr; if not provided, use NA.
Experience: Required experience (e.g., '5+ years') dont write 5+ years experience just 5 years, if not specified, use NA.
Responsibilities: Summarize responsibilities in 10 words or fewer.

Missing Keywords: this is every important part read carefully both job description and resume and find out missing skills.only words not in sentence.experience is not come under missing skills. both technical and professional Skills mentioned in the JD but not in the resume in words try not to give in sentence. use logical thinking to match the skills or words. also single or plural form of the word are same for example "data structure" and "data structures" are same so they counted as match not missing.

Step 4: Comparison and Insights
Compare extracted skills from the JD and resume.
Calculate the missingSkills (skills in JD but not in resume).
Compute the percentageMatch:
Percentage Match = (Number of Matched Skills / Total JD Skills) × 100

Output Format:
Return results in the following structured JSON format:

{
  "resumeSkills": ["Extracted skills from the resume"],
  "jobDescriptionSkills": ["Extracted skills from the JD"],
  "missingSkills": ["both technical and professional Skills from JD not found in the resume use logical thinking to match the skills or words, only words not in sentence, also experience is not come under missing skills"],
  "percentageMatch": 20% or 77% (only integers not float)"Percentage of JD skills matched in the resume",
  "jobDetails": {
    "company": "Properly formatted company name",
    "jobTitle": "Extracted job title",
    "startDate": "1 jan 2025",
    "jobType": "coop - 4 mon or fulltime or contract or coop - 8mon",
    "experience": "Experience level (e.g., '5+ years')",
    "location": "Job location (ex: toronto - hybrid, toronto, anycity or remote)",
    "salary": "51.5K-59K/yr or NA",
    "responsibilities": "Summary in 10 words or fewer"
  }
}

 `;

    const result = await chatSession.sendMessage(extensionPrompt);
    console.log(result.response.text());

    const jsonResponse = result.response.text().replace(/```json\n|\n```/g, "");
    const parsedResult = JSON.parse(jsonResponse);

    parsedResult.resumeSkills = parsedResult.resumeSkills.join(", ");
    parsedResult.jobDescriptionSkills =
      parsedResult.jobDescriptionSkills.join(", ");

    res.json({ result: parsedResult });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to generate result" });
  }
};

const detailedOverview = async (req, res) => {
  try {
    const { resumeText, jobDescription, extensionResult } = req.body;
    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {
              text: 'Analyze the provided resume and job description. Return a JSON response with meaningful and actionable insights to help the user refine their application. Structure the response as follows:\n\nRESUME: SANJAYSUTHAR (519)-818-1726|suthar73@uwindsor.ca |linkedin|github|Portfolio TECHNICALSKILLS Languages: Java, Python, JavaScript Web Development: HTML, CSS, JavaScript, React.js, Express.js, Node.js, REST API Database Technologies: MySQL, MongoDB, SQlite, PostgreSQL Cloud & Deployment:: AWS EC2, AWS S3 Frameworks :: Bootstrap, Material UI, Tailwind Fundamental Concepts :: OOP, DBMS, Data Structures & Algorithms Methodologies :: SDLC (Agile, Scrum) Version Control :: Git, GitHub EDUCATION University of WindsorWindsor, ON Master of Applied ComputingMay 2024 – Present University of MumbaiMumbai, India Bachelor of Engineering Information Technology|CGPI: 8.34/10Aug 2019 – May 2023 EXPERIENCE Web Development Intern|HTML, CSS, JavaScript, MERNApr 2023 – May 2023 CodeClauseMumbai, India • Designed a website exhibiting competency in web development tools as well as problem-solving, time management, and testing/debugging abilities • Emphasized a user-centered design approach, and stayed current with latest web development trends and technologies PERSONALPROJECTS FriendsVault|AWS S3, EC2, React.js, Node.js, Express.js, MongoDB, Redux Toolkit, Material UISept 2024 Live ProjectGithub • Developed a social media platform where users can sign up, log in, post images or text, add friends, and view others’ profile pages • Stored images in AWS S3 buckets for efficient management, and hosted the platform on AWS EC2, ensuring scalable and reliable performance • Built a responsive social media app using the MERN stack for seamless user interaction • Efficiently handled global state management with Redux Toolkit, enabling smooth data flow and improved performance • Integrated Multer for handling media uploads, JWT for authentication, and Formik for form validation • Built profile pages where users can view posts and activities of friends, enhancing the social experience Etherfunds|HTML, CSS, Javascript, SolidityMay 2023 Github • Developed ”Etherfunds”, a DAPP utilizing Blockchain technology to eliminate middlemen and enhance transparency, trust, and security in crowdfunding processes • Organized all information regarding fundraisers, contributions, withdrawals, and funds to be visible on decentralized Blockchain Network, ensuring transparency and anti-fraudulence throughout entire process • Ensured immutable transactions using Blockchain, preventing any tampering or alterations, thus enhancing security and trust in the crowdfunding process • Enabled on-time donations by leveraging Blockchain’s efficiency, reducing the time it takes to deliver funds to recipients from months to mere moments LEADERSHIP/ EXTRA-CURRICULARACTIVITIES Volunteer Work at UCOE College’s VYRO EventSept 2022 Universal College of EngineeringMumbai, India • Volunteered at the VYRO major event, providing logistical support and managing attendee registration Chess Competition at UCOE CollegeSept 2021 Universal College of EngineeringMumbai, India • Achieved 4th place in competitive chess tournament at college, demonstrating proficiency in game and strategic thinking skills LEADERSHIP/ EXTRA-CURRICULARACTIVITIES Research Paper – International Journal of All Research Education & Scientific MethodsApr 2023 View PaperCertificate Published research paper titled ”Fruit and Vegetable Classification Using CNN” in ”International Journal of All Research Education Scientific Methods,” demonstrating expertise in field and contributing to research advancement in computer vision and machine learning CERTIFICATIONS The Complete 2023 Web Development BootcampCertificateMay 2023 Selenium Essential TrainingCertificateMay 2024 React: Creating and Hosting a FullStack SiteCertificateSept 2024 HOBBIES Chess|Cricket|Teaching|Stock Trading \n\nJOB DESCRIPTION: isgSearch Share Show more options Front End Developer: AEM Greater Toronto Area, Canada · 1 week ago · 69 people clicked apply Hybrid Matches your job preferences, workplace type is Hybrid. Contract Matches your job preferences, job type is Contract. Apply Save Save Front End Developer: AEM at isgSearch How your profile and resume fit this job Get AI-powered advice on this job and more exclusive features with Premium. Reactivate Premium Tailor my resume to this job Am I a good fit for this job? How can I best position myself for this job? People you can reach out to Bree and others in your network Show all Meet the hiring team Ari Greenberg Ari Greenberg is verified 2nd Team Lead at isgSearch Job poster · 2 mutual connections Message About the job Duration: 6 months to start Must Have: * 7 to 10 years of Professional, hands-on frontend development experience * Experience with Adobe Experience Manager * Proficiency with JavaScript/ES6, HTML, CSS/SCSS, Webpack, XML/JSON * Proficiency with Bootstrap or similar frameworks * Experience with web accessibility guidelines, accessibility tools, and assistive technologies * Proficiency with developer tools and debugging techniques * Expertise in developing responsive web design and testing across multiple browsers, devices and platforms * Experience building single page applications * Keep up to date with trends and changes in the UI space * Experience working with teams to analyze and contribute ideas to production discussions, designs and decisions Preferred: * Experience with Design Systems (Storybook.js etc) * Experience with web development stacks including AXIOS, react-bootstrap, React.js, React Context, Node.js etc. * Experience working in an Agile development environment * Experience with Git, Bitbucket, and SourceTree Our client… A complex life insurance organization. Responsibilities: * As a part of a development team, interface with system designers, business system analysts, application analysts and testing specialists to deliver high quality solutions * Participate in the development and take accountability for deliverables * Participate in various review processes - i.e. Business Requirements, Test plans, Design reviews etc. to gain understanding of the application and provide input into the deliverables * Contribute to projects from initiation through planning, requirements, construction to implementation and post-implementation reviews * Suggest improvements to existing code to make a better UI experience for our clients Job search faster with Premium Access company insights like strategic priorities, headcount trends, and more Tanmay and millions of other members use Premium Reactivate Premium: 50% Off Cancel anytime, for any reason. About the company isgSearch 16,284 followers Follow IT Services and IT Consulting 51-200 employees 45 on LinkedIn isgSearch is a leading Canadian recruitment firm based in the GTA specializing in Information Technology. We understand how the IT industry is evolving, and can identify the skills that are required in today’s marketplace. We are known for direct, targeted recruitment, seeking out high-performing talent and connecting this talent with some of the most in-demand IT jobs in Canada. … show more Interested in working with us in the future? Privately share your profile with our recruiters – you’ll be noted as expressing interest for up to a year and be notified about jobs and updates. Learn more Learn more about Interested in working for our company I’m interested Show more\n\nNOW GIVE ME,\n\n1) Areas of Improvement: Highlight improvements in how the resume presents the user\'s qualifications. Focus on:\nEnhancing alignment with the JD through better use of keywords.\nImproving clarity or specificity in achievements (e.g., use quantifiable metrics like \'Improved efficiency by 20%\').\nEnsuring the professional summary or skills section emphasizes JD-relevant expertise.\n\n2) Recommendations: Suggest certifications, online courses, or learning resources to strengthen the user’s profile for the JD. Provide only highly relevant and concise recommendations (e.g., \'AWS Cloud Practitioner Certification for cloud roles\').\n\n3) Project Enhancement Tips: Recommend new projects or modifications to existing projects that can showcase missing or underrepresented skills (e.g., \'Add a React-based CRUD application to demonstrate JavaScript expertise\').\n\n4) Resume Review: Provide general feedback on the resume\'s presentation, such as layout, readability, and tone (e.g., \'Well-structured but could use more concise descriptions in the experience section\').\n\nreturn json file in below format having 4 main headings and less than 5 points per heading:\n\n\n{\n  "areasOfImprovement": ["e.g., Use JD-specific keywords, quantify achievements, highlight relevant skills more prominently"],\n\n  "recommendations": ["e.g., Earn \'Google Data Analytics Certificate\' or \'Machine Learning A-Z\' course on Udemy"],\n\n  "projectEnhancement": ["e.g., Add a project on process automation to showcase innovation skills"],\n\n  "resumeReview": "e.g., Clean layout but descriptions could use more metrics and focus."\n}\n\nData Source Selection: Use Gemini File 2, as it is designed to process resumes and JDs efficiently for actionable insights and avoids unnecessary complexity."\n',
            },
          ],
        },
        {
          role: "model",
          parts: [
            {
              text: '```json\n{\n  "areasOfImprovement": [\n    "Use keywords from the job description (e.g., \'Adobe Experience Manager\', \'Responsive Web Design\', \'Single Page Applications\') more frequently in the resume.",\n    "Quantify achievements. For example, instead of \'Designed a website,\' say \'Designed a website, improving user engagement by 15%.\'",\n    "Highlight relevant skills more explicitly in the summary/skills section.  Focus on the specific front-end technologies mentioned in the job description.",\n    "Show experience with \'Webpack\', \'XML/JSON\', \'Accessibility guidelines\', and \'Developer tools\' in more detail.  Consider creating specific bullet points addressing these.",\n    "Demonstrate proficiency with the stated frameworks more tangibly through project examples.  Focus on React.js and Bootstrap projects as they are preferred."\n  ],\n  "recommendations": [\n    "Earn the Adobe Experience Manager (AEM) Foundation Certification to highlight AEM experience.",\n    "Focus on relevant front-end courses (e.g., advanced React or Bootstrap courses) on platforms like Coursera or Udemy.",\n    "Explore free resources on web accessibility (WCAG) guidelines to gain better understanding and incorporate that knowledge."\n   ],\n  "projectEnhancement": [\n    "Add a project showcasing responsive web design for different devices and screen sizes.",\n    "Create a small project integrating AEM if possible.",\n    "Enhance the \'FriendsVault\' project with improved user interactions (e.g., comments, likes)."\n  ],\n  "resumeReview": "The resume is well-organized, but the experience descriptions are a bit generic.  Adding concrete metrics and tailoring the language to the specific requirements of the front-end developer role in the job description will significantly boost the application\'s impact."\n}\n```\n',
            },
          ],
        },
      ],
    });

    const detailedOverviewPrompt = `Analyze the provided resume and job description. Return a JSON response with meaningful and actionable insights to help the user refine their application. Structure the response as follows:

RESUME: "${resumeText}"

JOB DESCRIPTION: "${jobDescription}"

NOW GIVE ME,

1) Areas of Improvement: Highlight improvements in how the resume presents the user's qualifications. Focus on:
Enhancing alignment with the JD through better use of keywords.
Improving clarity or specificity in achievements (e.g., use quantifiable metrics like 'Improved efficiency by 20%').
Ensuring the professional summary or skills section emphasizes JD-relevant expertise.

2) Recommendations: Suggest certifications, online courses, or learning resources to strengthen the user’s profile for the JD. Provide only highly relevant and concise recommendations (e.g., 'AWS Cloud Practitioner Certification for cloud roles').

3) Project Enhancement Tips: Recommend new projects or modifications to existing projects that can showcase missing or underrepresented skills (e.g., 'Add a React-based CRUD application to demonstrate JavaScript expertise').

4) Resume Review: Provide general feedback on the resume's presentation, such as layout, readability, and tone (e.g., 'Well-structured but could use more concise descriptions in the experience section').

return json file in below format having 4 main headings and less than 5 points per heading:


{
  "areasOfImprovement": ["e.g., Use JD-specific keywords, quantify achievements, highlight relevant skills more prominently"],

  "recommendations": ["e.g., Earn 'Google Data Analytics Certificate' or 'Machine Learning A-Z' course on Udemy"],

  "projectEnhancement": ["e.g., Add a project on process automation to showcase innovation skills"],

  "resumeReview": "e.g., Clean layout but descriptions could use more metrics and focus."
}

Data Source Selection: Use Gemini File 2, as it is designed to process resumes and JDs efficiently for actionable insights and avoids unnecessary complexity."
`;

    const result = await chatSession.sendMessage(detailedOverviewPrompt);
    // console.log(result.response.text());

    const jsonResponse = result.response.text().replace(/```json\n|\n```/g, "");
    const parsedResult = JSON.parse(jsonResponse);

    res.json({ detailedOverview: parsedResult});
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to generate result" });
  }
};

module.exports = { extension, detailedOverview };
