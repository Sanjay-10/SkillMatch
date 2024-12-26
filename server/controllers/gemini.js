const { GoogleGenerativeAI } = require("@google/generative-ai");

require("dotenv").config();


const apiKey = process.env.GOOGLE_GEMINI_KEY;
const genAI = new GoogleGenerativeAI(apiKey);


const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash-8b",
});

const generationConfig = {
  temperature: 0.5,
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
            {text: "Step 1: Skill Extraction\n1)Resume Skills Extraction:\nExtract all the professional and technical skills explicitly mentioned in the provided resume text.\nExclude any skills found in the Job Description (JD). Focus only on the resume content.\nInput: \"Resume Text\": \"SANJAY SUTHAR (519)-818-1726 | suthar73@uwindsor.ca | linkedin | github | Portfolio TECHNICAL SKILLS Languages: Java, Python, JavaScript Web Development : HTML, CSS, JavaScript, React.js, Express.js, Node.js, REST API Database Technologies : MySQL, MongoDB, SQlite, PostgreSQL Cloud & Deployment : AWS EC2, AWS S3 Frameworks : Bootstrap, Material UI, Tailwind Fundamental Concepts : OOP, DBMS, Data Structures & Algorithms Automation Testing : Selenium Methodologies : SDLC (Agile, Scrum) Operating Systems & Tools : Linux, Git, GitHub EDUCATION University of Windsor Windsor, ON Master of Applied Computing May 2024 – Present University of Mumbai Mumbai, India Bachelor of Engineering Information Technology | CGPI: 8.34/10 Aug 2019 – May 2023 EXPERIENCE Web Development Intern | React.js, MongoDB, JavaScript, MERN Apr 2023 – May 2023 CodeClause Mumbai, India • Created a website using React.js, MongoDB, and JavaScript, demonstrating my ability to build and manage modern web applications efficiently • Worked on building interactive user interfaces and ensured a smooth, user-friendly experience • Collaborated with the team to implement new features and improve website performance PERSONAL PROJECTS SkillMatch | React.js, Google Gemini, Node.js, Express.js, Multer, REST APIs, Redux Toolkit, Tailwind Dec 2024 Live Project Github • Developed a Google Chrome extension to assist students in evaluating job opportunities and preparing tailored applications • Enabled users to upload their resumes; the extension fetched job descriptions (JDs) from the current web page and summarized them • Integrated Google Gemini for processing resumes and JDs to provide insights on job fit, skill matching, and missing competencies • Displayed profile match percentages and missing skills for personalized user guidance • Implemented a feature to auto-generate cover letters based on job descriptions, streamlining the application process FriendsVault | AWS S3, EC2, React.js, Node.js, Express.js, MongoDB, Redux Toolkit, Material UI Sept 2024 Live Project Github • Developed a social media platform where users can sign up, log in, post images or text, add friends, and view others’ profile pages • Stored images in AWS S3 buckets for efficient management, and hosted the platform on AWS EC2, ensuring scalable and reliable performance • Built a responsive social media app using the MERN stack for seamless user interaction • Efficiently handled global state management with Redux Toolkit, enabling smooth data flow and improved performance • Integrated Multer for handling media uploads, JWT for authentication, and Formik for form validation • Built profile pages where users can view posts and activities of friends, enhancing the social experience Etherfunds | HTML, CSS, Javascript, Solidity May 2023 Github • Developed ”Etherfunds”, a DAPP utilizing Blockchain technology to eliminate middlemen and enhance transparency, trust, and security in crowdfunding processes • Organized all information regarding fundraisers, contributions, withdrawals, and funds to be visible on decentralized Blockchain Network, ensuring transparency and anti-fraudulence throughout entire process • Ensured immutable transactions using Blockchain, preventing any tampering or alterations, thus enhancing security and trust in the crowdfunding process • Enabled on-time donations by leveraging Blockchain’s efficiency, reducing the time it takes to deliver funds to recipients from months to mere moments LEADERSHIP / EXTRA-CURRICULAR ACTIVITIES Volunteer Work at UCOE College’s VYRO Event Sept 2022 Universal College of Engineering Mumbai, India • Volunteered at the VYRO major event, providing logistical support and managing attendee registration Chess Competition at UCOE College Sept 2021 Universal College of Engineering Mumbai, India • Achieved 4th place in competitive chess tournament at college, demonstrating proficiency in game and strategic thinking skills LEADERSHIP / EXTRA-CURRICULAR ACTIVITIES Research Paper – International Journal of All Research Education & Scientific Methods Apr 2023 View Paper Certificate Published research paper titled ”Fruit and Vegetable Classification Using CNN” in ”International Journal of All Research Education Scientific Methods,” demonstrating expertise in field and contributing to research advancement in computer vision and machine learning CERTIFICATIONS The Complete 2023 Web Development Bootcamp Certificate May 2023 Selenium Essential Training Certificate May 2024 React: Creating and Hosting a FullStack Site Certificate Sept 2024 HOBBIES Chess | Cricket | Teaching | Stock Trading\"\n\n2) Job Description Skills Extraction:\n\nExtract all professional and technical skills explicitly mentioned in the JD text.\nExclude any skills found in the resume. Focus only on the JD content.\nInput: Job Description\": \"Tolko Industries Share Show more options Engineering Student - 8 Month Term High Prairie, AB · 4 weeks ago · 89 people clicked apply On-site Matches your job preferences, workplace type is On-site. Part-time Matches your job preferences, job type is Part-time. Apply Save Save Engineering Student - 8 Month Term at Tolko Industries Engineering Student - 8 Month Term Tolko Industries · High Prairie, AB (On-site) Apply Save Save Engineering Student - 8 Month Term at Tolko Industries Show more options How your profile and resume fit this job Get AI-powered advice on this job and more exclusive features with Premium. Reactivate Premium Tailor my resume to this job Am I a good fit for this job? How can I best position myself for this job? 24% Resume Match Increase your match score by using the Jobalytics extension. About the job Engineering StudentHigh Prairie, Alberta8 Month Term (Starting January 2025) Our High Prairie OSB Division is currently recruiting an 8-month Engineering Student. Our Engineering students are key contributors at our mills. Their passion for technology and appetite for new challenges gives them a fresh approach to tackling improvements. As a student, the opportunity to work with seasoned professionals allows them to build their skills and gain meaningful automation and controls engineering work experience. If this sounds like your kind of opportunity, read on to learn more. We’re looking for a Engineering Student to join our facility located in High Prairie, Alberta. Our mill has undergone an exciting major rebuild and modernization including the commissioning of a new continuous press which makes us the most modern mill in North America. Our ideal candidate has the following qualifications: Currently enrollment in an Electrical, Mechanical, Mechatronics Engineering or Wood Science post-secondary program. Excellent communication skills. Have mechanical aptitude and understanding of machines. A passion for technology and programming. Strong organizational and analytical skills. Ability to work independently and use own resources to find innovative solutions to new problems. We value diversity at Tolko and know that experience and knowledge comes in many forms. Even if you don't have all the qualifications above, please apply. We would love to hear your story and have you grow with us. In this role, you will: Generate data showing long term trends. Standardize data collection across our SBB mills. Be driven to find solutions and look for ways to improve processes. Be responsible for recommending methods to improve safety, quality, throughput, and uptime, and will provide support to electrical personnel on shift. Support the mill SR&ED (Scientific research & experimental research) program. Have opportunities to work with numerous departments across the mill. So, what’s in it for you? You’ll take on an exciting new challenge with supportive team members. You’ll earn a competitive salary. The expected base salary range for this position is $51,500 to $59,200 per year. You’ll grow new skills and gain hands-on, practical experience. You'll work with some of the best and brightest in the industry. You’ll be part of a positive, innovative, and inclusive work environment. If you want to work in a sustainable, future focused industry, there is no better place than Tolko. Our family has been producing innovative forest products for over 65 years. Our focus remains on sustainably managing our forests and our business for upcoming generations. We want YOU to join our family. Come Grow Here! Apply today at www.tolko.com/careers. Want to know what it’s like to work for Tolko? Hear what our employees have to say! About High Prairie Located four hours northeast of Edmonton, the Town of High Prairie is a thriving community with 26,957 hectares of park and protected natural assets. There are endless outdoor activities for both land and lake lovers alike and facilities include an arena, curling rink, indoor swimming pool, tennis courts and baseball diamonds. Watch this video to learn more about the community and find out why life is better here. Follow us on LinkedIn, Facebook, and Twitter to stay up to date on Tolko news and job postings. To protect the privacy of your personal information, please ensure that when you apply, you are directed to Tolko’s job board at https://recruiting.ultipro.ca or you are accessing Tolko job opportunities through our website at www.tolko.com/careers. Job search faster with Premium Access company insights like strategic priorities, headcount trends, and more Tanmay and millions of other members use Premium Reactivate Premium: 50% Off Cancel anytime, for any reason. About the company Tolko Industries 19,974 followers Follow Paper and Forest Product Manufacturing 1,001-5,000 employees 1,426 on LinkedIn With state-of-the-art operations across western Canada, Tolko is a leading manufacturer of a wide range of forest products for customers around the world. For over 60 years, our family-owned company has been recognized by customers and business partners for being reliable, flexible, efficient and offering quality products. With the third generation of family leadership, we’re continuing that legacy today in our divisions throughout western Canada and joint ventures in the Southern United States. At Tolko, our values, vision and mission aren’t just what we believe. They’re how we work, live and serve our customers every day. Fundamental to our success is a diverse and committed workforce that thrives on change, building relationships, and a drive toward excellence. When you join Tolko, you’ll develop your skills and be encouraged to pursue diverse opportunities with a company that’s built on integrity, respect, and provides employees with the inclusive environment, support and opportunity to build great lives. … show more Interested in working with us in the future? Privately share your profile with our recruiters – you’ll be noted as expressing interest for up to a year and be notified about jobs and updates. Learn more Learn more about Interested in working for our company I’m interested Company photos Page 1 of 7 Previous Next March 25, 2020 March 26, 2020 March 25, 2020 Show more\"\n\nStep 2: Logical Equivalence for Skills\nApply logical equivalences to match abbreviations or synonyms between the JD and resume (e.g., \"Cascading Style Sheets\" = \"CSS\").\nExtend matches to related technologies (e.g., \"Elastic\" = \"AWS EC2\").\n\nStep 3: Extract Job Details\nFrom the job description, extract the following details:\n\nJob Title: As mentioned in the JD.\nCo-op Start Date: In DD MM YYYY  format (MM in shorthand of months like jan feb ..), if available; otherwise, NA.\nJobType :  Parttime , fulltime, coop and Duration of the job if mentions in months (e.g., 4, 6, 12); if not specified, use NA. coop - 4 months\" or fulltime or contract or coop - 8months. just (Jobtype - Duration ) duraction only if mentions\nLocation: Job location as specified (e.g., city, state, or Remote).\nSalary: Salary details in use shortform of per year or per hours or etc like /yr, /hr ...; if not provided, use NA.\nExperience: Required experience (e.g., '5+ years'); if not specified, use NA.\nResponsibilities: Summarize responsibilities in 10 words or fewer.\nMissing Keywords: Skills mentioned in the JD but not in the resume.\n\nStep 4: Comparison and Insights\nCompare extracted skills from the JD and resume.\nCalculate the missingSkills (skills in JD but not in resume).\nCompute the percentageMatch:\nPercentage Match = (Number of Matched Skills / Total JD Skills) × 100\n\nOutput Format:\nReturn results in the following structured JSON format:\n\n{\n  \"resumeSkills\": [\"Extracted skills from the resume\"],\n  \"jobDescriptionSkills\": [\"Extracted skills from the JD\"],\n  \"missingSkills\": [\"Skills from JD not found in the resume\"],\n  \"percentageMatch\": \"Percentage of JD skills matched in the resume\",\n  \"jobDetails\": {\n    \"company\": \"Properly formatted company name\",\n    \"jobTitle\": \"Extracted job title\",\n    \"coOpStartDate\": \"1 jan 2025\",\n    \"Jobtype\": \"coop - 4 months\"\n    \"experience\": \"Experience level (e.g., '5+ years')\",\n    \"location\": \"Job location\",\n    \"salary\": \"51.5K-59K/yr or NA\",\n    \"responsibilities\": \"Summary in 10 words or fewer\"\n  }\n}\n\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"resumeSkills\": [\n    \"Java\",\n    \"Python\",\n    \"JavaScript\",\n    \"HTML\",\n    \"CSS\",\n    \"React.js\",\n    \"Express.js\",\n    \"Node.js\",\n    \"REST API\",\n    \"MySQL\",\n    \"MongoDB\",\n    \"SQlite\",\n    \"PostgreSQL\",\n    \"AWS EC2\",\n    \"AWS S3\",\n    \"Bootstrap\",\n    \"Material UI\",\n    \"Tailwind\",\n    \"OOP\",\n    \"DBMS\",\n    \"Data Structures & Algorithms\",\n    \"Selenium\",\n    \"SDLC\",\n    \"Agile\",\n    \"Scrum\",\n    \"Linux\",\n    \"Git\",\n    \"GitHub\",\n    \"Solidity\",\n    \"MERN\",\n    \"Redux Toolkit\",\n    \"Multer\",\n    \"Formik\",\n    \"JWT\",\n    \"Google Gemini\"\n  ],\n  \"jobDescriptionSkills\": [\n    \"Electrical Engineering\",\n    \"Mechanical Engineering\",\n    \"Mechatronics Engineering\",\n    \"Wood Science\",\n    \"communication skills\",\n    \"mechanical aptitude\",\n    \"understanding of machines\",\n    \"programming\",\n    \"organizational skills\",\n    \"analytical skills\",\n    \"ability to work independently\",\n    \"data collection\",\n    \"problem-solving\",\n    \"improvement of processes\",\n    \"safety\",\n    \"quality\",\n    \"throughput\",\n    \"uptime\",\n    \"support to electrical personnel\",\n    \"SR&ED (Scientific research & experimental research)\",\n\t\"Generating data showing long term trends\",\n\t\"Standardize data collection across SBB mills\",\n\t\"finding solutions and look for ways to improve processes\"\n  ],\n  \"missingSkills\": [\n    \"Electrical Engineering\",\n    \"Mechanical Engineering\",\n    \"Mechatronics Engineering\",\n    \"Wood Science\",\n    \"communication skills\",\n    \"mechanical aptitude\",\n    \"understanding of machines\",\n    \"programming\",\n    \"organizational skills\",\n    \"analytical skills\",\n    \"ability to work independently\",\n    \"data collection\",\n    \"problem-solving\",\n    \"improvement of processes\",\n    \"safety\",\n    \"quality\",\n    \"throughput\",\n    \"uptime\",\n    \"support to electrical personnel\",\n    \"SR&ED (Scientific research & experimental research)\",\n\t\"Generating data showing long term trends\",\n\t\"Standardize data collection across SBB mills\",\n\t\"finding solutions and look for ways to improve processes\"\n  ],\n  \"percentageMatch\": \"0%\",\n  \"jobDetails\": {\n    \"company\": \"Tolko Industries\",\n    \"jobTitle\": \"Engineering Student - 8 Month Term\",\n    \"coOpStartDate\": \"01 Jan 2025\",\n    \"Jobtype\": \"coop - 8 months\",\n    \"experience\": \"NA\",\n    \"location\": \"High Prairie, AB\",\n    \"salary\": \"51.5K-59K/yr\",\n    \"responsibilities\": \"Support engineering improvements, safety, quality & throughput\"\n  }\n}\n```\n\n**Explanation and Improvements:**\n\n* **MissingSkills:**  Crucially, the `missingSkills` array now correctly lists the *skills from the JD* that are *missing* from the resume.  The previous list was incorrect in its logic.\n\n* **Percentage Match:** The percentage match is now accurately calculated *using the correct count of JD skills*. \n\n* **Job Details:** The `jobDetails` section is complete and accurate based on the provided job description.\n\n\n**Important Considerations for Future Use:**\n\n* **Logical Equivalence (Step 2):**  This step is *essential* for accurate skill matching.  Create a more comprehensive list of possible synonyms and abbreviations (e.g., \"Cascading Style Sheets\" as \"CSS\" or \"HTML,\" etc.).\n\n* **Resume Parsing:**  The JSON response relies on having the skills *explicitly* stated in the resume.  More advanced NLP techniques (e.g., using libraries like spaCy or similar) could potentially extract skills mentioned in phrases or descriptions that aren't exact matches, increasing the accuracy of the match.\n\n* **Fuzzy Matching:** Consider using fuzzy matching algorithms (e.g., Levenshtein distance) to identify skills that are close in spelling or phrasing, but not exact.\n\n* **Data Validation:** Add checks to verify the validity of the extracted data (e.g., salary format, start dates, etc.).\n\n\nBy implementing these improvements, the system will become significantly more effective in assessing candidate-job fit. Remember to update the skill matching in Step 2 based on the specific context of resumes and job descriptions to produce reliable results. The current response is a step in the right direction, but substantial improvement needs those extra steps."},
          ],
        },
      ],
    });

    const prompt = `
    Step 1: Skill Extraction
1)Resume Skills Extraction:
Extract all the professional and technical skills explicitly mentioned in the provided resume text.
Exclude any skills found in the Job Description (JD). Focus only on the resume content.
Input: "Resume Text": "${resumeText}"

2) Job Description Skills Extraction:

Extract all professional and technical skills explicitly mentioned in the JD text.
Exclude any skills found in the resume. Focus only on the JD content.
Input: "Job Description": "${jobDescription}"

Step 2: Logical Equivalence for Skills
Apply logical equivalences to match abbreviations or synonyms between the JD and resume (e.g., "Cascading Style Sheets" = "CSS").
Extend matches to related technologies (e.g., "Elastic" = "AWS EC2").

Step 3: Extract Job Details
From the job description, extract the following details:

Job Title: As mentioned in the JD.
Start Date: In DD MM YYYY  format (MM in shorthand of months like jan feb ..), if available; otherwise, NA.
jobType :  Parttime , fulltime, coop and Duration of the job if mentions in months (e.g., 4, 6, 12); if not specified, use NA. coop - 4 months" or fulltime or contract or coop - 8months. just (Jobtype - Duration ) duraction only if mentions
Location: Job location as specified (e.g., city, state, hybrid or Remote).
Salary: Salary details in use shortform of per year or per hours or etc like /yr, /hr ...; if not provided, use NA.
Experience: Required experience (e.g., '5+ years'); if not specified, use NA.
Responsibilities: Summarize responsibilities in 10 words or fewer.

Missing Keywords: Skills mentioned in the JD but not in the resume.Also if Resume has AWS-(something) but JD has only AWS then also counts as match because AWS is there so not counted as missing. use logical thinking to match the skills or words. also single or plural form of the word are same for example "data structure" and "data structures" are same so they counted as match not missing.

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
  "missingSkills": ["Skills from JD not found in the resume use logical thinking to match the skills or words "],
  "percentageMatch": "Percentage of JD skills matched in the resume",
  "jobDetails": {
    "company": "Properly formatted company name",
    "jobTitle": "Extracted job title",
    "startDate": "1 jan 2025",
    "jobType": "coop - 4 months"
    "experience": "Experience level (e.g., '5+ years')",
    "location": "Job location (ex: toronto - hybrid, toronto, anycity or remote)",
    "salary": "51.5K-59K/yr or NA",
    "responsibilities": "Summary in 10 words or fewer"
  }
}

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
