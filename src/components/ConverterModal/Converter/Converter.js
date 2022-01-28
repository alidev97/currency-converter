import React, { useState } from "react";
import { CurrencySwapper } from "./CurrencySwapper/CurrencySwapper";
import { LeftSide } from "./LeftSide/LeftSide";
import { RightSide } from "./RightSide/RightSide";
import "./Converter.scss";
import { useGetCurrencies } from "../../../shared/queries";

export const Converter = () => {
  const [fromCurrency, setFromCurrency] = useState("RUB");
  const [toCurrency, setToCurrency] = useState("USD");

  const { data, isLoading, isFetching } = useGetCurrencies(
    fromCurrency,
    toCurrency
  );

  const [leftInputValue, setLeftInputValue] = useState(1);
  const [resultValue, setResultValue] = useState("");

  const customOpacity = isLoading ? 0.5 : 1;

  return (
    <section className="appView" style={{ opacity: customOpacity }}>
      <LeftSide
        data={data}
        isLoading={isLoading}
        isFetching={isFetching}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
        setFromCurrency={setFromCurrency}
        leftInputValue={leftInputValue}
        setLeftInputValue={setLeftInputValue}
      />
      <CurrencySwapper
        fromCurrency={fromCurrency}
        setFromCurrency={setFromCurrency}
        toCurrency={toCurrency}
        setToCurrency={setToCurrency}
      />
      <RightSide
        data={data}
        leftInputValue={leftInputValue}
        toCurrency={toCurrency}
        setToCurrency={setToCurrency}
        resultValue={resultValue}
        setResultValue={setResultValue}
        fromCurrency={fromCurrency}
      />
    </section>
  );
};
