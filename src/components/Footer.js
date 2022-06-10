//images
import locationIcon from '../assets/location_icon.svg'
import callIcon from '../assets/call_icon.svg'
import mailIcon from '../assets/mail_icon.svg'

export default function Footer() {
  return (
    <div className="bg-primary text-white">
      <div className="container">
        <h3 className="h3 text-uppercase">Import and Export</h3>
        <div className="row">
            <div className="col-md-4">
                <div className="address">
                  <img src={locationIcon} alt="location" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
