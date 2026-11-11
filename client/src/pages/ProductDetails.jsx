import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  return (
    <div className="details">
      <h1>Product Details</h1>

      <h2>Product ID : {id}</h2>

      <p>This page will display complete product information.</p>
    </div>
  );
}

export default ProductDetails;