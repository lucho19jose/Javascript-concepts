import { Product } from "./product";

class Article extends Product {
  constructor(name, price, quantity){
    super(name, price, quantity);
  }
  addToCart(nameProduct, quantity) {
    console.log(`Agregando ${quantity} unidades del artículo ${nameProduct} al carrito`);
    return `Agregando ${quantity} unidades del artículo ${nameProduct} al carrito`;
  }
}

class Service extends Product {
  constructor(name, price, quantity){
    super(name, price, quantity)
  }
  addToCart(service) {
    console.log(`Agregando el servicio ${service} al carrito`);
    return `Agregando el servicio ${service} al carrito`;
  }
}

class Cart {
  constructor(){
    this.products = [];
  }
  addProduct(product) {
    this.products.push(product);
    if(product instanceof Article){
      console.log("instance of Article")
      product.addToCart(product.name, product.quantity);
    }else if(product instanceof Service) {
      console.log("instance of Service")
      product.addToCart(product.name);
    }
  }

  deleteProduct(product) {
    this.products = this.products.filter(item =>item.name != product.name)
    return this.products;
  }

  calculateTotal() {
    let total = 0;
    this.products.forEach(product => {
      total += product.price*product.quantity 
    });
    return total;
  }

  getProducts(){
    return this.products;
  }
}
