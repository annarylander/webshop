import { Button } from "@chakra-ui/react";
import { ProductItem } from "@my-webshop/shared";
import React from "react";

export default function DetailCard({
  title,
  mainImage,
  moreImages,
  description,
  price,
  weight,
  manufacturer,
}: ProductItem) {
  const ifNoImg =
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBsYW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=300&q=20";
  return (
    <div className="detailcontainer">
      <div className="wrapper">
        <div className="product-img">
          <img
            src={mainImage === undefined ? ifNoImg : mainImage.url}
            alt={mainImage === undefined ? "Fikus" : mainImage.alt}
            height="420"
            width="327"
          />
        </div>
        <div className="product-info">
          <div className="product-text">
            <h1>{title}</h1>
            <h2>by {manufacturer}</h2>
            <p>{description}</p>
            <h2>Weight: {weight}</h2>
          </div>
          <div className="product-price-btn">
            <div>
              <p>
                <span className="price">{price}</span>sek
              </p>
            </div>
            <div>
              <Button
                size="lg"
                bgColor="#447761"
                color="white"
                className="buy-button2"
              >
                buy now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
