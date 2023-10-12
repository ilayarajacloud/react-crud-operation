import React, { useState } from 'react'
import person from '../data.js';
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = person[index];
  console.log(person);

const checkNumber=(number)=>{
  if(number > person.length-1){
    return 0
  }
  if(number < 0){
    return person.length -1
  }
  return number
}

  const prePerson = () => {
    setIndex((insex) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  }

  const netPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNumber(newIndex);
    })
  }

  const randomNumber=()=>{
    const randomNum= Math.floor(Math.random() * person.length)
    console.log(randomNum);
    if(randomNumber ===index){ 
      randomNumber= index+1
    }
    setIndex(checkNumber(randomNum))
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prePerson}>
          <AiFillCaretLeft />
        </button>
        <button className='next-btn' onClick={netPerson}>
          <AiFillCaretRight />
        </button>
        <button className='random-btn' onClick={randomNumber}>
          Suprise me        </button>
      </div>
    </article>
  )
}

export default Review