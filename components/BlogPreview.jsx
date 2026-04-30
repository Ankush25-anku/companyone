"use client";

export default function BlogPreview() {
  const posts = [
    {
      image: "blog-preview-image-1",
      title1: "How School ERP Systems",
      title2: "improve daily operations",
      tags: ["ERP", "School Management"],
    },
    {
      image: "blog-preview-image-2",
      title1: "Building modern business websites",
      title2: "for growth and visibility",
      tags: ["Web Development", "Business"],
    },
    {
      image: "blog-preview-image-3",
      title1: "Why digital solutions matter",
      title2: "for business efficiency",
      tags: ["Automation", "Software"],
    },
  ];

  return (
    <div className="mxd-section padding-blog">
      <div className="mxd-container grid-container">
        {/* Title */}
        <div className="mxd-block">
          <div className="mxd-section-title pre-grid">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrtitle">
                    <h2 className="reveal-type anim-uni-in-up">
                      Insights & Updates
                    </h2>
                  </div>
                </div>

                <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrdescr">
                    <p className="anim-uni-in-up">
                      Explore insights on ERP systems, website development, and
                      digital solutions for businesses and institutions.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrcontrols">
                    <a
                      href="/blog-standard"
                      className="btn btn-anim btn-default btn-outline slide-right-up"
                    >
                      <span className="btn-caption">View All</span>
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
                {posts.map((post, index) => (
                  <div
                    key={index}
                    className="col-12 col-xl-4 mxd-blog-preview__item mxd-grid-item animate-card-3"
                  >
                    <a href="/blog-article" className="mxd-blog-preview__media">
                      <div
                        className={`mxd-blog-preview__image ${post.image} parallax-img-small`}
                      ></div>

                      <div className="mxd-preview-hover">
                        <i className="mxd-preview-hover__icon">
                          <img
                            src="assets/img/icons/icon-eye.svg"
                            alt="Eye Icon"
                          />
                        </i>
                      </div>

                      <div className="mxd-blog-preview__tags">
                        {post.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="tag tag-default tag-permanent"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </a>

                    <div className="mxd-blog-preview__data">
                      <a href="/blog-article" className="anim-uni-in-up">
                        <span>{post.title1}</span> {post.title2}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
