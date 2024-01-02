import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeftCart from "./LeftCart";
import { AuthContext } from "../../../provider/AuthProvider";

const LeftNav = () => {
  const { categories } = useContext(AuthContext);

  return (
    <div className="px-1">
      <h3>All Category</h3>
      <div>
        {categories.map((category) => (
          <h4 key={category.id}>
            <Link
              to={`/category/${category.id}`}
              className="mb-4 ps-5 text-black text-decoration-none"
            >
              {category.name}
            </Link>
          </h4>
        ))}
      </div>
      <LeftCart></LeftCart>
    </div>
  );
};

export default LeftNav;
