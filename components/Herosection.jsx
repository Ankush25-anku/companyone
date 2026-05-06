export default function HeroSection() {
  return (
    <div className="mxd-section mxd-hero-section mxd-hero-fullheight">
      <div className="mxd-hero-01">
        <div className="mxd-hero-01__wrap loading-wrap">
          {/* TOP */}
          <div className="mxd-hero-01__top">
            <div className="mxd-hero-01__title-wrap">
              {/* Images */}
              <div className="mxd-hero-01__images mxd-floating-img">
                <div className="hero-01-image image-01 mxd-floating-img__item loading__fade">
                  <video
                    className="mxd-pulse hero-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src="/assets/video/logo.mp4" type="video/mp4" />
                  </video>
                </div>

                <div className="hero-01-image image-03 mxd-floating-img__item loading__fade">
                  <img
                    className="mxd-rotate"
                    src="/assets/img/03_hero-img.webp"
                    alt="Hero"
                  />
                </div>
              </div>

              {/* 🔥 CORRECT MARQUEE POSITION */}
              <div className="mxd-hero-01__marquee loading__item">
                {/* ✅ WHATSAPP ICON (NOW PERFECTLY ATTACHED TO MARQUEE) */}

                {/* ✅ MARQUEE CONTENT */}
                <div className="marquee">
                  <div className="marquee__toright marquee-flex">
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className="marquee__item item-regular text">
                        <p>build digital products that</p>

                        <svg viewBox="0 0 80 80" fill="currentColor">
                          <path
                            d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4
              c-2-1.2-3.5-3.2-4.7-4.8c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9
              c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6
              c0,0,0,13.1,0,17.4c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5
              c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8
              c-3.9,0.4-16.6,0-16.6,0C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6
              c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4
              c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7
              c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6s1.6-0.8,1.6-1.6
              c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3
              c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4c1.8-0.3,5.1-0.7,7.1-0.8
              c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4z"
                          />
                        </svg>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ✅ WHATSAPP ICON HERE */}
          <div className="whatsapp-floating">
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
    alt="WhatsApp"
  />
</div>

              {/* ✅ ADD HERE */}

              {/* TITLE */}
              <h1 className="hero-01-title">
                <span className="hero-01-title__row loading__item">
                  <em className="hero-01-title__item">We</em>
                  <em className="hero-01-title__item title-item-transparent">
                    tech
                  </em>
                </span>

                <span className="hero-01-title__row loading__item">
                  <em className="hero-01-title__item title-item-image">
                    <svg viewBox="0 0 20 20">
                      <path d="M19.6,9.6h-3.9..." />
                    </svg>
                  </em>
                  <em className="hero-01-title__item">solve real problems</em>
                </span>
              </h1>
            </div>
          </div>

          {/* BOTTOM (unchanged) */}
          <div className="mxd-hero-01__bottom">
            <div className="mxd-hero-01__data-wrap">
              <div className="mxd-hero-01__dash-line loading__fade"></div>

              <div className="mxd-hero-01__data-btn loading__fade">
                <a
                  href="#projects"
                  className="btn-rotating btn-rotating-120-160"
                >
                  <svg
                    viewBox="0 0 160 160"
                    className="btn-rotating__text animate-rotation"
                  >
                    <defs>
                      <path id="textPath" d="M149.7,80c0,38.5-31.2..." />
                    </defs>
                    <text>
                      <textPath xlinkHref="#textPath">
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

              <div className="mxd-hero-01__data-descr loading__fade">
                <p className="t-bright">
                  We are a creative digital agency specializing in innovative
                  design and cutting-edge development.
                </p>
              </div>
            </div>

            <div className="mxd-hero-01__video-wrap loading__item">
              <video
                className="mxd-hero-01__video"
                autoPlay
                loop
                muted
                preload="auto"
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
                  type="video/ogv"
                />
              </video>

              <div className="mxd-hero-01__video-btn">
                <a
                  href="https://vimeo.com/65036292"
                  className="btn btn-round btn-round-medium btn-accent"
                >
                  <i className="ph-fill ph-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
