import "./globals.css";
import Script from "next/script";
import { FaWhatsapp } from "react-icons/fa";

import NavMenu from "../../components/Navmenu";
import Header from "../../components/Header";
import FooterSection from "../../components/FooterSection";

export const metadata = {
  title: "RCERP TECHNOLOGIES PVT LTD",
  description:
    "RCERP TECHNOLOGIES PVT LTD provides School ERP, websites, mobile apps and digital solutions.",

  icons: {
    icon: [
      { url: "/assets/img/RClogo3.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/img/RClogo3.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/assets/img/RClogo3.png",
    apple: "/assets/img/RClogo3.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />

        {/* CSS */}
        <link rel="stylesheet" href="/assets/css/loaders/loader.css" />
        <link rel="stylesheet" href="/assets/css/plugins.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
      </head>

      <body suppressHydrationWarning={true}>
        {/* ================= CORE ================= */}
        <NavMenu />
        <Header />

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/917892104196"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
        >
          <FaWhatsapp size={28} />
        </a>

        {/* ================= SCRIPTS ================= */}

        {/* ✅ ONLY jQuery should be beforeInteractive */}
        <Script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          strategy="beforeInteractive"
        />

        {/* ✅ All others AFTER interactive */}
        <Script src="/assets/js/libs.min.js" strategy="afterInteractive" />
        <Script
          src="/assets/countUp/countUp.umd.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/modernizr/modernizr.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/split-type/split-type.js"
          strategy="afterInteractive"
        />

        <Script
          src="https://cdn.jsdelivr.net/npm/lenis@1.0.29/dist/lenis.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://unpkg.com/imagesloaded@5/imagesloaded.pkgd.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/ukiyojs@4/dist/ukiyo.min.js"
          strategy="afterInteractive"
        />

        {/* GSAP */}
        <Script
          src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/ScrollTrigger.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/Flip.min.js"
          strategy="afterInteractive"
        />

        {/* ✅ MAIN JS LAST */}
        <Script src="/assets/js/app.js" strategy="lazyOnload" />

        {/* ================= CONTENT ================= */}
        {children}
        <FooterSection />

        {/* ================= FIXES ================= */}

        {/* ScrollTrigger fix */}
        <Script id="animation-fix" strategy="afterInteractive">
          {`
            window.addEventListener('load', function () {
              if (window.ScrollTrigger) {
                ScrollTrigger.refresh();
              }
            });
          `}
        </Script>

        {/* jQuery debug */}
        <Script id="jquery-check" strategy="afterInteractive">
          {`
            window.addEventListener('load', function () {
              if (!window.jQuery) {
                console.error("❌ jQuery not loaded");
              } else {
                console.log("✅ jQuery loaded");
              }
            });
          `}
        </Script>

        {/* Counter safe init */}
        <Script id="counter-init" strategy="afterInteractive">
          {`
            window.addEventListener('load', function () {
              if (window.CountUp) {
                const ids = [
                  "stats-counter-1",
                  "stats-counter-2",
                  "stats-counter-3",
                  "stats-counter-4"
                ];

                const values = [50, 80, 5, 70];
                const suffix = ["+", "%", "+", "+"];

                ids.forEach((id, index) => {
                  const el = document.getElementById(id);
                  if (!el) return;

                  const counter = new CountUp(id, values[index], {
                    suffix: suffix[index]
                  });

                  if (!counter.error) counter.start();
                });
              }
            });
          `}
        </Script>
      </body>
    </html>
  );
}
