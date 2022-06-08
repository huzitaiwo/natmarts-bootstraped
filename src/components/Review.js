// images
import person_1 from '../assets/person_1.png'
import person_2 from '../assets/person_2.png'
import person_3 from '../assets/person_3.png'
import rating_1 from '../assets/rating_1.svg'
import rating_2 from '../assets/rating_2.svg'
import rating_3 from '../assets/rating_3.svg'

//components
import Card from './Card'

//src, rate, name, time

export default function Review() {
  return (
    <div className="container bg-info py-5">
      <div className='row'>
        <div className="col-md-4 mb-4 mb-md-0">
          <Card src={person_1} rate={rating_1} name="Ashley" time="10 min ago" />
        </div>
        <div className="col-md-4 mb-4 mb-md-0">
          <Card src={person_2} rate={rating_2} name="Ashley" time="10 min ago" />
        </div>
        <div className="col-md-4 mb-4 mb-md-0">
          <Card src={person_3} rate={rating_3} name="Ashley" time="1 month ago" />
        </div>
      </div>
    </div>
  )
}
