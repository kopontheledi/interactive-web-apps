const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = 0

const locations = 'RSA'
const currency = 'R'

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED;

//add currency and shipping = null
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


/* if (locations === 'RSA') {
  shipping = 400;
  currency = 'R';
} else {
  currency = '$';
  shipping = location === 'NAM' ? 600 : 800
}*/



const subtotal = shoes + toys + shirts + batteries + pens;

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
