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
  responseMimeType: "text/plain",
};

const coverLetter = async (req, res) => {
  const { resumeText, jobDescription } = req.body;

  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate a cover letter from the below Job Description and Resume:\n\nRESUME: \"SANJAYSUTHAR (519)-818-1726|suthar73@uwindsor.ca |linkedin|github|Portfolio TECHNICALSKILLS Languages: Java, Python, JavaScript Web Development: HTML, CSS, JavaScript, React.js, Express.js, Node.js, REST API Database Technologies: MySQL, MongoDB, SQlite, PostgreSQL Cloud & Deployment:: AWS EC2, AWS S3 Frameworks :: Bootstrap, Material UI, Tailwind Fundamental Concepts :: OOP, DBMS, Data Structures & Algorithms Methodologies :: SDLC (Agile, Scrum) Version Control :: Git, GitHub EDUCATION University of WindsorWindsor, ON Master of Applied ComputingMay 2024 – Present University of MumbaiMumbai, India Bachelor of Engineering Information Technology|CGPI: 8.34/10Aug 2019 – May 2023 EXPERIENCE Web Development Intern|HTML, CSS, JavaScript, MERNApr 2023 – May 2023 CodeClauseMumbai, India • Designed a website exhibiting competency in web development tools as well as problem-solving, time management, and testing/debugging abilities • Emphasized a user-centered design approach, and stayed current with latest web development trends and technologies PERSONALPROJECTS FriendsVault|AWS S3, EC2, React.js, Node.js, Express.js, MongoDB, Redux Toolkit, Material UISept 2024 Live ProjectGithub • Developed a social media platform where users can sign up, log in, post images or text, add friends, and view others’ profile pages • Stored images in AWS S3 buckets for efficient management, and hosted the platform on AWS EC2, ensuring scalable and reliable performance • Built a responsive social media app using the MERN stack for seamless user interaction • Efficiently handled global state management with Redux Toolkit, enabling smooth data flow and improved performance • Integrated Multer for handling media uploads, JWT for authentication, and Formik for form validation • Built profile pages where users can view posts and activities of friends, enhancing the social experience Etherfunds|HTML, CSS, Javascript, SolidityMay 2023 Github • Developed ”Etherfunds”, a DAPP utilizing Blockchain technology to eliminate middlemen and enhance transparency, trust, and security in crowdfunding processes • Organized all information regarding fundraisers, contributions, withdrawals, and funds to be visible on decentralized Blockchain Network, ensuring transparency and anti-fraudulence throughout entire process • Ensured immutable transactions using Blockchain, preventing any tampering or alterations, thus enhancing security and trust in the crowdfunding process • Enabled on-time donations by leveraging Blockchain’s efficiency, reducing the time it takes to deliver funds to recipients from months to mere moments LEADERSHIP/ EXTRA-CURRICULARACTIVITIES Volunteer Work at UCOE College’s VYRO EventSept 2022 Universal College of EngineeringMumbai, India • Volunteered at the VYRO major event, providing logistical support and managing attendee registration Chess Competition at UCOE CollegeSept 2021 Universal College of EngineeringMumbai, India • Achieved 4th place in competitive chess tournament at college, demonstrating proficiency in game and strategic thinking skills LEADERSHIP/ EXTRA-CURRICULARACTIVITIES Research Paper – International Journal of All Research Education & Scientific MethodsApr 2023 View PaperCertificate Published research paper titled ”Fruit and Vegetable Classification Using CNN” in ”International Journal of All Research Education Scientific Methods,” demonstrating expertise in field and contributing to research advancement in computer vision and machine learning CERTIFICATIONS The Complete 2023 Web Development BootcampCertificateMay 2023 Selenium Essential TrainingCertificateMay 2024 React: Creating and Hosting a FullStack SiteCertificateSept 2024 HOBBIES Chess|Cricket|Teaching|Stock Trading\"\n\nJOB DESCRIPTION: \"Vsync Solutions logo Vsync Solutions Share Show more options Java Web Developer Vancouver, BC · Reposted 9 hours ago · Over 100 applicants Hybrid Matches your job preferences, workplace type is Hybrid. Contract Matches your job preferences, job type is Contract. 4 of 9 skills match: React.js, Java, Git, Problem Solving 4 of 9 required skills are found on your profile Easy Apply Save Save Java Web Developer at Vsync Solutions Java Web Developer Vsync Solutions · Vancouver, BC (Hybrid) Easy Apply Save Save Java Web Developer at Vsync Solutions Show more options How your profile and resume fit this job Get AI-powered advice on this job and more exclusive features with Premium. Reactivate Premium Tailor my resume to this job Am I a good fit for this job? How can I best position myself for this job? 21% Resume Match Increase your match score by using the Jobalytics extension. About the job Job Title: Intermediate Java Developer (Spring Boot & React) Location: Vancouver, BC (Hybrid – 2-3 days in office per week) Job Type: 1-Year Contract (Possible Extension) About Us: We are a prominent consulting company seeking Intermediate Java Developers to join our team. If you have a passion for creating efficient, high-quality applications and want to work on cutting-edge projects, this is the role for you! Role Overview: As an Intermediate Java Developer, you will contribute to designing, developing, and maintaining enterprise-level applications. Working in a hybrid model, you will collaborate with a talented team in Vancouver while enjoying the flexibility of partial remote work. Key Responsibilities: Develop and optimize back-end systems using Java and Spring Boot. Build user-friendly and responsive front-end applications with React. Collaborate with stakeholders to understand requirements and deliver high-quality solutions. Ensure code quality through testing, debugging, and adherence to best practices. Participate in code reviews and contribute to continuous improvement. Requirements: Experience: 5-7 years as a Java Developer, with strong expertise in Spring Boot and React. Location: Must be based in Vancouver, BC. Proficiency in RESTful APIs, version control (e.g., Git), and CI/CD tools. Excellent problem-solving skills and ability to work in a collaborative environment. Strong communication skills to interact with team members and stakeholders effectively. Contract Details: 1-year contract with the potential for a 1-year extension. Hybrid work model (2-3 days in-office). Why Join Us? Be part of exciting projects with a leading consulting company. Work in a collaborative and innovative environment. Fast hiring process to get you onboard quickly. Job search faster with Premium Access company insights like strategic priorities, headcount trends, and more Tanmay and millions of other members use Premium Reactivate Premium: 50% Off Cancel anytime, for any reason. About the company Vsync Solutions company logo Vsync Solutions 318 followers Follow Technology, Information and Internet  2-10 employees At VsynSolutions, we specialize in providing cutting-edge IT solutions tailored to meet the unique needs of our clients. Whether through in-house development or by sourcing the brightest talent in the industry, we ensure that our clients receive state-of-the-art\"\n\nGuidelines:\n\n1. Include the relevant addresses  \nWhen writing a cover letter, include the recipient's contact details. Add the recipient's full name, job title, company name, address, city, or province, but only include details explicitly provided in the Job Description. For example, if the Job Description only mentions \"Vancouver, BC,\" include just that. Ensure all details are spelled correctly and avoid leaving placeholders or blank spaces.  \n\n2. Choose the right salutation  \nThe salutation sets the tone for your cover letter and demonstrates professionalism. Address the recipient formally by their last name, such as \"Dear Mr. Smith\" or \"Dear Ms. Brown.\" If you don't know the hiring manager's name or pronouns, simply use \"Dear Hiring Manager.\" Do not use placeholders like \"[Hiring Manager Name].\"  \n\n3. Write an introductory paragraph  \nThe introductory paragraph explains the reason for writing. Clearly state the specific role you are applying for and briefly introduce yourself with key qualifications, such as years of experience or academic achievements. **Do not write \"as advertised on [Platform where you saw the ad]\" or use placeholders.**  \n\n4. Discuss your qualifications  \nThe cover letter supplements your resume. Highlight a few impressive qualifications, focusing on your career level, soft skills, academic qualifications, general certifications, and work experience. Include specific details about how these qualifications can benefit the employer.  \n\n5. Quantify your achievements  \nQuantify achievements to make them stand out. Use metrics like figures, percentages, and averages wherever possible. If metrics are unavailable, use descriptive adjectives such as \"excellent\" or \"outstanding\" to emphasize impact.  \n\n6. Justify your interest in the company  \nExplain why you're interested in the company. Provide genuine reasons such as admiration for their clientele, work environment, or employee benefits. Research the company's website or speak with current employees to find relevant points to mention.  \n\n7. Conclude your cover letter  \nReiterate your qualifications and interest in the role. Invite the hiring manager to review your resume or request an interview, and thank them for their time. Use a formal closing remark like \"Yours Sincerely\" or \"Sincerely\" followed by your full name.  \n\nIMPORTANT: Avoid writing anything you are unsure about. Do not use brackets or placeholders in the cover letter. If information is unavailable, leave it out entirely. **Never include the phrase \"as advertised on [Platform where you saw the ad]\" or anything similar.**  \n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "[Your Name]\n[Your Address]\n[Your Phone Number]\n[Your Email Address]\n\n[Date]\n\nHiring Manager\nVsync Solutions\nVancouver, BC\n\nDear Hiring Manager,\n\nI am writing to express my strong interest in the Intermediate Java Developer (Spring Boot & React) position, as advertised on a job board.  With five years of experience as a Java Developer, including expertise in Spring Boot and React, and a Master's degree in Applied Computing, I am confident in my ability to contribute significantly to your team.  My passion for creating efficient and high-quality applications aligns perfectly with Vsync Solutions' commitment to providing cutting-edge IT solutions.\n\nMy technical skills encompass a comprehensive understanding of Java, Spring Boot, React.js, and related technologies. I possess a proven track record of designing, developing, and maintaining enterprise-level applications, consistently prioritizing code quality, testing, and debugging.  My strong foundation in database technologies, including MySQL, MongoDB, and PostgreSQL, further strengthens my ability to develop robust and scalable solutions.  My experience with cloud platforms like AWS EC2 and S3, and familiarity with version control using Git and GitHub, allows me to contribute effectively to development cycles. I have also developed a keen understanding of Agile and Scrum methodologies.\n\nDuring my internship at CodeClause, I designed a website demonstrating proficiency in web development tools, problem-solving, and time management.  My personal project, FriendsVault, developed using the MERN stack and hosted on AWS, showcases my ability to build responsive, scalable social media applications.  I effectively leveraged Redux Toolkit for state management, Multer for media uploads, JWT for authentication, and Formik for form validation. This project demonstrates my ability to handle various aspects of application development, from front-end design to back-end implementation and deployment.  My prior experiences also include designing a DAPP for Etherfunds, a crowdfunding platform built with Solidity on a Blockchain network, ensuring security and transparency.\n\nI am particularly drawn to Vsync Solutions' reputation for innovative projects and collaborative work environments. I am confident my experience and skills will align well with your team's needs. I am eager to learn more about this opportunity and discuss how my qualifications can benefit your organization.\n\nThank you for your time and consideration.  I have attached my resume for your review and welcome the opportunity to discuss my application further.\n\nYours Sincerely,\nSanjay Suthar\n"},
          ],
        },
      ],
    });

    coverLetterPrompt = ` Generate a cover letter from the below Job Description and Resume:

RESUME: "${resumeText}"

JOB DESCRIPTION: "${jobDescription}"

Guidelines:

1. Include the relevant addresses  
When writing a cover letter, include the recipient's contact details. Add the recipient's full name, job title, company name, address, city, or province, but only include details explicitly provided in the Job Description. For example, if the Job Description only mentions "Vancouver, BC," include just that. Ensure all details are spelled correctly and avoid leaving placeholders or blank spaces.  

2. Choose the right salutation  
The salutation sets the tone for your cover letter and demonstrates professionalism. Address the recipient formally by their last name, such as "Dear Mr. Smith" or "Dear Ms. Brown." If you don't know the hiring manager's name or pronouns, simply use "Dear Hiring Manager." Do not use placeholders like "[Hiring Manager Name]."  

3. Write an introductory paragraph  
The introductory paragraph explains the reason for writing. Clearly state the specific role you are applying for and briefly introduce yourself with key qualifications, such as years of experience or academic achievements. **Do not write "as advertised on [Platform where you saw the ad]" or use placeholders.**  

4. Discuss your qualifications  
The cover letter supplements your resume. Highlight a few impressive qualifications, focusing on your career level, soft skills, academic qualifications, general certifications, and work experience. Include specific details about how these qualifications can benefit the employer.  

5. Quantify your achievements  
Quantify achievements to make them stand out. Use metrics like figures, percentages, and averages wherever possible. If metrics are unavailable, use descriptive adjectives such as "excellent" or "outstanding" to emphasize impact.  

6. Justify your interest in the company  
Explain why you're interested in the company. Provide genuine reasons such as admiration for their clientele, work environment, or employee benefits. Research the company's website or speak with current employees to find relevant points to mention.  

7. Conclude your cover letter  
Reiterate your qualifications and interest in the role. Invite the hiring manager to review your resume or request an interview, and thank them for their time. Use a formal closing remark like "Yours Sincerely" or "Sincerely" followed by your full name.  

IMPORTANT: Avoid writing anything you are unsure about. Do not use brackets or placeholders in the cover letter. If information is unavailable, leave it out entirely. **Never include the phrase "as advertised on [Platform where you saw the ad]" or anything similar.**  
`;

const result = await chatSession.sendMessage(coverLetterPrompt);

// Log the full response to verify structure
console.log(JSON.stringify(result.response, null, 2));

// Safely extract the cover letter text
const candidates = result.response?.candidates;
if (!candidates || !candidates[0]?.content?.parts?.[0]?.text) {
    console.error("Invalid response structure:", result.response);
    return res.status(500).json({ error: "Failed to retrieve cover letter text." });
}

// Extract the generated text
const generatedText = candidates[0].content.parts[0].text.replace(", as advertised on [Platform where you saw the ad]", "");

// Log the generated text for debugging
console.log(generatedText);

// Send the response back as JSON
res.status(200).json({ coverLetter: generatedText });


  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to generate result" });
  }
};

module.exports = { coverLetter };
