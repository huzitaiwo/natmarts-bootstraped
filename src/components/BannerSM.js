
export default function BannerSM({ src, content }) {
  return (
    <div>
      <img className='img-fluid' src={src} alt="banner" />
      <div className="container position-absolute top-15 start-0 text-white mt-2 mt-lg-5 ms-lg-5">
        <h3 className='m-0'>{content}</h3>
      </div>
    </div>
  )
}
