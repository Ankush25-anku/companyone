"use client";

import { useEffect } from "react";
import gsap from "gsap";
import Flip from "gsap/Flip";

export default function NavMenu() {
  useEffect(() => {
    const initMenu = () => {
      const $ = window.$;
      const gsap = window.gsap;

      if (!$ || !gsap) {
        setTimeout(initMenu, 100);
        return;
      }

      gsap.registerPlugin(window.Flip);

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
          let state = window.Flip.getState(flipItemEl);

          if (forwards) {
            flipItemEl.appendTo(menuContainEl);
          } else {
            flipItemEl.appendTo(hamburgerEl);
          }

          window.Flip.from(state, {
            duration: 0.8,
            ease: "power4.inOut",
          });
        }

        let tl = gsap.timeline({ paused: true });

        tl.from(menuBaseEl, {
          opacity: 0,
          duration: 0.6,
          onStart: () => flip(true),
        });

        tl.to(navLineEl.eq(0), {
          top: 27,
          rotate: 45,
          duration: 0.4,
        }).to(
          navLineEl.eq(1),
          {
            top: 27,
            rotate: -45,
            duration: 0.4,
          },
          "<",
        );

        tl.from(menuItem, {
          opacity: 0,
          yPercent: 50,
          stagger: 0.1,
        });

        tl.from(videoEl, {
          opacity: 0,
          yPercent: 20,
        });

        tl.from(fadeInEl, {
          opacity: 0,
        });

        function openMenu(open) {
          console.log("openMenu called:", open);

          if (open) {
            menuWrapEl.css("display", "flex");
            tl.play();
            hamburgerEl.addClass("nav-open");
          } else {
            hamburgerEl.removeClass("nav-open");

            tl.eventCallback("onReverseComplete", () => {
              console.log("Animation finished, hiding menu");
              menuWrapEl.css("display", "none");
            });

            tl.reverse();
          }
        }

        hamburgerEl.off("click").on("click", function (e) {
          e.preventDefault();
          e.stopPropagation();

          console.log("HAMBURGER CLICK");

          if ($(this).hasClass("nav-open")) {
            openMenu(false);
          } else {
            openMenu(true);
          }
        });

        $(document)
          .off("click.menuClose")
          .on("click.menuClose", function (e) {
            const isOpen = hamburgerEl.hasClass("nav-open");
            if (!isOpen) return;

            const isInsideMenu = $(e.target).closest(
              ".mxd-menu__contain",
            ).length;

            const isHamburger = $(e.target).closest(
              ".mxd-nav__hamburger",
            ).length;

            if (!isInsideMenu && !isHamburger) {
              console.log("CLOSING MENU 🔴");
              openMenu(false);
            }
          });
      });
    };

    initMenu();
  }, []);

  return (
    <nav className="mxd-nav__wrap" data-lenis-prevent="true">
      {/* Hamburger Start */}
      <div className="mxd-nav__contain loading__fade">
        <a href="#0" className="mxd-nav__hamburger" aria-label="Menu">
          <div className="hamburger__base"></div>
          <div className="hamburger__line"></div>
          <div className="hamburger__line"></div>
        </a>
      </div>
      {/* Hamburger End */}

      {/* Main Navigation Start */}
      <div className="mxd-menu__wrapper">
        <div className="mxd-menu__base"></div>

        <div className="mxd-menu__contain">
          <div className="mxd-menu__inner">
            {/* Left Side */}
            <div className="mxd-menu__left">
              <p className="mxd-menu__caption menu-fade-in">
                🚀 RCERP TECHNOLOGIES PVT LTD
                <br />
                Smart digital solutions for schools, startups and enterprises
              </p>

              <div className="main-menu">
                <nav className="main-menu__content">
                  <ul id="main-menu" className="main-menu__accordion">
                    {/* Home */}
                    <li className="main-menu__item">
                      <a className="main-menu__link btn btn-anim" href="/">
                        <span className="btn-caption">Home</span>
                      </a>
                    </li>

                    {/* Works */}
                    <li className="main-menu__item">
                      <a className="main-menu__link btn btn-anim" href="/works">
                        <span className="btn-caption">Works</span>
                      </a>
                    </li>

                    {/* Services */}
                    <li className="main-menu__item">
                      <a
                        className="main-menu__link btn btn-anim"
                        href="/services"
                      >
                        <span className="btn-caption">Services</span>
                      </a>
                    </li>

                    {/* About */}
                    <li className="main-menu__item">
                      <a className="main-menu__link btn btn-anim" href="/about">
                        <span className="btn-caption">About</span>
                      </a>
                    </li>

                    {/* Contact */}
                    <li className="main-menu__item">
                      <a
                        className="main-menu__link btn btn-anim"
                        href="/contact"
                      >
                        <span className="btn-caption">Contact</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* Right Side */}
            <div className="mxd-menu__right">
              <div className="menu-promo">
                <div className="menu-promo__content">
                  <p className="menu-promo__caption menu-fade-in">
                    💡 Delivering School ERP Systems, modern websites, custom
                    web applications, mobile apps, UI/UX design and complete
                    digital transformation solutions.
                  </p>

                  {/* 
                  <div className="menu-promo__video">
                    <video
                      className="menu-video"
                      id="inner-video"
                      preload="auto"
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster="/assets/images/video-poster.jpg"
                    >
                      <source
                        src="/assets/video/540x310_video.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                  */}
                </div>
              </div>
            </div>

            {/* Bottom Data */}
            <div className="mxd-menu__data menu-fade-in">
              <p className="t-xsmall">
                Crafted with
                <i className="ph-fill ph-heart t-additional"></i>
                by RCERP TECHNOLOGIES PVT LTD
              </p>

              <p className="t-xsmall">
                <i className="ph ph-copyright"></i>
                2026 RCERP TECHNOLOGIES PVT LTD
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation End */}
    </nav>
  );
}
