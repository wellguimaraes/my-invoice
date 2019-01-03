import { addDays, addWeeks, differenceInWeeks } from 'date-fns'

export function getEndDate({ firstInvoiceDate, invoiceDate, invoiceWeeksInterval }) {
  return addWeeks(firstInvoiceDate, Math.round(differenceInWeeks(invoiceDate, firstInvoiceDate) / invoiceWeeksInterval) * invoiceWeeksInterval)
}

export function getStartDate({ invoiceWeeksInterval, endDate }) {
  return addDays(endDate, -(invoiceWeeksInterval * 7 - 1))
}

export function getInvoiceNumber({ endDate, firstInvoiceDate, invoiceWeeksInterval }) {
  return differenceInWeeks(endDate, firstInvoiceDate) / invoiceWeeksInterval + 1
}

export function getEnvArray(name) {
  const values = []

  let index = 0

  while (process.env[`REACT_APP_${name}_${index}`]) {
    values.push(process.env[`REACT_APP_${name}_${index}`])
    index++
  }

  return values
}