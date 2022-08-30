import React from "react";
import "../styles/VideoAndContent.css";

function Boxb() {
  return (
    <section className="video-and-content">
      <div>
        <a href="https://youtu.be/IDrUzXubiiQ">
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
              src="https://a.slack-edge.com/93eaeb3/marketing/img/features/customer-awards/customer-awards-tmobile-quote-610x305@2x.mp4"
              type="video/webm"
            />
          </video>
        </a>
      </div>

      <div className="section-copy">
        <p className="content-video new-content">
          'We were able to create a large virtual network of employees that can
          communicate as though they are together. There was a lot of disruption
          in terms of where we worked, but in terms of how we worked -very
          little disruption'
        </p>
        <p className="author-in-content">
          <span>Mark Smith</span><br />Senior Technical Product Manager, T-Mobile
        </p>
        <a href="https://slack.com/intl/en-in/customer-stories">
          See more about the custom stories &rarr;
        </a>
      </div>
    </section>
  );
}

export default Boxb;
