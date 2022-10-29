import { ProductItem } from "@my-webshop/shared";
import DetailCard from "./DetailCard";

export default function DetailView({
  product,
  error,
}: {
  product: ProductItem;
  error?: string;
}) {
  const SingleProduct = ({
    product,
    error,
  }: {
    product: ProductItem;
    error?: string;
  }) => {
    if (error) {
      return <div>{error}</div>;
    } else if (product) {
      return <DetailCard key={product._id} product={product} />;
    } else {
      return <div>'Nothing to show'</div>;
    }
  };

  return (
    <div>
      <SingleProduct product={product} error={error} />
    </div>
  );
}
