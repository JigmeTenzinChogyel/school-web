import './teachers.css'
import teacherList from '../data/teacherList'
import { getRandomRGBColor } from '../utils/colorUtils';

function Teachers() {
    console.log(getRandomRGBColor())
  return (
    <div className="teachers">
        <h1>Directors, mentors and teachers</h1>
        <h4>All our teachers are high-qualified and native speakers professionals. All of them develop their own programs for Additional programs.</h4>
        <div className="items">
            <div>
            {
                teacherList.map(item => (
                    item.id <= 3 &&
                    <div key={item.id} style={{
                        border: `1px solid ${getRandomRGBColor().border}`,
                        backgroundColor: getRandomRGBColor().background,
                        borderTopRightRadius: '4rem',
                        borderBottomLeftRadius: '4rem',
                      }}  
                      className="teacherList">
                        <div>
                            <h2>{item.name}</h2>
                            <h3>{item.subject}</h3>
                            <h5>{item.language}</h5>
                        </div>
                        <img src={item.image} />
                    </div>
                ))
            }
            </div>
            <div>
            {
                teacherList.map(item => (
                    item.id > 3 &&
                    <div key={item.id} style={{
                        border: `1px solid ${getRandomRGBColor().border}`,
                        backgroundColor: getRandomRGBColor().background,
                        borderTopLeftRadius: '4rem',
                        borderBottomRightRadius: '4rem',
                        }} 
                        className="teacherList">
                        <img src={item.image} />
                        <div className='special'>
                            <h2>{item.name}</h2>
                            <h3>{item.subject}</h3>
                            <h5>{item.language}</h5>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Teachers