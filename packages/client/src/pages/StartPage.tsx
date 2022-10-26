import React, { useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";
import { ProductItem } from "@my-webshop/shared";
import { Icon, Button } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";

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
      <div className="header">
        <div>
          <h2>Green vibes only</h2>
          <div className="search-container">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="search-input"
                placeholder="Search for a product"
                onChange={(e) => setSearchInput(e.target.value)}
              ></input>
              <button className="search-button">
                <Icon as={AiOutlineSearch} boxSize={7} />
              </button>
            </form>
          </div>
          <div className="btn-group">
            <Button
              bgColor="#447761"
              size="sm"
              m={2}
              value="seeds"
              onClick={() => setQuery("search/seeds")}
            >
              Seeds
            </Button>
            <Button
              bgColor="#447761"
              size="sm"
              m={2}
              value="pot"
              onClick={() => setQuery("search/pot")}
            >
              Pots
            </Button>
            <Button
              bgColor="#447761"
              size="sm"
              m={2}
              value="plant"
              onClick={() => setQuery("search/plant")}
            >
              Plants
            </Button>
          </div>
        </div>
      </div>

      <div>
        <ProductList products={products} error={error} />
      </div>
    </div>
  );
}
