// Code your solutions in this file

// Make some thank you cards to the guests

// const guest = ["Guadalupe", "Ollie", "Aki"];
const message = [];

function writeCards(guest, occasion) {
  for (let i = 0; i < guest.length; i++) {
    message.push(`Thank you, ${guest[i]}, for the wonderful ${occasion} gift!`);
  }
  return message;
}

// this will also work below/pass the npm test with only one argument?? Maybe npm test didn't check to see if there should be two parameters instead of one? Below was my first solution, commented out when I learned that I have to have two parameters (from the classmates)

/* function writeCards(guest) {
    for (let i = 0; i < guest.length; i++) {
      message.push(`Thank you, ${guest[i]}, for the wonderful surprise gift!`);
    }
    return message;
  } */

// while loop assignment below

function countDown() {
  let i = 10;
  while (i >= 0) {
    console.log(i--);
  }
}
