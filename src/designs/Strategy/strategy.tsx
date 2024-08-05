import React, { useState } from 'react';
import { PaymentContext } from './PaymentContext';
import { CreditCardPayment, PayPalPayment } from './PaymentStrategy';

const App: React.FC = () => {
  const [paymentContext] = useState(
    new PaymentContext(new CreditCardPayment())
  );

  const [res, setRes] = useState<string>();

  const handleCreditCardPayment = () => {
    paymentContext.setStrategy(new CreditCardPayment());
    setRes(paymentContext.executeStrategy(100));
  };

  const handlePayPalPayment = () => {
    paymentContext.setStrategy(new PayPalPayment());
    setRes(paymentContext.executeStrategy(100));
  };

  return (
    <div>
      <h2>策略模式</h2>
      <div>
        <button onClick={handleCreditCardPayment}>使用信用卡支付</button>
        <button onClick={handlePayPalPayment}>使用PalPay支付</button>
      </div>
      <span className=" text-violet-800">{res}</span>
    </div>
  );
};

export default App;
