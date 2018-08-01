export function convertDate (date) {
  let respDate = new Date(date)
  let day = respDate.getDate()
  let month = respDate.getMonth()
  let year = respDate.getFullYear()
  if (day < 10) {
    day = '0' + day
  }
  if (month < 10) {
    month = '0' + month
  }
  let newDate = day + '-' + month + '-' + year
  return newDate
}
