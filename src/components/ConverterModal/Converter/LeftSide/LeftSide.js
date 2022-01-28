import { SyncOutlined } from "@ant-design/icons/lib/icons";
import { Radio, Input } from "antd";
import React from "react";
import { currencies } from "../../../../shared/constants";
import "./LeftSide.scss";

const { TextArea } = Input;

export const LeftSide = ({
  data,
  isLoading,
  isFetching,
  fromCurrency,
  toCurrency,
  setFromCurrency,
  leftInputValue,
  setLeftInputValue,
}) => {
  const handleActiveButtonChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleChange = ({ target: { value } }) => {
    const reg = /^-?\d*(\.\d*)?$/;
    if ((!isNaN(value) && reg.test(value)) || value === "" || value === "-") {
      setLeftInputValue(value);
    }
  };

  let conversionRate = String(data?.conversion_rate)

  if (conversionRate.includes('.')) {
    const dotIndex = conversionRate.indexOf(".");
    conversionRate = (
      <>
        {conversionRate.slice(0, dotIndex)}
        <span className="dot">.</span>
        {conversionRate.slice(dotIndex + 1, conversionRate.length)}
      </>
    );
  }

  const customOpacity = isFetching ? 0.5 : 1;

  return (
    <section className="leftSide">
      <h3>У меня есть</h3>
      <Radio.Group
        className="btnActions"
        value={fromCurrency}
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

      <form>
        <TextArea
          onChange={handleChange}
          value={leftInputValue}
          cols={25}
          rows={2}
          className="currencyInput"
        />
      </form>

      <p className="tip" style={{ opacity: customOpacity }}>
        {
          isLoading ? <SyncOutlined spin /> :
          fromCurrency !== toCurrency && (
            <>1 {data?.base_code} = {conversionRate} {data?.target_code}</>)
        }
      </p>
    </section>
  );
};
