import React, { useEffect } from "react";
import { ProductItem } from "@my-webshop/shared";
import axios from "axios";
import { useParams } from "react-router-dom";
import DetailView from "../components/DetailView";

export default function ProductDetailPage() {
  const [product, setProduct] = React.useState<ProductItem | undefined>();
  const [error, setError] = React.useState<string | undefined>();

  const baseURL: string =
    process.env.REACT_APP_BASE_URL || "http://localhost:3002";

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    axios
      .get(`${baseURL}/product/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        setProduct(undefined);
        setError("Cannot find product");
      });
  }, []);

  return (
    <div>
      {product && (
        <div>
          <DetailView product={product} error={error} />
        </div>
      )}
    </div>
  );
}
