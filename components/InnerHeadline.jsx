export default function InnerHeadline() {
  return (
    <div className="mxd-section mxd-section-inner-headline padding-blog-descr-pre-grid">
      <div className="mxd-container grid-container">
        {/* Block */}
        <div className="mxd-block loading-wrap">
          <div className="container-fluid px-0">
            <div className="row gx-0">
              {/* Empty column (kept as is) */}
              <div className="col-12"></div>

              {/* Headline Content */}
              <div className="col-12 col-xl-7 mxd-grid-item no-margin">
                <div className="mxd-block__content">
                  <div className="mxd-block__inner-headline loading__item">
                    <h1 className="inner-headline__title headline-img-before headline-img-06">
                      Building modern business websites for growth and
                      visibility
                    </h1>
                  </div>
                </div>
              </div>

              {/* Aside Description */}
              <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                <div className="mxd-block__content">
                  <div className="inner-headline__descr loading__item">
                    <p>
                      Discover how modern website design and development help
                      businesses enhance their online presence, attract more
                      customers, and drive growth. Learn how responsive design,
                      performance optimization, and user-focused experiences
                      play a key role in improving visibility and business
                      success.
                    </p>
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
