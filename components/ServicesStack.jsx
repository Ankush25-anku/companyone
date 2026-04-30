"use client";

export default function ServicesStack() {
  const services = [
    {
      title: "School ERP Solutions",
      bg: "bg-base-opp",
      btn: "btn-additional",
      opposite: true,
      tags: [
        "Student Management",
        "Attendance",
        "Fees",
        "Reports",
        "Automation",
      ],
      desc: "We develop powerful ERP systems for schools and educational institutions to manage students, staff, attendance, fees, and daily operations efficiently.",
      imgS: "/assets/img/service1.webp",
      imgM: "/assets/img/service1.webp",
    },
    {
      title: "Website Development",
      bg: "bg-accent",
      btn: "btn-base",
      opposite: true,
      tags: ["Responsive Design", "Frontend", "Backend", "SEO", "Performance"],
      desc: "We build modern, responsive websites tailored for businesses, ensuring high performance, clean design, and a strong online presence.",
      imgS: "/assets/img/service3.webp",
      imgM: "/assets/img/service3.webp",
    },
    {
      title: "Custom Software Solutions",
      bg: "bg-base-tint",
      btn: "btn-opposite",
      opposite: false,
      tags: [
        "Web Apps",
        "Automation",
        "Dashboards",
        "Cloud",
        "Scalable Systems",
      ],
      desc: "We create custom software and web applications designed to streamline business operations and improve productivity with scalable solutions.",
      imgS: "/assets/img/service4.webp",
      imgM: "/assets/img/service4.webp",
    },
    {
      title: "Digital Solutions & Support",
      bg: "bg-base-opp",
      btn: "btn-additional",
      opposite: true,
      tags: [
        "Integration",
        "Maintenance",
        "Optimization",
        "Support",
        "Consulting",
      ],
      desc: "We provide complete digital solutions including system integration, maintenance, and ongoing support to help businesses grow and operate smoothly.",
      imgS: "/assets/img/service2.webp",
      imgM: "/assets/img/service2.webp",
    },
  ];

  return (
    <div id="works" className="mxd-section padding-stacked-section">
      <div className="mxd-container grid-container">
        <div className="mxd-block mxd-grid-item no-margin">
          <div className="content__block">
            <div className="stack-wrapper in-content-stack">
              <div className="stack-offset"></div>

              <div className="services-stack">
                {services.map((service, index) => (
                  <div className="stack-item" key={index}>
                    <div
                      className={`mxd-services-stack__inner justify-between ${service.bg}`}
                    >
                      <div className="mxd-services-stack__controls">
                        <a
                          href="/services"
                          className={`btn btn-round btn-round-large ${service.btn} slide-right-up anim-no-delay`}
                          aria-label="Services Page Link"
                        >
                          <i className="ph ph-arrow-up-right"></i>
                        </a>
                      </div>

                      <div className="mxd-services-stack__title width-60">
                        <h3 className={service.opposite ? "opposite" : ""}>
                          {service.title}
                        </h3>
                      </div>

                      <div className="mxd-services-stack__info width-60">
                        <div className="mxd-services-cards__tags">
                          {service.tags.map((tag, i) => (
                            <span
                              key={i}
                              className={`tag tag-default ${
                                service.opposite
                                  ? "tag-outline-opposite"
                                  : "tag-outline"
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <p
                          className={`t-small-mobile ${
                            service.opposite ? "t-opposite" : ""
                          }`}
                        >
                          {service.desc}
                        </p>
                      </div>

                      <div className="services-stack__image">
                        <img
                          className="service-img service-img-s"
                          src={service.imgS}
                          alt="Service"
                        />

                        <img
                          className="service-img service-img-m"
                          src={service.imgM}
                          alt="Service"
                        />
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
  );
}
