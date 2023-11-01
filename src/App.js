import React, { useState } from 'react'
import data from './data';

const App = () => {
  const [people, setPepole] = useState(data);
  const [index, setIndex] = useState(0);
  console.log(people);
  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className='section-center'>
        {people.map((item, index) => {
          const { id, name, image, quote, title } = item;
          return (
            <article key={id}>
              <img src={image} />
            </article>
          )

        })}
      </div>
    </section>
  )
}

export default App