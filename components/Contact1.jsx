import React from "react";

const Contact1 = () => {
  return (
    <div className="mxd-section mxd-section-inner-headline padding-s-text-pre-form overflow-hidden">
      <div className="mxd-container grid-container">
        <div className="mxd-block loading-wrap">
          <div className="container-fluid px-0">
            <div className="row gx-0">
              <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                <div className="mxd-block__name name-inner-headline">
                  <p className="mxd-point-subtitle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M19.6,9.6c0,0-3,0-4,0c-0.4,0-1.8-0.2-1.8-0.2c-0.6-0.1-1.1-0.2-1.6-0.6c-0.5-0.3-0.9-0.8-1.2-1.2
                      c-0.3-0.4-0.4-0.9-0.5-1.4c0,0-0.1-1.1-0.2-1.5c-0.1-1.1,0-4.4,0-4.4C10.4,0.2,10.2,0,10,0S9.6,0.2,9.6,0.4c0,0,0.1,3.3,0,4.4
                      c0,0.4-0.2,1.5-0.2,1.5C9.4,6.7,9.2,7.2,9,7.6C8.7,8.1,8.2,8.5,7.8,8.9c-0.5,0.3-1,0.5-1.6,0.6c0,0-1.2,0.1-1.7,0.2
                      c-1,0.1-4.2,0-4.2,0C0.2,9.6,0,9.8,0,10c0,0.2,0.2,0.4,0.4,0.4c0,0,3.1-0.1,4.2,0c0.4,0,1.7,0.2,1.7,0.2c0.6,0.1,1.1,0.2,1.6,0.6
                      c0.4,0.3,0.8,0.7,1.1,1.1c0.3,0.5,0.5,1,0.6,1.6c0,0,0.1,1.3,0.2,1.7c0,1,0,4.1,0,4.1c0,0.2,0.2,0.4,0.4,0.4s0.4-0.2,0.4-0.4
                      c0,0,0-3.1,0-4.1c0-0.4,0.2-1.7,0.2-1.7c0.1-0.6,0.2-1.1,0.6-1.6c0.3-0.4,0.7-0.8,1.1-1.1c0.5-0.3,1-0.5,1.6-0.6
                      c0,0,1.3-0.1,1.8-0.2c1,0,4,0,4,0c0.2,0,0.4-0.2,0.4-0.4C20,9.8,19.8,9.6,19.6,9.6z"
                      />
                    </svg>
                    <span>Contact</span>
                  </p>
                </div>
              </div>

              <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                <div className="mxd-block__content">
                  <div className="mxd-block__inner-headline loading__item">
                    {/* ✅ UPDATED HEADING */}
                    <h1 className="inner-headline__title">
                      Let’s build smart
                      <br />
                      digital solutions together!
                    </h1>

                    {/* ✅ UPDATED EMAIL */}
                    <a
                      className="btn btn-line-headline slide-right-up anim-no-delay"
                      href="mailto:ravichandra808@gmail.com?subject=Project Inquiry"
                    >
                      <span
                        className="btn-caption"
                        style={{
                          wordBreak: "break-all",
                          display: "inline-block",
                          maxWidth: "100%",
                        }}
                      >
                        ravichandra808@gmail.com
                      </span>
                      <i className="ph-bold ph-arrow-up-right"></i>
                    </a>

                    {/* ✅ UPDATED DESCRIPTION */}
                    <p className="inner-headline__text t-large t-bright loading__item">
                      RCERP TECHNOLOGIES PVT LTD specializes in developing
                      powerful School ERP systems, modern websites, and custom
                      digital solutions tailored to your business needs. Whether
                      you're looking to streamline operations, build scalable
                      platforms, or create a strong online presence — we’re here
                      to help you grow with technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact1;
