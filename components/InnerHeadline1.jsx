"use client";

import Link from "next/link";

export default function InnerHeadline1() {
  const tags = [
    "Digital Solutions",
    "Business Efficiency",
    "Automation",
    "Process Optimization",
    "Software",
    "Productivity",
    "Technology",
    "Data Management",
    "Workflow",
    "Digital Transformation",
    "Innovation",
    "Scalability",
    "Cloud Solutions",
    "Business Growth",
  ];

  return (
    <div className="mxd-section mxd-section-inner-headline padding-blog-default-pre-grid">
      <div className="mxd-container grid-container">
        {/* BLOCK */}
        <div className="mxd-block loading-wrap">
          <div className="container-fluid px-0">
            <div className="row gx-0">
              {/* EMPTY SPACING */}
              <div className="col-12"></div>

              {/* TITLE */}
              <div className="col-12 col-xl-10 mxd-grid-item no-margin">
                <div className="mxd-block__content">
                  <div className="mxd-block__inner-headline loading__item">
                    <h1 className="inner-headline__title headline-img-before headline-img-06">
                      Why digital solutions matter for business efficiency
                    </h1>
                  </div>
                </div>
              </div>

              {/* EMPTY */}
              <div className="col-12"></div>
            </div>

            <div className="row g-0">
              <div className="col-12"></div>

              {/* TAGS */}
              <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                <div className="inner-headline__blogtags loading__item">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="tag tag-default tag-outline tag-link-outline"
                    >
                      <Link href="#">{tag}</Link>
                    </span>
                  ))}
                </div>
              </div>

              {/* BREADCRUMBS */}
              <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                <div className="inner-headline__breadcrumbs loading__fade">
                  <div className="breadcrumbs__nav">
                    <span>
                      <Link href="/">Home</Link>
                    </span>
                    <span className="current-item">Insights</span>
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
