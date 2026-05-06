"use client";
import Link from "next/link";

export default function FooterSection() {
  const navLinks = [
    ["Home", "/"],
    ["About us", "/about"],
    ["Works", "/works"],
    ["Services", "/services"],
    ["Contact", "/contact"],
  ];

  const services = [
    "School ERP Systems",
    "Website Development",
    "Custom Web Applications",
    "Mobile App Development",
    "UI/UX Design",
    "Digital Solutions",
  ];

  // ✅ Smooth Scroll Function

  return (
    <footer id="mxd-footer" className="mxd-footer">
      {/* Fullwidth Text */}
      <div className="mxd-footer__text-wrap">
        <div className="fullwidth-text__tl-trigger"></div>

        <div className="mxd-footer__fullwidth-text anim-top-to-bottom">
          <svg
            className="mxd-footer__svg-v2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400.26 72"
          >
            <path d="M4.93,56V25.93H0V16h10.13..." />
          </svg>
        </div>
      </div>

      {/* Footer Columns */}
      <div className="mxd-footer__footer-blocks">
        {/* Column 1 */}
        <div className="footer-blocks__column animate-card-3">
          <div className="footer-blocks__card fullheight-card">
            <div className="footer-blocks__nav">
              <ul className="footer-nav">
                {navLinks.map((item, index) => (
                  <li key={index} className="footer-nav__item anim-uni-in-up">
                    <Link href={item[1]} className="footer-nav__link btn-anim">
                      <span className="btn-caption">{item[0]}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-blocks__links anim-uni-in-up">
              <a href="#0" className="btn btn-line-xsmall btn-muted">
                <span className="btn-caption">Privacy Policy</span>
              </a>

              <a href="#0" className="btn btn-line-xsmall btn-muted">
                <span className="btn-caption">Terms & conditions</span>
              </a>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        {/* Column 2 */}
        <div className="footer-blocks__column animate-card-3">
          <div className="footer-blocks__card">
            <p className="mxd-point-subtitle anim-uni-in-up">
              <a
                href="mailto:ravichandra@rctechbox.com"
                className="footer-contact-link"
              >
                ravichandra@rctechbox.com
              </a>
            </p>
          </div>

          <div className="footer-blocks__card">
            <p className="mxd-point-subtitle anim-uni-in-up">
              <a href="tel:+917892104196" className="footer-contact-link">
                +91 7892104196
              </a>
            </p>
          </div>

          <div className="footer-blocks__card fill-card notify">
            <div className="footer-blocks__title">
              <p className="footer-blocks__title-m">
                Subscribe to our insights:
              </p>
            </div>

            <form className="form notify-form form-light">
              <input type="email" placeholder="Your Email" required />

              <button
                type="submit"
                className="btn btn-form btn-absolute-right btn-muted"
                aria-label="Submit"
              >
                <i className="ph ph-arrow-up-right"></i>
              </button>
            </form>
          </div>
        </div>

        {/* Column 3 */}
        <div className="footer-blocks__column animate-card-3">
          <div className="footer-blocks__card fullheight-card">
            <div className="footer-blocks__block">
              <div className="footer-blocks__title">
                <p className="footer-blocks__title-l">Our Services</p>
              </div>

              <div className="footer-blocks__socials">
                <ul className="footer-socials">
                  {services.map((item, index) => (
                    <li key={index} className="footer-socials__item">
                      <span className="footer-socials__link">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="footer-blocks__links">
              <p className="t-xsmall t-muted">
                <span className="no-effect">RCERP TECHNOLOGIES PVT LTD</span>
                <i className="ph-bold ph-copyright"></i>
                {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
