export default function MarqueeSection() {
  return (
    <div className="mxd-section padding-mtext-pre-pinned">
      <div className="mxd-container fullwidth-container">
        {/* Block - Marquee Text One Line Start */}
        <div className="mxd-block">
          <div className="marquee marquee-right--gsap muted-extra">
            <div className="marquee__toright">
              {/* ITEM 1 */}
              <div className="marquee__item one-line item-regular text">
                <p className="marquee__text">Design</p>
                <div className="marquee__image">
                  <svg viewBox="0 0 80 80" fill="currentColor">
                    <path d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8..." />
                  </svg>
                </div>
              </div>

              {/* ITEM 2 */}
              <div className="marquee__item one-line item-regular text">
                <p className="marquee__text">Development</p>
                <div className="marquee__image">
                  <svg viewBox="0 0 80 80" fill="currentColor">
                    <path d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8..." />
                  </svg>
                </div>
              </div>

              {/* ITEM 3 */}
              <div className="marquee__item one-line item-regular text">
                <p className="marquee__text">Branding</p>
                <div className="marquee__image">
                  <svg viewBox="0 0 80 80" fill="currentColor">
                    <path d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8..." />
                  </svg>
                </div>
              </div>

              {/* ITEM 4 */}
              <div className="marquee__item one-line item-regular text">
                <p className="marquee__text">eCommerce</p>
                <div className="marquee__image">
                  <svg viewBox="0 0 80 80" fill="currentColor">
                    <path d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8..." />
                  </svg>
                </div>
              </div>

              {/* ITEM 5 */}
              <div className="marquee__item one-line item-regular text">
                <p className="marquee__text">Mobile Apps</p>
                <div className="marquee__image">
                  <svg viewBox="0 0 80 80" fill="currentColor">
                    <path d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8..." />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Block End */}
      </div>
    </div>
  );
}
