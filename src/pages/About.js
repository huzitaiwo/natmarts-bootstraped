//images
import banner from '../assets/hero_image.png'

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
      </div>
    </div>
  )
}
