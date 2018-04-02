import React from "react";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
  handleClick = () => {
    this.props.addToOrder(this.props.index);
  }
  render() {
    // use destructuring to set multiple variables
    const { image, name, price, desc, status } = this.props.details;
    const isAvailable = status === "available";
    return (
      <div className="single-fish">
        <li className="menu-fish">
          <img src={image} alt={name} />
          <h3 className="fish-name">{name}</h3>
          <span className="price">{formatPrice(price)}</span>
          <p>{desc}</p>
          <button disabled={!isAvailable} onClick={this.handleClick}>
            {isAvailable ? "Add to Order" : "Sold Out"}
          </button>
        </li>
      </div>
    );
  }
}

export default Fish;
