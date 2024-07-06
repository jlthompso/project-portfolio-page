import Markdown from 'react-markdown'

function ProjectCard({ project }) {
    const projectName = Object.keys(project)[0]
    const projectDescription = project[projectName].description
    const projectImages = project[projectName].images

    // open links in new tab
    const ExternalLinkRenderer = (props) => <a href={props.href} target="_blank" rel="noreferrer">{props.children}</a>

    return (
        <div className="project-card">
        <div className="project-card-inner">
          <div className="project-card-front">
            <img src={`/images/${projectImages[0]}`}/>
          </div>
          <div className="project-card-back">
            <h1>{projectName}</h1>
            <Markdown components={{ a: ExternalLinkRenderer }}>{projectDescription}</Markdown>
          </div>
        </div>
      </div> 
    )
}

export default ProjectCard
