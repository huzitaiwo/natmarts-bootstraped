import { Link } from "react-router-dom"

export default function Item({ src, name }) {
  return (
    <div className="text-center">
      <img className="img-fliud" src={src} alt={name} />
      <p className="mt-auto">
        <Link className='text-success fw-bold' to={`/about/`}>{name}</Link>
      </p>
    </div>
  )
}
