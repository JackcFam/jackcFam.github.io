function Header(props) {



  return (
    <header className="container">
      <h1>{props.title}</h1>
      <ul className="breadcrumb">
        <li>Home</li>
        <li>Shopping Cart</li>
      </ul>
      <span className="count">3 items in the bag</span>
    </header>
  );
}
