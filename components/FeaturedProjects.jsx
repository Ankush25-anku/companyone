"use client";

export default function FeaturedProjects() {
  const projects = [
    {
      image: "/assets/img/erp11.jpg",
      preview: "preview-image-1",
      title: "School ERP System",
      desc: "complete management solution for institutions",
      tags: ["ERP", "School Management", "Automation"],
    },
    {
      image: "/assets/img/erp12.jpg",
      preview: "preview-image-2",
      title: "Business ERP Platform",
      desc: "streamlining operations with smart tools",
      tags: ["ERP", "Dashboard", "Analytics"],
    },
    {
      image: "/assets/img/erp13.jpg",
      preview: "preview-image-3",
      title: "Custom Website Development",
      desc: "modern responsive business websites",
      tags: ["Web Development", "UI/UX", "Responsive"],
    },
    {
      image: "/assets/img/erp14.jpg",
      preview: "preview-image-4",
      title: "Web Application System",
      desc: "scalable digital solutions for businesses",
      tags: ["Web App", "SaaS", "Cloud"],
    },
    {
      image: "/assets/img/erp15.jpg",
      preview: "preview-image-5",
      title: "Digital Solutions & Automation",
      desc: "improving workflow and productivity",
      tags: ["Automation", "Integration", "Solutions"],
    },
  ];

  return (
    <div id="services" className="mxd-section padding-pre-stack">
      <div className="mxd-container grid-container">
        <div className="mxd-block">
          <div className="mxd-pinned-projects">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                {/* Left Static Section */}
                <div className="col-12 col-xl-5 mxd-pinned-projects__static">
                  <div className="mxd-pinned-projects__static-inner no-margin">
                    <div className="mxd-section-title no-margin-desktop">
                      <div className="container-fluid p-0">
                        <div className="row g-0">
                          <div className="col-12 mxd-grid-item no-margin">
                            <div className="mxd-section-title__title anim-uni-in-up">
                              <h2 className="reveal-type">
                                Our
                                <br />
                                Solutions
                              </h2>
                            </div>
                          </div>

                          <div className="col-12 mxd-grid-item no-margin">
                            <div className="mxd-section-title__descr anim-uni-in-up">
                              <p>
                                Explore our ERP systems, websites,
                                <br />
                                and digital solutions built for growth
                              </p>
                            </div>
                          </div>

                          <div className="col-12 mxd-grid-item no-margin">
                            <div className="mxd-section-title__controls anim-uni-in-up">
                              <a
                                href="/works-simple"
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
                </div>

                {/* Right Projects */}
                <div className="col-12 col-xl-7 mxd-pinned-projects__scroll">
                  <div className="mxd-pinned-projects__scroll-inner mxd-grid-item no-margin">
                    {projects.map((project, index) => (
                      <div className="mxd-project-item" key={index}>
                        <a
                          href="/project-details"
                          className="mxd-project-item__media anim-uni-in-up"
                        >
                          <div className="mxd-project-item__preview">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="parallax-img-small"
                            />
                          </div>
                          <div className="mxd-project-item__tags">
                            {project.tags.map((tag, i) => (
                              <span
                                key={i}
                                className="tag tag-default tag-permanent"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </a>

                        <div className="mxd-project-item__promo">
                          <div className="mxd-project-item__name">
                            <a
                              href="/project-details"
                              className="anim-uni-in-up"
                            >
                              <span>{project.title}</span> {project.desc}
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
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
