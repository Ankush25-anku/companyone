"use client";

export default function PartnersCards() {
  const partners = [
    "html5",
    "css",
    "javascript",
    "react",
    "nodedotjs",
    "mongodb",
    "nextdotjs",
    "whatsapp",
  ];

  return (
    <div className="mxd-section padding-pre-title">
      <div className="mxd-container grid-container">
        <div className="mxd-block">
          <div className="mxd-partners-cards">
            <div className="container-fluid p-0">
              <div className="row g-0">
                {partners.map((brand, index) => (
                  <div
                    key={index}
                    className="col-12 col-md-6 col-xl-3 mxd-partners-cards__item mxd-grid-item animate-card-4"
                  >
                    <a href="#0" className="mxd-partners-cards__inner">
                      <div className="mxd-partners-cards__logo">
                        {/* ✅ FIXED PATH */}
                        <img
                          src={`/assets/img/brands/${brand}.svg`}
                          alt={brand}
                        />
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
