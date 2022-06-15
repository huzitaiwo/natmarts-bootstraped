//images
import banner from '../assets/hero_image.png'
import quoteBg from '../assets/get_quote.png'
import deliveryIcon from '../assets/fast_delivery.svg'
import secureIcon from '../assets/secured.svg'
import cupIcon from '../assets/reliable.svg'

//components
import BannerSM from '../components/BannerSM'
import Aboutus from '../components/About'
import Review from '../components/Review'
import Country from '../components/Country'

export default function About() {
  return (
    <div>
      <BannerSM src={banner} content="About Us" />
      <Aboutus />
      <div className="bg-info py-5">
        <div className="container">
          <h3 className="h3 text-uppercase text-primary">Why Choose Us</h3>
          <div className="row justify-content-between">
            <div className="col-xl-6">
              <p className='text-justify'>Unique Groups is the leading Foodstuff business operating and Facility Service in Middle East and India. We are importing and exporting all kinds of agricultural products from throughout the world. The Group's core business segment: Foodstuff trading at Dubai, Export and Import business at India, and Facility Management business. Unique has successfully leveraged its brand building and market development skills along with proven foodstuff industry experience to drive sustainable profitable growth within the Middle East and Asian regions.</p>
            </div>
            <div className="col-xl-6">
              <div className="row gy-5 justify-content-center">
                <div className="col-5">
                  <img src={deliveryIcon} alt="delivery" />
                  <p>Fast Delivery</p>
                </div>
                <div className="col-5">
                  <img src={secureIcon} alt="secured" />
                  <p>Secured</p>
                </div>
                <div className="col-5">
                  <img src={deliveryIcon} alt="delivery" />
                  <p>Reasonable Price</p>
                </div>
                <div className="col-5">
                  <img src={cupIcon} alt="cup" />
                  <p>Reliable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='py-5 text-center text-white' style={{
        backgroundImage: `url(${quoteBg})`,
        backgroundPosition: "center",
        height: "200px"
      }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h4 className="h4">WE ARE DEDICATED TO PROVIDE THE BEST SERVICES AT THE LOWEST POSSIBLE COST</h4>
              <button className="btn btn-primary text-white px-4">Get Quote</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-5">
        <h3 className="h3 fw-bolder text-primary text-uppercase"><u>Our Client</u></h3>
      </div>
      <Review />
      <div className="container pt-5">
        <h3 className="h3 fw-bolder text-primary">Countries we serve</h3>
      </div>
      <Country />
    </div>
  )
}
