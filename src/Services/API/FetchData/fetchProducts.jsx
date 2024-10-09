// export async function fetchProducts() {
//   const response = await fetch(import.meta.env.VITE_API_BASE_URL); // Using .env variable for the base URL
//   if (!response.ok) {
//     throw new Error("Failed to fetch products. Please try again later.");
//   }
//   const result = await response.json();
//   if (!result.data || result.data.length === 0) {
//     throw new Error("No products available.");
//   }
//   return result.data;
// }

// export default const fetchProducts = async () => {
//       try {
//         setError(null);
//         setLoading(true);
//         const response = await fetch("https://v2.api.noroff.dev/online-shop");
//         if (!response.ok) {
//           throw new Error("Failed to fetch products. Please try again later.");
//         }
//         const result = await response.json();
//         if (!result.data || result.data.length === 0) {
//           throw new Error("No products available.");
//         }
//         setData(result.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error.message);
//         setLoading(false);
//         setError(error.message);
//       }
//     };

const fetchProducts = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(import.meta.env.VITE_API_BASE_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch products. Please try again later.");
    }

    const result = await response.json();

    // Return only the `data` array, not the full response
    return result.data;
  } catch (error) {
    throw error;
  }
};

export default fetchProducts;
