//images
import banner from '../assets/hero_image.png'
import locationIcon from '../assets/location_icon-red.svg'
import callIcon from '../assets/call_icon-red.svg'
import mailIcon from '../assets/mail_icon-red.svg'

//components
import BannerSM from '../components/BannerSM'

export default function Contact() {
  return (
    <div>
      <BannerSM src={banner} content="Contact Us" />
      <div className="container py-5">
        <div className="row justify-content-between">
          <div className="col-md-5">
            <h3 className="h4 text-uppercase fw-bolder text-primary mb-3">Contact us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor.</p>
            <div className="d-flex align-items-start mb-md-3">
              <img src={locationIcon} className="me-4" alt="location" />
              <p>No: 5A/7, Suresh Nagar, Velachery Main Road, Selaiyur, Chennai-600 073,Tamil Nadu, India.</p>
            </div>
            <div className="d-flex align-items-start mb-md-3">
              <img src={mailIcon} className="me-4" alt="mail" />
              <p>Import.Export@mail.com</p>
            </div>
            <div className="d-flex align-items-start mb-md-3">
              <img src={callIcon} className="me-4" alt="mail" />
              <p>+91 9969922348</p>
            </div>
          </div>
          <div className="col-md-5">
            <h3 className="h4 text-uppercase fw-bolder text-primary mt-5 mt-md-0 mb-3">Send us a messsage</h3>
            <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor.</p>
            <form className='row g-4 mb-3'>
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Name" />
              </div>
              <div className="col-md-6">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="col-md-6">
                <input type="tel" className="form-control" placeholder="Phone" />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Interest of Services" />
              </div>
              <div className="col-12">
                <textarea cols="20" rows="5" className="form-control" placeholder="Message"></textarea>
              </div>
            </form>
            <button className="btn btn-primary btn-lg text-uppercase text-white px-5">Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
