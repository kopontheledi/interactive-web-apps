const currentYear = new Date().getFullYear()
const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}
const christmas = 6
const futureId = 9
// Do not change code above this comment
console.log(holidays[futureId.name] || `ID ${futureId} not created yet`)
copied = holidays[christmas]
copied = { id: (holidays[christmas]).id , name: 'X-mas Day', date: new Date(`25 December ${currentYear}`)}
correctDate = copied.date
isEarlier = copied.date < holidays[6].date
console.log('New date is earlier:', isEarlier)
dateformat = ((copied.date).toLocaleDateString('en-GB'))
if (isEarlier) {
console.log('ID change:', holidays[christmas].id != copied.id)
console.log('Name change:', holidays[christmas].name = copied.name || copied.name)
console.log('Date change:', dateformat)
}
correctdate0 = {date: new Date(`16 December ${currentYear}`)}
const firstHolidayTimestamp = [
    correctdate0.date.getDate(),
    holidays[1].date.getDate(),
    holidays[2].date.getDate(),
    holidays[3].date.getDate(),
    holidays[4].date.getDate(),
    holidays[5].date.getDate(),
    holidays[6].date.getDate(),
    holidays[7].date.getDate(),
    holidays[8].date.getDate(),
]
const lastHolidayTimestamp = [
   correctdate0.date.getMonth(),
    holidays[1].date.getMonth(),
    holidays[2].date.getMonth(),
    holidays[3].date.getMonth(),
    holidays[4].date.getMonth(),
    holidays[5].date.getMonth(),
    holidays[6].date.getMonth(),
    holidays[7].date.getMonth(),
    holidays[8].date.getMonth(),
]
const firstDay = Math.min(...firstHolidayTimestamp)
const firstMonth = Math.min(...lastHolidayTimestamp)+1
const lastDay = Math.max(...firstHolidayTimestamp)
const lastMonth = Math.max(...lastHolidayTimestamp)+1
console.log(`${firstDay.toString.length === 1 ? ('0'+firstDay): (firstDay)}/${firstMonth.toString.length === 1 ? ('0'+firstMonth): (firstMonth)}/${currentYear}`)
console.log(`${lastDay.toString.length === 2 ? ('0'+lastDay): (lastDay)}/${lastMonth.toString.length === 2 ? ('0'+lastMonth): (lastMonth)}/${currentYear}`)
const randomHoliday = Math.ceil(Math.random()*8)
console.log((holidays[randomHoliday]).name)








