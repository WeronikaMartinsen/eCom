import { useEffect, useState } from "react";
import Loading from "../../Components/Loading";
import ErrorMessage from "../../Components/ErrorMessage";
import { useParams } from "react-router-dom";
import SingleCard from "../../Components/SingleCard";

export default function SingleProductCall() {
  const { id } = useParams();
  console.log("Fetch id form url:", id);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) {
      // If id is still undefined, don't attempt to fetch data
      console.error("ID is undefined!");
      return;
    }
    async function getProduct(url) {
      try {
        setError(false);
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        setProduct(json.data);
        console.log(json);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setLoading(false);
        setError(true);
      }
    }

    getProduct(`https://v2.api.noroff.dev/online-shop/${id}`);
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage />;
  if (!product) return null;

  return (
    <div>
      <SingleCard key={product.id} product={product} />
    </div>
  );
}
