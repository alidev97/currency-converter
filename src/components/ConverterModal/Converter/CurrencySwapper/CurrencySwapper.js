import { SwapOutlined } from '@ant-design/icons';
import './CurrencySwapper.scss'

export const CurrencySwapper = ({ 
  fromCurrency,
  setFromCurrency,
  toCurrency,
  setToCurrency,
 }) => {

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  }

  return (
    <section className="swapper">
      <SwapOutlined onClick={handleSwap} />
    </section>
  )
};
