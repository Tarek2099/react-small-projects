import React, { useState } from "react";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      name: "John Doe",
      text: "This is a fantastic product!",
    },
    {
      name: "Jane Smith",
      text: "I love using this service!",
    },
    {
      name: "Bob Johnson",
      text: "Highly recommend to everyone!",
    },
  ];
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <div>
      <p>{testimonials[currentIndex].text}</p>
      <button onClick={handleNext}>Next</button>
      <button onClick={handlePrev}>Previous</button>
    </div>
  );
};

export default Testimonial;
