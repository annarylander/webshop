import { Button, Image } from "@chakra-ui/react";
import { ProductItem } from "@my-webshop/shared";
import BuyButton from "./BuyButton";

export default function Card(props: {product: ProductItem}) {
 
  return (
    <div className="product-card">
      <div>
        <h3>
          <a href={`/product/${props.product._id}`}>{props.product.title}</a>
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
    {/*     <Button size="sm" bgColor="#98b8a5" color="white" onClick={() => props.handleAddToCart(props.product)}>
          Add to cart
        </Button> */}
                <BuyButton product={props.product}/>
      </div>
    </div>
  );
}
