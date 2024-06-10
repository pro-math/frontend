export function formatDate(isoDate) {
  const date = new Date(isoDate)
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false // Use 24-hour format
  }

  const formattedDate = date.toLocaleString('en-GB', options).replace(',', ' ')
  return formattedDate.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$2.$1.$3')
}
