export interface PaymentStrategy {
  pay(amount: number): string;
}

export class CreditCardPayment implements PaymentStrategy {
  pay(amount: number):string {
    console.log(`支付 ${amount} 使用信用卡支付`);
    return `支付 ${amount} 使用信用卡支付`
  }
}

export class PayPalPayment implements PaymentStrategy {
  pay(amount: number):string {
    console.log(`支付 ${amount} 使用PayPal支付`);
    return `支付 ${amount} 使用PayPal支付`
  }
}