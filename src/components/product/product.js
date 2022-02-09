import React from 'react'
import items from '../../../src/data'

const product = ({items}) => {
  return <div className=" section-center">
    {items.map ((menuItem) =>{
      const {id, title, img, desc} = menuItem;
      return <article key ={id} className="menu-item">
        <img src ={img} alt ={title} className="photo"/>
        <div className="item-info">
          <header>
            <h4>{title}</h4>
           
          </header>
          <p className="item-text">{desc}</p>
        </div>
      </article>
    })}
  </div>
};

export default product;