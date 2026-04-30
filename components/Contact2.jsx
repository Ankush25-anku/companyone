"use client";
import React from "react";

const Contact2 = () => {
  return (
    <>
      {/* Section - Inner Page Form Start */}
      <div className="mxd-section mxd-section-inner-form padding-default">
        <div className="mxd-container grid-container">
          {/* Block - Inner Page Headline Start */}
          <div className="mxd-block">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                {/* Inner Headline Name */}
                <div className="col-12 col-xl-2 mxd-grid-item no-margin"></div>

                {/* Content */}
                <div className="col-12 col-xl-8">
                  <div className="mxd-block__content contact">
                    <div className="mxd-block__inner-form loading__fade">
                      <div className="form-container">
                        {/* Reply Message */}
                        <div className="form__reply centered text-center">
                          <i className="ph-fill ph-smiley-wink reply__icon"></i>
                          <p className="reply__title">Done!</p>
                          <span className="reply__text">
                            Thanks for your message. We'll get back as soon as
                            possible.
                          </span>
                        </div>

                        {/* Form */}
                        <form
                          className="form contact-form"
                          id="contact-form"
                          onSubmit={async (e) => {
                            e.preventDefault();

                            const formData = new FormData(e.target);
                            const data = Object.fromEntries(formData.entries());

                            const res = await fetch("/api/contact", {
                              method: "POST",
                              headers: {
                                "Content-Type": "application/json",
                              },
                              body: JSON.stringify(data),
                            });

                            const result = await res.json();

                            if (result.success) {
                              alert("✅ Message sent!");
                              e.target.reset();
                            } else {
                              alert("❌ Failed to send");
                            }
                          }}
                        >
                          <div className="container-fluid p-0">
                            <div className="row gx-0">
                              <div className="col-12 col-md-6 mxd-grid-item">
                                <input
                                  type="text"
                                  name="Name"
                                  placeholder="Your name*"
                                  required
                                />
                              </div>

                              <div className="col-12 col-md-6 mxd-grid-item">
                                <input
                                  type="text"
                                  name="Company"
                                  placeholder="Company name"
                                />
                              </div>

                              <div className="col-12 col-md-6 mxd-grid-item">
                                <input
                                  type="email"
                                  name="E-mail"
                                  placeholder="Email*"
                                  required
                                />
                              </div>

                              <div className="col-12 col-md-6 mxd-grid-item">
                                <input
                                  type="tel"
                                  name="Phone"
                                  placeholder="Phone"
                                />
                              </div>

                              <div className="col-12 mxd-grid-item">
                                <textarea
                                  name="Message"
                                  placeholder="A few words about your project*"
                                  required
                                />
                              </div>

                              <div className="col-12 mxd-grid-item">
                                <button
                                  className="btn btn-anim btn-default btn-large btn-opposite"
                                  type="submit"
                                >
                                  <span className="btn-caption">Submit</span>
                                  <i className="ph-bold ph-arrow-up-right"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section - Inner Page Form End */}
    </>
  );
};

export default Contact2;
