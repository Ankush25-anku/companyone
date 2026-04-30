"use client";

export default function PartnersMarquee() {
  const items = Array(4).fill("Our Partners");

  return (
    <div className="mxd-section padding-mtext-pre-grid">
      <div className="mxd-container fullwidth-container">
        <div className="mxd-block">
          <div className="marquee marquee-right--gsap muted-extra">
            <div className="marquee__toright">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="marquee__item one-line item-regular text"
                >
                  <p className="marquee__text">{item}</p>

                  <div className="marquee__image">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 80 80"
                      fill="currentColor"
                    >
                      <path d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8..." />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
