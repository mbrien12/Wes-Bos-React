import React from "react";
import PropTypes from 'prop-types';

// If only has a render method should instead be a STATELESS FUNCTIONAL COMPONENT

const Header = (props) => (
  <header className="top">
  <h1>
    Catch
    <span className="ofThe">
      <span className="of">of</span>
      <span className="the">the</span>
    </span>
    Day
  </h1>
  <h3 className="tagline">
    <span>{ props.tagline}</span>
  </h3>
</header>
)

Header.propTypes = {
  tagline: PropTypes.string.isRequired
}

export default Header;
 
