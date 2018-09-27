import React, { Component } from 'react'
import { myCompanyName, invoiceNumber, companyLogo, invoicedCompanyName, myCompanyExtraInfo, invoicedCompanyExtraInfo, items, paymentInfo } from './config'
import './App.css'

function money(v) {
  return v.toLocaleString('en-US', {
    currency       : 'USD',
    currencyDisplay: 'symbol',
    style          : 'currency'
  })
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <img src={companyLogo} className="logo"/>
          <div className="row">
            <div>
              <div>
                <h2>{myCompanyName}</h2>
                {myCompanyExtraInfo.map(it => <div>{it}</div>)}
              </div>
              <div>
                <h3>Billed to</h3>
                <div>{invoicedCompanyName}</div>
                {invoicedCompanyExtraInfo.map(it => <div>{it}</div>)}
              </div>
            </div>
            <div>
              <h2>Invoice #{invoiceNumber}</h2>
              <div>{new Date().toString().match(/[a-z]{3} \d{2} \d{4}/i)[0]}</div>
            </div>
          </div>
        </div>
        <div className="content">
          <table cellPadding={0} cellSpacing={10}>
            <thead>
            <tr>
              <td>#</td>
              <td>Item description</td>
              <td width="10%">Price</td>
              <td width="12%">Quantity</td>
              <td width="15%">Subtotal</td>
            </tr>
            </thead>
            <tbody>
            {
              items.map((it, i) =>
                <tr>
                  <td>{i + 1}</td>
                  <td>{it.title}</td>
                  <td>{money(it.unitPrice)}</td>
                  <td>{it.quantity}</td>
                  <td>{money(it.unitPrice * it.quantity)}</td>
                </tr>
              )
            }
            </tbody>
            <tfoot>
            <tr>
              <td colSpan={4}>Total</td>
              <td>{money(items.reduce((acc, curr) => acc + (curr.unitPrice * curr.quantity), 0))}</td>
            </tr>
            </tfoot>
          </table>
        </div>
        <div className="footer">
          <h3>Payment Instructions</h3>
          <div>
            {
              paymentInfo.map(it => (
                <div key={it.label}><strong>{it.label}:</strong> {it.value}</div>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default App
