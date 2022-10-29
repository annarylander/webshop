import { Button } from "@chakra-ui/react";
import { ProductItem } from "@my-webshop/shared";
import BuyButton from "./BuyButton";

export default function DetailCard(props: { product: ProductItem }) {
  const ifNoImg =
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBsYW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=300&q=20";
  return (
    <div className="detailcontainer">
      <div className="wrapper">
        <div className="product-img">
          <img
            src={
              props.product.mainImage === undefined
                ? ifNoImg
                : props.product.mainImage.url
            }
            alt={
              props.product.mainImage === undefined
                ? "Fikus"
                : props.product.mainImage.alt
            }
            height="420"
            width="327"
          />
        </div>
        <div className="product-info">
          <div className="product-text">
            <h1>{props.product.title}</h1>
            <h2>by {props.product.manufacturer}</h2>

            <br />
            <p>{props.product.description}</p>
            <br />
            <h2>Weight: {props.product.weight}</h2>
          </div>
          <div className="product-price-btn">
            <div>
              <p>
                <span className="price">{props.product.price}</span>sek
              </p>
            </div>
            <div>
              <BuyButton product={props.product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
