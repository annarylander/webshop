import { Button } from "@chakra-ui/react";
import { ProductItem } from "@my-webshop/shared";
import BuyButton from "./BuyButton";
import { Image, Box } from "@chakra-ui/react";

export default function DetailCard(props: { product: ProductItem }) {
  const ifNoImg =
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBsYW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=300&q=20";

  /*   const showMoreImages = ({images, error} : {images?: string; error?: string} ) => { 
    if (props.product.moreImages?[0].url == '') {
      <Box boxSize="130px">
      {props.product.moreImages?.map((image) => (
        <Image objectFit="cover" src={image.url} alt={image.alt} />
      ))}
    </Box>
    } else {
      null
    }
  } */

  return (
    <div className="detailcontainer">
      <div className="wrapper">
        <div className="product-img">
          <div className="main-image">
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
            />
          </div>
          <div className="more-images">
            {props.product.moreImages?.map((image) =>
              image.url === "" ? null : (
               
               
                    <Image objectFit="cover" src={image.url} alt={image.alt} />
                 
                
              )
            )}
          </div>
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
