import { Button, Image } from "@chakra-ui/react";
import { ProductItem } from "@my-webshop/shared";
import BuyButton from "./BuyButton";
import ProductDetailModal from "./ProductDetailModal";

export default function Card(props: {product: ProductItem, error?: string}) {
 
  return (
    <div className="product-card">
      <div>
        <h3>
          <ProductDetailModal product={props.product} error={props.error}/>
        </h3>
        <p>{props.product.price} kr</p>
      </div>

      <div>
        <Image
          src={props.product.mainImage === undefined ? "" : props.product.mainImage.url}
          alt={props.product.mainImage === undefined ? "" : props.product.mainImage.alt}
          boxSize="300px"
          objectFit="cover"
        />
      </div>

      <div className="buy-button">
                <BuyButton product={props.product}/>
      </div>
    </div>
  );
}
