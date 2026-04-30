"use client";

export default function CTASection() {
  return (
    <div className="mxd-section overflow-hidden">
      <div className="mxd-container">
        <div className="mxd-block">
          <div className="mxd-promo">
            <div className="mxd-promo__inner anim-zoom-out-container">
            
              <div
                className="mxd-promo__bg"
                style={{
                  backgroundImage: "url('/assets/img/cta-bg.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              {/* Content */}
              <div className="mxd-promo__content">
                <p className="mxd-promo__title anim-uni-in-up">
                  <span className="mxd-promo__icon">
                    {/* ✅ FIXED */}
                    <img src="/assets/img/cta-icon.webp" alt="Icon" />
                  </span>

                  <span className="mxd-promo__caption reveal-type">
                    Let's talk about your project!
                  </span>
                </p>

                <div className="mxd-promo__controls anim-uni-in-up">
                  <a
                    href="/contact"
                    className="btn btn-anim btn-default btn-large btn-additional slide-right-up"
                  >
                    <span className="btn-caption">Contact Us</span>
                    <i className="ph-bold ph-arrow-up-right"></i>
                  </a>
                </div>
              </div>
              {/* Parallax Images */}
              <div className="mxd-promo__images">
                {/* ✅ FIXED */}
                <img
                  className="promo-image promo-image-1"
                  src="/assets/img/promo1.webp"
                  alt="Image"
                />

                <img
                  className="promo-image promo-image-2"
                  src="/assets/img/promo2.webp"
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
