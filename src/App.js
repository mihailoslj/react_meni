import './App.css';
import { useState } from 'react';
import Menu from './Menu';
import items from './data';
import Categories from './Categories';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [catergories, setCategories] = useState([]);
  return (
    <main>
      <selection className = "menu section">
        <div className="title">
          <h2>Nas meni</h2>
          <div className="underline"></div>
        </div>
        <Categories />
        <Menu items={menuItems}/>
      </selection>
    </main>
  );
}

export default App;
