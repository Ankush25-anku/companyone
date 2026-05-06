"use client";

import Link from "next/link";

export default function BlogArchive() {
  const blogs = [
    {
      title: "Building modern business websites for growth and visibility",
      tags: ["Web Development", "Business", "Growth"],
      date: "January 04, 2025",
      image: "assets/img/blog111.jpg",
      link: "/blog-article",
    },
    {
      title: "Designing responsive websites that drive customer engagement",
      tags: ["Responsive Design", "UI/UX", "Web"],
      date: "December 22, 2024",
      image: "assets/img/blog112.jpg",
      link: "/blog-article",
    },
    {
      title: "Enhancing online presence through modern website strategies",
      tags: ["SEO", "Digital Growth", "Web Strategy"],
      date: "December 10, 2024",
      image: "assets/img/blog113.jpg",
      link: "/blog-article",
    },
    {
      title: "How user-focused design improves website performance",
      tags: ["UX", "Performance", "Frontend"],
      date: "November 22, 2024",
      image: "assets/img/blog112.jpg",
      link: "/blog-article",
    },
    {
      title: "Creating scalable websites for long-term business success",
      tags: ["Scalability", "Development", "Business"],
      date: "November 20, 2024",
      image: "assets/img/blog115.jpg",
      link: "/blog-article",
    },
  ];

  return (
    <div className="mxd-section padding-default">
      <div className="mxd-container grid-container">
        {/* SECTION TITLE */}
        <div className="mxd-block">
          <div className="mxd-section-title no-controls">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrtitle">
                    <h2>
                      Website
                      <br />
                      insights
                    </h2>
                  </div>
                </div>
                <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrdescr">
                    <p>
                      Explore articles on modern website development, business
                      growth strategies, and digital solutions that improve
                      visibility and performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BLOG LIST */}
        <div className="mxd-block">
          <div className="mxd-projects-archive">
            {blogs.map((blog, index) => (
              <Link
                key={index}
                href={blog.link || "#"}
                className="mxd-projects-archive__item"
              >
                <div className="mxd-projects-archive__border"></div>

                <div className="mxd-projects-archive__inner">
                  <div className="container-fluid px-0">
                    <div className="row gx-0">
                      {/* LEFT CONTENT */}
                      <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                        <div className="mxd-projects-archive__title">
                          <div className="mxd-projects-archive__image">
                            <img src={blog.image} alt="Project Preview" />
                          </div>
                          <p>
                            <span>{blog.title}</span>
                          </p>
                        </div>
                      </div>

                      {/* TAGS */}
                      <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                        <div className="mxd-projects-archive__tagslist">
                          <ul>
                            {blog.tags.map((tag, i) => (
                              <li key={i}>
                                <p className="t-small">{tag}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* DATE */}
                      <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                        <div className="mxd-projects-list__date">
                          <p className="t-small">{blog.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mxd-projects-archive__border"></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
