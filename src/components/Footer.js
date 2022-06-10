import { Link } from 'react-router-dom'

//images
import locationIcon from '../assets/location_icon.svg'
import callIcon from '../assets/call_icon.svg'
import mailIcon from '../assets/mail_icon.svg'
import facebookIcon from '../assets/facebook_icon.svg'
import whatsappIcon from '../assets/whatsapp_icon.svg'
import instagramIcon from '../assets/insta_icon.svg'
import twitterIcon from '../assets/twitter_icon.svg'
import linkedinIcon from '../assets/linkedin_icon.svg'
import map from '../assets/map.png'

export default function Footer() {
  return (
    <div className="bg-primary text-white py-5">
      <div className="container">
        <h3 className="h3 text-uppercase mb-4">Import and Export</h3>
        <div className="row justify-content-between">
            <div className="col-md-5">
                <div className="d-flex align-items-start mb-3">
                  <img src={locationIcon} className="me-4" alt="location" />
                  <p>No: 5A/7, Suresh Nagar, Velachery Main Road, Selaiyur, Chennai-600 073,Tamil Nadu, India.</p>
                </div>
                <div className="d-flex align-items-start">
                  <img src={mailIcon} className="me-4" alt="mail" />
                  <p>Import.Export@mail.com</p>
                </div>
            </div>
            <div className="col-md-3">
                <div className="d-flex align-items-start">
                  <img src={callIcon} className="me-4" alt="call" />
                  <ul className="list-unstyled">
                    <li className=''>+91 9969922348</li>
                    <li>+91 9969922348</li>
                  </ul>
                </div>
                <h6 className='h6 my-3'>Follow us</h6>
                <ul className="list-unstyled d-flex">
                  <li className='me-3'><Link to='/'><img src={facebookIcon} alt="facebook" /></Link></li>
                  <li className='me-3'><Link to='/'><img src={whatsappIcon} alt="whatsapp" /></Link></li>
                  <li className='me-3'><Link to='/'><img src={instagramIcon} alt="instagram" /></Link></li>
                  <li className='me-3'><Link to='/'><img src={twitterIcon} alt="twitter" /></Link></li>
                  <li className='me-3'><Link to='/'><img src={linkedinIcon} alt="linkedin" /></Link></li>
                </ul>
            </div>
            <div className="col-md-3">
              <h6 className="h6">Our Location</h6>
              <img src={map} className="img-fliud" alt="map" />
            </div>
        </div>
      </div>
    </div>
  )
}
