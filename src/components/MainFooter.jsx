import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <div className="footer">
      <div className="details">
        <div className='information'>
          <h1>Contact us:</h1>
          <h3>+12 345 6789</h3>
          <h3>email@yourwebsite.com</h3>
          <h3>www.yourwebsite.com</h3>
          <h3>Sofia, Bulgaria</h3>
          <h3>We love to place promotions on our social networks.</h3>
          <h3>To follow them and know about them follow us.</h3>
          <span>
            <h3><FontAwesomeIcon icon={faFacebook} /></h3>
            <h3><FontAwesomeIcon icon={faTwitter} /></h3>
            <h3><FontAwesomeIcon icon={faInstagram} /></h3>
          </span>
        </div>
        <div className="map">
            <img src='src/assets/graduation.jpg'/>
        </div>
      </div>
      <div className="rights">
        <h4>© All Rights Reserved. jigme@gmail.com</h4>
        <h4>This is a cloned website</h4>
      </div>
    </div>
  );
}

export default Footer;
