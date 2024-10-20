import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimelineCard = eachItem => {
    if (eachItem.categoryId === 'COURSE') {
      return <CourseTimelineCard key={eachItem.id} courseDetails={eachItem} />
    }
    return <ProjectTimelineCard key={eachItem.id} projectDetails={eachItem} />
  }

  return (
    <div className="timeline-view-container">
      <h1 className="main-heading">
        MY JOURNEY OF <span className="course-title">CCBP 4.0</span>
      </h1>
      <Chrono
        mode="VERTICAL_ALTERNATING"
        theme={{primary: '#0967d2', secondary: '#ffffff'}}
        items={timelineItemsList}
      >
        {timelineItemsList.map(eachItem => renderTimelineCard(eachItem))}
      </Chrono>
    </div>
  )
}

export default TimelineView
