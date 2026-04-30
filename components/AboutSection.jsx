"use client";

import { useEffect } from "react";

export default function AboutSection() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-type");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("anim-active");
          }
        });
      },
      {
        threshold: 0.4, // 🔥 KEY → controls speed feel
      },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div id="about" className="mxd-section padding-pre-grid">
      <div className="mxd-container grid-container">
        <div className="mxd-block">
          <div className="container-fluid px-0">
            <div className="row gx-0">
              <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                <div className="mxd-block__name name-manifest">
                  <p className="mxd-point-subtitle anim-uni-in-up">
                    <span>About RCERP</span>
                  </p>
                </div>
              </div>

              <div className="col-12 col-xl-7 mxd-grid-item no-margin">
                <div className="mxd-block__content">
                  <div className="mxd-block__manifest">
                    <p className="mxd-manifest reveal-type">
                      RCERP TECHNOLOGIES PVT LTD is a technology-driven company
                      focused on building smart ERP solutions, especially for
                      schools and educational institutions. We also develop
                      modern websites and custom digital solutions that help
                      businesses streamline operations and grow faster.
                    </p>

                    <div className="mxd-manifest__controls">
                      <a
                        className="btn btn-anim btn-default btn-outline slide-right-up"
                        href="/contact"
                      >
                        <span className="btn-caption">Contact Us</span>
                      </a>
                    </div>
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
