import './features.css'
import list from '../data/list.js'

function Features() {
  return (
    <div className="features">
        <h2>Why we are innovate</h2>
        <h4 className='desc'>Our school developed a new approach to help children to start their education in a special atmosphere and develop their special abilities</h4>
        <div className="items">
        {
            list.map(item => (
                <div key={item.id} className="feature-item">
                    <div className="image">
                        <img src={item.image} alt={item.image} />
                    </div>
                    <div className="details">
                        <h3>{item.title}</h3>
                        <span>{item.description}</span>
                    </div>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Features