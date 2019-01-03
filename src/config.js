import DateRange from './DateRange'
import _logo from './logo.svg'
import React from 'react'
import { getEndDate, getInvoiceNumber, getStartDate,getEnvArray } from './utils'
import format from 'string-template'

const itemTitles     = getEnvArray('PAYMENT_ITEM_TITLE')
const itemUnitPrices = getEnvArray('PAYMENT_ITEM_UNIT_PRICE')
const itemQuantities = getEnvArray('PAYMENT_ITEM_QUANTITY')

export const companyLogo              = _logo
export const invoicedCompanyName      = process.env.REACT_APP_INVOICED_COMPANY_NAME // 'Experiential, Inc.'
export const myCompanyName            = process.env.REACT_APP_MY_COMPANY_NAME
export const firstInvoiceDate         = process.env.REACT_APP_FIRST_INVOICE_DATE
export const invoiceDate              = process.env.REACT_APP_INVOICE_DATE || new Date()
export const invoiceWeeksInterval     = parseInt(process.env.REACT_APP_INVOICE_WEEKS_INTERVAL, 10)
export const endDate                  = getEndDate({ firstInvoiceDate, invoiceDate, invoiceWeeksInterval })
export const startDate                = getStartDate({ invoiceWeeksInterval, endDate })
export const invoiceNumber            = getInvoiceNumber({ endDate, firstInvoiceDate, invoiceWeeksInterval })
export const invoicedCompanyExtraInfo = getEnvArray('INVOICED_COMPANY_EXTRA_INFO')
export const myCompanyExtraInfo       = getEnvArray('MY_COMPANY_EXTRA_INFO')
export const paymentInfo              = getEnvArray('PAYMENT_INFO').map(it => {
  const [label, value] = it.split(':')
  return { label, value }
})

export const items = itemTitles.map((it, i) => {
  return {
    title    : format(it, { invoiceRange: DateRange({ startDate, endDate }) }),
    unitPrice: itemUnitPrices[i],
    quantity : itemQuantities[i]
  }
})