import { useEffect, useState } from "react";
import Loading from "../../Components/Loading";
import ErrorMessage from "../../Components/ErrorMessage";
import ProductCard from "../../Components/ProductCard";

export default function ApiCall({ searchInput }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setError(null);
      setLoading(true);
      const response = await fetch("https://v2.api.noroff.dev/online-shop");
      if (!response.ok) {
        throw new Error("Failed to fetch products. Please try again later.");
      }
      const result = await response.json();
      if (!result.data || result.data.length === 0) {
        throw new Error("No products available.");
      }
      setData(result.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      setLoading(false);
      setError(error.message);
    }
  };

  // Filter the products based on search input
  const filteredData = searchInput
    ? data.filter((product) =>
        product.title.toLowerCase().includes(searchInput.toLowerCase())
      )
    : data;

  return (
    <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4 custom-max-width">
      {loading && <Loading />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && (
        <>
          {Array.isArray(filteredData) && filteredData.length > 0 ? (
            filteredData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </>
      )}
    </div>
  );
}
