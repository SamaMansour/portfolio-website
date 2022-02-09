import React from 'react'
import './productList.css'
import Product from '../product/product'

const productList = ({items}) => {

  return (
 <div className="p1">
     <div className="p1-texts">
         <h2  className='title'>Projects List</h2>
         <div className="underline"></div>
         <p className="p1-desc">
             Creating multiple practicing projects using different languages <br/> 
             MERN stack , django, ASP.NET , AngularJS and <br/>
             Flutter as a cross-platform ...

         </p>
     </div>
     <div className="p1-list">
     <div className=" section-center">
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
        

     </div>
 </div>
  )
}

export default productList