import React, { useEffect } from "react";
import axiosClient from "../API/axiosClient";
import { useState } from "react";
import CategoryList from "../components/CategoryList";
import "../styles/menuStyles.css";
import { useParams } from "react-router-dom";

function Menu() {
  const params = useParams();
  const [menuData, setMenuData] = useState([]);

  const [restaurantDetails, setrestaurantDetails] = useState([]);

  useEffect(() => {
    axiosClient
      .get(`/api/v1/menu?restaurantName=${params.restaurantName}`)
      .then((data) => {
        setMenuData(Object.entries(data.data));
      });

    axiosClient
      .get(`/api/v1/restaurnat?restaurantName=${params.restaurantName}`)
      .then((data) => {
        console.log(data.data);
        setrestaurantDetails(data.data);
      });
  }, []);

  return (
    <div className="menu">
      <div className="restaurant-title">
        <h1>{restaurantDetails.restaurantName}</h1>
      </div>
      {menuData.map((data) => {
        return <CategoryList category={data} />;
      })}
    </div>
  );
}

export default Menu;
