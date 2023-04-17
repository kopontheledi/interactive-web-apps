// scripts.js

const STATUS_MAP = {
  shelf: {
    color: "green",
    canReserve: true,
    canCheckout: true,
    canCheckIn: false,
  },
  reserved: {
    color: "blue",
    canReserve: false,
    canCheckout: true,
    canCheckIn: false,
  },
  overdue: {
    color: "red",
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
  checkedOut: {
    color: "orange",
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
};

// Edit below line
const book1 = {
  status: document.querySelector("#book1 .status"),
  reserve: document.querySelector("#book1 .reserve"),
  checkout: document.querySelector("#book1 .checkout "),
  checkin: document.querySelector("#book1 .checkin "),
};


const book2 = {
  status: document.querySelector("#book2 .status"),
  reserve: document.querySelector("#book2 .reserve"),
  checkout: document.querySelector("#book2 .checkout"),
  checkin: document.querySelector(" #book2 .checkin"),
};
const book3 = {
  status: document.querySelector("#book3 .status"),
  reserve: document.querySelector(" #book3 .reserve"),
  checkout: document.querySelector(" #book3 .checkout"),
  checkin: document.querySelector(" #book3 .checkin"),
};

/**PART2 */

//BOOK 1

book1.checkin.style.color = ""; //'' no styling color, default
book1.status.style.color = STATUS_MAP.overdue.color;

// if (STATUS_MAP.overdue.canReserve == true) {
//   book1.reserve.enabled = true;
// } else {
//   book1.reserve.disabled = true;
// }
book1.reserve = STATUS_MAP.overdue.canReserve ? book1.reserve.enabled = true : book1.reserve.disabled = true;

// if (STATUS_MAP.overdue.canCheckout == true) {
//     book1.checkout.enabled = true 
// }else {
//     book1.checkout.disabled = true
// } 
book1.checkout = STATUS_MAP.overdue.canCheckout? book1.checkout.enabled = true : book1.checkout.disabled = true;

// if (STATUS_MAP.overdue.canCheckin == true) {
//     book1.checkin.enabled = true 
// }else {
//     book1.checkin.disabled = true
//} 
book1.checkin = STATUS_MAP.overdue.canCheckIn ? book1.checkin.enabled = true : book1.checkin.disabled = true;

//BOOK 2

book2.checkin.style.color = "";
book2.status.style.color = STATUS_MAP.reserved.color;

book2.reserve = STATUS_MAP.reserved.canReserve ? book2.reserve.enabled = true : book2.reserve.disabled = true;

book2.checkout = STATUS_MAP.reserved.canCheckout ? book2.reserve.enabled = true : book2.reserve.disabled = true;

book2.checkin = STATUS_MAP.reserved.canCheckIn ? book2.checkin.enabled = true : book2.checkin.disabled = true;

//BOOK 3

book3.checkin.style.color = "";
book3.status.style.color = STATUS_MAP.reserved.color;

book3.reserve = STATUS_MAP.shelf.canReserve ? book3.reserve.enabled = true : book3.reserve.disabled = true;

book3.checkout = STATUS_MAP.shelf.canCheckout ? book3.checkout.enabled = true : book3.checkin.disabled = true;

book3.checkin = STATUS_MAP.shelf.canCheckIn ? book3.checkin.enabled = true : book3.checkin.disabled = true;


0