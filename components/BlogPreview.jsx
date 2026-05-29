"use client";

import Link from "next/link";

export default function BlogPreview() {
  const posts = [
    {
      image: "blog-preview-image-1",
      title1: "How School ERP Systems",
      title2: "improve daily operations",
      tags: ["ERP", "School Management"],
      link: "/blog1",
    },
    {
      image: "blog-preview-image-2",
      title1: "Building modern business websites",
      title2: "for growth and visibility",
      tags: ["Web Development", "Business"],
      link: "/blog2",
    },
    {
      image: "blog-preview-image-3",
      title1: "Why digital solutions matter",
      title2: "for business efficiency",
      tags: ["Automation", "Software"],
      link: "/blog3",
    },
  ];

  return (
    <div className="mxd-section padding-blog">
      <div className="mxd-container grid-container">
        {/* TITLE */}
        <div className="mxd-block">
          <div className="mxd-section-title pre-grid">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                  <h2 className="reveal-type anim-uni-in-up">
                    Insights & Updates
                  </h2>
                </div>

                <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                  <p className="anim-uni-in-up">
                    Explore insights on ERP systems, website development, and
                    digital solutions.
                  </p>
                </div>

                <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                  <Link
                    href="/view"
                    className="btn btn-anim btn-default btn-outline slide-right-up"
                  >
                    <span className="btn-caption">View All</span>

                    {/* ✅ FIX: remove risky SVG/icon */}
                    <span style={{ marginLeft: "6px" }}>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BLOG CARDS */}
        <div className="mxd-block">
          <div className="mxd-blog-preview">
            <div className="container-fluid p-0">
              <div className="row g-0">
                {posts.map((post, index) => (
                  <div
                    key={index}
                    className="col-12 col-xl-4 mxd-blog-preview__item mxd-grid-item animate-card-3"
                  >
                    {/* IMAGE */}
                    <Link
                      href={post.link || "#"} // ✅ safe fallback
                      className="mxd-blog-preview__media"
                    >
                      <div
                        className={`mxd-blog-preview__image ${post.image} parallax-img-small`}
                      />

                      {/* 👁️ ICON FIX */}
                      <div className="mxd-preview-hover">
                        <span className="mxd-preview-hover__icon">👁️</span>
                      </div>

                      {/* TAGS */}
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
                    </Link>

                    {/* TITLE */}
                    <div className="mxd-blog-preview__data">
                      <Link
                        href={post.link || "#"} // ✅ safe fallback
                        className="anim-uni-in-up"
                      >
                        <span>{post.title1}</span> {post.title2}
                      </Link>
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
