"use client";

export default function ApproachPhilosophy() {
  const items = [
    {
      title: "Quality-Driven Development",
      desc: "We focus on delivering reliable and high-quality ERP systems and websites, ensuring smooth performance, security, and scalability for every business.",
      img: "/assets/img/quality1.png", // ✅ added
    },
    {
      title: "Innovative Solutions",
      desc: "We build modern ERP and digital solutions using the latest technologies to simplify processes and improve efficiency for schools and businesses.",
      img: "/assets/img/quality2.png", // ✅ added
    },
    {
      title: "Technical Expertise",
      desc: "Our team specializes in developing ERP systems, custom software, and responsive websites with a strong focus on usability and performance.",
      img: "/assets/img/quality3.png", // ✅ added
    },
    {
      title: "End-to-End Services",
      desc: "From requirement analysis to deployment and support, we provide complete solutions including ERP development, website creation, and system integration.",
      img: "/assets/img/quality4.png", // ✅ added
    },
    {
      title: "Client-Centric Approach",
      desc: "We prioritize client needs and deliver solutions that help improve operations, save time, and support long-term business growth.",
      img: "/assets/img/quality5.png", // ✅ added
    },
  ];

  return (
    <div className="mxd-section padding-pre-grid mobile-grid-s">
      <div className="mxd-container grid-container">
        {/* Title Block */}
        <div className="mxd-block">
          <div className="mxd-section-title">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrtitle anim-uni-in-up">
                    <h2 className="reveal-type">Our Approach & Philosophy</h2>
                  </div>
                </div>

                <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrdescr">
                    <p className="anim-uni-in-up">ERP Solutions</p>
                    <p className="anim-uni-in-up">Web Development</p>
                    <p className="anim-uni-in-up">Digital Growth</p>
                  </div>
                </div>

                <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrcontrols anim-uni-in-up">
                    <a
                      href="/contact"
                      className="btn btn-anim btn-default btn-outline slide-right-up"
                    >
                      <span className="btn-caption">Contact Us</span>
                      <i className="ph-bold ph-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* List Block */}
        <div className="mxd-block">
          <div className="mxd-approach-list">
            {items.map((item, index) => (
              <div className="mxd-approach-list__item" key={index}>
                <div className="mxd-approach-list__border anim-uni-in-up"></div>

                <div className="mxd-approach-list__inner">
                  <div className="container-fluid px-0">
                    <div className="row gx-0">
                      <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__image anim-uni-in-up">
                          <img
                            src={item.img} // ✅ replaced here
                            alt="Icon"
                          />
                        </div>
                      </div>

                      <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__title anim-uni-in-up">
                          <p>{item.title}</p>
                        </div>
                      </div>

                      <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__descr anim-uni-in-up">
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mxd-approach-list__border anim-uni-in-up"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
