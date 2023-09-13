import React from "react";

function Item({ name, price, status, type }) {
  return (
    <div className={status == true ? "item" : "item disable"}>
      <div className="item-box">
        <div className={type == "Non-Veg" ? "box non-veg" : "box veg"}></div>
        <div className="item-name">{name}</div>
      </div>
      <div className="price">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-currency-rupee"
          viewBox="0 0 16 16"
        >
          <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
        </svg>
        <div>{price}</div>
      </div>
    </div>
  );
}

export default Item;
