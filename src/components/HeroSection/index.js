import React from 'react'

function HeroSection() {
  return (
    <section id="hero" className="bg-dark  text-light mt-3">
      <div className="container col-xxl-8 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="/img/hyper-casual-game-phone.png"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <div className="display-5 lh-1 mb-3">
              <span className="fw-bold">Hello world</span> 👋
            </div>
            <h3>Welcome to my game universe.</h3>
            <p className="lead">
              This journey is about making hyper casual games with using pure
              JavaScript.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-2">
              <a
                href="https://github.com/sametkoyuncu"
                target="_blank"
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2 btn-purple rounded-pill"
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/samet-koyuncu/"
                target="_blank"
                type="button"
                className="btn btn-outline-primary btn-lg px-4 btn-outline-purple rounded-pill"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
