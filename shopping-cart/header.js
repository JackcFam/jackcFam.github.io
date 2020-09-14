function Header(props) {



  return (
    <header className="container">
      <h1>{props.title}</h1>
      <ul className="breadcrumb">
        <li>Home</li>
        <li>Shopping Cart</li>
      </ul>
  <span className="count">{props.numberItems} items</span>
    </header>
  );
}
