import './App.css'
import ProjectCard from './components/ProjectCard'
import projects from './assets/project-descriptions.yml'

function App() {
  return (
    <div className='project-gallery'>
      {projects.map((project, i) => <ProjectCard key={i} project={project} />)}
    </div>
  )
}

export default App
