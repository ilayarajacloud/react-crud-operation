import React from 'react'

const Categeories = ({ filterItem, categeories }) => {

  const filterCategory = (pass) => {
    filterItem(pass)
  }

  return (
    <div className='btn-container'>
      {
        categeories.map((item, index) => {
          return <button type='click'
            className='filter-btn' key={index}
            onClick={() => filterCategory(item)}>
            {item}
          </button>
        })
      }
      {/* <button className='filter-btn' onClick={() => filterCategory('all')}>All</button>
      <button className='filter-btn' onClick={() => filterCategory('breakfast')}>Break Fast</button> */}
    </div>
  )
}

export default Categeories