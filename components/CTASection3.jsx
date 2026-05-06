"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <div className="mxd-section overflow-hidden">
      <div className="mxd-container">
        {/* CTA BLOCK */}
        <div className="mxd-block">
          <div className="mxd-promo">
            <div className="mxd-promo__inner anim-zoom-out-container">
              {/* BACKGROUND */}
              <div className="mxd-promo__bg"></div>

              {/* CONTENT */}
              <div className="mxd-promo__content">
                <p className="mxd-promo__title anim-uni-in-up">
                  {/* ICON */}
                  <span className="mxd-promo__icon">
                    <img
                      src="https://dummyimage.com/100x100/838383/5d5d5d"
                      alt="Icon"
                    />
                  </span>

                  {/* TEXT */}
                  <span className="mxd-promo__caption reveal-type">
                    {"Let's talk about your project!"}
                  </span>
                </p>

                {/* BUTTON */}
                <div className="mxd-promo__controls anim-uni-in-up">
                  <Link
                    href="/contact"
                    className="btn btn-anim btn-default btn-large btn-additional slide-right-up"
                  >
                    <span className="btn-caption">Contact Us</span>
                    <i className="ph-bold ph-arrow-up-right"></i>
                  </Link>
                </div>
              </div>

              {/* PARALLAX IMAGES */}
              <div className="mxd-promo__images">
                <img
                  className="promo-image promo-image-1"
                  src="https://dummyimage.com/600x600/5d5d5d/838383"
                  alt="Image 1"
                />
                <img
                  className="promo-image promo-image-2"
                  src="https://dummyimage.com/300x300/5d5d5d/838383"
                  alt="Image 2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
