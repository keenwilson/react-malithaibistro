import React from "react";

const Drinks = () => {
  return (
    <div className="container">
      <h2 className="heading-title text-center underline-60">Drinks</h2>
      <div className="row">
        <div className="col-12 col-md-6 menu-list__description">
          <h2 className="menu-item__title">Bubble Drinks</h2>
          <p className="menu-item__price">$3.95</p>
          <table className="table menu-item__description">
            <tbody>
              <tr>
                <td>Taro</td>
                <td>Banana</td>
              </tr>
              <tr>
                <td>Mango</td>
                <td>Red Bean</td>
              </tr>
              <tr>
                <td>Watermelon</td>
                <td>Strawberry</td>
              </tr>
              <tr>
                <td>Milk Tea</td>
                <td>Honey Dew</td>
              </tr>
              <tr>
                <td>Coconut</td>
                <td />
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-12 col-md-6 menu-list__description">
          <h2 className="menu-item__title">Soft Drinks</h2>
          <table className="table">
            <tbody>
              <tr>
                <td>Thai Iced Tea</td>
                <td className="menu-item__price text-right">$3.25</td>
              </tr>
              <tr>
                <td>Thai Iced Coffee</td>
                <td className="menu-item__price text-right">$3.25</td>
              </tr>
              <tr>
                <td>Hot Tea & Iced Tea</td>
                <td className="menu-item__price text-right">$2.95</td>
              </tr>
              <tr>
                <td>Hot Coffee</td>
                <td className="menu-item__price text-right">$2.95</td>
              </tr>
            </tbody>
          </table>

          <h2 className="menu-item__title">Fountain Drinks</h2>
          <p className="menu-item__price">$2.95</p>
        </div>
      </div>
    </div>
  );
};

export default Drinks;
