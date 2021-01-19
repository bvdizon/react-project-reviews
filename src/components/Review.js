import React, { useState } from 'react';
import reviews from './data';
import { ImQuotesLeft } from 'react-icons/im';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Review = () => {
  // Setting up state for the index of image shown
  const [index, setIndex] = useState(0);
  // This is the main that control which review will show.
  // Codes will be focused on controlling which 'index'
  const { name, job, image, text } = reviews[index];

  // This function checks the index after next/prev button is clicked.
  const checkIndex = (number) => {
    // resulting index is more than the # of items
    if (number > reviews.length - 1) {
      return 0;
    }
    // resulting index is below zero
    if (number < 0) {
      return reviews.length - 1;
    }
    // resulting index is within range
    return number;
  };

  // functions called for next and previous review
  // number is being checked by 'checkIndex' function
  const nextIndex = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  const prevIndex = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };

  // function to display a random review
  const randomSelect = () => {
    setIndex((index) => {
      // generate a new index based on the array length
      let newIndex = Math.floor(Math.random() * reviews.length);
      // if random new index is the same as current, add 1
      // this is to avoid showing the same review after clicking random
      if (newIndex === index) {
        newIndex = newIndex + 1;
      }
      // pass the new index to the checkIndex function
      return checkIndex(newIndex);
    });
  };

  return (
    <div id='container'>
      <section>
        <h1 style={{ margin: '20px 0' }}>My Reviews</h1>
        <figure>
          <ImQuotesLeft className='quote' />
          <img src={image} alt={name} />
        </figure>
        <h3>{name}</h3>
        <h5>{job}</h5>
        <p>{text}</p>
        <span onClick={prevIndex}>
          <FaAngleLeft />
        </span>
        <span onClick={nextIndex}>
          <FaAngleRight />
        </span>
        <div>
          <button onClick={randomSelect}>View Random</button>
        </div>
      </section>
    </div>
  );
};

export default Review;
