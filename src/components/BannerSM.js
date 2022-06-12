
export default function BannerSM({ src, content }) {
  return (
    <div className="position-relative">
      <img className='img-fluid' src={src} alt="banner" />
      <div className="container position-absolute top-50 start-0 text-white">
        <h3 className='m-0'>{content}</h3>
      </div>
    </div>
  )
}
