import React, { useState } from 'react';
import people from './data';
// import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index]
  console.log(index);
  
  const checkNumber = (number) => {
    if(number > people.length-1){
      return 0
    }
    if(number < 0){
      return people.length-1
    }
    return number
  }

  const nextPerson = () =>{
    setIndex((index) => {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
  }

  const prevPerson = () =>{
    setIndex((index) => {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random()*people.length)
    if(index === randomNumber){
      randomNumber = index + 1
    }
    setIndex(checkNumber(randomNumber))
  }

  return(
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        {/* <span className="quote-icon"> ** </span> */}
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button onClick={prevPerson} className="prev-btn">
          PREV
        </button>
        <button onClick={nextPerson} className="next-btn">
          NEXT
        </button>
      </div>
      <button onClick={randomPerson} className="random-btn">
        surprise me
      </button>
    </article>
  )
}

export default Review





// const Review = () => {
//   const [index, setIndex] = useState(0);
//   const { name, job, image, text } = people[index];
//   const checkNumber = (number) => {
//     if (number > people.length - 1) {
//       return 0;
//     }
//     if (number < 0) {
//       return people.length - 1;
//     }
//     return number;
//   };
//   const nextPerson = () => {
//     setIndex((index) => {
//       let newIndex = index + 1;
//       return checkNumber(newIndex);
//     });
//   };
//   const prevPerson = () => {
//     setIndex((index) => {
//       let newIndex = index - 1;
//       return checkNumber(newIndex);
//     });
//   };
//   const randomPerson = () => {
//     let randomNumber = Math.floor(Math.random() * people.length);
//     if (randomNumber === index) {
//       randomNumber = index + 1;
//     }
//     setIndex(checkNumber(randomNumber));
//   };

//   return (
//     <article className='review'>
//       <div className='img-container'>
//         <img src={image} alt={name} className='person-img' />
//         <span className='quote-icon'>
//           {/* <FaQuoteRight /> */}
//           **
//         </span>
//       </div>
//       <h4 className='author'>{name}</h4>
//       <p className='job'>{job}</p>
//       <p className='info'>{text}</p>
//       <div className='button-container'>
//         <button className='prev-btn' onClick={prevPerson}>
//           LEFT
//         </button>
//         <button className='next-btn' onClick={nextPerson}>
//           RIGHT
//         </button>
//       </div>
//       <button className='random-btn' onClick={randomPerson}>
//         surprise me
//       </button>
//     </article>
//   );
// };

// export default Review;
