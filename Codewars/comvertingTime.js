function to24hourtime(hour, minute, period) {
  return period == "pm"? `${12+hour}:${minute<10?"0"+minute:minute}`:`${hour}:${minute<10?"0"+minute:minute}`;
}
console.log(to24hourtime( 9, 45, "pm"))


function to24hourtime(hour, minute, period) {
  minute = minute<10?"0"+minute: minute
  if(hour ==12) return `${period == 'pm'?hour:"00"}${minute}`
  else if(period == 'pm') return `${hour+12}${minute}`
  else return `${hour<10?"0"+hour:hour}${minute}`
}
