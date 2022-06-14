
export default function BannerSM({ src, content }) {
  return (
    <div className='text-white py-5' style={{
      backgroundImage: `url(${src})`,
      backgroundPosition: "center" 
      // height:"200px"
      }}>
      <div className="container">
        <h3 className='m-0'>{content}</h3>
      </div>
    </div>
  )
}
