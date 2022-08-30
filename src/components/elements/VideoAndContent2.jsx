import React from "react";
import "../styles/VideoAndContent.css";

function VideoAndContent() {
  return (
    <section className="video-and-content">
      <div className="section-copy">
        <h2 className="display-as-h1">Choose how you want to work</h2>
        <p className="content-after-video">
          In Slack, you've got all the flexibility to work when, where and how
          it's best for you. You can easily chat, send audio and video clips, or
          join a huddle to talk things through live.
        </p>
        <a
          className="link-after-video"
          href="https://slack.com/intl/en-in/digital-hq"
        >
          Learn more about flexible communication
        </a>
      </div>
      <div className="hide-on-mobile">
        <video
          width="600"
          height="350"
          data-js-id="connectedness"
          aria-describedby="connectedness"
          autoPlay
          loop
          muted
          controls
        >
          <source
            src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/webm/flexibility.webm"
            type="video/webm"
          />
          <source
            src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/mp4/flexibility.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="hide-on-desktop">
        <video
          width="600"
          height="350"
          data-js-id="connectedness"
          aria-describedby="connectedness"
          autoPlay
          loop
          muted
          controls
        >
          <source
            src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/webm/flexibility-mobile.webm"
            type="video/webm"
          />
          <source
            src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/mp4/flexibility-mobile.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
}

export default VideoAndContent;
