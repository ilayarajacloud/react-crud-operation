import React, { useState } from 'react'
import item from '../data';
import Menu from '../shared/Menu';
import Categeories from '../shared/Categeories';

const allCategory = ['all', ...new Set(item.map((item)=>item.category))]
console.log(allCategory);
console.log(item);

const MenuDisplay = () => {
  const [menuItem, setMenueItem] = useState(item);
  const [categeories, setCategeories] = useState(allCategory);

  const filterItem = (category)=>{
    if(category==='all'){
      setMenueItem(item);
      return
    }
   const filterItem = item.filter((item)=> item.category===category)
   setMenueItem(filterItem);
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categeories categeories={categeories } filterItem={filterItem}/>
        <Menu menuItem={menuItem} />
      </section>
    </main>
  )
}

export default MenuDisplay