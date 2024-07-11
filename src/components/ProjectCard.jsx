import Markdown from 'react-markdown'
import { useState } from 'react'

function ProjectCard({ project }) {
    const [imgIdx, setImgIdx] = useState(0)
    const [timerId, setTimerId] = useState(null)

    const projectName = Object.keys(project)[0]
    const projectDescription = project[projectName].description
    const projectImages = project[projectName].images.toSpliced(1, 0, null)
    const setTimer = (seconds) => {
      if (timerId) {
        clearTimeout(timerId)
        setTimerId(null)
      }
      setTimerId(setTimeout(() => setImgIdx(0), seconds * 1000))
    }
    const nextImg = () => {setImgIdx((imgIdx + 1) % projectImages.length); setTimer(5)}
    const prevImg = () => {setImgIdx(imgIdx > 0 ? imgIdx - 1 : projectImages.length - 1); setTimer(5)}

    // open links in new tab
    const ExternalLinkRenderer = (props) => <a href={props.href} target="_blank" rel="noreferrer">{props.children}</a>

    // key triggers fade each time the <img> is rendered
    return (
      <div className='project-card'>
        <div className='project-card-contents'>
          {imgIdx !== 1 ? <img key={imgIdx} className="project-card-image fade" src={`images/${projectImages[imgIdx]}`}/> :
            <div className='project-card-description-container'>
              <h2>{projectName}</h2>
              <Markdown className="project-card-description" components={{ a: ExternalLinkRenderer }}>{projectDescription}</Markdown>
            </div>
          }
          <div className='next-button-container'>
            <a className="prev" onClick={() => prevImg()}>&#10094;</a>
            <a className="next" onClick={() => nextImg()}>&#10095;</a>
          </div>
        </div>
      </div> 
    )
}

export default ProjectCard
