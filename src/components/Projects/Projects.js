import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import appwrite from "../../Assets/Projects/appwrite.png";
import suvidha from "../../Assets/Projects/suvidha.png";
import BMR from "../../Assets/Projects/BMR.png";
import printovert from "../../Assets/Projects/printovert.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import gm from '../../Assets/Projects/gm.png';
import steve from '../../Assets/Projects/steve.png';
import scrims from '../../Assets/Projects/scrims.png';
import adapt from '../../Assets/Projects/adapt.png'; // Placeholder image
import echio from '../../Assets/Projects/echio.png'; // Placeholder image
import tambez from '../../Assets/Projects/tambez.png'; // Placeholder image
import kollege from '../../Assets/Projects/kollege.jpg'; // Placeholder image
import hire from '../../Assets/Projects/hire.jpg'; // Placeholder image
// import wowcoach from '../../Assets/Projects/wowcoach.png'; // Placeholder image

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={adapt}
              isBlog={false}
              title="Adapt"
              description="Developed from wireframes, design, landing page, to backend, admin panel, and server deployment."
              demoLink="https://adaptwellness.in/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kollege}
              isBlog={false}
              title="Kollege"
              description="A Educational management system "
              ghLink="https://github.com/sahuashish940/TSMS-API"
              demoLink="https://kollege.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hire}
              isBlog={false}
              title="Hiredeasy"
              description="A plateform that provide Interview services"
              ghLink="https://github.com/mayanksahu17"
              demoLink="https://revamp-dashboard-seven.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={echio}
              isBlog={false}
              title="Echio"
              description="Developed website, iOS and Android app for Echio, a SaaS platform for influencers."
              demoLink="https://www.echio.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tambez}
              isBlog={false}
              title="Tambez"
              description="Developed a social media app designed for Vision 2047 of India."
              demoLink="https://play.google.com/store/apps/details?id=com.tambez.app"
            />
          </Col>

      

          {/* Existing Projects */}
       

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={printovert}
              isBlog={false}
              title="A E-commerce application"
              description="An e-commerce platform where users can design their product and purchase it seamlessly."
              ghLink="https://github.com/mayanksahu17/PRINTOVERT"
              demoLink="https://printovert-frontend.vercel.app/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suvidha}
              isBlog={false}
              title="Suvidha Oversease"
              description="An internship project based on HTML, CSS, Bootstrap, and JavaScript for global expansion."
              ghLink="https://github.com/mayanksahu17/Suvidha-foundation"
              demoLink="https://suvidha-foundation-lime.vercel.app/"
            />
          </Col>

         
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scrims}
              isBlog={false}
              title="A Esports platform"
              description="Developed user authentication system and a complex player management system for gamers."
              ghLink="https://github.com/mayanksahu17/X-AI"
              demoLink="https://scrims-crown-pdks.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={steve}
              isBlog={false}
              title="Petition platform"
              description="A petition platform where fans of a YouTuber petition to unban their favorite creator."
              ghLink="https://github.com/mayanksahu17/X-AI"
              demoLink="https://signforsteve.com"
            />
          </Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={appwrite}
              isBlog={false}
              title="A Blog application"
              description="My personal blog application where you can share your thoughts and ideas."
              ghLink="https://github.com/mayanksahu17/appWriteBlog"
              demoLink="https://app-write-blog.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gm}
              isBlog={false}
              title="AI assistant"
              description="An AI assistant app built on Next.js with Google Gemini."
              ghLink="https://github.com/mayanksahu17/X-AI"
              demoLink="https://x-ai-ten.vercel.app/"
            />
          </Col> */}

         

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
