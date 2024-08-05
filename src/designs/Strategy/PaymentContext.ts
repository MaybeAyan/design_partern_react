import { PaymentStrategy } from './PaymentStrategy';

export class PaymentContext {
  private strategy: PaymentStrategy;

  constructor(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  executeStrategy(amount: number):string {
   return this.strategy.pay(amount);
  }
}