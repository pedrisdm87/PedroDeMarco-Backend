class ProductManager {
  #_products; 

  constructor() {
    this.#_products = [];
  }

  getProducts() {
    return this.#_products;
  }

  #getNextID() {
    if (this.#_products.length === 0) return 1;
    return this.#_products[this.#_products.length - 1].id + 1;
  }

  getProductsById(id) {
    const found = this.#_products.find((item) => item.id === id);
    if (!found) return `[ERR] Not found id product`;
    return found;
  }

  addProduct(product) {
    if (
      !product.title ||
      !product.description ||
      !product.price ||
      !product.thumbnail ||
      !product.code ||
      !product.stock
    )
      return `[ERR] Required fields missing`;

    const found = this.#_products.find((item) => item.code === product.code);

    if (found) {
      return `[ERR] Code already in use`;
    }

    const productToAdd = { id: this.#getNextID(), ...product };
    this.#_products.push(productToAdd);
    return productToAdd;
  }
}

const pm = new ProductManager(); 

const product1 = {
  title: `Oppenheimer`,
  description: `Biografia`,
  price: 2500,
  thumbnail: `Movie.jpg`,
  code: 1,
  stock: 200,
};
const product2 = {
  title: `Barbie`,
  description: `Infantil`,
  price: 2500,
  thumbnail: `Movie.jpg`,
  code: 2,
  stock: 200,
};

pm.addProduct(product1);
pm.addProduct(product2);


console.log(pm.getProducts()); 


