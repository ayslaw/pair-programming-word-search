const wordSearch = (letters, word) => {

  
  const rows = letters.map(ls => ls.join(''));


  let columnArr = [];


  for (let row = 0; row < letters.length; row++) {


    for (let column = 0; column < letters[row].length; column ++) {

      
      if (row === 0) {
        columnArr.push([letters[row][column]]);
      } else {
        columnArr[column].push(letters[row][column]);
      }
    }
  }
  
  const columns = columnArr.map(ls => ls.join(''));

  let result = false; 

  if (letters.length < 1 || word.length < 1) {
    result = false;
  }
  for (let l of columns) {
    
    if (l.includes(word)) {
      result = true;
      break;
    }
        
  }

  
  for (let l of rows) {
  
    if (l.includes(word)) {
      result = true;
      break;
    }
  }
  return result;
};


module.exports = wordSearch;
