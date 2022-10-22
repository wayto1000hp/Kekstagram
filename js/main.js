const getSum = (a,b) => {
  if (a<0||b<0||a>b){
    return NaN
  }
  a = Math.ceil(a);
  b = Math.floor(b);
  return Math.floor(Math.random() * (b - a + 1)) + a;;
}

const MAX_LENGTH = 140;
const compareLength = (str,maxLength) => str.length < maxLength;
compareLength('qwerty', MAX_LENGTH)

let getRandomNumber = function  (numberOne, numberTwo) {

}