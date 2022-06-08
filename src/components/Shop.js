// components
import Item from './Item'

//images
import whiteHoney from '../assets/white_honey.png'
import ajwaDates from '../assets/ajwa_dates.png'
import dryFruits from '../assets/dry_fruits.png'

export default function Shop() {
  return (
    <div className='container py-5'>
      <div className="row">
        <div className="col-md-4 mb-4 mb-md-0">
          <Item src={whiteHoney} name='White Honey'/>
        </div>
        <div className="col-md-4 mb-4 mb-md-0">
          <Item src={ajwaDates} name='Ajwa Dates'/>
        </div>
        <div className="col-md-4 mb-4 mb-md-0">
          <Item src={dryFruits} name='Dry Fruits'/>
        </div>
      </div>
      <div className="d-grid gap-2 col-4 col-md-2 mx-auto mt-4">
        <button className="btn btn-primary text-white" type="button">View More</button>
      </div>
    </div>
  )
}
