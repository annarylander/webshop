import { Button } from "@chakra-ui/react";

export default function Card() {
  return (
    <div className="product-card">
      <div>
        <h3>Fiolfikus</h3>
        <p>50 kr</p>
      </div>

      <div>
        <img
          src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBsYW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=300&q=20"
          alt="fikus"
        />
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
