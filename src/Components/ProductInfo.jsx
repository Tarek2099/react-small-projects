const ProducInfo = ({ name, price }) => {
  return (
    <div
      style={{
        width: "300px",
        height: "500px",
        borderRadius: "10px",
        position: "relative",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <h2
        style={{
          backgroundColor: "darkgreen",
          color: "#ffffff",
          width: "100%",
          textAlign: "center",
          padding: "5px 0px",
        }}
      >
        New
      </h2>
      <h2 className="product-name" style={{ textAlign: "center" }}>
        Product Name: {name}
      </h2>
      <h2 className="product-price" style={{ textAlign: "center" }}>
        Price: ${price}
      </h2>
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          padding: "10px",
          textAlign: "center",
        }}
      >
        This is a high-quality product designed to meet your needs. With its
        premium materials and excellent craftsmanship, it offers great value for
        its price. Perfect for everyday use or as a gift!
      </p>
      <button
        className="add-to-cart-button"
        style={{
          position: "absolute",
          bottom: "0px",
          width: "100%",
          padding: "10px 0px",
          backgroundColor: "darkgreen",
          color: "#fff",
          outline: "none",
          border: "none",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};
export default ProducInfo;
