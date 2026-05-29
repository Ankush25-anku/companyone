"use client";

export default function Header() {
  return (
    <header id="header" className="mxd-header">
      {/* header logo */}
      <div className="mxd-header__logo loading__fade">
        <a href="/" className="mxd-logo">
          {/* ✅ NEW LOGO IMAGE */}
          <img
            src="/assets/img/RClogo3.png" // 👉 put your image inside /public folder
            alt="RC Techbox Logo"
            className="mxd-logo__image"
            style={{ height: "50px", width: "auto" }}
          />

          {/* logo text */}
          <span className="mxd-logo__text">
            RCERP <br /> TECHNOLOGIES
          </span>
        </a>
      </div>

      {/* header controls */}
      <div className="mxd-header__controls loading__fade">
        <a
          className="btn btn-anim btn-default btn-mobile-icon btn-outline slide-right-up"
          href="/contact"
          aria-label="Say Hello"
        >
          <span className="btn-caption">Say Hello</span>
          <i className="ph-bold ph-arrow-up-right"></i>
        </a>
      </div>
    </header>
  );
}
