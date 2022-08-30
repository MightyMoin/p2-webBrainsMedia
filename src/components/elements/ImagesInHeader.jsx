import React from "react";
import "../styles/ImagesInHeader.css";

function ImagesInHeader() {
  return (
    <section>
      <p className="text-in-header">
        Trusted by companies all over the world
      </p>
      <div className="header-images">
        <div className="c-logo-bar__item">
          <img
            alt="SEEK"
            height="35"
            width="102"
            loading="lazy"
            className="lazyload"
            data-src="https://a.slack-edge.com/8719b/marketing/img/logos/company/_color/logo-seek.png"
            src="https://a.slack-edge.com/8719b/marketing/img/logos/company/_color/logo-seek.png"
            srcSet="https://a.slack-edge.com/8719b/marketing/img/logos/company/_color/logo-seek.png 1x, https://a.slack-edge.com/ce51938/marketing/img/logos/company/_color/logo-seek@2x.png 2x"
          />
        </div>
        <div className="c-logo-bar__item">
          <img
            alt="Xero"
            height="35"
            width="50"
            loading="lazy"
            className="lazyload"
            data-src="https://a.slack-edge.com/8719b/marketing/img/logos/company/_color/logo-xero.png"
            src="https://a.slack-edge.com/8719b/marketing/img/logos/company/_color/logo-xero.png"
            srcSet="https://a.slack-edge.com/8719b/marketing/img/logos/company/_color/logo-xero.png 1x, https://a.slack-edge.com/ce51938/marketing/img/logos/company/_color/logo-xero@2x.png 2x"
          />
        </div>
        <div className="c-logo-bar__item">
          <img
            alt="REA Group"
            height="35"
            width="154"
            loading="lazy"
            className="lazyload"
            data-src="https://a.slack-edge.com/96f2e65/marketing/img/logos/company/_color/rea.png"
            src="https://a.slack-edge.com/96f2e65/marketing/img/logos/company/_color/rea.png"
            srcSet="https://a.slack-edge.com/96f2e65/marketing/img/logos/company/_color/rea.png 1x, https://a.slack-edge.com/96f2e65/marketing/img/logos/company/_color/rea@2x.png 2x"
          />
        </div>
        <div className="c-logo-bar__item">
          <img
            alt="RMIT Online"
            height="35"
            width="118"
            loading="lazy"
            className="lazyload"
            data-src="https://a.slack-edge.com/f854ec/marketing/img/logos/company/_color/rmit.png"
            src="https://a.slack-edge.com/f854ec/marketing/img/logos/company/_color/rmit.png"
            srcSet="https://a.slack-edge.com/f854ec/marketing/img/logos/company/_color/rmit.png 1x, https://a.slack-edge.com/f854ec/marketing/img/logos/company/_color/rmit@2x.png 2x"
          />
        </div>
        <div className="c-logo-bar__item">
          <img
            alt="IBM"
            height="35"
            width="140"
            loading="lazy"
            className="lazyload"
            data-src="https://a.slack-edge.com/68794/marketing/img/logos/company/_color/ibm.png"
            src="https://a.slack-edge.com/68794/marketing/img/logos/company/_color/ibm.png"
            srcSet="https://a.slack-edge.com/68794/marketing/img/logos/company/_color/ibm.png 1x, https://a.slack-edge.com/68794/marketing/img/logos/company/_color/ibm@2x.png 2x"
          />
        </div>
        <div className="c-logo-bar__item">
          <img
            alt="Deliveroo"
            height="35"
            width="143"
            loading="lazy"
            className="lazyload"
            data-src="https://a.slack-edge.com/f854ec/marketing/img/logos/company/_color/deliveroo.png"
            src="https://a.slack-edge.com/f854ec/marketing/img/logos/company/_color/deliveroo.png"
            srcSet="https://a.slack-edge.com/f854ec/marketing/img/logos/company/_color/deliveroo.png 1x, https://a.slack-edge.com/f854ec/marketing/img/logos/company/_color/deliveroo@2x.png 2x"
          />
        </div>
      </div>
    </section>
  );
}

export default ImagesInHeader;
