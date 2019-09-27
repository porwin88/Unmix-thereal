// lPaeesh le pemu mnxit ehess rtnisg! Oh, sorry, that was supposed to say: Please help me unmix these strings!

// Somehow these strings have all become mixed up. Help me undo this so I can understand my strings again.

// You will receive a string and must return the unmixed string.

//EXAMPLES:
// unmix("hTsii  s aimex dpus rtni.g") ➞ "This is a mixed up string."
// unmix("123456") ➞ "214365"

const unmix = str => {
  let unmixed = [];
  let arr = str.slice('')
for ( let i = 0; i < arr.length; i++) {
  if (i%2) { 
   unmixed[i-1] = arr[i]
  } else {
    unmixed[i+1] = arr[i];
  }
}
return unmixed.join('');
};

module.exports = unmix;