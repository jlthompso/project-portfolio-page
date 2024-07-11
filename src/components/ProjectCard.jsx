import Markdown from 'react-markdown'
import { useState } from 'react'

function ProjectCard({ project }) {
    const [flipped, setFlipped] = useState(false)

    const projectName = Object.keys(project)[0]
    const projectDescription = project[projectName].description
    const projectImages = project[projectName].images

    // open links in new tab
    const ExternalLinkRenderer = (props) => <a href={props.href} target="_blank" rel="noreferrer">{props.children}</a>

    return (
        <div className='project-card'>
          <div className={flipped ? 'project-card-inner project-card-flip' : 'project-card-inner'} onTouchStart={() => setFlipped(!flipped)}>
            <div className="project-card-front">
              <img className="project-card-image" src={`images/${projectImages[0]}`}/>
            </div>
            <div className="project-card-back">
              <h2>{projectName}</h2>
              <Markdown className="project-card-description" components={{ a: ExternalLinkRenderer }}>{projectDescription}</Markdown>
            </div>
          </div>
      </div> 
    )
}

export default ProjectCard
