const BASE_URL: string = "https://fakestoreapi.com/products";

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}?limit=10`);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
