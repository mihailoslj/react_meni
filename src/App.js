import { useState } from 'react';
import Menu from './Menu';
import items from './data';
import Categories from './Categories';

//na neku foru ne postoji neka unique metoda, pa moram ovako 
//ovo sa nizom je tu jer mi treba i 'Sve' kategorija
const allCategories =['Sve',...new Set(items.map((item) => item.category))]; 
console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === 'Sve'){
      setMenuItems(items);
      return;
    }
    const NewItems = items.filter((item) => item.category === category);
    setMenuItems(NewItems);
  }

  return (
    <main>
      <selection className = "menu section">
        <div className="title">
          <h2>Naš meni</h2>
          <div className="underline"></div>
        </div>
        <Categories categories = {categories} filterItems = {filterItems}/>
        <Menu items={menuItems}/>
      </selection>
    </main>
  );
}

export default App;
