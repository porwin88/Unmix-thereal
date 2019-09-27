// lPaeesh le pemu mnxit ehess rtnisg! Oh, sorry, that was supposed to say: Please help me unmix these strings!

// Somehow these strings have all become mixed up. Help me undo this so I can understand my strings again.

// You will receive a string and must return the unmixed string.

//EXAMPLES:
// unmix("hTsii  s aimex dpus rtni.g") ➞ "This is a mixed up string."
// unmix("123456") ➞ "214365"

const unmix = str => {
  let temp = '';
  for(let i = 0; i < str.length; i+= 2) {
    temp += str[i+1];
    temp += str[i];
  }
  return temp;
};

module.exports = unmix;