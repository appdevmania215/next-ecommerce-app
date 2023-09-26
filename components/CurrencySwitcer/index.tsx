import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setCurrency } from "@/store/reducers/currencyInfoSlice";
import { setRates } from "@/store/reducers/currencyInfoSlice";
import { fetchCurrencyRates } from "@/services/currencyService";
import { DropdownContainer, Select, ArrowIcon } from "./styles";

export default function CurrencySwitcher() {
  const currency = useSelector((state: any) => state.currencyInfo.currency);
  const dispatch = useDispatch();

  const handleCurrencyChange = (newCurrency: string) => {
    dispatch(setCurrency(newCurrency));
  };

  useEffect(() => {
    // Fetch currency rates from the API
    const getCurrencyRates = async () => {
      try {
        const data = await fetchCurrencyRates();
        const rates = {
          USD: 1,
          EUR: +(data.EUR / data.USD).toFixed(6),
          GBP: +(data.GBP / data.USD).toFixed(6),
          JPY: +(data.JPY / data.USD).toFixed(6),
        };
        dispatch(setRates(rates));
      } catch (error: any) {
        console.error("Error fetching currency rates:", error.message);
      }
    };

    getCurrencyRates();
  }, [dispatch]);

  return (
    <DropdownContainer>
      <Select
        value={currency}
        onChange={(e) => handleCurrencyChange(e.target.value)}
      >
        <option value="USD">$ USD</option>
        <option value="EUR">€ EUR</option>
        <option value="JPY">¥ JPY</option>
        <option value="GBP">£ GBP</option>
      </Select>
      <ArrowIcon>&#9660;</ArrowIcon>
    </DropdownContainer>
  );
}
