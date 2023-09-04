import React, { Component } from "react";
import Counter from "./Counter";

class CounterList extends Component {
  state = {
    itemlist: [
      { id: 1, value: 0, itemname: "iPhone", price: 150 },
      { id: 2, value: 0, itemname: "iPad", price: 200 },
      { id: 3, value: 0, itemname: "iMac", price: 300 },
      { id: 4, value: 0, itemname: "iBook", price: 500 },
    ],
  };

  handleIncrement = (item) => {
    const updatedItemList = this.state.itemlist.map((i) =>
      i.id === item.id ? { ...i, value: i.value + 1 } : i
    );
    this.setState({ itemlist: updatedItemList });
  };

  handleDelete = (itemId) => {
    const updatedItemList = this.state.itemlist.filter(
      (item) => item.id !== itemId
    );
    this.setState({ itemlist: updatedItemList });
  };

  handleReset = () => {
    const resetItemList = this.state.itemlist.map((item) => ({
      ...item,
      value: 0,
    }));
    this.setState({ itemlist: resetItemList });
  };

  handleDecrement = (item) => {
    const updatedItemList = this.state.itemlist.map((i) =>
        i.id === item.id ? { ...i, value: i.value - 1 } : i
    );
    this.setState({ itemlist: updatedItemList });
    };

  calculateTotalPrice = () => {
    return this.state.itemlist.reduce(
      (total, item) => total + item.value * item.price,
      0
    );
  };

  render() {
    return (
      <div>
        <div className="d-inline mx-2">ราคารวม {this.calculateTotalPrice()} </div>
        <button
          onClick={this.handleReset}
          className="btn btn-sm btn-warning d-inline"
        >
          Reset
        </button>
        {this.state.itemlist.map((item) => (
          <Counter
            key={item.id}
            item={item}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default CounterList;