"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [count, setCount] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);

          setTimeout(() => {
            setHide(true);
          }, 500);

          return 100;
        }

        return prev + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  if (hide) return null;

  return (
    <div id="loader" className="loader">
      <div className="loader__wrapper">
        <div className="loader__content">
          <div className="loader__count">
            <span className="count__text">{count}</span>
            <span className="count__percent">%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
