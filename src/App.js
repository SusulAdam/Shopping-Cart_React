import './App.css';
import editImg from "./images/edit-img.png";
import headPhones from "./images/headphones.png";
import xImg from "./images/x-img.png";
import React, { Component } from 'react'
import Thead from "./components/tableComponents/Thead"

class App extends Component {

  state = {
    productQuantity: 1,
    unitPrice: parseFloat( 11.90 ),
    subTotal: parseFloat( 0 ),
  }

  addProductQuantity = () => {
    const headPhonePrice = 11.90
    this.setState( prevState => {
      return ( { ...prevState, unitPrice: this.state.unitPrice + headPhonePrice, productQuantity: this.state.productQuantity + 1 } )
    } )
  }

  subtractProductQuantity = () => {
    const headPhonePrice = 11.90
    this.setState( prevState => {
      return ( { ...prevState, unitPrice: this.state.unitPrice - headPhonePrice, productQuantity: this.state.productQuantity - 1 } )
    } )
  }

  handleSubTotal = () => {
    let subTotal;
    subTotal = this.state.unitPrice
    this.setState( {
      subTotal
    } )
  }

  




  render () {
    return (
      <>
        <main>
          <section className="shoppingCart">
            <div className="header-container">
              <h1 className="header-container__h1">Shopping Cart</h1>
              <button className="header-container__handleCheckout">Proceed to checkout</button>
            </div>

            <div className="main-container">
              <div className="table-container">
                <table>
                  <Thead />

                  <tbody>
                    <tr className="table-container__elements">
                      <td>
                        <img className="table__container__close" src={ xImg } alt="close-button" />
                      </td>
                      <td>
                        <img className="table__container__headphones" src={ headPhones } alt="headphones" />
                      </td>
                      <td>Headphones</td>
                      <td>${ this.state.unitPrice.toFixed( 2 ) } </td>
                      <td>
                        <div className="table-container__items-box">
                          <button
                            disabled={ this.state.productQuantity === 1 ? true : false }
                            onClick={ this.subtractProductQuantity }
                          >-</button>

                          <p>{ this.state.productQuantity }</p>
                          <button
                            onClick={ this.addProductQuantity }
                          >+</button>

                          <img src={ editImg } alt="edit-png" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td class="table-container__updateBtn">
                        <button
                          onClick={ this.handleSubTotal }
                        >Update Shopping Cart </button>
                      </td>
                    </tr>

                  </tbody>
                </table>

              </div>

              <div class="orderSummary">
                <div class="orderSummary__shipping-box">
                  <p class="orderSummary__shipping-subtitle">shipping</p>
                  <p class="orderSummary__shipping-price">{ this.state.subTotal >= 100 ? "0.00$" : "$23.8" }</p>
                </div>
                <div class="orderSummary__cartTotal-subtitle-box">
                  <p class="orderSummary__cartTotal-subtitle">cart totals</p>
                </div>
                <div class="orderSummary__cartTotals-boxs">
                  <div class="orderSummary__cartTotals-Prices-boxs">
                    <div class="orderSummary__subtotal-box">
                      <p class="orderSummary__subtotal-subtitle">Subtotal</p>
                      <p class="orderSummary__subtotal-price">${ this.state.subTotal.toFixed( 2 ) }</p>
                    </div>
                    <div class="orderSummary__granTotal-box">
                      <p class="orderSummary__grandTotal-subtitle">Grand Total</p>
                      <p class="orderSummary__grandTotal-price">$23.80</p>
                    </div>
                  </div>
                  <button class="orderSummary__checkout-cart">Proceed to checkout</button>
                </div>
              </div>

            </div>


          </section>
        </main>
      </>
    )
  }
}

export default App