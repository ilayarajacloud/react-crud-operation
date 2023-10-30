import React, { useEffect, useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'

const Tabs = () => {
  const [loading, setLoading] = useState(true);
  const [job, setJob] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJob = async () => {
    const respone = await fetch(url);
    const result = await respone.json();
    setJob(result);
    setLoading(false);
  }

  console.log(job);

  useEffect(() => {
    fetchJob();
  }, [])

  if (loading) {
    return (
      <section className='section loading'>
        <h1>Loading...</h1>
      </section>
    )
  }

  const { company, dates, title, id, order, duties } = job[value]

  return (
    <section className='section'>
      <div className='title'>
        <h2>Expierence</h2>
        <div className='uderline'></div>
      </div>
      <div className='job-center'>
        <div className='btn-container'>
          {
            job.map((item, index) => {
              return <button key={item.id} onClick={() => setValue(index)} className={`job-btn ${index == value && 'active-btn'}`}>{item.company}</button>
            })
          }
        </div>
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className='job-desc'>
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
  )
}

export default Tabs;