import './about.css'
import image from '../assets/homeimage.jpg'

const About = () => {
    return (
      <div className="about">
        <div className="photo">
          <img src={image} alt="About Me" />
        </div>
        <div className="description">
          <h2>About Me</h2>
          <p>My name is Varun Vora and I am currently pursuing a Software Engineering Technology (Co-op) Advanced Diploma at Centennial College, expecting to graduate in December 2026.
             I have a passion for mathematics, problem-solving, and software development. My experience includes inventory management, warehouse operations, and working as a Math Peer Tutor at Centennial College, where I enjoy helping others understand complex concepts. 
             I am eager to apply my skills in AI, software development, and other tech-driven projects. 
            I am committed to continuous learning, maintaining professionalism, and providing mentorship to those around me.
            
             </p>
             <p>Here is a link to my resume:</p>
      <a 
        href="../src/Varun Vora Coop Resume.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Download My Resume
      </a>

        </div>
      </div>
    );
  };
  
  export default About;