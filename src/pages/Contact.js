//images
import banner from '../assets/hero_image.png'
import locationIcon from '../assets/location_icon.svg'
import callIcon from '../assets/call_icon.svg'
import mailIcon from '../assets/mail_icon.svg'

//components
import BannerSM from '../components/BannerSM'

export default function Contact() {
  return (
    <div>
      <BannerSM src={banner} content="Contact Us" />
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h3 className="h3 text-uppercase fw-bolder text-primary">Contact us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
