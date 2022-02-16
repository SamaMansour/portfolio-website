import logo from './logo.svg';
import Intro from '../src/components/intro/intro';
import ProductList from '../src/components/productList/productList';
import items from '../src/data'
import {useState} from 'react';
import Categories from '../src/components/categories/categories';
import Contact from '../src/components/contact/contact';

import './App.css';
const allCategories = ['all',... new Set (items.map((item) =>item.category))];
console.log(allCategories);
function App() {

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) =>{
    if (category == 'all'){
      setMenuItems(items);
      return 
    }
    const newItems = items.filter ((item)=>
      item.category === category
    )

    setMenuItems (newItems)
  }

  return (
    <>
   <Intro/>
   <Categories categories= {categories} filterItems= {filterItems}/>
   <ProductList items = {menuItems}/>
   <Contact/>

   
   </>

  );
}

export default App;
