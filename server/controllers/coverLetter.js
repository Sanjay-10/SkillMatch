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
  responseMimeType: "text/plain",   
};

const coverLetter = async (req,res) => {

    const { resumeText, jobDescription } = req.body;


  try {

  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "\nRESUME: SANJAYSUTHAR (519)-818-1726|suthar73@uwindsor.ca |linkedin|github|Portfolio TECHNICALSKILLS Languages: Java, Python, JavaScript Web Development: HTML, CSS, JavaScript, React.js, Express.js, Node.js, REST API Database Technologies: MySQL, MongoDB, SQlite, PostgreSQL Cloud & Deployment:: AWS EC2, AWS S3 Frameworks :: Bootstrap, Material UI, Tailwind Fundamental Concepts :: OOP, DBMS, Data Structures & Algorithms Methodologies :: SDLC (Agile, Scrum) Version Control :: Git, GitHub EDUCATION University of WindsorWindsor, ON Master of Applied ComputingMay 2024 – Present University of MumbaiMumbai, India Bachelor of Engineering Information Technology|CGPI: 8.34/10Aug 2019 – May 2023 EXPERIENCE Web Development Intern|HTML, CSS, JavaScript, MERNApr 2023 – May 2023 CodeClauseMumbai, India • Designed a website exhibiting competency in web development tools as well as problem-solving, time management, and testing/debugging abilities • Emphasized a user-centered design approach, and stayed current with latest web development trends and technologies PERSONALPROJECTS FriendsVault|AWS S3, EC2, React.js, Node.js, Express.js, MongoDB, Redux Toolkit, Material UISept 2024 Live ProjectGithub • Developed a social media platform where users can sign up, log in, post images or text, add friends, and view others’ profile pages • Stored images in AWS S3 buckets for efficient management, and hosted the platform on AWS EC2, ensuring scalable and reliable performance • Built a responsive social media app using the MERN stack for seamless user interaction • Efficiently handled global state management with Redux Toolkit, enabling smooth data flow and improved performance • Integrated Multer for handling media uploads, JWT for authentication, and Formik for form validation • Built profile pages where users can view posts and activities of friends, enhancing the social experience Etherfunds|HTML, CSS, Javascript, SolidityMay 2023 Github • Developed ”Etherfunds”, a DAPP utilizing Blockchain technology to eliminate middlemen and enhance transparency, trust, and security in crowdfunding processes • Organized all information regarding fundraisers, contributions, withdrawals, and funds to be visible on decentralized Blockchain Network, ensuring transparency and anti-fraudulence throughout entire process • Ensured immutable transactions using Blockchain, preventing any tampering or alterations, thus enhancing security and trust in the crowdfunding process • Enabled on-time donations by leveraging Blockchain’s efficiency, reducing the time it takes to deliver funds to recipients from months to mere moments LEADERSHIP/ EXTRA-CURRICULARACTIVITIES Volunteer Work at UCOE College’s VYRO EventSept 2022 Universal College of EngineeringMumbai, India • Volunteered at the VYRO major event, providing logistical support and managing attendee registration Chess Competition at UCOE CollegeSept 2021 Universal College of EngineeringMumbai, India • Achieved 4th place in competitive chess tournament at college, demonstrating proficiency in game and strategic thinking skills LEADERSHIP/ EXTRA-CURRICULARACTIVITIES Research Paper – International Journal of All Research Education & Scientific MethodsApr 2023 View PaperCertificate Published research paper titled ”Fruit and Vegetable Classification Using CNN” in ”International Journal of All Research Education Scientific Methods,” demonstrating expertise in field and contributing to research advancement in computer vision and machine learning CERTIFICATIONS The Complete 2023 Web Development BootcampCertificateMay 2023 Selenium Essential TrainingCertificateMay 2024 React: Creating and Hosting a FullStack SiteCertificateSept 2024 HOBBIES Chess|Cricket|Teaching|Stock Trading \n\nJOB DESCRIPTION: isgSearch Share Show more options Front End Developer: AEM Greater Toronto Area, Canada · 1 week ago · 69 people clicked apply Hybrid Matches your job preferences, workplace type is Hybrid. Contract Matches your job preferences, job type is Contract. Apply Save Save Front End Developer: AEM at isgSearch How your profile and resume fit this job Get AI-powered advice on this job and more exclusive features with Premium. Reactivate Premium Tailor my resume to this job Am I a good fit for this job? How can I best position myself for this job? People you can reach out to Bree and others in your network Show all Meet the hiring team Ari Greenberg Ari Greenberg is verified 2nd Team Lead at isgSearch Job poster · 2 mutual connections Message About the job Duration: 6 months to start Must Have: * 7 to 10 years of Professional, hands-on frontend development experience * Experience with Adobe Experience Manager * Proficiency with JavaScript/ES6, HTML, CSS/SCSS, Webpack, XML/JSON * Proficiency with Bootstrap or similar frameworks * Experience with web accessibility guidelines, accessibility tools, and assistive technologies * Proficiency with developer tools and debugging techniques * Expertise in developing responsive web design and testing across multiple browsers, devices and platforms * Experience building single page applications * Keep up to date with trends and changes in the UI space * Experience working with teams to analyze and contribute ideas to production discussions, designs and decisions Preferred: * Experience with Design Systems (Storybook.js etc) * Experience with web development stacks including AXIOS, react-bootstrap, React.js, React Context, Node.js etc. * Experience working in an Agile development environment * Experience with Git, Bitbucket, and SourceTree Our client… A complex life insurance organization. Responsibilities: * As a part of a development team, interface with system designers, business system analysts, application analysts and testing specialists to deliver high quality solutions * Participate in the development and take accountability for deliverables * Participate in various review processes - i.e. Business Requirements, Test plans, Design reviews etc. to gain understanding of the application and provide input into the deliverables * Contribute to projects from initiation through planning, requirements, construction to implementation and post-implementation reviews * Suggest improvements to existing code to make a better UI experience for our clients Job search faster with Premium Access company insights like strategic priorities, headcount trends, and more Tanmay and millions of other members use Premium Reactivate Premium: 50% Off Cancel anytime, for any reason. About the company isgSearch 16,284 followers Follow IT Services and IT Consulting 51-200 employees 45 on LinkedIn isgSearch is a leading Canadian recruitment firm based in the GTA specializing in Information Technology. We understand how the IT industry is evolving, and can identify the skills that are required in today’s marketplace. We are known for direct, targeted recruitment, seeking out high-performing talent and connecting this talent with some of the most in-demand IT jobs in Canada. … show more Interested in working with us in the future? Privately share your profile with our recruiters – you’ll be noted as expressing interest for up to a year and be notified about jobs and updates. Learn more Learn more about Interested in working for our company I’m interested Show more\n\nNOW GIVE ME,\n\n  \"instructions\": \"Using the provided resume and job description, generate a professional and tailored cover letter for the job application. Ensure the letter follows this structure:\n\n1. **Salutation**:\n   - Use a professional salutation such as 'Dear Hiring Manager' if the recipient's name is unknown.\n\n2. **Introduction**:\n   - State the job title and express enthusiasm for the opportunity.\n   - Avoid mentioning the source of the job posting, avoid this [Platform where you saw the ad - e.g., LinkedIn]\n\n3. **Candidate Background**:\n   - Provide a concise summary of the candidate’s professional and educational background in 1–2 sentences where relevant.\n   - Highlight their degree, area of expertise, or unique experiences if these align with the job requirements.\n\n4. **Key Skills & Experience**:\n   - Emphasize the most relevant skills and experiences from the resume that align with the job description.\n   - Include specific accomplishments and their measurable impact (e.g., 'Improved database performance by 25%' or 'Led a team of five to deliver a successful product launch').\n\n5. **Motivation & Fit**:\n   - Explain why the role excites the candidate and how it aligns with their career aspirations.\n   - Mention any alignment with the company’s mission or values if specified in the job description.\n\n6. **Closing Statement**:\n   - Express enthusiasm to contribute and invite further discussion.\n   - Conclude with a polite and professional sign-off, such as 'Sincerely' or 'Best regards.'\n\n7. **Formatting & Tone**:\n   - Keep the tone professional, confident, and engaging.\n   - Limit the letter to 300–350 words.\"\n}"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "Dear Hiring Manager,\n\nI am writing to express my enthusiastic interest in the Front End Developer position at isgSearch, as advertised on your platform.  Having closely followed isgSearch's commitment to connecting top IT talent with leading organizations, I am confident that my skills and experience align perfectly with your requirements.\n\nI am a highly motivated and results-oriented Master of Applied Computing candidate, with a strong foundation in front-end development and a proven track record of success in building user-friendly and efficient web applications.  My Bachelor of Engineering in Information Technology, complemented by practical experience in both development and project management, positions me well to excel in this role.\n\nMy expertise in JavaScript, HTML, CSS, and various front-end frameworks such as React.js and Express.js directly addresses the key requirements outlined in the job description.  During my internship at CodeClause, I designed and developed a website, demonstrating proficiency in web development tools and problem-solving skills.  Further, my experience developing the \"FriendsVault\" social media platform showcases my ability to build and deploy complex applications using AWS technologies and the MERN stack.  I also successfully implemented the \"Etherfunds\" decentralized application, highlighting my understanding of blockchain technologies.  These projects developed my skills in user-centered design, data management, and handling complex technical challenges.  My skills also extend to database technologies (MySQL, MongoDB), cloud deployment (AWS EC2, S3), and various methodologies like Agile and Scrum.\n\nI am eager to contribute my skills and experience to a dynamic team and contribute to your client’s success.  The opportunity to leverage my skills in a high-impact role within the life insurance industry is highly appealing, and I am confident in my ability to thrive in an Agile development environment, collaborating effectively with designers, analysts, and testing specialists.\n\nI am confident that I can make a significant contribution to your team and am eager to discuss my qualifications further. Thank you for your time and consideration.\n\nSincerely,\n\nSanjay Suthar\n"},
        ],
      },
    ],
  });

  coverLetterPrompt = `Using the provided resume and job description, generate a professional cover letter tailored to the job application. The cover letter should include the following sections and follow these guidelines:

RESUME: "${resumeText}"

JOB DESCRIPTION: "${jobDescription}"

NOW GIVE ME,

1. Salutation:
   - Use a professional salutation such as 'Dear Hiring Manager' if the recipient's name is unknown.

2. Introduction:
   - State the job title and express enthusiasm for the opportunity.
   - Avoid mentioning the source of the job posting, avoid this [Platform where you saw the ad - e.g., LinkedIn].

3. Candidate Background:
   - Provide a concise summary of the candidate’s professional and educational background in 1–2 sentences where relevant.
   - Highlight their degree, area of expertise, or unique experiences if these align with the job requirements.

4. Key Skills & Experience:
   - Emphasize only the relevant skills and experiences from the resume that align with the job description.
   - Do not include any skills or experience that are not present in the resume, even if they appear in the job description.
   - Include specific accomplishments and their measurable impact (e.g., 'Improved database performance by 25%' or 'Led a team of five to deliver a successful product launch').

5. Motivation & Fit:
   - Explain why the role excites the candidate and how it aligns with their career aspirations.
   - Mention any alignment with the company’s mission or values if specified in the job description.

6. Closing Statement:
   - Express enthusiasm to contribute and invite further discussion.
   - Conclude with a polite and professional sign-off, such as 'Sincerely' or 'Best regards.'

7. Formatting & Tone:
   - Keep the tone professional, confident, and engaging.
   - Limit the letter to 300–350 words.
   - Do not add or suggest any skills or experiences that are not in the resume.

 `

  const result = await chatSession.sendMessage(coverLetterPrompt);
  console.log(result.response.text());

//   const jsonResponse = result.response.text().replace(/```json\n|\n```/g, "");
//   const parsedResult = JSON.parse(jsonResponse);
//   res.json({ result: parsedResult });

} catch (error) {
  console.error("Error:", error);
  res.status(500).json({ error: "Failed to generate result" });
}
} ;


module.exports = {coverLetter };
