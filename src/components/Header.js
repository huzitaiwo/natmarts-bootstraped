//icons
import callIcon from '../assets/Call.svg'
import locationIcon from '../assets/location.svg'
import mailIcon from '../assets/Mail.svg'
import whatsappIcon from '../assets/whatsapp.svg'
import facebookIcon from '../assets/facebook.svg'
import instagramIcon from '../assets/instagram.svg'
import twitterIcon from '../assets/twitter.svg'
import linkedinIcon from '../assets/linkedin.svg'

export default function Header() {
  return (
    <div className='header'>
        <div className="container py-2 d-md-flex justify-content-between align-items-center">
          <ul className='address d-md-flex align-items-center list-unstyled'>
              <li className='d-flex pb-1 pb-md-0 pe-sm-3'>
                <img src={locationIcon} alt="location" />
                <span className='ps-2'>Hyderabad, India</span>
              </li>
              <li className='d-flex pb-1 pb-md-0 pe-sm-3'>
                <img src={callIcon} alt="call" />
                <span className='ps-2'>+91 9969922348</span>
              </li>
              <li className='d-flex pb-1 pb-md-0 pe-sm-3'>
                <img src={mailIcon} alt="mail" />
                <span className='ps-2'>Import.Export@mail.com</span>
              </li>
          </ul>
          <ul className="social-links d-flex list-unstyled">
            <li className='pe-2'>
                <img src={facebookIcon} alt="facebook" />
            </li>
            <li className='pe-2'>
                <img src={instagramIcon} alt="instagram" />
            </li>
            <li className='pe-2'>
                <img src={twitterIcon} alt="twitter" />
            </li>
            <li className='pe-2'>
                <img src={linkedinIcon} alt="linkedin" />
            </li>
            <li className='pe-2'>
                <img src={whatsappIcon} alt="whatsapp" />
            </li>
          </ul>
        </div>
    </div>
  )
}
