"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const Preloader = () => {
  const pathname = usePathname();

  const [loading, setLoading] = useState(false);

  const timerRef = useRef(null);

  const showLoader = (source = "unknown") => {
    console.log("LOADER STARTED FROM:", source);

    // reset first
    setLoading(false);

    // force repaint
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setLoading(true);

        clearTimeout(timerRef.current);

        timerRef.current = setTimeout(() => {
          console.log("LOADER FINISHED");
          setLoading(false);
        }, 1500);
      });
    });
  };

  useEffect(() => {
    console.log("PATHNAME CHANGED:", pathname);

    showLoader("pathname-change");

    const handlePopState = () => {
      console.log("BACK/FORWARD BUTTON CLICKED");
      showLoader("popstate");
    };

    const handlePageShow = (event) => {
      console.log("PAGESHOW EVENT:", event.persisted);

      showLoader("pageshow");
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("pageshow", handlePageShow);

      clearTimeout(timerRef.current);
    };
  }, [pathname]);

  console.log("LOADING STATE:", loading);

  if (!loading) return null;

  return (
    <div id="loader" className="loader">
      <div className="loader__wrapper">
        <div className="loader__content">
          <div className="loader__count">
            <span className="count__text">0</span>
            <span className="count__percent">%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
