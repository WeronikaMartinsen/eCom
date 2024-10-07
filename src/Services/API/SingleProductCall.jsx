import { useEffect, useState } from "react";
import Loading from "../../Components/Loading";
import ErrorMessage from "../../Components/ErrorMessage";
import { useParams } from "react-router-dom";
import SingleCard from "../../Components/SingleCard";

export default function SingleProductCall() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setError("Invalid product ID.");
      return;
    }
    async function getProduct(url) {
      try {
        setError(null);
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(
            "Failed to fetch the product. Please try again later."
          );
        }
        const json = await response.json();
        if (!json.data) {
          throw new Error("Product not found.");
        }
        setProduct(json.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setLoading(false);
        setError(error.message);
      }
    }

    getProduct(`https://v2.api.noroff.dev/online-shop/${id}`);
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;
  if (!product) return null;

  return (
    <div>
      <SingleCard key={product.id} product={product} />
    </div>
  );
}
