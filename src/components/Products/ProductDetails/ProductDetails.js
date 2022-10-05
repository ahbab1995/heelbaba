import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { detailId } = useParams();
  return (
    <div>
      <h2>Product Details {detailId}</h2>
    </div>
  );
};

export default ProductDetails;
