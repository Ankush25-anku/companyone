"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function GsapTest() {
  useEffect(() => {
    gsap.to(".test-box", {
      y: 200,
      duration: 2,
    });
  }, []);

  return (
    <div
      className="test-box"
      style={{
        width: "100px",
        height: "100px",
        background: "black",
      }}
    ></div>
  );
}
