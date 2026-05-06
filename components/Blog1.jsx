"use client";

import React, { useEffect } from "react";

const Blog1 = () => {
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
        threshold: 0.4,
      },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Section - Blog Article Start */}
      <div className="mxd-section padding-pre-title">
        <div className="mxd-container grid-container">
          <div className="mxd-article-area loading-wrap">
            <div className="mxd-article-container mxd-grid-item no-margin">
              <article className="mxd-article">
                <div className="mxd-article__headline">
                  <div className="mxd-article__meta">
                    <div className="mxd-article__breadcrumbs loading__item">
                      <span>
                        <a href="/">Home</a>
                      </span>

                      <span>
                        <a href="/works">Solutions</a>
                      </span>

                      <span className="current-item">School ERP System</span>
                    </div>

                    <div className="mxd-article__data loading__item">
                      <span className="meta-date">
                        January 22, 2025
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M19.6,9.6h-3.9..." />
                        </svg>
                      </span>

                      <span className="meta-time">5 min. read</span>
                    </div>
                  </div>

                  <div className="mxd-article__title loading__item">
                    <h2 className="reveal-type">
                      How School ERP Systems improve institution management
                    </h2>
                  </div>

                  <div className="mxd-article__tags loading__item">
                    <span className="tag tag-default tag-outline tag-link-outline">
                      <a href="/works">ERP</a>
                    </span>

                    <span className="tag tag-default tag-outline tag-link-outline">
                      <a href="/works">School Management</a>
                    </span>

                    <span className="tag tag-default tag-outline tag-link-outline">
                      <a href="/works">Automation</a>
                    </span>
                  </div>
                </div>

                <div className="mxd-article__thumb loading__fade">
                  <img src="/assets/img/erp11.jpg" alt="School ERP System" />
                </div>

                <div className="mxd-article__content">
                  <div className="mxd-article__block">
                    <p className="t-large mxd-article__excerpt reveal-type">
                      Managing a school involves multiple operations — from
                      student admissions and attendance tracking to fee
                      management, transport monitoring, examinations,
                      communication and reporting. School ERP systems simplify
                      these workflows by centralizing operations into a single
                      smart digital platform that improves productivity,
                      automation and institutional efficiency.
                    </p>
                  </div>

                  <div className="mxd-article__block">
                    <p className="reveal-type">
                      Our ShikshaFlow School ERP System provides complete
                      management solutions for institutions with advanced
                      features including WhatsApp chatbot integration, student
                      performance tracking, marks management, attendance
                      monitoring, timetable management, exam scheduling and
                      parent communication systems.
                    </p>
                  </div>

                  <div className="mxd-article__block">
                    <p className="reveal-type">
                      By automating repetitive administrative tasks, schools can
                      reduce manual paperwork, improve communication between
                      teachers and parents, manage records efficiently and
                      enhance the overall educational experience through secure
                      cloud-based digital infrastructure.
                    </p>
                  </div>
                </div>
              </article>

              {/* AUTHOR */}
              <div className="mxd-article-author">
                <div className="mxd-article-author__data">
                  <a className="mxd-article-author__avatar" href="#0">
                    <img
                      src="/assets/img/RClogo3.png"
                      alt="RCERP Technologies"
                    />
                  </a>

                  <div className="mxd-article-author__info">
                    <h4 className="mxd-article-author__name">
                      <a href="#0">RCERP TECHNOLOGIES PVT LTD</a>

                      <small className="mxd-article-author__position">
                        ERP & Digital Solutions Company
                      </small>
                    </h4>
                  </div>
                </div>
              </div>

              {/* NAVIGATION */}
              <div className="mxd-article-navigation">
                <div className="row g-0">
                  <div className="col-6 mxd-article-navigation__navitem left">
                    <a
                      className="btn btn-line-small btn-muted slide-left"
                      href="/works"
                    >
                      <i className="ph ph-arrow-left"></i>

                      <span className="btn-caption">Prev</span>
                    </a>
                  </div>

                  <div className="col-6 mxd-article-navigation__navitem right">
                    <a
                      className="btn btn-line-small btn-muted slide-right"
                      href="/contact"
                    >
                      <span className="btn-caption">Next</span>

                      <i className="ph ph-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* COMMENTS */}
              <div className="mxd-article-comments">
                <h3>Client Feedback</h3>

                <div className="mxd-comment">
                  <div className="mxd-comment__container">
                    <div className="mxd-comment__avatar">
                      <img src="/assets/img/erp12.jpg" alt="Client Feedback" />
                    </div>

                    <div className="mxd-comment__content">
                      <p className="mxd-comment__name">
                        School Administration Team
                      </p>

                      <p className="t-small">
                        ShikshaFlow ERP helped us automate daily school
                        operations, improve parent communication and manage
                        attendance, exams and student records efficiently
                        through a single digital platform.
                      </p>
                    </div>
                  </div>
                </div>

                {/* FORM */}
                <form className="form">
                  <input type="text" placeholder="Your name*" required />

                  <textarea placeholder="Message*" required></textarea>

                  <button className="btn btn-anim btn-default btn-accent">
                    <span className="btn-caption">Post Comment</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section End */}
    </>
  );
};

export default Blog1;
