import { Radio } from "antd";
import React, { useEffect } from "react";
import { currencies } from "../../../../shared/constants";
import "./RightSide.scss";

export const RightSide = ({
  data,
  leftInputValue,
  toCurrency,
  setToCurrency,
  resultValue,
  setResultValue,
  fromCurrency,
}) => {
  useEffect(() => {
    if (fromCurrency === toCurrency) {
      setResultValue(leftInputValue);
    } else if (data?.conversion_rate) {
      setResultValue(data?.conversion_rate * leftInputValue);
    }
  }, [
    data?.conversion_rate,
    fromCurrency,
    leftInputValue,
    toCurrency,
    setResultValue,
  ]);

  const handleActiveButtonChange = (e) => {
    setToCurrency(e.target.value);
  };

  let finalValue = String(resultValue);

  if (finalValue.includes('.')) {
    const dotIndex = finalValue.indexOf(".");
    finalValue = (
      <>
        {finalValue.slice(0, dotIndex)}
        <span className="dot">.</span>
        {finalValue.slice(dotIndex + 1, finalValue.length)}
      </>
    );
  }

  return (
    <section className="rightSide">
      <h3>Хочу приобрести</h3>
      <Radio.Group
        className="btnActions"
        value={toCurrency}
        onChange={handleActiveButtonChange}
      >
        {currencies.map((currency) => {
          return (
            <Radio.Button key={currency} value={currency}>
              {currency}
            </Radio.Button>
          );
        })}
      </Radio.Group>

      <div className="result">
        {finalValue || '...'}
      </div>

    </section>
  );
};
