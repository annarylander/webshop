import { ProductItem } from "@my-webshop/shared";
import React from "react";
import Card from "./Card";

export default function DetailView({
  product,
  error,
}: {
  product: ProductItem;
  error?: string;
}) {
  const SingleProduct = ({product, error} :{product: ProductItem; error?: string}) => {
    if (error) {
      return <div>{error}</div>;
    } else if (product) {
      return (
        <div className="products">
          <Card
            _id={product._id}
            title={product.title}
            price={product.price}
            mainImage={product.mainImage}
          />
          ;
        </div>
      );
    } else {
      return <div>'Waiting for products'</div>;
    }
  };

  return <div>
    <SingleProduct product={product} error={error}/>
  </div>;
}
