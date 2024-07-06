import './App.css'
import ProjectCard from './components/ProjectCard'
import projects from './project-descriptions.yml'

function App() {
  return (
    <div className='grid--s grid--m grid--l'>
      {projects.map((project, i) => <ProjectCard key={i} project={project} />)}
    </div>
  )
}

export default App
