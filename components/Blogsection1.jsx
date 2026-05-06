"use client";

import Link from "next/link";

export default function BlogSection1() {
  const simplePosts = [
    {
      title:
        "How digital solutions improve operational efficiency in businesses",
      tags: ["Automation", "Business Efficiency"],
      date: "January 22, 2025",
      image: "assets/img/img011.jpg",
    },
    {
      title: "Leveraging technology to streamline business processes",
      tags: ["Digital Transformation", "Workflow", "Technology"],
      date: "January 09, 2025",
      image: "assets/img/img012.jpg",
    },
    {
      title: "Boosting productivity through smart digital tools and software",
      tags: ["Productivity", "Software", "Innovation"],
      date: "January 04, 2025",
      image: "assets/img/img013.jpg",
    },
  ];

  const categories = [
    "Digital Solutions",
    "Business Efficiency",
    "Automation",
    "Technology",
    "Productivity",
    "Innovation",
  ];

  return (
    <div className="mxd-section padding-default">
      <div className="mxd-container grid-container">
        <div className="mxd-posts-area loading__fade">
          {/* LEFT SIDE */}
          <div className="mxd-posts-container mxd-grid-item">
            {/* FEATURED POST */}
            <article className="mxd-post post-featured radius-m">
              <Link href="/blog-article" className="post-featured__thumb">
                <img src="assets/img/img145.jpg" alt="Featured" />
              </Link>

              <div className="post-featured__categories">
                {["Digital Solutions", "Automation", "Business"].map(
                  (tag, i) => (
                    <span
                      key={i}
                      className="tag tag-default tag-outline-permanent tag-link-outline-premanent"
                    >
                      <Link href="#">{tag}</Link>
                    </span>
                  ),
                )}
              </div>

              <div className="post-featured__content">
                <div className="post-featured__meta">
                  <span className="meta-date">January 22, 2025</span>
                </div>

                <h2 className="post-featured__title">
                  <Link href="/blog-article">
                    Why digital solutions matter for business efficiency
                  </Link>
                </h2>

                <div className="post-featured__excerpt">
                  <p>
                    Digital solutions help businesses automate tasks, improve
                    workflow efficiency, reduce operational costs, and enhance
                    decision-making through data-driven insights.
                  </p>
                </div>
              </div>
            </article>

            {/* SIMPLE POSTS */}
            {simplePosts.map((post, index) => (
              <article key={index} className="mxd-post post-simple">
                <Link
                  href="/blog-article"
                  className="post-simple__thumb radius-m"
                >
                  <img src={post.image} alt="Post" />
                </Link>

                <div className="post-simple__content">
                  <div className="post-simple__descr">
                    <div className="post-simple__meta">
                      {post.tags.map((tag, i) => (
                        <span key={i} className="meta-tag">
                          <Link href="#">{tag}</Link>
                        </span>
                      ))}
                      <span className="meta-date">{post.date}</span>
                    </div>

                    <div className="post-simple__title">
                      <h3>
                        <Link href="/blog-article">{post.title}</Link>
                      </h3>
                    </div>
                  </div>

                  <div className="post-simple__btn">
                    <Link
                      href="/blog-article"
                      className="btn btn-anim btn-default btn-outline slide-right-up"
                    >
                      <span className="btn-caption">Read More</span>
                      <i className="ph ph-arrow-up-right"></i>
                    </Link>
                  </div>
                </div>
              </article>
            ))}

            {/* PAGINATION */}
            {/* <div className="mxd-blog-pagination">
              <nav className="mxd-blog-pagination__items">
                <Link href="#" className="mxd-blog-pagination__item btn">
                  Prev
                </Link>
                {[1, 2, 3].map((num) => (
                  <Link
                    key={num}
                    href="#"
                    className="mxd-blog-pagination__item btn"
                  >
                    {num}
                  </Link>
                ))}
                <Link href="#" className="mxd-blog-pagination__item btn">
                  Next
                </Link>
              </nav>
            </div> */}
          </div>

          {/* SIDEBAR */}
          <div className="mxd-sidebar mxd-grid-item">
            {/* SEARCH */}
            <div className="mxd-sidebar__widget bg-base-tint radius-m">
              <input type="search" placeholder="Search" />
            </div>

            {/* CATEGORIES */}
            <div className="mxd-sidebar__widget bg-base-tint radius-m">
              <p>Categories</p>
              <ul>
                {categories.map((cat, i) => (
                  <li key={i}>
                    <Link href="#">{cat}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* SOCIAL */}
          </div>
        </div>
      </div>
    </div>
  );
}
