export default function Blogarticle2() {
  return (
    <div className="mxd-section padding-blog">
      <div className="mxd-container grid-container">
        {/* Section Title */}
        <div className="mxd-block">
          <div className="mxd-section-title pre-grid">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrtitle">
                    <h2 className="reveal-type anim-uni-in-up">
                      More on School ERP Systems
                    </h2>
                  </div>
                </div>

                <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                  {/* optional description */}
                </div>

                <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrcontrols anim-uni-in-up">
                    <a
                      className="btn btn-anim btn-default btn-outline slide-right-up"
                      href="/blog-standard"
                    >
                      <span className="btn-caption">All Articles</span>
                      <i className="ph-bold ph-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="mxd-block">
          <div className="mxd-blog-preview">
            <div className="container-fluid p-0">
              <div className="row g-0">
                {/* ITEM 1 */}
                <div className="col-12 col-xl-4 mxd-blog-preview__item mxd-grid-item animate-card-3">
                  <a className="mxd-blog-preview__media" href="/blog1">
                    <div className="mxd-blog-preview__image blog-preview-image-1 parallax-img-small"></div>

                    <div className="mxd-preview-hover">
                      <i className="mxd-preview-hover__icon">
                        <img
                          src="/assets/img/icons/icon-eye.svg"
                          alt="Eye Icon"
                        />
                      </i>
                    </div>

                    <div className="mxd-blog-preview__tags">
                      <span className="tag tag-default tag-permanent">ERP</span>
                      <span className="tag tag-default tag-permanent">
                        School Management
                      </span>
                    </div>
                  </a>

                  <div className="mxd-blog-preview__data">
                    <a className="anim-uni-in-up" href="/blog1">
                      <span>Streamlining school operations</span> with ERP
                      systems
                    </a>
                  </div>
                </div>

                {/* ITEM 2 */}
                <div className="col-12 col-xl-4 mxd-blog-preview__item mxd-grid-item animate-card-3">
                  <a className="mxd-blog-preview__media" href="/blog2">
                    <div className="mxd-blog-preview__image blog-preview-image-2 parallax-img-small"></div>

                    <div className="mxd-preview-hover">
                      <i className="mxd-preview-hover__icon">
                        <img
                          src="/assets/img/icons/icon-eye.svg"
                          alt="Eye Icon"
                        />
                      </i>
                    </div>

                    <div className="mxd-blog-preview__tags">
                      <span className="tag tag-default tag-permanent">
                        Automation
                      </span>
                      <span className="tag tag-default tag-permanent">
                        Efficiency
                      </span>
                    </div>
                  </a>

                  <div className="mxd-blog-preview__data">
                    <a className="anim-uni-in-up" href="/blog2">
                      Improving <span>administrative efficiency</span> in
                      schools
                    </a>
                  </div>
                </div>

                {/* ITEM 3 */}
                <div className="col-12 col-xl-4 mxd-blog-preview__item mxd-grid-item animate-card-3">
                  <a className="mxd-blog-preview__media" href="/blog3">
                    <div className="mxd-blog-preview__image blog-preview-image-3 parallax-img-small"></div>

                    <div className="mxd-preview-hover">
                      <i className="mxd-preview-hover__icon">
                        <img
                          src="/assets/img/icons/icon-eye.svg"
                          alt="Eye Icon"
                        />
                      </i>
                    </div>

                    <div className="mxd-blog-preview__tags">
                      <span className="tag tag-default tag-permanent">
                        Digital Transformation
                      </span>
                      <span className="tag tag-default tag-permanent">
                        Education
                      </span>
                    </div>
                  </a>

                  <div className="mxd-blog-preview__data">
                    <a className="anim-uni-in-up" href="/blog3">
                      Enhancing <span>daily school workflows</span> through ERP
                    </a>
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
