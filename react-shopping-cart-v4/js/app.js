
const PRODUCTS = [
  {
    id: 10,
    name: "Iphone 12",
    description: "Description 1",
    image: "https://via.placeholder.com/200x150",
    price: 1000,
    quantity: 20,
  },
  {
    id: 20,
    name: "Laptop DELL",
    description: "Description 2",
    image: "https://via.placeholder.com/200x150",
    price: 7,
    quantity: 1,
  },
  {
    id: 1,
    name: "Macbook Pro",
    description: "Description 2",
    image: "https://via.placeholder.com/200x150",
    price: 7,
    quantity: 1,
  },
];

function App() {
  const [products, setProducts] = React.useState(PRODUCTS);

  const taxPercent = 0.1; // Thuế = 10% subTotal
  let numberItems = 0;
  let subTotal = 0;
  let productId = 0;

  // Tính tổng số sản phẩm và tổng tiền
  for (const product of products) {
    numberItems += product.quantity;
    subTotal += product.price * product.quantity;
  }
  let tax = (subTotal * taxPercent);

  function addProduct() {
    // Tạo 1 mảng mới giống hệt mảng cũ
    const newProducts = [...products];

    // Thêm phần tử vào mảng mới
    newProducts.push({
      id: 3,
      name: "Laptop DELL 3",
      description: "Description 2",
      image: "https://via.placeholder.com/200x150",
      price: 12.99,
      quantity: 11,
    });

    // Cập nhật state
    setProducts(newProducts);
  }

  //TODO: Xóa sản phẩm
  function removeProduct(productId,productName) {
   let result = confirm("Are you sure you want to remove: "+productName);
   if(result) {
     let removeChild = document.getElementById("li-"+productId);
      removeChild.remove();
   }
  }
  return (
    <main>
      <CartHeader
        title="Shopping Cart"
        numberItems={numberItems}
        addProduct={addProduct}
      />

      <CartBody products={products} removeProduct={removeProduct}/>

      <CartFooter subTotal={subTotal} tax={tax} />
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
