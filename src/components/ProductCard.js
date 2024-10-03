import React from "react";

const ProductCard = (props) => {
  return (
    <div className="ui items ">
      <div className="item">
        <div className="content">
          <h2 className="header">{props.product.name}</h2>
          <div className="meta">
            <span>Description:{props.product.description}</span>
          </div>
          <div className="description">
            <p></p>
          </div>
          <div className="extra">
            <div>Price: PKR {props.product.price}</div>
            <div>Color:{props.product.color}</div>
            <div>Department:{props.product.department}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
