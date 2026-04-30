"use client";

import { useEffect } from "react";

export default function Menu() {
  useEffect(() => {
    if (window.jQuery && window.gsap && window.Flip) {
      const $ = window.jQuery;
      const gsap = window.gsap;
      const Flip = window.Flip;

      $(".mxd-nav__wrap").each(function () {
        let hamburgerEl = $(this).find(".mxd-nav__hamburger");
        let navLineEl = $(this).find(".hamburger__line");
        let menuContainEl = $(this).find(".mxd-menu__contain");
        let flipItemEl = $(this).find(".hamburger__base");
        let menuWrapEl = $(this).find(".mxd-menu__wrapper");
        let menuBaseEl = $(this).find(".mxd-menu__base");
        let menuItem = $(this).find(".main-menu__item");
        let videoEl = $(this).find(".menu-promo__video");
        let fadeInEl = $(this).find(".menu-fade-in");

        function flip(forwards) {
          let state = Flip.getState(flipItemEl);

          if (forwards) {
            flipItemEl.appendTo(menuContainEl);
          } else {
            flipItemEl.appendTo(hamburgerEl);
          }

          Flip.from(state, {
            duration: 0.8,
            ease: "power4.inOut",
          });
        }

        let tl = gsap.timeline({ paused: true });

        tl.set(menuWrapEl, { display: "flex" });

        tl.from(menuBaseEl, {
          opacity: 0,
          duration: 0.6,
          onStart: () => flip(true),
        });

        tl.to(navLineEl.eq(0), { y: 5 }, "<");
        tl.to(navLineEl.eq(1), { y: -5 }, "<");

        tl.to(navLineEl.eq(0), { rotate: 45 }, 0.2);
        tl.to(navLineEl.eq(1), { rotate: -45 }, 0.2);

        tl.from(menuItem, {
          opacity: 0,
          yPercent: 50,
          stagger: 0.1,
        });

        tl.from(videoEl, {
          opacity: 0,
        });

        tl.from(fadeInEl, {
          opacity: 0,
        });

        hamburgerEl.off("click").on("click", function (e) {
          e.preventDefault();

          if ($(this).hasClass("nav-open")) {
            tl.reverse();

            $(this).removeClass("nav-open");

            gsap.set(navLineEl.eq(0), {
              clearProps: "all",
            });

            gsap.set(navLineEl.eq(1), {
              clearProps: "all",
            });
          } else {
            tl.play();
            $(this).addClass("nav-open");
          }
        });

        menuBaseEl.on("click", function () {
          tl.reverse();

          hamburgerEl.removeClass("nav-open");

          gsap.set(navLineEl.eq(0), {
            clearProps: "all",
          });

          gsap.set(navLineEl.eq(1), {
            clearProps: "all",
          });
        });
      });
    }
  }, []);

  return (
    <nav className="mxd-nav__wrap" data-lenis-prevent="">
      {/* Hamburger */}
      <div className="mxd-nav__contain loading__fade">
        <a href="#0" className="mxd-nav__hamburger" aria-label="Menu">
          <div className="hamburger__base"></div>
          <div className="hamburger__line"></div>
          <div className="hamburger__line"></div>
        </a>
      </div>

      {/* Main Navigation */}
      <div className="mxd-menu__wrapper">
        <div className="mxd-menu__base"></div>

        <div className="mxd-menu__contain">
          <div className="mxd-menu__inner">
            {/* LEFT */}
            <div className="mxd-menu__left">
              <p className="mxd-menu__caption menu-fade-in">
                🦄 Innovative design
                <br />
                and cutting-edge development
              </p>

              <div className="main-menu">
                <nav className="main-menu__content">
                  <ul id="main-menu" className="main-menu__accordion">
                    <li className="main-menu__item">
                      <div className="main-menu__toggle">
                        <span className="main-menu__link btn btn-anim">
                          <span className="btn-caption">Home</span>
                        </span>
                      </div>

                      <ul className="submenu">
                        <li className="submenu__item">
                          <a href="index-main.html">Main Home</a>
                        </li>

                        <li className="submenu__item active">
                          <a href="index-creative-design-studio.html">
                            Creative Design Studio
                          </a>
                        </li>

                        <li className="submenu__item">
                          <a href="index-personal-portfolio.html">
                            Personal Portfolio
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="main-menu__item">
                      <div className="main-menu__toggle">
                        <span className="main-menu__link btn btn-anim">
                          <span className="btn-caption">Works</span>
                        </span>
                      </div>

                      <ul className="submenu">
                        <li className="submenu__item">
                          <a href="works-simple.html">Portfolio</a>
                        </li>
                      </ul>
                    </li>

                    <li className="main-menu__item">
                      <div className="main-menu__toggle">
                        <span className="main-menu__link btn btn-anim">
                          <span className="btn-caption">Pages</span>
                        </span>
                      </div>

                      <ul className="submenu">
                        <li className="submenu__item">
                          <a href="about-us.html">About Us</a>
                        </li>
                      </ul>
                    </li>

                    <li className="main-menu__item">
                      <a
                        className="main-menu__link btn btn-anim"
                        href="contact.html"
                      >
                        <span className="btn-caption">Contact</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* RIGHT */}
            <div className="mxd-menu__right">
              <div className="menu-promo">
                <div className="menu-promo__content">
                  <p className="menu-promo__caption menu-fade-in">
                    👋 Nice to see you!
                    <br />
                    I'm Alex Walker, digital designer and illustrator.
                  </p>

                  <div className="menu-promo__video">
                    <video
                      className="menu-video"
                      autoPlay
                      loop
                      muted
                      preload="auto"
                    >
                      <source
                        src="/assets/video/540x310_video.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="mxd-menu__data menu-fade-in">
              <p className="t-xsmall">
                Made with ❤️ by
                <a
                  className="no-effect"
                  href="https://1.envato.market/EKA9WD"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mix_Design
                </a>
              </p>

              <p className="t-xsmall">© 2025</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
