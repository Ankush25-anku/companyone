import React from "react";

const Contact7 = () => {
  return (
    <>
      {/* Section - CTA Start */}
      <div className="mxd-section overflow-hidden">
        <div className="mxd-container">
          {/* Block - CTA Start */}
          <div className="mxd-block">
            <div className="mxd-promo">
              <div className="mxd-promo__inner anim-zoom-out-container">
                {/* background */}
                <div className="mxd-promo__bg"></div>

                {/* caption */}
                <div className="mxd-promo__content">
                  <p className="mxd-promo__title anim-uni-in-up">
                    <span className="mxd-promo__icon">
                      <img
                        src="https://dummyimage.com/100x100/838383/5d5d5d"
                        alt="Icon"
                      />
                    </span>
                    <span className="mxd-promo__caption reveal-type">
                      Let's talk about your project!
                    </span>
                  </p>

                  <div className="mxd-promo__controls anim-uni-in-up">
                    <a
                      className="btn btn-anim btn-default btn-large btn-additional slide-right-up"
                      href="#contact-form"
                    >
                      <span className="btn-caption">Say Hello</span>
                      <i className="ph-bold ph-arrow-up-right"></i>
                    </a>
                  </div>
                </div>

                {/* parallax images */}
                <div className="mxd-promo__images">
                  <img
                    className="promo-image promo-image-1"
                    src="https://dummyimage.com/600x600/5d5d5d/838383"
                    alt="Image"
                  />
                  <img
                    className="promo-image promo-image-2"
                    src="https://dummyimage.com/300x300/5d5d5d/838383"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Block - CTA End */}
        </div>
      </div>
      {/* Section - CTA End */}
    </>
  );
};

export default Contact7;
