export default function PortfolioCard({ project }) {
  return (
    <div className="portfolio__card card-portfolio">
      <a
        href={project.link_preview}
        target="_blank"
        className="card-portfolio__img-link"
      >
        <img
          className="card-portfolio__img"
          src={project.image_url}
          alt={project.image_alt + " Image"}
        />
      </a>
      <div className="card-portfolio__body">
        <h2 className="card-portfolio__title">
          <a
            className="card-portfolio__title-link"
            href={project.link_preview}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.title}
          </a>
        </h2>
        <p className="card-portfolio__description">{project.description}</p>
        <div className="card-portfolio__skills">
          {Array.isArray(project.skills) &&
            project.skills.map((skill, index) => (
              <p className="card-portfolio__skills-item" key={index}>
                {skill}
              </p>
            ))}
        </div>
        <div className="card-portfolio__actions">
          {project.link_github && (
            <a
              href={project.link_github}
              target="_blank"
              className="card-portfolio__link-btn github"
            >
              <box-icon name="github" type="logo"></box-icon>
            </a>
          )}

          {project.link_figma && (
            <a
              href={project.link_figma}
              target="_blank"
              className="card-portfolio__link-btn figma"
            >
              <box-icon type="logo" name="figma"></box-icon>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
