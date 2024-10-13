const fetchProducts = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(import.meta.env.VITE_API_BASE_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch products. Please try again later.");
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    throw error;
  }
};

export default fetchProducts;
