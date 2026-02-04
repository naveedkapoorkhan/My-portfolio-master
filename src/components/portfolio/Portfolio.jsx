import "./portfolio.css";

import IMG1 from "../../assets/shopper.PNG";
import IMG2 from "../../assets/calculator.PNG";

import IMG3 from "../../assets/amazon.PNG";

import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "E-Commerce Website with React.js",
      img: IMG1,
      description:
        "An e-commerce website is a dynamic platform that showcases a wide range of information and products to users",
      technologies: "Html | CSS | Javascript | React Js",
      link: "https://ecom-ui-naveed-011234567.vercel.app/",
      github: "https://github.com/naveedkapoorkhan/ecom-ui-naveed-01/tree/main/frontend",
    },
    {
      id: 2,
      title: "Amazon Clone",
      img: IMG3,
      description:"A fully responsive Amazon e-commerce clone designed using HTML, CSS, and JavaScript.",
      technologies: "HTML | CSS | JavaScript | Express Js | Firebase",
      link: "https://amazon-clone-1554.vercel.app/",
      github: "https://github.com/naveedkapoorkhan/Amazon_clone/tree/main",
    },
    {
      id: 3,
      title: "Calculator",
      img: IMG2,
      description:"A basic calculator web application built with HTML, CSS, and JavaScript, allowing users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. ",
      technologies: "HTML | CSS | JavaScript",
      link: "https://calculator8888888.vercel.app/",
      github: "https://github.com/naveedkapoorkhan/Simple_Calculator_InJavaScript_HTML_CSS",
    },
    
    
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
