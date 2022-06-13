//images
import banner from '../assets/hero_image.png'
import deliveryIcon from '../assets/fast_delivery.svg'
import secureIcon from '../assets/secured.svg'
import cupIcon from '../assets/reliable.svg'

//components
import BannerSM from '../components/BannerSM'
import Aboutus from '../components/About'

export default function About() {
  return (
    <div>
      <BannerSM src={banner} content="About Us" />
      <Aboutus />
      <div className="bg-info">
        <h3 className="h3 text-uppercase text-primary">Why Choose Us</h3>
        <div className="row jusify-content-between">
          <div className="col-md-5">
            <p>Unique Groups is the leading Foodstuff business operating and Facility Service in Middle East and India. We are importing and exporting all kinds of agricultural products from throughout the world. The Group's core business segment: Foodstuff trading at Dubai, Export and Import business at India, and Facility Management business. Unique has successfully leveraged its brand building and market development skills along with proven foodstuff industry experience to drive sustainable profitable growth within the Middle East and Asian regions.</p>
          </div>
          <div className="col-md-5">
            <div className="row">
              <div className="col-md-6">
                <img src={deliveryIcon} alt="delivery" />
              </div>
              <div className="col-md-6">
                <img src={deliveryIcon} alt="delivery" />
              </div>
              <div className="col-md-6">
                <img src={deliveryIcon} alt="delivery" />
              </div>
              <div className="col-md-6">
                <img src={deliveryIcon} alt="delivery" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
