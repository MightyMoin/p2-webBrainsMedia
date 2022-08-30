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
            src="https://a.slack-edge.com/221d25b/marketing/img/homepage/e2e-prospects/animations/webm/speed.webm"
            type="video/webm"
          />
          <source
            src="https://a.slack-edge.com/221d25b/marketing/img/homepage/e2e-prospects/animations/mp4/speed.mp4"
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
            src="https://a.slack-edge.com/221d25b/marketing/img/homepage/e2e-prospects/animations/webm/speed-mobile.webm"
            type="video/webm"
          />
          <source
            src="https://a.slack-edge.com/221d25b/marketing/img/homepage/e2e-prospects/animations/mp4/speed-mobile.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="section-copy">
        <h2 className="display-as-h1">
          Move faster with your tools in one place
        </h2>
        <p className="content-after-video">
          With your other work apps connected to Slack, you can work faster by
          switching tabs less. And with powerful tools like Workflow Builder,
          you can automate away routine tasks.
        </p>
        <a
          className="link-after-video"
          href="https://slack.com/intl/en-in/integrations"
        >
          Learn more about the Slack platform
        </a>
      </div>
    </section>
  );
}

export default VideoAndContent;
