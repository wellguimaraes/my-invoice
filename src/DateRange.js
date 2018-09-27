import { format, isSameMonth, isSameYear } from 'date-fns'
import PropTypes from 'prop-types'

export default function DateRange({ startDate, endDate }) {
  if (!startDate || !endDate)
    return ''

  let startFormat = 'MMM DD, YYYY '
  let endFormat   = ' MMM DD, YYYY'

  if (isSameMonth(startDate, endDate)) {
    startFormat = 'MMM DD'
    endFormat   = 'DD, YYYY'
  } else if (isSameYear(startDate, endDate)) {
    startFormat = 'MMM DD '
  }

  // noinspection JSConstructorReturnsPrimitive
  return [ format(startDate, startFormat), format(endDate, endFormat) ].join('-')
}

DateRange.propTypes = {
  startDate: PropTypes.any,
  endDate  : PropTypes.any
}