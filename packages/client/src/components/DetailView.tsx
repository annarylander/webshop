import { ProductItem } from "@my-webshop/shared";
import React from "react";
import DetailCard from "./DetailCard";

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
        
          <DetailCard
            _id={product._id}
            title={product.title}
            price={product.price}
            manufacturer={product.manufacturer}
            description={product.description}
            mainImage={product.mainImage}
            weight={product.weight}
          />
          
        
      );
    } else {
      return <div>'Waiting for products'</div>;
    }
  };

  return <div>
    <SingleProduct product={product} error={error}/>
  </div>;
}
