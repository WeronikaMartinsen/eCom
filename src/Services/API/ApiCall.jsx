import { useEffect, useState } from "react";
import Loading from "../../Components/Loading";
import ErrorMessage from "../../Components/ErrorMessage";
import ProductCard from "../../Components/ProductCard";

export default function ApiCall({ searchInput }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setError(false);
      setLoading(true);
      const response = await fetch("https://v2.api.noroff.dev/online-shop");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      setLoading(false);
      setError(true);
    }
  };

  // Filter the products based on search input
  const filteredData = searchInput
    ? data.filter((product) =>
        product.title.toLowerCase().includes(searchInput.toLowerCase())
      )
    : data;
  console.log(filteredData);

  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4 custom-max-width">
      {loading && <Loading />}
      {error && <ErrorMessage />}
      {Array.isArray(filteredData) && filteredData.length > 0 ? (
        filteredData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}
