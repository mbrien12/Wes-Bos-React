import React from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();
  static PropTypes = {
    history: PropTypes.object
  }

  goToStore = (event) => {
    event.preventDefault();
    const storeName = this.myInput.value.value;
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <React.Fragment>
        <p>Fish!</p>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please enter a store</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit store → </button>
        </form>
      </React.Fragment>
    );
  }
}

export default StorePicker;
