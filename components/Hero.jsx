"use client";

export default function Hero() {
  const socials = ["Dribbble", "Behance", "Instagram"];

  return (
    <div className="mxd-section mxd-hero-section mxd-hero-fullheight">
      <div className="mxd-hero-01">
        <div className="mxd-hero-01__wrap loading-wrap">
          {/* Top Group */}
          <div className="mxd-hero-01__top">
            <div className="mxd-hero-01__title-wrap">
              {/* Floating Images (UNCHANGED) */}
              <div className="mxd-hero-01__images mxd-floating-img">
                <div className="hero-01-image image-01 mxd-floating-img__item loading__fade">
                  <img
                    className="mxd-pulse"
                    src="/assets/img/01_hero-img.webp"
                    alt="Hero"
                  />
                </div>

                <div className="hero-01-image image-02 mxd-floating-img__item loading__fade">
                  <img
                    className="mxd-move"
                    src="/assets/img/02_hero-img.webp"
                    alt="Hero"
                  />
                </div>

                <div className="hero-01-image image-03 mxd-floating-img__item loading__fade">
                  <img
                    className="mxd-rotate"
                    src="/assets/img/03_hero-img.webp"
                    alt="Hero"
                  />
                </div>
              </div>

              {/* ❌ REMOVED MARQUEE COMPLETELY */}

              {/* ✅ UPDATED HERO TITLE */}
              <h1 className="hero-01-title">
                <span className="hero-01-title__row loading__item">
                  <em className="hero-01-title__item">RCERP</em>
                </span>

                <span className="hero-01-title__row loading__item">
                  <em className="hero-01-title__item">TECHNOLOGIES PVT LTD</em>
                </span>
              </h1>
            </div>
          </div>

          {/* Bottom Group */}
          <div className="mxd-hero-01__bottom">
            <div className="mxd-hero-01__data-wrap">
              <div className="mxd-hero-01__dash-line dash-line loading__fade"></div>

              {/* Scroll Button (UNCHANGED) */}
              <div className="mxd-hero-01__data-btn loading__fade">
                <a
                  href="#projects"
                  className="btn-rotating btn-rotating-120-160"
                >
                  <svg
                    id="scrollDown"
                    className="btn-rotating__text animate-rotation"
                    viewBox="0 0 160 160"
                  >
                    <defs>
                      <path
                        id="textPath"
                        d="M149.7,80c0,38.5-31.2,69.7-69.7,69.7S10.3,118.5,10.3,80S41.5,10.3,80,10.3S149.7,41.5,149.7,80z"
                      />
                    </defs>

                    <text>
                      <textPath href="#textPath">
                        Scroll for More * Scroll for More *
                      </textPath>
                    </text>
                  </svg>

                  <img
                    className="btn-rotating__image"
                    src="/assets/img/04_hero-img.webp"
                    alt="Object"
                  />
                </a>
              </div>

              {/* ✅ UPDATED DESCRIPTION */}
              <div className="mxd-hero-01__data-descr loading__fade">
                <p className="t-bright">
                  We develop powerful ERP solutions for schools and businesses,
                  along with custom websites and digital systems designed to
                  streamline operations and drive growth.
                </p>
              </div>

              {/* Socials (UNCHANGED) */}
              <div className="mxd-hero-01__data-socials loading__fade">
                <ul>
                  {socials.map((item, index) => (
                    <li key={index}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 80 80"
                        fill="currentColor"
                      >
                        <path d="M78.4,38.4h-3.9..." />
                      </svg>

                      <a href="#" target="_blank" rel="noopener noreferrer">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Video (UNCHANGED) */}
            <div className="mxd-hero-01__video-wrap loading__item">
              <video
                className="mxd-hero-01__video"
                preload="auto"
                autoPlay
                loop
                muted
                playsInline
                poster="/assets/images/video-poster.jpg"
              >
                <source
                  src="/assets/video/540x310_video-01.mp4"
                  type="video/mp4"
                />
                <source
                  src="/assets/video/540x310_video-01.webm"
                  type="video/webm"
                />
                <source
                  src="/assets/video/540x310_video-01.ogv"
                  type="video/ogg"
                />
              </video>

              <div className="mxd-hero-01__video-btn">
                <a
                  className="btn btn-round btn-round-medium btn-accent slide-right anim-no-delay"
                  href="#"
                >
                  ▶
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
