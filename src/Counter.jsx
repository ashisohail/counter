import React from "react";
import { connect, useSelector } from "react-redux";
import { increment, decrement } from "./redux/actions";

const Counter = ({ increment, decrement }) => {
  const count = useSelector((state) => state.counter.count);
  return (
    <div>
      <h2>My Redus Counter</h2>
      <h3>Count: {count} </h3>
      <button onClick={increment}>Increment</button>
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

export default connect(mapStateToProps, mapDispatchToProp)(Counter);
