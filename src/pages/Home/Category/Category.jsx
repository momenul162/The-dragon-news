import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCart from "../NewsCart/NewsCart";

const Category = () => {
  const { name } = useParams();
  const categoryNews = useLoaderData();

  return (
    <div>
      {name && <h1>{categoryNews?.name}</h1>}
      {categoryNews.map((news) => (
        <NewsCart key={news._id} news={news}></NewsCart>
      ))}
    </div>
  );
};

export default Category;
