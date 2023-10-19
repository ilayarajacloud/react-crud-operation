import React, { useState } from 'react'
import data from '../data.js';
import Question from '../shared/Question.js';


const Accordian = () => {
  console.log(data);
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className='container'>
        <h3>Question and Anser about Login</h3>
        <section className='info'>
          {
            questions.map((item)=>{
              return <Question key={item.id} {...item} />
            })
          }
        </section>
      </div>
    </main>
  )
}

export default Accordian