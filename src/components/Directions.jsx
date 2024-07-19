import './directions.css'
import directionList from '../data/directionList'

function Directions() {
  return (
    <div className="directions">
        <h2>Program and directions</h2>
        <h4>Our school offers sets of required classes and an additional program like programming classes.</h4>
        <div className="items">
            {
                directionList.map(item => (
                    <div key={item.id} className="directions-items">
                        <img src={item.image} alt={item.image} />
                        <h3>{item.title}</h3>
                        <h5>{item.description}</h5>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Directions