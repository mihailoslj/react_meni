import React from 'react'

function Menu ({items}) {
  return (
    <div className="section-center">
        {items.map((menuItems)=>{
            const {id, title, img, desc, price} = menuItems;
            return (<article key = {id} className="menu-item">
                <img src={img} alt={title} className = "photo" />
                <div className="intem-info">
                    <header>
                        <h4>{title}</h4>
                        <h4 className="price">{price} RSD</h4>
                    </header>
                    <p className='item-text'>{desc}</p>
                </div>
            </article>
        );
        })}
    </div>
  )
}

export default Menu