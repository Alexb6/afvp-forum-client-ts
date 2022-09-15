import React from "react";
import parse from "html-react-parser";

import "./../../css/styles.css";

type Props = {
  image: string;
  title: string;
  excerpt: string;
  link: string;
};

const CardWpPost = ({ image, title, excerpt, link }: Props) => (
  <div className="cardWp col-md-6 col-lg-4">
    <div className="card-inner">
      <div
        className="card__image"
        style={
          image
            ? { backgroundImage: `url(${image})` }
            : { background: "linear-gradient()" }
        }
      />
      <div className="card__body">
        <h4 className="body__title">{parse(title)} </h4>
        <div className="body__excerpt">{parse(excerpt)}</div>
        <div className="body__read-more">
          <a href={link} target="_blank" rel="noopener noreferrer">
            Lire la suite
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default CardWpPost;
