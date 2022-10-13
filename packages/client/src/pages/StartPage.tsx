import React, { useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";
import { ProductItem } from "@my-webshop/shared";

export default function StartPage() {
  const [products, setProducts] = React.useState<ProductItem[]>([]);
  const [error, setError] = React.useState<string | undefined>();

  const productsURL: string =
    process.env.REACT_APP_PRODUCTS_URL || "http://localhost:3002/product";

  useEffect(() => {
    axios
      .get(productsURL)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        setProducts([]);
        setError("Something went wrong fetching products");
      });
  }, []);

  const ProductList = ({ products, error }: { products: ProductItem[]; error?: string }) => {
    if (error) {
      return <div>{error}</div>;
    } else if (products) {
      return (
        <div className="products">
          {products.map((product) => {
            return <Card _id={product._id} title={product.title} price={product.price} mainImage={product.mainImage}/>;
          })}
        </div>
      );
    } else {
      return <div>'Waiting for products'</div>;
    }
  };

  return (
    <div className="start-page">
      <div className="hero">
        <div>
          <h2>Green vibes only</h2>
        </div>
      </div>
   
        <ProductList products={products} error={error} />
    
    </div>
  );
}
