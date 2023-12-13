import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./redux/actions";

const Counter = ({ count, increment, decrement }) => {
  return (
    <div>
      <h2>My Redus Counter</h2>
      <h3>Count: {count} </h3>
      <button onclick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProp = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProp)(counter);
