"use client";

export default function TestimonialsSlider() {
  const testimonials = [
    {
      name: "Ravi Kumar",
      role: "Administrator",
      company: "ABC School",
      text: "RCERP TECHNOLOGIES delivered a powerful school ERP system that simplified our daily operations like attendance, fees, and reporting. It has saved us a lot of time and effort.",
    },
    {
      name: "Sneha Reddy",
      role: "Business Owner",
      company: "SR Enterprises",
      text: "Their team developed a modern and responsive website for our business. The performance and design are excellent, and it helped us improve our online presence.",
    },
    {
      name: "Arjun Sharma",
      role: "Manager",
      company: "Tech Solutions",
      text: "We got a custom ERP solution built by RCERP, and it perfectly fits our business needs. The system is easy to use and highly efficient.",
    },
    {
      name: "Priya Nair",
      role: "Director",
      company: "Global Academy",
      text: "The school ERP system developed by RCERP has transformed how we manage our institution. Everything is now organized, digital, and accessible.",
    },
  ];

  return (
    <div className="mxd-section padding-grid-pre-mtext">
      <div className="mxd-container no-padding-container">
        <div className="mxd-block">
          <div className="container-fluid px-0">
            <div className="row gx-0">
              {/* Left Title */}
              <div className="col-12 col-xl-5">
                <div className="mxd-container grid-container">
                  <div className="mxd-block">
                    <div className="mxd-section-title no-margin-desktop">
                      <div className="container-fluid p-0">
                        <div className="row g-0">
                          <div className="col-12 mxd-grid-item no-margin">
                            <div className="mxd-section-title__title anim-uni-in-up">
                              <h2 className="reveal-type">
                                What our clients say
                              </h2>
                            </div>
                          </div>

                          <div className="col-12 mxd-grid-item no-margin">
                            <div className="mxd-section-title__descr">
                              <p className="anim-uni-in-up">
                                We deliver reliable ERP systems, websites, and
                                digital solutions that help businesses and
                                institutions grow efficiently.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Slider */}
              <div className="col-12 col-xl-7">
                <div className="testimonials-slider overflow-hidden anim-uni-in-up">
                  <div className="swiper-testimonials">
                    <div className="swiper-wrapper">
                      {testimonials.map((item, index) => (
                        <div className="swiper-slide" key={index}>
                          <div className="mxd-testimonials-card bg-base-tint radius-m">
                            <div className="mxd-testimonials-card__content">
                              <div className="mxd-testimonials-card__media">
                                <div className="mxd-testimonials-card__photo">
                                  <img
                                    src="https://dummyimage.com/300x300/5d5d5d/737373"
                                    alt="Author"
                                  />
                                </div>

                                <div className="mxd-testimonials-card__company"></div>
                              </div>

                              <div className="mxd-testimonials-card__text">
                                <p>{item.text}</p>

                                <a
                                  href="#0"
                                  className="btn btn-anim btn-default btn-small btn-outline"
                                >
                                  <span className="btn-caption">
                                    View Project
                                  </span>
                                  <i className="ph ph-arrow-up-right"></i>
                                </a>
                              </div>
                            </div>

                            <div className="mxd-testimonials-card__author">
                              <p className="mxd-testimonials-card__name">
                                {item.name}
                              </p>

                              <p className="mxd-testimonials-card__position t-small">
                                {item.role} at <a href="#">{item.company}</a>
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Arrows */}
                    <div className="swiper-button-prev mxd-slider-btn">
                      <a
                        href="#0"
                        className="btn btn-round btn-round-small btn-outline"
                      >
                        <i className="ph ph-arrow-left"></i>
                      </a>
                    </div>

                    <div className="swiper-button-next mxd-slider-btn">
                      <a
                        href="#0"
                        className="btn btn-round btn-round-small btn-outline"
                      >
                        <i className="ph ph-arrow-right"></i>
                      </a>
                    </div>
                  </div>

                  <div className="testimonials-slider__shadow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
