import React, { Component } from "react";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: "all",
          name: "All",
        },
        {
          key: "chairs",
          name: "Chairs",
        },
        {
          key: "tables",
          name: "Tables",
        },
        {
          key: "couches",
          name: "Couches",
        },
        {
          key: "sofas",
          name: "Sofas",
        },
        {
          key: "сabinets",
          name: "Cabinets",
        },
        {
          key: "armchair",
          name: "Armchair",
        },
      ],
    };
  }

  render() {
    return (
      <div className="categories">
        {this.state.categories.map((el) => (
          <div key={el.key}>{el.name}</div>
        ))}
      </div>
    );
  }
}

export default Categories;
