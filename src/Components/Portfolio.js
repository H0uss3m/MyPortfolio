import React from "react";

const Portfolio = ({ data }) => {
  if (data) {
    var projects = data.projects.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return (
        <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="fa fa-link"></i>
              </div>
            </a>
          </div>
        </div>
      );
    });
    var clients = data.clients.map(function (client) {
      return (
        <div key={projects.title} className="columns">
          <div className="item-wrap">
            <img
              className="academy-pic"
              src={client.src}
              alt="clients logo"
            />
          </div>
        </div>
      )
    })
  }

  return (
    <section id="portfolio">
      <div className="row ">
        <div className="twelve columns collapsed ">
          <h1>Check Out Some of My Works.</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf clients"
          >
            {projects}
          </div>

        </div>
        <div className="twelve columns collapsed ">
          <h1>Check Out Some of My Biggest Clients that i've Worked with.</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf clients"
          >
            {clients}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Portfolio;
