//components
import About from '../components/About'
import Banner from '../components/Banner'
import Country from '../components/Country'
import Review from '../components/Review'
import Shop from '../components/Shop'

export default function Home() {
  return (
    <div className='home'>
      <Banner />
      <div className="text-center pt-5">
        <h3 className="h3 text-primary fw-bolder">About US</h3>
      </div>
      <About />
      <div className="bg-info">
        <div className="text-center pt-5">
          <h3 className="h3 text-primary m-0">Countries we Serve</h3>
        </div>
        <Country />
      </div>
      <div className="text-center pt-5">
        <h3 className="h3 text-primary">Explore shop</h3>
      </div>
      <Shop />
      <div className="bg-info">
        <div className="text-center pt-5">
          <h3 className="h3 text-primary m-0">Clients Reviews</h3>
        </div>
        <Review />
      </div>
      <div className="bg-dark text-white py-5">
        <div className="container d-md-flex justify-content-between align-items-center">
          <div>
            <h2 className="h2">Lorem ipsum dolor sit amet!</h2>
            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum.</p>
          </div>
          <button className="btn btn-primary btn-lg text-white">Request a Quote</button>
        </div>
      </div>
    </div>
  )
}
