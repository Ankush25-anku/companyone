"use client";

import { useEffect } from "react";

export default function Marquee() {
  const items = [
    "Designer",
    "Developer",
    "Freelancer",
    "Digital Agency",
    "Creative Studio",
  ];

  useEffect(() => {
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 500);
  }, []);

  return (
    <div className="mxd-section padding-mtext-pre-grid">
      <div className="mxd-container fullwidth-container">
        <div className="mxd-block">
          <div className="marquee marquee-right--gsap muted-extra">
            <div className="marquee__toright">
              {[...items, ...items].map((text, index) => (
                <div
                  key={index}
                  className="marquee__item one-line item-regular text"
                >
                  <p className="marquee__text">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
