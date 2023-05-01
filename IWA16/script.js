// scripts.js

const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
  
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
  
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  
  // Only edit below this comment
const createHtml = (athlete) => {
  //  reassign the variables
  const firstName = data.response.data[athlete].firstName;
  const surname = data.response.data[athlete].surname;
  const id = data.response.data[athlete].id;
  const races = (data.response.data[athlete].races).length
  const date = new Date(data.response.data[athlete].races[races-1].date)
  const time = data.response.data[athlete].races[races-1].time;

  const fragment = document.createDocumentFragment();

  let title = document.createElement('h2');
  title.textContent = id
  fragment.appendChild(title);

  const list = document.createElement('dl');

  const day =  date.getDate().toString().padStart(2, '0');
  const month = MONTHS[date.getMonth()].toString().padStart(2, '0');
  const year = date.getFullYear().toString().padStart(2, '0');
  console.log(month)

  //adds up all the elements in the array to get the total minutes on the specific race day
  let sum = 0
  let i = 0;
  while ( i < time.length ) {
    sum += time[i]
    i++
  }

  //assigns minutes to the remainder of the total time divide by 60
  const minutes = sum % 60;
  const hours = (sum - minutes) / 60;

  list.innerHTML = /* html */ `
      <dt>Athlete: ${firstName +' '+ surname}</dt>
      <dt>Total Races: ${races}</dt>
      <dt>Event Date (Latest): ${day +' '+ month +' '+ year}</dt>
      <dt>Total Time (Latest): ${hours}:${minutes}</dt>
    `;
  fragment.appendChild(list);

  return fragment;
}
// [NM372], [SV782] = data
document.querySelector('[data-athlete = "NM372"]').appendChild(createHtml('NM372'));
document.querySelector('[data-athlete ="SV782"]').appendChild(createHtml('SV782'));