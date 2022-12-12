import { OrderStatus } from './interfaces/order-status';
import { Messages } from '../services/messages';
import { Persistency } from '../services/persistency';
import { ShoppingCart } from './shopping-cart';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  // injeção de dependências
  constructor(
    private readonly cart: ShoppingCart,
    private readonly messages: Messages,
    private readonly persistency: Persistency,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio!');
      return;
    }

    this._orderStatus = 'closed';
    this.messages.sendMessage(
      `Seu pedido com total de ${this.cart.totalWidthDiscount()} foi recebido!`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
