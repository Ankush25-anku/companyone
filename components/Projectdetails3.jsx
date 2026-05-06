import React from "react";

const Projectdetails3 = () => {
  return (
    <div>
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
                      <img src="/assets/img/erp11.jpg" alt="ShikshaFlow ERP" />
                    </span>

                    <span className="mxd-promo__caption reveal-type">
                      Transform your institution with ShikshaFlow ERP — complete
                      school management solution with WhatsApp chatbot
                      integration, student records, marks, attendance,
                      transport, exams, subjects and real-time parent
                      communication.
                    </span>
                  </p>

                  <div className="mxd-promo__controls anim-uni-in-up">
                    <a
                      className="btn btn-anim btn-default btn-large btn-additional slide-right-up"
                      href="/contact"
                    >
                      <span className="btn-caption">Contact Us</span>

                      <i className="ph-bold ph-arrow-up-right"></i>
                    </a>
                  </div>
                </div>

                {/* parallax images */}
                <div className="mxd-promo__images">
                  <img
                    className="promo-image promo-image-1"
                    src="/assets/img/erp12.jpg"
                    alt="School ERP Dashboard"
                  />

                  <img
                    className="promo-image promo-image-2"
                    src="/assets/img/erp13.jpg"
                    alt="WhatsApp Chatbot Integration"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Block - CTA End */}
        </div>
      </div>
      {/* Section - CTA End */}
    </div>
  );
};

export default Projectdetails3;
