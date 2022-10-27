import React, { useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";
import { ProductItem } from "@my-webshop/shared";
import Header from "../components/Header";

export default function StartPage() {
  const [products, setProducts] = React.useState<ProductItem[]>([]);
  const [error, setError] = React.useState<string | undefined>();
  const [query, setQuery] = React.useState<string | undefined>("");
  const [searchInput, setSearchInput] = React.useState<string | undefined>();

  const searchURL: string =
    `${process.env.REACT_APP_BASE_URL}/product/${query}` ||
    `http://localhost:3002/product/${query}`;

  useEffect(() => {
    axios
      .get(searchURL)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        setProducts([]);
        setError("Something went wrong fetching products");
      });
  }, [query]);

  const ProductList = ({
    products,
    error,
  }: {
    products: ProductItem[];
    error?: string;
  }) => {
    if (error) {
      return <div>{error}</div>;
    } else if (products) {
      return (
        <div className="products">
          {products.map((product) => {
            return <Card key={product._id} product={product} />;
          })}
        </div>
      );
    } else {
      return <div>Waiting for products</div>;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery(`search/${searchInput}`);
  };

  return (
    <div className="start-page">
      <div>
        <Header
          searchInput={searchInput}
          handleSubmit={handleSubmit}
          setSearchInput={setSearchInput}
          setQuery={setQuery}
        />
      </div>

      <div>
        <ProductList products={products} error={error} />
      </div>
    </div>
  );
}
