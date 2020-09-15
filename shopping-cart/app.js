
const PRODUCT = [
  {id: 1,
    name: 'Product1',
    description: ' Mo ta san pham so 1',
    image: 'https://www.myjewishlearning.com/wp-content/uploads/2009/04/dog.jpg',
    price: 10,
    quantity: 1000

  },
  {id: 2,
    name: 'Product1',
    description: 'Descript1',
    image: 'https://via.placeholder.com/200x150',
    price: 20,
    quantity: 250

  }
]

function App() {
  const [products, setProducts] = React.useState(PRODUCT);
  function addProduct() {
    const newProduct =[...products];
    newProduct.push([
      {
        id: 3,
        name: "Laptop DELL 223",
        description: "Description 3",
        image: "https://via.placeholder.com/200x150",
        price: 77.45,
        quantity: 11,
      }
    ]);
    setProducts(
      newProduct
    );
  }
  function tinhTien() {
    let tong =0;
    for(let i = 0; i < products.length; i++) {
        tong += products[i].price*products[i].quantity;
    }
    return tong;
  }
  function sumItems() {
    let items = 0;
    for(let i = 0; i < products.length; i++) {
      items += products[i].quantity;
    }
    return items;
  }
  return (
    <main>
    <Header numberItems={sumItems()} title="Shopping cart 1"></Header>
    <Body products={products}></Body>
    <button onClick={addProduct}>ADD PRODUCT</button>
    <FooterComponent Subtotal={tinhTien()} tax={tinhTien()*10/100} Total ={26}></FooterComponent>
  </main>
  );
}

ReactDOM.render(
<App></App>
,
    document.getElementById('root')
);
