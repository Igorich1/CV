import React from 'react';
import './App.css';
import Link from './componets/Link/Link';
import Skills from './componets/Skills/Skills';

const App = () => {
  return (
    <div className="container">
      <h1>Igor Kravets</h1>
      <h2>Junior Javascript Developer</h2>

      <Link />

      <div className="section">
        <h3 className="section-heading">Summary</h3>
        <p>
          As an experienced and creative Middle Javascript Developer,
          I am passionate about programming with a strong focus on frontend development.
          With a proven track record of successfully delivering commercial products and excelling in problem-solving,
          I am dedicated to creating exceptional products. My expertise lies in React, JavaScript, and various frontend technologies
          that allow me to deliver high-quality solutions. Furthermore, I have proficiency in using Git, GitLab, Jira, Figma, and other
          industry-related software to improve the development process. Extensive testing and reporting of bugs are also areas where I excel.
          With my skills and experience in UI and UX design, I have benefited my previous company. Using my expertise in Chrome hotkey settings,
          I have developed and maintained software applications, ensuring a successful user experience for clients. I have also conducted user research
          for better user experience. In summary, my proficiency in JS, React, HTML has allowed me to thrive in web design and development, giving me the
          skillset to deliver exceptional results.


        </p>
      </div>

      <div className="section work-experience">
        <h3 className="section-heading">Work Experience</h3>
        <div className="work-experience-item">
          <div className="work-experience-item">
            <div className="item-title">Junior Javascript Developer (Mainly Frontend) - <a href='https://webscape.ai' className='wbs'>Webscape</a> </div>
            <a
              className="item-subtitle"
              href="c"
            >
              Webscape is a project focused on web navigation and various website possibilities, utilizing AI
              interactions for research summarization, information lookup, and AI writing assistance.
            </a>
            <ul>
              <li>Joined as a Trainee Javascript Developer and rapidly progressed to the role of Junior Javascript Developer.</li>
              <li>Responsible for the front-end development and general stability of the project.</li>
              <li>Developed a browser extension and website using JavaScript and React, resulting in a highly useful product.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section">
        <Skills title="Technical Skills" subText="React, JavaScript, HTML, CSS, SCSS, Sass, Redux, Styled Components, React Router, Typescript, PixelPerfect, ..." />
        <Skills title="Testing" subText="Jest, React Testing Library, ..." />
        <Skills title="Styling" subText="CSS Modules, styled-components, SCSS, BEM, ..." />
        <Skills title="Version Control" subText="Git, GitLab, GitHub" />
        <Skills title="Project Management" subText="Jira, Trello" />
      </div>



    </div>
  );
};

export default App;
