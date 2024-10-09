const fetchSingleProduct = async (id) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch the product. Please try again later.");
    }

    const json = await response.json();
    if (!json.data) {
      throw new Error("Product not found.");
    }

    return json.data;
  } catch (error) {
    throw error;
  }
};

export default fetchSingleProduct;
