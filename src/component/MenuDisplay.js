import React, { useState } from 'react'
import item from '../data';
import Menu from '../shared/Menu';

const MenuDisplay = () => {
  const [menuItem, setMenueItem] = useState(item);
  console.log(menuItem);
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        {/* <Categeories /> */}
        <Menu menuItem={menuItem} />
      </section>
    </main>
  )
}

export default MenuDisplay