import React from "react";
import "../styles/VideoAndContent.css";

function VideoAndContent() {
  return (
    <section className="video-and-content">
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
            src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/webm/connectedness.webm"
            type="video/webm"
          />
          <source
            src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/mp4/connectedness.mp4"
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
            src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/webm/connectedness-mobile.webm"
            type="video/webm"
          />
          <source
            src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/mp4/connectedness-mobile.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="section-copy">
        <h2 className="display-as-h1">Bring your team together</h2>
        <p className="content-after-video">
          At the heart of Slack are channels: organised spaces for everyone and
          everything that you need for work. In channels, it's easier to connect
          across departments, offices, time zones and even other companies.
        </p>
        <a
          className="link-after-video"
          href="https://slack.com/intl/en-in/features/channels"
        >
          Learn more about channels
        </a>
      </div>
    </section>
  );
}

export default VideoAndContent;
