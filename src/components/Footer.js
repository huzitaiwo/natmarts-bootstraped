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
                <div className="">
                  <img src={locationIcon} alt="location" />
                  <p>No: 5A/7, Suresh Nagar, Velachery Main Road, Selaiyur, Chennai-600 073,Tamil Nadu, India.</p>
                </div>
                <div className="">
                  <img src={mailIcon} alt="mail" />
                  <p>Import.Export@mail.com</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="">
                  <img src={callIcon} alt="call" />
                  <div className="">
                    <p>+91 9969922348</p>
                    <p>+91 9969922348</p>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
