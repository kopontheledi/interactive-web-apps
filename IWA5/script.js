const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = 0

let locations = 'RSA'
let currency = 'R'

let shoes = 300 * 1;
let toys = 100 * 5;
let shirts = 150 * NONE_SELECTED;
let batteries = 35 * 2;
let pens = 5 * NONE_SELECTED;

let shipping;

if (locations === 'RSA') {
  shipping = 400;
} else if (locations === 'NAM') {
  shipping = 600;
} else if (locations === 'NK') {
  console.log(BANNED_WARNING);
} else {
  shipping = 800;
}

let subtotal = shoes + toys + shirts + batteries + pens;

if (subtotal >= 1000 && locations !== 'NK') {
  if (location === 'RSA' || (locations === 'NAM' && customers === 1)) {
    shipping = 0;
  } else {
    console.log(FREE_WARNING);
  }
}

if (shipping === 0 && customers !== 1) {
  console.log(FREE_WARNING);
} else {
  console.log('Price:', currency, subtotal + shipping);
}
