import './quote.css'
import owlhat from '../assets/owlhat.png'

function Quote() {
  return (
    <div className="quote">
        <img src={owlhat} alt='owl' />
        <h2>Education is the most powerful weapon which you can use to change the World.</h2>
    </div>
  )
}

export default Quote