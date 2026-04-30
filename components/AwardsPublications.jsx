"use client";

export default function AwardsPublications() {
  const awards = [
    {
      title: "School ERP System Deployment",
      link: "#",
      tags: ["ERP", "School Management"],
      year: "2025",
      img: "/assets/img/erp-school1.jpg", // ✅ added
    },
    {
      title: "Business Website Development",
      link: "#",
      tags: ["Web Development", "Responsive Design"],
      year: "2025",
      img: "/assets/img/erp-school2.jpg", // ✅ added
    },
    {
      title: "Custom ERP Solution for Business",
      link: "#",
      tags: ["ERP", "Automation"],
      year: "2024",
      img: "/assets/img/erp-school3.jpg", // ✅ added
    },
    {
      title: "Web Application Development Project",
      link: "#",
      tags: ["Web App", "Software"],
      year: "2024",
      img: "/assets/img/erp-school4.jpg", // ✅ added
    },
  ];

  return (
    <div className="mxd-section overflow-hidden padding-default mobile-title">
      <div className="mxd-container grid-container">
        {/* Section Title */}
        <div className="mxd-block">
          <div className="mxd-section-title">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrtitle anim-uni-in-up">
                    <h2 className="reveal-type">
                      Our Work &
                      <br />
                      Achievements
                    </h2>
                  </div>
                </div>

                <div className="col-12 col-xl-3 mxd-grid-item no-margin"></div>

                <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrcontrols pre-title anim-uni-in-up">
                    <a
                      href="/about-us"
                      className="btn btn-anim btn-default btn-outline slide-right-up"
                    >
                      <span className="btn-caption">View More</span>
                      <i className="ph-bold ph-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* List */}
        <div className="mxd-block">
          <div className="mxd-awards-list hover-reveal">
            {awards.map((award, index) => (
              <a
                key={index}
                href={award.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mxd-awards-list__item hover-reveal__item"
              >
                <div className="mxd-awards-list__border anim-uni-in-up"></div>

                <div className="hover-reveal__content overflow-visible hover-reveal-260x260">
                  <img
                    className="hover-reveal__image"
                    src={award.img} // ✅ replaced here
                    alt="Project Preview"
                  />
                </div>

                <div className="mxd-awards-list__inner">
                  <div className="container-fluid px-0">
                    <div className="row gx-0">
                      <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                        <div className="mxd-awards-list__title anim-uni-in-up">
                          <div className="mxd-awards-list__icon">
                            <i className="ph ph-arrow-right"></i>
                          </div>

                          <p>{award.title}</p>
                        </div>
                      </div>

                      <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                        <div className="mxd-awards-list__tagslist">
                          <ul>
                            {award.tags.map((tag, i) => (
                              <li key={i} className="anim-uni-in-up">
                                <p className="t-small">{tag}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                        <div className="mxd-awards-list__date anim-uni-in-up">
                          <p className="t-small">{award.year}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mxd-awards-list__border anim-uni-in-up"></div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
