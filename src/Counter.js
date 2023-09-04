import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="d-block">
        <p className="d-inline m-2">
          <b>{this.props.item.itemname}</b> {this.formatCount()}
        </p>
        <button
          className="btn btn-primary btn-sm d-inline m-2"
          onClick={() => this.props.onIncrement(this.props.item)}
        >
          +
        </button>
        <button
          className="btn btn-primary btn-sm d-inline m-2"
          onClick={() => this.props.onDecrement(this.props.item)}
        >
          -
        </button>
      </div>
    );
  }

  formatCount() {
    return this.props.item.value === 0 ? <b>Zero</b> : this.props.item.value;
  }
}

export default Counter;
