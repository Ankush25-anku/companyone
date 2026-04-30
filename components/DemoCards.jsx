export default function DemoCards() {
  const icons = [
    {
      icon: "ph-cards-three",
      label: "Stack cards",
    },
    {
      icon: "ph-squares-four",
      label: "Grids",
    },
    {
      icon: "ph-list-star",
      label: "Archive list",
    },
    {
      icon: "ph-chat-circle-dots",
      label: "Testimonials",
    },
    {
      icon: "ph-cherries",
      label: "Project",
    },
  ];

  return (
    <div className="mxd-section">
      <div className="mxd-container">
        <div className="mxd-block">
          <div className="mxd-demo-cards">
            {/* BLOG CARD */}
            <div className="mxd-demo-cards__item card-item-left animate-card-2">
              <div className="mxd-demo-cards__content">
                <div className="mxd-demo-cards__descr">
                  <h2 className="mxd-demo-cards__title h2-small">
                    <a
                      href="blog-standard.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Blog Pages
                    </a>
                  </h2>

                  <div className="mxd-demo-cards__tags">
                    <span className="tag tag-default tag-outline">Ideas</span>

                    <span className="tag tag-default tag-outline">
                      Thoughts
                    </span>

                    <span className="tag tag-default tag-outline">
                      Inspiration
                    </span>
                  </div>

                  <p>
                    A blog that looks good, reads better, and brings your
                    stories to life beautifully.
                  </p>
                </div>
              </div>

              <div className="mxd-demo-cards__image card-image-fullwidth">
                <img src="/assets/img/demo/02_card-img.webp" alt="Demo Card" />
              </div>
            </div>

            {/* PORTFOLIO CARD */}
            <div className="mxd-demo-cards__item card-item-right animate-card-2">
              <div className="mxd-demo-card__gradient">
                <svg viewBox="0 0 1200 1200">
                  <defs>
                    <radialGradient
                      id="purple-radial-gr"
                      cx="600"
                      cy="600"
                      r="600"
                    >
                      <stop offset="0%" stopColor="#9F8BE7" stopOpacity="0.6" />

                      <stop offset="100%" stopColor="#9F8BE7" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  <circle
                    cx="600"
                    cy="600"
                    r="600"
                    fill="url(#purple-radial-gr)"
                  />
                </svg>
              </div>

              <div className="mxd-demo-cards__image card-image-padding">
                <img
                  src="/assets/img/demo/01_card-img.webp"
                  alt="Portfolio Card"
                />
              </div>

              <div className="mxd-demo-cards__content">
                <div className="mxd-demo-cards__descr">
                  <h2 className="mxd-demo-cards__title h2-small">
                    <a
                      href="works-simple.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Portfolio
                    </a>
                  </h2>

                  <div className="mxd-demo-cards__tags">
                    <span className="tag tag-default tag-outline">
                      Showcase
                    </span>

                    <span className="tag tag-default tag-outline">Visions</span>

                    <span className="tag tag-default tag-outline">Designs</span>
                  </div>

                  <p>
                    Bring your work to life with stunning layouts. Clear,
                    stylish pages built to impress and inspire.
                  </p>
                </div>

                <div className="mxd-demo-cards__icons">
                  {icons.map((item, index) => (
                    <div key={index} className="demo-icons__item">
                      <div className="demo-icons__icon">
                        <svg viewBox="0 0 56 56">
                          <path d="M54.8,28c0,10.6-2.8,26.8-26.8,26.8S1.2,38.6,1.2,28,4,1.2,28,1.2s26.8,16.2,26.8,26.8Z" />
                        </svg>

                        <i className={`ph ${item.icon}`}></i>
                      </div>

                      <p className="demo-icons__caption">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
