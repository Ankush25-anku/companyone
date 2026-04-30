"use client";

export default function Header() {
  return (
    <header id="header" className="mxd-header">
      {/* header logo */}
      <div className="mxd-header__logo loading__fade">
        <a href="/" className="mxd-logo">
          {/* logo icon */}
          <svg
            className="mxd-logo__image"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 56 56"
            style={{ enableBackground: "new 0 0 56 56" }}
            xmlSpace="preserve"
          >
            <style>
              {`
                .mxd-logo__bg{fill:var(--base-opp);}
                .mxd-logo__cat{clip-path:url(#mxd-logo__id);fill:var(--base);}
              `}
            </style>

            <path
              className="mxd-logo__bg"
              d="M56,28c0,11.1-2.9,28-28,28S0,39.1,0,28S2.9,0,28,0S56,16.9,56,28z"
            />

            <g>
              <defs>
                <path
                  id="mxd-logo__clippath"
                  d="M28,0C2.9,0,0,16.9,0,28s2.9,28,28,28s28-16.9,28-28S53.1,0,28,0z"
                />
              </defs>

              <clipPath id="mxd-logo__id">
                <use
                  href="#mxd-logo__clippath"
                  style={{ overflow: "visible" }}
                />
              </clipPath>

              <path
                className="mxd-logo__cat"
                d="M33.6,34.5h0.9
                c0.5,0,0.9,0.4,0.9,0.9v3.7c0,0.5-0.4,0.9-0.9,0.9h-0.9c-0.5,0-0.9-0.4-0.9-0.9v-3.7C32.7,34.9,33.1,34.5,33.6,34.5z 
                M20.5,37.3v1.9c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-3.7c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9,0.4-0.9,0.9V37.3z
                M39.2,21.5v0.9c0,0.5-0.4,0.9-0.9,0.9h-0.9c-0.5,0-0.9-0.4-0.9-0.9v-0.9c0-0.5,0.4-0.9,0.9-0.9h0.9C38.8,20.5,39.2,21,39.2,21.5z
                M28,26.1h-4.7c-0.5,0-0.9,0.4-0.9,0.9V28c0,0.5,0.4,0.9,0.9,0.9h9.3c0.5,0,0.9-0.4,0.9-0.9v-0.9c0-0.5-0.4-0.9-0.9-0.9H28z
                M14,26.1v4.7c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-6.5c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9,0.4-0.9,0.9V26.1z
                M42,26.1v-1.9c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9,0.4-0.9,0.9v6.5c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9V26.1z"
              />
            </g>
          </svg>

          {/* logo text */}
          <span className="mxd-logo__text">
            rayo
            <br />
            template
          </span>
        </a>
      </div>

      {/* header controls */}
      <div className="mxd-header__controls loading__fade">
        <button
          id="color-switcher"
          className="mxd-color-switcher"
          type="button"
          role="switch"
          aria-label="light/dark mode"
          aria-checked="true"
        ></button>

        <a
          className="btn btn-anim btn-default btn-mobile-icon btn-outline slide-right-up"
          href="/contact"
          aria-label="Say Hello"
        >
          <span className="btn-caption">Say Hello</span>
          <i className="ph-bold ph-arrow-up-right"></i>
        </a>
      </div>
    </header>
  );
}
