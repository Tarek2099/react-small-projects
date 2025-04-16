const ProductList = () => {
  const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
    { id: 4, name: "Product 4", price: 400 },
    { id: 5, name: "Product 5", price: 500 },
    { id: 6, name: "Product 6", price: 600 },
    { id: 7, name: "Product 7", price: 700 },
    { id: 8, name: "Product 8", price: 800 },
    { id: 9, name: "Product 9", price: 900 },
    { id: 10, name: "Product 10", price: 1000 },
  ];
  return products.map(({ id, name, price }) => (
    <div className="product-card" key={id}>
      <h2 className="product-name">Product Name: {name}</h2>
      <h2 className="product-price">Price: ${price}</h2>
      <button className="add-to-cart-button">Add to Cart</button>
    </div>
  ));
};

export default ProductList;
