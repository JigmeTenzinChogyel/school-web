import './story.css'
import classroom from '../assets/classroom.jpg'
import graduation from '../assets/graduation.jpg'

function Story() {
  return (
    <div className="story">
        <div className="classroom">
            <div className="classroomText">
                <h1>TEACH ENJOY ‌REPEAT</h1>
                <h3>In the school we know how to do it.</h3>
                <button className='classroomBtn'>Join Us!</button>
            </div>
            <img src={classroom} alt='classroom' />
        </div>
        <div className="graduation">
            <img src={graduation} alt='graduation' />
            <div className="graduationText">
                <h1>Story & mission</h1>
                <span>Our school was founded in 1871. First, there was an institution for boys, sons of high-ranking immigrants. Since 1930 this is a private school for gifted kids from all over the world. Our mission is to create enabling environment to identify everyones potential in tuition, get acquainted with different types of practices.</span>
            </div>
        </div>
    </div>
  )
}

export default Story