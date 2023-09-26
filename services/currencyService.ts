const BASE_URL: string = "http://api.exchangeratesapi.io/v1/latest";
const ACCESS_KEY: string = "4e93b620d2ba6c051b4893ec353af266";

export const fetchCurrencyRates = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}?access_key=${ACCESS_KEY}&symbols=USD,EUR,GBP,JPY`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch currency rates");
    }
    const data = await response.json();
    if (data.success) {
      return data.rates;
    } else {
      throw new Error("Failed to fetch currency rates");
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};
