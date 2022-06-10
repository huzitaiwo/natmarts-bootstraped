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

export default function Footer() {
  return (
    <div className="bg-primary text-white">
      <div className="container">
        <h3 className="h3 text-uppercase">Import and Export</h3>
        <div className="row">
            <div className="col-md-4">
                <div className="">
                  <img src={locationIcon} alt="location" />
                  <p>No: 5A/7, Suresh Nagar, Velachery Main Road, Selaiyur, Chennai-600 073,Tamil Nadu, India.</p>
                </div>
                <div className="">
                  <img src={mailIcon} alt="mail" />
                  <p>Import.Export@mail.com</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="">
                  <img src={callIcon} alt="call" />
                  <div className="">
                    <p>+91 9969922348</p>
                    <p>+91 9969922348</p>
                  </div>
                </div>
                <h6 className='h6'>Follow us</h6>
                <ul className="unstyled-list">
                  <li><Link to='/'><img src={facebookIcon} alt="facebook" /></Link></li>
                  <li><Link to='/'><img src={whatsappIcon} alt="whatsapp" /></Link></li>
                  <li><Link to='/'><img src={instagramIcon} alt="instagram" /></Link></li>
                  <li><Link to='/'><img src={twitterIcon} alt="twitter" /></Link></li>
                  <li><Link to='/'><img src={linkedinIcon} alt="linkedin" /></Link></li>
                </ul>
            </div>
            <div className="col-md-4">
                <h6 className="h6">Our Location</h6>
            </div>
        </div>
      </div>
    </div>
  )
}
