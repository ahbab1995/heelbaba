import React from "react";
import { useParams } from "react-router-dom";
import Pagetitle from "../../Pagetitle/Pagetitle";

const ProductDetails = () => {
  const { detailId } = useParams();
  return (
    <div>
     <Pagetitle title="Product"></Pagetitle>
      <h2>Product Details {detailId}</h2>
    </div>
  );
};

export default ProductDetails;
