import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en)
const formatter = new TimeAgo()

export default {
  format(date) {
    let label = formatter.format(date, 'mini-minute-now')
    if (label !== 'now') {
      label += ' ago'
    }
    return label
  }
}

