import './index.css'

const ProjectItem = props => {
  const {project} = props
  const {name, imageUrl} = project
  return (
    <li className="project-list">
      <img src={imageUrl} alt={name} className="project-image" />
      <div className="project-text">
        <p>{name}</p>
      </div>
    </li>
  )
}

export default ProjectItem
