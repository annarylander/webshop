import React from "react";
import Card from "../components/Card";

export default function StartPage() {
  return (
    <div className="start-page">
      <div className="hero">
        <div>
          <h2>Green vibes only</h2>
        </div>
      </div>

      <div className="products">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
