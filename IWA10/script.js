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

// Check if futureId exists in holidays object and log the name of the holiday if it does
console.log(holidays[futureId] ? holidays[futureId].name : `ID ${futureId} not created yet`)

// Make a copy of the Christmas holiday object and modify it
const copied = {...holidays[christmas]}
copied.name = 'X-mas Day'
copied.date.setHours(0)
copied.date.setMinutes(0)

// Check if the new date is earlier than the current date
const isEarlier = copied.date.getTime() < holidays[christmas].date.getTime()
console.log('New date is earlier:', isEarlier)

// Log changes made to the copied object
console.log('ID change:', copied.id === holidays[christmas].id)
console.log('Name change:', copied.name)
console.log('Date change:', copied.date.toLocaleDateString('en-GB'))

// Log the first and last holiday dates of the year and a random holiday date

const holidayDates = Object.values(holidays).map(holiday => holiday.date)
const firstHoliday = new Date(Math.min(...holidayDates))
const firstHolidayFormatted = firstHoliday.toLocaleDateString('en-GB')
console.log('First holiday:', firstHolidayFormatted)

const holiday_Dates = Object.values(holidays).map(holiday => holiday.date)
const lastHoliday = new Date(Math.max(...holiday_Dates))
const lastHolidayFormatted = lastHoliday.toLocaleDateString('en-GB')
console.log('Last holiday:', lastHolidayFormatted)

const holiday__Dates = Object.values(holidays).map(holiday => holiday.date)
const randomIndex = Math.floor(Math.random() * holidayDates.length)
const randomHoliday = holiday__Dates[randomIndex]
const randomHolidayFormatted = randomHoliday.toLocaleDateString('en-GB')
console.log('Random holiday:', randomHolidayFormatted)



// const holidayDates = Object.values(holidays).map(holiday => holiday.date)
// const firstHoliday = new Date(Math.min(...holidayDates))
// const lastHoliday = new Date(Math.max(...holidayDates))
// const randomHoliday = holidayDates[Math.floor(Math.random() * holidayDates.length)]
// console.log('First holiday:', firstHoliday.toLocaleDateString('en-GB'))
// console.log('Last holiday:', lastHoliday.toLocaleDateString('en-GB'))
// console.log('Random holiday:', randomHoliday.toLocaleDateString('en-GB'))