import React from "react";
import "../styles/card.css";

export const Cards = () => {
  return (
    <div className="web-cards">
      <div className="card-h">
        <h1>Take a deeper dive into a new way to work</h1>
      </div>
      <div className="cards">
        <div
          className="card"
          style={{ backgroundColor: "#4B154A", color: "#fff" }}
        >
          <div>
            <p style={{ color: "#fff" }}>Collection</p>
          </div>
          <div className="class-head">Slack as your digital HQ</div>
          <div className="card-image" style={{ marginTop: "40px" }}>
            <img
              src="https://a.slack-edge.com/891d9e5/marketing/img/digital-hq/promos/img-promo-01.png"
              alt="promo"
            />
          </div>
          <div className="read-more" style={{ color: "#fff" }}>
            <p style={{ color: "#fff" }}>See All</p>
            <p style={{ color: "#fff" }}>&rarr;</p>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img
              src="https://a.slack-edge.com/891d9e5/marketing/img/digital-hq/promos/img-promo-02.jpg"
              alt="resource"
            />
          </div>
          <div>
            <p>Resource</p>
          </div>
          <div className="class-head">See how others are doing it</div>
          <div className="read-more">
            <p>Read More</p>
            <p>&rarr;</p>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img
              src="https://a.slack-edge.com/9fbc946/marketing/img/digital-hq/promos/img-promo-03.jpg"
              alt="webinar"
            />
          </div>
          <div>
            <p>Webinar</p>
          </div>
          <div className="class-head">
            Embracing a digital-first approach to work
          </div>
          <div className="read-more">
            <p>Watch Now</p>
            <p>&rarr;</p>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img
              src="https://a.slack-edge.com/9fbc946/marketing/img/digital-hq/promos/img-promo-04.jpg"
              alt="E-Book"
            />
          </div>
          <div>
            <p>E-book</p>
          </div>
          <div className="class-head">
            Reinventing work: new imperatives for the future of working
          </div>
          <div className="read-more">
            <p>Get E-Book</p>
            <p>&rarr;</p>
          </div>
        </div>
      </div>
    </div>
  );
};
