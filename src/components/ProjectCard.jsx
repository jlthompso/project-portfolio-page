function ProjectCard({ project }) {
    const projectName = Object.keys(project)[0]
    const projectDescription = project[projectName].description
    const projectImages = project[projectName].images


    return (
        <div className="project-card">
        <div className="project-card-inner">
          <div className="project-card-front">
            <img src={`/images/${projectImages[0]}`}/>
          </div>
          <div className="project-card-back">
            <h1>{projectName}</h1>
            <p>{projectDescription}</p>
          </div>
        </div>
      </div> 
    )
}

export default ProjectCard
