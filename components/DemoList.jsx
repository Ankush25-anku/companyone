export default function DemoList() {
  const rows = [
    [
      {
        href: "index-main.html",
        img: "/assets/img/demo/screens/01.webp",
        screen: "screen-01",
        title: "Main Home",
        num: "/01",
      },
      {
        href: "index-software-development-company.html",
        img: "/assets/img/demo/screens/02.webp",
        screen: "screen-02",
        title: "Software Development Company",
        num: "/02",
        accent: true,
        tag: "🔥 Hot",
      },
    ],

    [
      {
        href: "index-freelancer-portfolio.html",
        img: "/assets/img/demo/screens/03.webp",
        screen: "screen-03",
        title: "Freelancer Portfolio",
        num: "/03",
        small: true,
      },
      {
        href: "index-digital-agency.html",
        img: "/assets/img/demo/screens/04.webp",
        screen: "screen-04",
        title: "Digital Agency",
        num: "/04",
        small: true,
      },
      {
        href: "index-creative-design-studio.html",
        img: "/assets/img/demo/screens/05.webp",
        screen: "screen-05",
        title: "Creative Design Studio",
        num: "/05",
        small: true,
      },
    ],

    [
      {
        href: "index-personal-portfolio.html",
        img: "/assets/img/demo/screens/06.webp",
        screen: "screen-06",
        title: "Personal Portfolio",
        num: "/06",
        accent: true,
        tag: "🔥 Hot",
      },
      {
        href: "index-web-agency.html",
        img: "/assets/img/demo/screens/07.webp",
        screen: "screen-07",
        title: "Web Agency",
        num: "/07",
        tag: "🦄 Trendy",
      },
    ],

    [
      {
        href: "index-creative-developer.html",
        img: "/assets/img/demo/screens/08.webp",
        screen: "screen-08",
        title: "Creative Developer",
        num: "/08",
        small: true,
      },
      {
        href: "index-designer.html",
        img: "/assets/img/demo/screens/09.webp",
        screen: "screen-09",
        title: "Designer",
        num: "/09",
        small: true,
      },
      {
        empty: true,
      },
    ],
  ];

  return (
    <div id="demo" className="mxd-section padding-grid-pre-mtext">
      <div className="mxd-container">
        <div className="mxd-block">
          <div className="mxd-demo-list">
            {rows.map((row, rowIndex) => (
              <div key={rowIndex} className="mxd-demo-list__row">
                {row.map((item, index) =>
                  item.empty ? (
                    <div
                      key={index}
                      className="mxd-demo-list__item empty-item animate-card-3"
                    >
                      <div className="mxd-demo-list__image image-placeholder">
                        <img
                          src="/assets/img/demo/screens/05.webp"
                          alt="Demo Placeholder"
                        />
                      </div>

                      <div className="empty-item__wrap">
                        <div className="empty-item__content">
                          <div className="empty-item__logo mxd-rotate">
                            <div
                              style={{
                                width: "56px",
                                height: "56px",
                                borderRadius: "50%",
                                background: "var(--accent)",
                              }}
                            />
                          </div>

                          <p className="empty-item__caption">
                            More demos coming
                            <br />
                            soon...
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mxd-demo-list__item 
                        ${item.accent ? "item-accent" : ""}
                        ${
                          row.length === 3 ? "animate-card-3" : "animate-card-2"
                        }`}
                    >
                      <div className="mxd-demo-list__image">
                        <img src={item.img} alt="Rayo Demo Screen" />

                        <div
                          className={`mxd-demo-list__screen ${item.screen}`}
                        ></div>
                      </div>

                      <div className="mxd-demo-list__caption">
                        <span
                          className={`mxd-demo-list__link
                          ${item.small ? "small" : ""}
                          ${item.accent ? "opposite" : ""}`}
                        >
                          {item.title}
                        </span>

                        <span
                          className={`mxd-demo-list__num
                          ${item.small ? "small" : ""}
                          ${item.accent ? "opposite" : ""}`}
                        >
                          {item.num}
                        </span>
                      </div>

                      {item.tag && (
                        <div className="mxd-pricing-table__tag">
                          <span className="tag tag-default tag-additional">
                            {item.tag}
                          </span>
                        </div>
                      )}
                    </a>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
