import { Messages } from './services/messages';
import { Order } from './entities/order';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';

// criando os itens no carrinho!!!!!
const shoppingCart = new ShoppingCart();
const messages = new Messages();
const persistency = new Persistency();
// passando as dependências
const order = new Order(shoppingCart, messages, persistency);
shoppingCart.addItem(new Product('camisa', 10.58));
shoppingCart.addItem(new Product('cueca', 15.75));
shoppingCart.addItem(new Product('meia', 6.99));
shoppingCart.addItem(new Product('calça', 79.99));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
order.checkout();
console.log(order.orderStatus);
