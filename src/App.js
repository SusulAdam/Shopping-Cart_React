import './App.css';
import React, { Component } from 'react'

import Thead from "./components/tableComponents/Thead"
import HeaderShoppingCart from "./components/HeaderShoppingCart";
import Tbody from "./components/tableComponents/Tbody";
import OrderSummary from './components/OrderSummary';

class App extends Component {

  state = {
    productQuantity: 1,
    unitPrice: parseFloat( 11.90 ),
    subTotal: parseFloat( 11.90 ),
    shipping: parseFloat( 23.80 ),
    displayElements: "flex"
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
    this.handleShipping()
  }

  handleSubTotal = () => {
    let subTotal;
    subTotal = this.state.unitPrice
    this.setState( {
      subTotal
    } )
    this.handleShipping()
  }

  handleShipping = () => {
    const freeShipping = 0
    const costShipping = 23.8
    if ( this.state.unitPrice >= 100 ) {
      this.setState( {
        shipping: freeShipping
      } )
    } else {
      this.setState( {
        shipping: costShipping
      } )
    }
  }

  handleGrandTotal = () => {
    let grandTotal;
    grandTotal = parseFloat( this.state.shipping + this.state.subTotal )
    return grandTotal.toFixed( 2 )
  }


  handleProceedToCheckout = () => {
    let displayElements;
    displayElements = "none"
    this.setState( {
      displayElements
    } )
  }

  handleAlert = () => {
    alert( "Your order has been submitted successfully" )
  }

  combindedAlertProceedToCheckout = () => {
    this.handleProceedToCheckout()
    setTimeout( this.handleAlert, 100 );
  }

  deleteProduct = () => {
    this.setState( {
      productQuantity: 0,
      unitPrice: 0,
      subTotal: 0,
      shipping: 0,
    } )

  }


  render () {


    return (
      <>
        <main style={ { display: this.state.displayElements } }>
          <section className="shoppingCart">
            <HeaderShoppingCart subTotal={ this.state.subTotal } combindedAlertProceedToCheckout={ this.combindedAlertProceedToCheckout } />

            <div className="main-container">
              <div className="table-container">
                <table>
                  <Thead />
                  <Tbody
                    states={ this.state }
                    subtractProductQuantity={ this.subtractProductQuantity }
                    addProductQuantity={ this.addProductQuantity }
                    deleteProduct={ this.deleteProduct }
                    handleSubTotal={ this.handleSubTotal }
                  />
                </table>
              </div>

              <OrderSummary
                states={ this.state }
                handleGrandTotal={ this.handleGrandTotal() }
                combindedAlertProceedToCheckout={ this.combindedAlertProceedToCheckout }
              />
            </div>
          </section>
        </main>
      </>
    )
  }
}

export default App