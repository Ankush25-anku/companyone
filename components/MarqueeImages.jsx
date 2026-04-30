"use client";

export default function MarqueeImages() {
  const topItems = [
    "/assets/img/marquee1.webp",
    "Inspiring\nideas",
    "/assets/img/marquee2.webp",
    "/assets/img/marquee3.webp",
    "Creative\nminds",
    "/assets/img/marquee4.webp",
  ];

  const bottomItems = [
    "Inspiring\nideas",
    "/assets/img/marquee5.webp",
    "/assets/img/marquee6.webp",
    "Creative\nminds",
    "/assets/img/marquee7.webp",
    "/assets/img/marquee8.webp",
  ];

  const renderItem = (item, index) => {
    // ✅ IMAGE CASE
    if (typeof item === "string" && item.startsWith("/assets")) {
      return (
        <div className="marquee__item" key={index}>
          <a className="marquee__link" href="/project-details">
            <img src={item} alt="Image" />
          </a>
        </div>
      );
    }

    // ✅ TEXT CASE
    const [line1, line2] = item.split("\n");

    return (
      <div className="marquee__item has-caption padding-4" key={index}>
        <p>
          {line1}
          <br />
          {line2}
        </p>
      </div>
    );
  };

  return (
    <div className="mxd-section padding-pre-title">
      <div className="mxd-container fullwidth-container">
        <div className="mxd-block">
          <div className="marquee marquee--gsap">
            {/* Top line */}
            <div className="marquee__top">{topItems.map(renderItem)}</div>

            {/* Bottom line */}
            <div className="marquee__bottom">{bottomItems.map(renderItem)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
