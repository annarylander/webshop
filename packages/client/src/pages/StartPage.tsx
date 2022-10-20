import React, { useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";
import { ProductItem } from "@my-webshop/shared";
import { Icon } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";

export default function StartPage() {
  const [products, setProducts] = React.useState<ProductItem[]>([]);
  const [error, setError] = React.useState<string | undefined>();
  const [query, setQuery] = React.useState<string | undefined>();

  const productsURL: string =
    `${process.env.REACT_APP_BASE_URL}/product` ||
    "http://localhost:3002/product";

  const searchURL: string =
    `${process.env.REACT_APP_BASE_URL}/product/search/${query}` ||
    `http://localhost:3002/product/search/${query}`;

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

  const handleSearch = async (): Promise<ProductItem[]> => {
    console.log("hej");
    const response = await axios.get<ProductItem[]>(searchURL);
    setProducts(response.data);
    console.log(response.data);
    return products;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch();
  };

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
            {
              return <Card key={product._id} product={product} />;
            }
          })}
        </div>
      );
    } else {
      return <div>Waiting for products</div>;
    }
  };

  return (
    <div className="start-page">
      <div className="hero">
        <div>
          <h2>Green vibes only</h2>
        </div>
      </div>

      <div className="search-wrapper">
        <div className="search-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="search-input"
              placeholder="Search for a product"
              onChange={(e) => setQuery(e.target.value)}
            ></input>
            <button className="search-button">
              <Icon as={AiOutlineSearch} boxSize={7} />
            </button>
          </form>
        </div>
      </div>

      <div>
        <ProductList products={products} error={error} />
      </div>
    </div>
  );
}
