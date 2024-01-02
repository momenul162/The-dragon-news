import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaRegBookmark, FaRegEye, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import "./NewsCart.css";
import moment from "moment";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const NewsCart = ({ news }) => {
  const { _id, image_url, title, details, author, total_view, rating } = news;
  return (
    <Card className="mb-4">
      <Card.Header as="h5" className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-2">
          <Image className="author-img" src={author?.img} roundedCircle />
          <div>
            <p className="my-1">
              <small>{author?.name}</small>
            </p>
            <p className="my-1 text-secondary">
              <small>{moment(author?.published_date).format("MMM Do YY")}</small>
            </p>
          </div>
        </div>
        <div className="d-flex align-items-center gap-4">
          <p>
            <FaRegBookmark></FaRegBookmark>
          </p>
          <p>
            <FaShareAlt></FaShareAlt>
          </p>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img src={image_url} alt="Card image" />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}...
              <Link className="text-info" to={`/news/${_id}`}>
                Read More
              </Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-mute d-flex">
        <div className="flex-grow-1 d-flex align-items-center">
          <Rating style={{ maxWidth: 100 }} value={Math.round(rating?.number)} readOnly />
          <span className="ms-2">{rating?.number}</span>
        </div>
        <div>
          <FaRegEye></FaRegEye> {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCart;
