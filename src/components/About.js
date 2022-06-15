import aboutImage from '../assets/about_home.png'

export default function About() {
  return (
    <div className="container">
      <div className='row py-3 py-md-5 align-items-center'>
        <div className="col-xl-5 pb-4 pb-xl-0">
          <img className='img-fluid' src={aboutImage} alt="what we do" />
        </div>
        <div className="col-xl-7 text-justify">
          <p className='text-justify'>Unique Groups is the leading Foodstuff business operating and Facility Service in Middle East and India. We are importing and exporting all kinds of agricultural products from throughout the world. The Group's core business segment: Foodstuff trading at Dubai, Export and Import business at India, and Facility Management business. Unique has successfully leveraged its brand building and market development skills along with proven foodstuff industry experience to drive sustainable profitable growth within the Middle East and Asian regions.</p>
        </div>
      </div>
    </div>
  )
}
