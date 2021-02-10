import React from "react";

const Quotes = ({ data }) => {
  if (data) {
    var quotes = data.quotes.map(function (quotes) {
      return (
        <li key={quotes.user}>
          <blockquote>
            <p>{quotes.text}</p>
            <cite>{quotes.user}</cite>
          </blockquote>
        </li>
      );
    });
  }

  return (
    <section id="quotes">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1>
              <span>Client quotes</span>
            </h1>
          </div>

          <div className="ten columns flex-container">
            <ul className="slides">{quotes}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
