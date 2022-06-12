//images
import banner from '../assets/hero_image.png'

//components
import BannerSM from '../components/BannerSM'

export default function About() {
  return (
    <div>
      <BannerSM src={banner} content="About Us" />
    </div>
  )
}
