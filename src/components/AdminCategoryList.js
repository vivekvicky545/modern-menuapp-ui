import React, { useEffect } from "react";
import Item from "./Item";
import AdminItem from "./AdminItem";

function AdminCategoryList({ category, refresh }) {
  return (
    <div className="menu-category">
      <h2>{category[0]}</h2>

      <div className="menu-list">
        {category[1].map((item) => {
          console.log(item);
          return (
            <AdminItem
              name={item.itemName}
              price={item.price}
              status={item.status}
              id={item.itemId}
              type={item.type}
              categoryCurent={item.categoryName}
              refresh={refresh}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AdminCategoryList;
