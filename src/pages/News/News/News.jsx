import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorsInsight from "../EditorsInsights/EditorsInsight";

const News = () => {
  const news = useLoaderData();
  console.log(news);
  const { category_id, title, details, image_url } = news;

  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="primary">
              <FaArrowLeft></FaArrowLeft> All News in This Category
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <EditorsInsight></EditorsInsight>
    </div>
  );
};

export default News;
