// src/pages/Projects.jsx
import { projects } from "../data/Projects-data";
import "./Projects.css";

export default function Projects() {
  // Split data into two categories
  const experienceItems = projects.filter(item => item.category === "Experience");
  const projectItems = projects.filter(item => item.category === "Project");

  // Reusable card component logic to keep the code clean
  const renderCard = (item) => (
    <div key={item.id} className="long-card">
      <div className="card-image">
        <img src={item.thumbnail} alt={item.title} />
      </div>
      
      <div className="card-content">
        <div className="card-header">
          <h3>{item.title}</h3>
        </div>
        
        <p className="description">{item.description}</p>

        <div className="skills-footer">
          <p>Skills:</p>
          {item.skills && item.skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="portfolio-container">
      
      {/* Experience Section */}
      <section className="portfolio-section">
        <h2 className="section-title">Experience</h2>
        <div className="card-list">
          {experienceItems.map(item => renderCard(item))}
        </div>
      </section>

      <div className="section-divider" />

      {/* Projects Section */}
      <section className="portfolio-section">
        <h2 className="section-title">Projects/Playground</h2>
        <div className="card-list">
          {projectItems.map(item => renderCard(item))}
        </div>
      </section>

    </div>
  );
}