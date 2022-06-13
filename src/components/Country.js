//images
import country_1 from '../assets/country1.png'
import country_2 from '../assets/country2.png'
import country_3 from '../assets/country3.png'
import country_4 from '../assets/country4.png'
import country_5 from '../assets/country5.png'

export default function Country() {
  return (
    <div className="py-5">
      <div className='container'>
        <div className="row justify-content-between">
          <div className="col-2">
            <img className='img-fluid' src={country_1} alt="" />
          </div>
          <div className="col-2">
            <img className='img-fluid' src={country_2} alt="" />
          </div>
          <div className="col-2">
            <img className='img-fluid' src={country_3} alt="" />
          </div>
          <div className="col-2">
            <img className='img-fluid' src={country_4} alt="" />
          </div>
          <div className="col-2">
            <img className='img-fluid' src={country_5} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
