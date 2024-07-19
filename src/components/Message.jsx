import './message.css'
import principal from '../assets/principal.jpg'
import signature from '../assets/signature.png'

function Message() {
  return (
    <div className="message">
        <img src={principal} alt='Principle' className='principal'/>
        <h1>The future is here and belongs to you. Every dreamer is important for the universe</h1>
        <h3>Welcome to the official website of</h3>
        <h3>‌International School & Preschool!</h3>
        <h4>‌I believe that as your are browsing our website, you will gain the perception of how through combining place, people and principles, we create for our students a unique environment.</h4>
        <h2>B‌etty Stollen</h2>
        <h2>‌CEO</h2>
        <img src={signature} alt='Sign' className='signature'/>
    </div>
  )
}

export default Message