import DateRange from './DateRange'
import { addDays, differenceInWeeks, isFriday } from 'date-fns'
import _logo from './logo.svg'
import React from 'react'

export const companyLogo      = _logo
export const invoiceInterval  = 2 // weeks
export const firstInvoiceDate = '2018-01-12'
export const invoiceDate      = new Date()
export const endDate          = isFriday(invoiceDate) ? invoiceDate : addDays(invoiceDate, -invoiceDate.getDay() - 2)
export const startDate        = addDays(endDate, -11)
export const invoiceNumber    = differenceInWeeks(endDate, firstInvoiceDate) / invoiceInterval + 1

export const invoicedCompanyName      = 'Invoice Company, Inc.'
export const invoicedCompanyExtraInfo = ['company@example.com']

export const myCompanyName      = 'WellGuimaraes Tecnologia'
export const myCompanyExtraInfo = [
  'Lorem Ipsum Dolor',
  'Some Address Here - Florianópolis, SC, Brazil',
  'hello@well.software',
  '+55 48 999999999',
]

export const paymentInfo = [
  { label: 'Transfer type', value: 'Domestic Wire' },
  { label: 'Bank name', value: 'Wells Fargo' },
  { label: 'Account owner', value: 'Your Name Here' },
  { label: 'Routing number', value: '000000000' },
  { label: 'Account number', value: '000000000' },
  { label: 'Account type', value: 'Checking' },
]

export const items = [
  {
    title    : `Software Development (${DateRange({ startDate, endDate })})`,
    unitPrice: 60,
    quantity : 80
  }
]