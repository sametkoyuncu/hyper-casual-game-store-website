import { Row, Col } from 'react-bootstrap'

function GameSection({
  bgColor,
  title,
  description,
  image,
  buttonOne,
  buttonTwo,
  imagePosition = 'left',
}) {
  const imageCol = (
    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
      <div className="_cta_grover_grocery_content_img">
        <img
          src={image}
          alt="Image"
          className="_cta_grover_grocery_img"
          style={{ width: '250px', height: 'auto' }}
        />
      </div>
    </div>
  )

  const contentCol = (
    <div
      className={`col-xl-6 col-lg-6 col-md-12 col-sm-12 ${
        imagePosition == 'right' ? 'text-end' : 'text-start'
      } `}
    >
      <div className="_cta_grover_grocery_content">
        <div className="_cta_grover_grocery_content_txt">
          <h5 className="_cta_grover_grocery_content_title"></h5>
          <h2 className="_cta_grover_grocery_content_title2">{title}</h2>
          <p className="_cta_grover_grocery_content_para">{description}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-xxl-8 col-xl-10 col-lg-10 col-md-8 col-sm-10 col-12 mx-sm-auto mx-md-0">
          <div className="_cta_grover_grocery_content_btn">
            <a
              href={buttonOne}
              target="_blank"
              className="_app_btn btn-purple rounded-pill"
            >
              <strong style={{ color: 'white' }}>Source Code</strong>
            </a>
            <a
              href={buttonTwo}
              target="_blank"
              type="button"
              className="_playstore_btn btn-outline-purple rounded-pill"
            >
              <strong>Play</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
  return (
    <section
      className="_cta_grover_grocery_wrapper"
      style={{ backgroundColor: `#${bgColor}` }}
    >
      <div className="_cta_grover_grocery_wrap">
        <div className="container">
          <div className="row">
            {imagePosition === 'left' ? (
              <>
                {imageCol} {contentCol}{' '}
              </>
            ) : (
              <>
                {contentCol} {imageCol}{' '}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GameSection
