


const PRODUCT = [
  {id: 1,
    name: 'Product1',
    description: 'Descript1',
    image: 'https://www.myjewishlearning.com/wp-content/uploads/2009/04/dog.jpg',
    price: 10,
    quantity: 200

  },
  {id: 2,
    name: 'Product1',
    description: 'Descript1',
    image: 'https://via.placeholder.com/200x150',
    price: 20,
    quantity: 250

  }
]


ReactDOM.render(
    <main>
  <Header numberItems={100} title="Shopping cart 1"></Header>
  <Header numberItems={200} title="Shopping cart 2"></Header>
  <Header numberItems={300} title="Shopping cart 3"></Header>
  <Body products={PRODUCT}></Body>
  <FooterComponent Subtotal={tinhTien()} tax={tinhTien()*10/100} Total ={26}></FooterComponent>
</main>
,
    document.getElementById('root')
);

function tinhTien() {
  let tong =0;
  for(let i = 0; i < PRODUCT.length; i++) {
      tong += PRODUCT[i].price*PRODUCT[i].quantity;
  }
  return tong;
}
