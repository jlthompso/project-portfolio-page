import Markdown from 'react-markdown'
import { useState } from 'react'

function ProjectCard({ project }) {
    const [flipped, setFlipped] = useState(false)
    const [imgIdx, setImgIdx] = useState(0)
    const [timerId, setTimerId] = useState(null)

    const projectName = Object.keys(project)[0]
    const projectDescription = project[projectName].description
    const projectImages = project[projectName].images
    const resetCard = () => {
      setImgIdx(0)
      setFlipped(false)
    }
    const setTimer = (seconds) => {
      if (timerId) {
        clearTimeout(timerId)
        setTimerId(null)
      }
      setTimerId(setTimeout(resetCard, seconds * 1000))
    }
    const nextImg = (e) => {
      e.preventDefault()
      if (imgIdx < projectImages.length - 1) {setImgIdx(imgIdx + 1)}
      setTimer(5)
    }
    const prevImg = (e) => {
      e.preventDefault()
      if (imgIdx > 0) {setImgIdx(imgIdx - 1)}
      setTimer(5)
    }

    // open links in new tab
    const ExternalLinkRenderer = (props) => <a href={props.href} target="_blank" rel="noreferrer">{props.children}</a>

    return (
        <div className='project-card'>
          <div className={flipped ? 'project-card-inner project-card-flip' : 'project-card-inner'} onTouchStart={() => setFlipped(!flipped)}>
            <div className="project-card-front">
              <img className="project-card-image" src={`images/${projectImages[0]}`}/>
            </div>
            <div className="project-card-back">
              {imgIdx > 0 ? <img className="project-card-image fade" src={`images/${projectImages[imgIdx]}`}/> :
                <>
                  <h2>{projectName}</h2>
                  <Markdown className="project-card-description" components={{ a: ExternalLinkRenderer }}>{projectDescription}</Markdown>
                </>
              }
              {projectImages.length > 1 && <div className='next-button-container'>
                {imgIdx > 0 && <a className="prev" onClick={(e) => prevImg(e)}>&#10094;</a>}
                {imgIdx < projectImages.length - 1 && <a className="next" onClick={(e) => nextImg(e)}>&#10095;</a>}
              </div>}
            </div>
          </div>
      </div> 
    )
}

export default ProjectCard
