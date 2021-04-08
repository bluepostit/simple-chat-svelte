import dateFormatter from './date-formatter'

export function fuzzyDate(node, {date, interval=1000}) {
  const toUpdate = (interval !== 0)
  const formatDate = () => {
    node.innerText = dateFormatter.format(date)
  }

  const task = toUpdate && setInterval(formatDate, interval)
  formatDate()

  return {
    destroy() {
      toUpdate && clearInterval(task)
    }
  }
}
