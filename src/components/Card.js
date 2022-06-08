
export default function Card({ src, rate, name, time }) {
  return (
    <div className="card text-center shadow border-0 p-2 rounded">
      <div className="center">
        <img src={src} className="img-fluid" alt={name} />
      </div>
      <div className="card-body">
        <h5 className="card-title">
          <img src={rate} alt="rate" />
        </h5>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum.</p>
        <p className="h5">{name}</p>
        <p className="text-muted">{time}</p>
      </div>
    </div>
  )
}
