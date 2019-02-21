import DateRange from './DateRange'
import _logo from './logo.svg'
import React from 'react'
import { getEndDate, getInvoiceNumber, getStartDate } from './utils'
import format from 'string-template'
import config from '../config'

export const companyLogo = _logo
export const invoicedCompanyName = config.invoicedCompanyName
export const myCompanyName = config.myCompanyName
export const firstInvoiceDate = config.firstInvoiceDate
export const invoiceDate = config.invoiceDate || new Date()
export const invoiceWeeksInterval = parseInt(config.invoiceWeeksInterval, 10)
export const endDate = getEndDate({
  firstInvoiceDate,
  invoiceDate,
  invoiceWeeksInterval,
})
export const startDate = getStartDate({ invoiceWeeksInterval, endDate })
export const invoiceNumber = getInvoiceNumber({
  endDate,
  firstInvoiceDate,
  invoiceWeeksInterval
})
export const invoicedCompanyExtraInfo = config.invoicedCompanyExtraInfo
export const myCompanyExtraInfo = config.myCompanyExtraInfo
export const paymentInfo = config.paymentInfo.map(it => {
  const [label, value] = it.split(':')
  return { label, value }
})

export const items = config.paymentItems.map((it, i) => {
  return {
    ...it,
    title: format(it.title,
      { invoiceRange: DateRange({ startDate, endDate }) }),
  }
})