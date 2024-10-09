import { useEffect, useState } from "react";
import fetchProducts from "./FetchData/fetchProducts";
import Loading from "../../Components/Loading";
import ErrorMessage from "../../Components/ErrorMessage";
import ProductCard from "../../Components/ProductCard";

export default function ProductList({ searchInput }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        setLoading(true);
        const result = await fetchProducts();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
