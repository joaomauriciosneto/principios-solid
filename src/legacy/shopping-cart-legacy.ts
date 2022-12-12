type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  listAll(): void {
    console.log('Listando todos os itens...');
    console.table(this._items.map((items) => items));
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  total(): number {
    // esse "+", foi por conta do método "toFixed", transformando par number... pq toFixed retorna uma string
    return +this._items.reduce((ac, value) => ac + value.price, 0).toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho está vazio!');
    }

    this._orderStatus = 'closed';
    this.sendMessage(`Seu pedido com total de ${this.total()} foi recebido!`);
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log('Mensagem enviada:', msg);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso!');
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo!');

    this._items.length = 0;
  }
}

// criando os itens no carrinho!!!!!
const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: 'camisa', price: 10 });
shoppingCart.addItem({ name: 'cueca', price: 15 });
shoppingCart.addItem({ name: 'meia', price: 5 });
shoppingCart.addItem({ name: 'calça', price: 89.7 });
shoppingCart.listAll();
shoppingCart.removeItem(2);
shoppingCart.listAll();

console.log(shoppingCart.items);
console.log(shoppingCart.total());
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
