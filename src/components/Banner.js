import banner from '../assets/hero_image.png'

export default function Banner() {
  return (
    <div className='text-white h-full py-5' style={{
      backgroundImage: `url(${banner})`, 
      height:"500px"
      }}>
      <div className="container position-relative top-50 translate-middle-y">
        <h3 className='m-0'>Making Transport</h3>
        <h1 className='m-0'>FAST & SAFE</h1>
        <p style={{ maxWidth: "550px"}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean nascetur ridiculus mus dolor sit amet, consectetu.</p>
        <button className="nav-link btn btn-primary px-4 text-white">Learn More</button>
      </div>
    </div>
  )
}
