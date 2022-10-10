import { Button } from "@chakra-ui/react";
import { ProductItem } from "@my-webshop/shared";

export default function Card({_id, title, price, mainImage}: ProductItem) {

  const ifNoImg = "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBsYW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=300&q=20"

  return (
    <div className="product-card" key={_id}>
      <div>
        <h3>{title}</h3>
        <p>{price} kr</p>
      </div>

      <div>
        <img src={mainImage === undefined ? ifNoImg : mainImage.url} alt={mainImage === undefined ? 'Fikus' : mainImage.alt} />
      </div>

      <div className="buy-button">
        <Button size="sm" bgColor="#98b8a5" color="white">
          {" "}
          Köp{" "}
        </Button>
      </div>
    </div>
  );
}
