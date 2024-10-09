import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchSingleProduct from "./FetchData/fetchSingleProduct";
import Loading from "../../Components/Loading";
import ErrorMessage from "../../Components/ErrorMessage";
import SingleCard from "../../Components/SingleCard";

export default function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setError("Invalid product ID.");
      return;
    }

    const fetchData = async () => {
      try {
        setError(null);
        setLoading(true);

        const result = await fetchSingleProduct(id);
        setProduct(result);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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
