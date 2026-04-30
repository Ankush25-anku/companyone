"use client";

export default function ParallaxDivider() {
  return (
    <div className="mxd-section padding-hero-01 padding-pre-manifest mobile-point-subtitle">
      <div className="mxd-container">
        <div className="mxd-divider">
          <div className="mxd-divider__image divider-image-1">
            {/* ✅ ADD IMAGE HERE */}
            <img
              className="parallax-img"
              src="/assets/img/erp-dashboard.jpg" // <-- your image path
              alt="ERP Dashboard"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
