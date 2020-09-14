function FooterComponent(props) {
  return (
    <section className="container">
      <div className="promotion">
        <label htmlFor="promo-code">Have A Promo Code?</label>
        <input type="text" id="promo-code" /> <button type="button" />
      </div>
      <div className="summary">
        <ul>
          <li>
            Subtotal <span>${+props.Subtotal}</span>
          </li>
          <li>
            Tax <span>${+props.tax}</span>
          </li>
          <li className="total">
            Total <span>${+props.tax + props.Subtotal}</span>
          </li>
        </ul>
      </div>
      <div className="checkout">
        <button type="button">Check Out</button>
      </div>
    </section>
  );
}

