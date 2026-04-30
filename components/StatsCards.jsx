"use client";

export default function StatsCards() {
  return (
    <div className="mxd-section padding-grid-pre-mtext overflow-hidden">
      <div className="mxd-container grid-container">
        <div className="mxd-block">
          <div className="mxd-stats-cards">
            <div className="container-fluid px-0">
              <div className="row gx-0">

                {/* item 1 */}
                <div className="col-12 col-xl-5 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-right">
                  <div className="mxd-stats-cards__inner align-end bg-accent radius-m padding-4">
                    <div className="mxd-counter align-end">
                      <p className="mxd-counter__number mxd-stats-number opposite">
                        0
                      </p>
                      <p className="mxd-counter__descr t-140 t-bright opposite">
                        Schools & businesses
                        <br />
                        trusting our ERP solutions
                      </p>
                    </div>

                    <div className="mxd-stats-cards__btngroup">
                      <a
                        className="btn btn-anim btn-default btn-outline opposite slide-right-up"
                        href="/about-us"
                      >
                        <span className="btn-caption">About Us</span>
                        <i className="ph-bold ph-arrow-up-right"></i>
                      </a>
                    </div>

                    <div className="mxd-stats-cards__image mxd-stats-cards-image-1">
                      <img src="/assets/img/stats01.webp" alt="Illustration" />
                    </div>
                  </div>
                </div>

                {/* item 2 */}
                <div className="col-12 col-xl-7 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-left">
                  <div className="mxd-stats-cards__inner align-end bg-base-tint radius-m padding-4">
                    <div className="mxd-counter align-end">
                      <p className="mxd-counter__number mxd-stats-number">0</p>
                      <p className="mxd-counter__descr t-140 t-bright">
                        Clients returning for
                        <br />
                        website & software projects
                      </p>
                    </div>

                    <div className="mxd-stats-cards__image mxd-stats-cards-image-2">
                      <img src="/assets/img/stats02.webp" alt="Illustration" />
                    </div>
                  </div>
                </div>

                {/* item 3 */}
                <div className="col-12 col-xl-7 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-right">
                  <div className="mxd-stats-cards__inner bg-base-tint radius-m padding-4">
                    <div className="mxd-counter">
                      <p className="mxd-counter__number mxd-stats-number">0</p>
                      <p className="mxd-counter__descr t-140 t-bright">
                        Experience in building ERP systems,
                        websites, and scalable digital solutions
                      </p>
                    </div>

                    <div className="mxd-stats-cards__image mxd-stats-cards-image-3">
                      <img src="/assets/img/stats03.webp" alt="Illustration" />
                    </div>
                  </div>
                </div>

                {/* item 4 */}
                <div className="col-12 col-xl-5 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-left">
                  <div className="mxd-stats-cards__inner bg-base-tint radius-m padding-4">
                    <div className="mxd-counter">
                      <p className="mxd-counter__number mxd-stats-number">0</p>
                      <p className="mxd-counter__descr t-140 t-bright">
                        Successfully delivered ERP,
                        <br />
                        website & software projects
                      </p>
                    </div>

                    <div className="mxd-stats-cards__btngroup">
                      <a
                        className="btn btn-anim btn-default btn-outline slide-right-up"
                        href="/works-simple"
                      >
                        <span className="btn-caption">Our Work</span>
                        <i className="ph-bold ph-arrow-up-right"></i>
                      </a>
                    </div>

                    <div className="mxd-stats-cards__image mxd-stats-cards-image-4">
                      <img src="/assets/img/stats04.webp" alt="Illustration" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}