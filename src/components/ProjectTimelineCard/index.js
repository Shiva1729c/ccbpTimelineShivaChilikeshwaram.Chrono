// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails

  return (
    <div>
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="title-and-duration">
        <h1 className="time-line-course-title">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <a href={projectUrl} className="link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
