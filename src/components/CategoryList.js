import React, { useEffect } from "react";
import Item from "./Item";

function CategoryList({ category }) {
  return (
    <div className="menu-category">
      <h2>{category[0]}</h2>

      <div className="menu-list">
        {category[1].map((item) => {
          return (
            <Item
              name={item.itemName}
              price={item.price}
              status={item.status}
              type={item.type}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CategoryList;
