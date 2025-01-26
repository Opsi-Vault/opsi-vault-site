import React, { useState } from "react";
import "./testimonial.scss"
import { motion } from "framer-motion";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      name: "John Doe",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget lacus eget nunc tincidunt laoreet.",
      image: "https://picsum.photos/id/100/200",
    },
    {
      name: "Jane Doe",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget lacus eget nunc tincidunt laoreet.",
      image: "https://picsum.photos/id/101/200",
    },
    {
      name: "John Smith",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget lacus eget nunc tincidunt laoreet.",
      image: "https://picsum.photos/id/102/200",
    },
    {
      name: "John Smith",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget lacus eget nunc tincidunt laoreet.",
      image: "https://picsum.photos/id/102/200",
    },
  ];

  // const handleNext = () => {
  //   setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  // };

  // const handlePrevious = () => {
  //   setActiveIndex((prevIndex) =>
  //     prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
  //   );
  // };

  return (
    <div className="carousel" id="testimonials">
      <div className="carousel-inner">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className={`carousel-item ${index === activeIndex ? "active" : ""}`}
          >
            <div>
              <img src="assets/leftQuote.svg" alt="" />
              <img src={testimonial.image} alt={testimonial.name} />
              <img src="assets/rightQuote.svg" alt="" />
            </div>
            <p>{testimonial.quote}</p>
            <h3>{testimonial.name}</h3>
          </motion.div>
        ))}
      </div>
      {/* <div className="carousel-controls">
          <button onClick={handlePrevious}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div> */}
      <ul className="carousel-pagination">
        <li
          className={`carousel-pagination-item ${
            activeIndex === 0 ? "extend" : ""
          }`}
          data-target="#carousel-item-1"
          onClick={() => setActiveIndex(0)}
        ></li>
        <li
          className={`carousel-pagination-item ${
            activeIndex === 1 ? "extend" : ""
          }`}
          data-target="#carousel-item-2"
          onClick={() => setActiveIndex(1)}
        ></li>
        <li
          className={`carousel-pagination-item ${
            activeIndex === 2 ? "extend" : ""
          }`}
          data-target="#carousel-item-3"
          onClick={() => setActiveIndex(2)}
        ></li>
        <li
          className={`carousel-pagination-item ${
            activeIndex === 3 ? "extend" : ""
          }`}
          data-target="#carousel-item-4"
          onClick={() => setActiveIndex(3)}
        ></li>
      </ul>
    </div>
  );
};

export default Testimonials;
