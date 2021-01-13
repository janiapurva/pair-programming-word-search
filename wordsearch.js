const transpose = function(matrix) {
  let newArray = [];
  let numPlaceholders = 0;
  
  for (let i = 0; i < matrix.length; i++) {
    numPlaceholders = matrix[i].length;
  }
  
  for (let j = 0; j < numPlaceholders; j++) { // building a new empty placeholder set
    newArray.push([]);
  }
  // newArray = [ [], [], [], [], [], [], [], ]   .length = 7
  // newArray[j]  ^

  for (let j = 0; j < newArray.length; j++) { // looping through newArray
    for (let x = 0; x < matrix.length; x++) {
      newArray[j].push(matrix[x][j]); // to each j index of newArray, add matrix[x][j]
    }
  }
  return newArray;
};



const wordSearch = (letters, word) => {
  const verticalFlipped = transpose(letters);
  const verticalJoin = verticalFlipped.map(ls => ls.join(''));
  const horizontalJoin = letters.map(ls => ls.join(''));
  
  if (letters === [] || word === '') {
    return undefined;
  }
  for (let strings of horizontalJoin) {
    if (strings.includes(word)) {
      return true;
    }
  }
  for (let strings2 of verticalJoin) {
    if (strings2.includes(word)) {
      return true;
    }
  }
  return false;
};
module.exports = wordSearch;