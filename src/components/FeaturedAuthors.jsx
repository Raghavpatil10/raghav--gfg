import React from "react";
import "./FeaturedAuthors.css";
import atwoodImg from "../assets/atwood.jpg";
import kingImg from "../assets/king.jpg";
import najwaImg from "../assets/najwa.jpg";

const authors = [
  {
    name: "MARGARET ATWOOD",
    title: "TWO SCORCHED MEN",
    image: atwoodImg,
  },
  {
    name: "STEPHEN KING",
    title: "FINN",
    image: kingImg,
  },
  {
    name: "NAJWA ZEBIAN",
    title: "TRUST YOUR HEART",
    image: najwaImg,
  },
];

function FeaturedAuthors() {
  return (
    <section className="featured-section">
      <h2 className="featured-title">
        ORIGINAL WORKS FROM CELEBRATED AUTHORS, ONLY ON BOOKBONE.
      </h2>
      <hr className="title-underline" />
      <div className="author-grid">
        {authors.map((author, index) => (
          <div key={index} className="author-card">
            <img src={author.image} alt={author.name} className="author-image" />
            <div className="author-info">
              <p className="author-name">{author.name}</p>
              <p className="author-title">{author.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedAuthors;
