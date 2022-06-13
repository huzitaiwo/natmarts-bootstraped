import banner from '../assets/hero_image.png'

export default function Banner() {
  return (
    <div className='text-white' style={{ backgroundImage: `url(${banner})`, height:"600px"}}>
      {/* <img className='img-fluid' src={banner} alt="banner" /> */}
      <div className="container">
        <h3 className='m-0'>Making Transport</h3>
        <h1 className='m-0'>FAST & SAFE</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean nascetur ridiculus mus dolor sit amet, consectetu.</p>
        <button className="nav-link btn btn-primary px-4 text-white">Learn More</button>
      </div>
    </div>
  )
}
